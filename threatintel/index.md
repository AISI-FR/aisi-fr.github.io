---
title: Table des matières - CTI
layout: default
---

# Liste des articles

<ul>
  {% assign articles = site.pages | where_exp: "item", "item.path contains 'threatintel/'" %}
  {% for article in articles %}
    {% assign path_parts = article.path | split: "/" %}
    {% if path_parts.size == 3 and path_parts[0] == "threatintel" %}
      <li>
        <a href="{{ article.url | relative_url }}">{{article.title}}</a>
      </li>
    {% endif %}
  {% endfor %}
</ul>


