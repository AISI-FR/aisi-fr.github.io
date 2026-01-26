---
title: Table des matières - Offsec
layout: default
---

# Liste des articles

<ul>
  {% assign articles = site.pages | where_exp: "item", "item.path contains 'offsec/'" %}
  {% for article in articles %}
    {% assign path_parts = article.path | split: "/" %}
    {% if path_parts.size == 3 and path_parts[0] == "offsec" %}
      <li>
        <a href="{{ article.url | relative_url }}">{{article.title}}</a>
      </li>
    {% endif %}
  {% endfor %}
</ul>

