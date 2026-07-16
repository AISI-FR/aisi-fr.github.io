/* ══════════════════════════════════════════════════════════════
   AISI · Blocs de code — barre « éditeur » + bouton Copier.
   Rouge ne génère pas la barre : on l'ajoute côté client.
   Vanilla JS, sans dépendance.
   ══════════════════════════════════════════════════════════════ */
(function () {
  "use strict";

  var blocks = [];

  // 1. Blocs colorisés par Rouge : div.language-xxx.highlighter-rouge
  //    > div.highlight > pre.highlight. On cible « div.highlight » car
  //    « pre.highlight » porte aussi la classe et déclencherait une 2e barre.
  document.querySelectorAll("div.highlight").forEach(function (block) {
    blocks.push(block);
  });

  // 2. Langage inconnu de Rouge : kramdown sort un <pre><code class="language-xxx">
  //    NU, sans conteneur .highlight → pas de style « éditeur ». On l'enveloppe
  //    dans un div.highlight pour un rendu plaintext identique aux autres blocs.
  document.querySelectorAll('pre > code[class*="language-"]').forEach(function (code) {
    var pre = code.parentNode;
    if (pre.closest("div.highlight")) return; // déjà pris en charge en (1)
    var wrap = document.createElement("div");
    wrap.className = "highlight";
    pre.parentNode.insertBefore(wrap, pre);
    wrap.appendChild(pre);
    blocks.push(wrap);
  });

  blocks.forEach(function (block) {
    if (block.dataset.enhanced) return;
    block.dataset.enhanced = "1";

    // Langage : classe language-XXX portée par le conteneur .highlighter-rouge
    // (cas 1) ou par le <code> nu enveloppé (cas 2).
    var langSource =
      block.closest('[class*="language-"]') ||
      block.querySelector('[class*="language-"]') ||
      block;
    var m = /language-([\w-]+)/.exec(langSource.className);
    var lang = m ? m[1] : "";

    var bar = document.createElement("div");
    bar.className = "code-bar";
    bar.innerHTML =
      '<span class="code-lang"><span class="code-dot"></span>' +
      (lang ? lang.toUpperCase() : "CODE") + "</span>" +
      '<button type="button" class="code-copy">Copier</button>';
    block.insertBefore(bar, block.firstChild);

    bar.querySelector(".code-copy").addEventListener("click", function (e) {
      var btn = e.currentTarget;
      // Texte brut (colonne .rouge-code si numéros de ligne, sinon le code).
      var src = block.querySelector(".rouge-code, pre code, pre");
      if (!src) return;
      navigator.clipboard.writeText(src.innerText.replace(/\s+$/, "")).then(function () {
        btn.textContent = "Copié";
        btn.classList.add("is-copied");
        clearTimeout(btn._t);
        btn._t = setTimeout(function () {
          btn.textContent = "Copier";
          btn.classList.remove("is-copied");
        }, 1600);
      });
    });
  });
})();
