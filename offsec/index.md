---
title: Table des matières - Offsec
layout: default
---

# Liste des articles

<ul>
  {% assign articles = site.pages | where_exp: "item", "item.path contains 'offsec/'" %}
  {% assign sorted_articles = articles | sort: "date" | reverse %}
  {% for article in sorted_articles %}
    {% assign path_parts = article.path | split: "/" %}
    {% if path_parts.size == 3 and path_parts[0] == "offsec" %}
      <li>
        <span>{{ article.date | date: "%Y-%m-%d" }}</span> - <a href="{{ article.url | relative_url }}">{{ article.title }}</a>
      </li>
    {% endif %}
  {% endfor %}
</ul>

