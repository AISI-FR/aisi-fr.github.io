---
title: Table des matières - DFIR
layout: default
---

# Liste des articles

<ul>
  {% assign articles = site.pages | where_exp: "item", "item.path contains 'dfir/'" %}
  {% for article in articles %}
    {% assign path_parts = article.path | split: "/" %}
    {% if path_parts.size == 4 and path_parts[1] == "dfir" %}
      <li>
        <a href="{{ article.url | relative_url }}">{{ path_parts[2] }}</a>
      </li>
    {% endif %}
  {% endfor %}
</ul>

