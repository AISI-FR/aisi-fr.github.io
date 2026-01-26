---
title: Table des matières - DFIR
layout: default
---

# Liste des articles

<ul>
  {% assign articles = site.pages | where_exp: "item", "item.path contains 'dfir/'" %}
  {% for article in articles %}
    {% assign path_parts = article.path | split: "/" %}
    {% if path_parts.size == 3 and path_parts[0] == "dfir" %}
      <li>
        <a href="{{ article.url | relative_url }}">{{ path_parts[1] }}{{article.title}}</a>
      </li>
    {% endif %}
  {% endfor %}
</ul>

