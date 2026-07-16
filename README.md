# Thème `aisi-blog`

Blog cybersécurité d'AISI — thème Jekyll natif (compatible GitHub Pages,
Jekyll ≥ 4.x) reproduisant le design system **AISI**. Trois vues : accueil
(grille de catégories), liste d'articles par catégorie, et page d'article.
Interface et contenu **en français**.

---

## Installation & lancement

```bash
bundle install
bundle exec jekyll serve
# → http://localhost:4000
```

Sans Bundler : `jekyll serve` (Jekyll ≥ 4.x et la gem `rouge` requis).

Build de production :

```bash
JEKYLL_ENV=production bundle exec jekyll build   # sortie dans _site/
```

---

## Structure

```
_config.yml            # highlighter rouge, defaults par dossier, exclusions
_layouts/   default · home · category · post
_includes/  head · header · footer · toc · author-card · related · cta · alert · cat-icon
_sass/      _tokens _base _components _home _category _article _code
assets/css/ main.scss   (compilé en main.css)
assets/js/  article.js  (sommaire + scrollspy + chrome des blocs de code)
assets/img/ aisi-mark.png · aisi-mark-white.png
_data/      authors.yml · categories.yml
dfir/ threatintel/ offsec/   # contenu : 1 dossier = 1 catégorie
```

### Modèle de contenu

Les articles ne sont **pas** dans `_posts/` : ce sont des *page bundles*
(`<catégorie>/<date>_<slug>/index.md` + un sous-dossier `img/`). Ce choix
préserve les URLs existantes et les images relatives (`![](img/x.png)`).

Le mapping dossier → catégorie est fait dans `_config.yml` via `defaults`
(scopés par chemin), qui posent `layout: post` et `category` sur tous les
fichiers du dossier. Les pages de liste (`<catégorie>/index.md`) redéfinissent
localement `layout: category`.

| Dossier        | `category`        | Accent |
|----------------|-------------------|--------|
| `dfir/`        | `investigations`  | blue   |
| `threatintel/` | `threatintel`     | orange |
| `offsec/`      | `offensive`       | navy   |

---

## Créer un article

Créer `dfir/AAAA-MM-JJ_Mon_sujet/index.md` (adapter le dossier à la catégorie) :

```yaml
---
layout: post                       # posé par défaut, explicite recommandé
title: "Titre de l'article"
description: "Chapô affiché dans le bandeau (1–2 phrases)."
date: 2026-07-15 09:00:00 +0100
author: camille-mercier            # clé de _data/authors.yml
category: investigations           # investigations | threatintel | offensive
tags: [Ransomware, SOC, "MITRE ATT&CK"]
subject: "Ransomware"              # dernier segment du fil d'Ariane (optionnel)
badge_primary: "Cybersécurité"     # badge orange du bandeau (optionnel)
badge_secondary: "Menaces"         # badge bleu du bandeau (optionnel)
badge: "Sensibilisation"           # pastille orange dans la liste (optionnel)
toc: true                          # sommaire (défaut : true ; false pour masquer)
cta_title: "…"                     # CTA final personnalisé (optionnels)
cta_subtitle: "…"
cta_button: "…"
cta_href: "#"
---
```

Le **corps** est du Markdown. Composants disponibles :

- **Encadrés** : `{% raw %}{% include alert.html tone="danger" title="…" text="…" %}{% endraw %}`
  (tons `info`, `warning`, `danger`, `success`).
- **Citation** : un `<blockquote>` (HTML) avec `<p>` + `<footer>` pour l'attribution.
- **Bloc de code nommé** (chrome terminal + nom de fichier) : bloc de code
  clôturé Markdown ` ```yaml ` → décoré automatiquement par `article.js`
  (le nom affiché = le langage). Pour un **nom de fichier exact**, écrire un
  `<figure>` HTML (cf. l'article `dfir/2026-07-15_Ransomware_anatomie_attaque`).
- **Sommaire, carte auteur, articles liés et CTA** sont ajoutés automatiquement
  par le layout `post`.

Le **temps de lecture** est calculé (≈ 200 mots/min).

---

## Ajouter une catégorie

1. Créer le dossier `<slug>/` avec un `index.md` :

   ```yaml
   ---
   layout: category
   title: "Ma catégorie"
   category: mon-id
   ---
   ```

2. Ajouter l'entrée dans `_data/categories.yml` (`id`, `slug`, `title`, `desc`,
   `accent`, `icon_bg`, `icon` = liste de tracés SVG, `tags`).

3. Ajouter le mapping dans `_config.yml > defaults` :

   ```yaml
   - scope: { path: "<slug>" }
     values: { layout: post, category: mon-id }
   ```

## Ajouter un·e auteur·e

Dans `_data/authors.yml` :

```yaml
prenom-nom:
  name: "Prénom Nom"
  role: "Intitulé de poste"
  initials: "PN"          # 2 lettres de l'avatar
  bio: "Courte biographie."
```

> Les entrées `elf` et `ngt` sont des **placeholders** (identifiants d'origine) :
> remplacez-les par les vrais noms/rôles.

---

## Personnaliser les tokens

Tous les *design tokens* (couleurs de marque, tints, rampe de gris, typo,
espacement, rayons, ombres, motion) sont des variables CSS dans
`_sass/_tokens.scss`. Modifier une valeur là s'y propage partout.

- Couleurs de marque : `--aisi-blue #31a3dd`, `--aisi-orange #f06a36`,
  `--aisi-navy #21578e`, `--aisi-gray #727480`.
- Polices : Montserrat (titres), Mulish (corps), JetBrains Mono (code) —
  chargées via un unique `<link>` Google Fonts dans `_includes/head.html`.

---

## Accessibilité & responsive

- Contrastes AA, `nav[aria-label]`, `role="alert"` sur les encadrés, focus
  visible (halo bleu 3 px), `alt` sur les logos.
- Sous ~900 px : grilles en 1 colonne, sommaire replié au-dessus du corps,
  lignes de liste réagencées.
- Aucun framework JS : seuls le sommaire/scrollspy et le chrome des blocs de
  code sont en JS vanilla (`assets/js/article.js`).
