/* ══════════════════════════════════════════════════════════════
   AISI · Article — sommaire + scrollspy + chrome des blocs de code.
   Vanilla JS, sans dépendance.
   ══════════════════════════════════════════════════════════════ */
(function () {
  "use strict";

  var article = document.getElementById("js-article");
  var tocAside = document.getElementById("js-toc");

  /* ---- Utilitaire : slug pour les titres sans id ---- */
  function slugify(text) {
    return text
      .toLowerCase()
      .normalize("NFD").replace(/[\u0300-\u036f]/g, "")
      .replace(/[^a-z0-9\s-]/g, "")
      .trim().replace(/\s+/g, "-").replace(/-+/g, "-") || "section";
  }

  /* ══════════ 1. Sommaire + scrollspy ══════════ */
  function buildToc() {
    if (!article || !tocAside) return;
    var nav = tocAside.querySelector(".toc__nav");
    // Titres de section : h1/h2 directs de l'article.
    var headings = Array.prototype.slice.call(
      article.querySelectorAll(":scope > h1, :scope > h2")
    );

    if (headings.length === 0) {
      tocAside.hidden = true;
      var grid = document.querySelector(".article-grid");
      if (grid) grid.classList.add("article-grid--no-toc");
      return;
    }

    var seen = {};
    var links = [];

    headings.forEach(function (h) {
      if (!h.id) {
        var base = slugify(h.textContent);
        var id = base, i = 2;
        while (document.getElementById(id) || seen[id]) { id = base + "-" + i++; }
        h.id = id;
      }
      seen[h.id] = true;
      h.style.scrollMarginTop = "96px";

      var a = document.createElement("a");
      a.href = "#" + h.id;
      a.className = "toc__link" + (h.tagName === "H3" ? " toc__link--sub" : "");
      a.textContent = h.textContent;
      a.setAttribute("data-target", h.id);
      a.addEventListener("click", function (e) {
        e.preventDefault();
        var el = document.getElementById(h.id);
        if (!el) return;
        var y = el.getBoundingClientRect().top + window.scrollY - 84;
        window.scrollTo({ top: y, behavior: "smooth" });
        setActive(h.id);
        if (history.replaceState) history.replaceState(null, "", "#" + h.id);
      });
      nav.appendChild(a);
      links.push(a);
    });

    tocAside.hidden = false;

    function setActive(id) {
      links.forEach(function (a) {
        a.classList.toggle("is-active", a.getAttribute("data-target") === id);
      });
    }
    setActive(headings[0].id);

    /* Scrollspy — première section visible triée par top. */
    if ("IntersectionObserver" in window) {
      var visible = {};
      var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) visible[entry.target.id] = entry.boundingClientRect.top;
          else delete visible[entry.target.id];
        });
        var ids = Object.keys(visible);
        if (ids.length) {
          ids.sort(function (a, b) { return visible[a] - visible[b]; });
          setActive(ids[0]);
        }
      }, { rootMargin: "-88px 0px -70% 0px", threshold: 0 });
      headings.forEach(function (h) { observer.observe(h); });
    }
  }

  /* Les blocs de code (barre « éditeur » + bouton Copier) sont pris en
     charge par assets/js/code-blocks.js. */

  buildToc();
})();
