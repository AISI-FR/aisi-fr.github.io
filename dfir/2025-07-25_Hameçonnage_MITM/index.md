# Hameçonnage Man-In-The-Middle (MITM)

| ![img](mitmphishing.png) | ![img](killchain.png) |
| ------------------------ | --------------------- |

- [Hameçonnage Man-In-The-Middle (MITM)](#hameçonnage-man-in-the-middle-mitm)
  - [Cas concret](#cas-concret)
  - [Qu’est-ce qu’une attaque Man-In-The-Middle (MITM) par courriel ?](#quest-ce-quune-attaque-man-in-the-middle-mitm-par-courriel-)
  - [Étapes du scénario observé](#étapes-du-scénario-observé)
  - [Étude de cas AISI](#étude-de-cas-aisi)
    - [Analyse et investigation](#analyse-et-investigation)
    - [Comment l'acteur malveillant intercepte le premier courriel et s'insère dans les échanges ?](#comment-lacteur-malveillant-intercepte-le-premier-courriel-et-sinsère-dans-les-échanges-)
  - [Que faire en cas de réception d'un courriel d'hameçonnage ?](#que-faire-en-cas-de-réception-dun-courriel-dhameçonnage-)
    - [Bons réflexes](#bons-réflexes)
    - [Actions en cas de spoofing](#actions-en-cas-de-spoofing)
    - [Surveillance des domaines de typosquatting](#surveillance-des-domaines-de-typosquatting)
  - [Checklist de sécurité à télécharger](#checklist-de-sécurité-à-télécharger)
    - [En cas de réception d’un courriel suspect](#en-cas-de-réception-dun-courriel-suspect)
    - [En cas de réponse donnée au courriel frauduleux](#en-cas-de-réponse-donnée-au-courriel-frauduleux)
    - [Si un compte a été compromis](#si-un-compte-a-été-compromis)
      - [Compte utilisateur](#compte-utilisateur)
      - [Boîte courriel](#boîte-courriel)
    - [En cas de spoofing (usurpation d'adresse courriel)](#en-cas-de-spoofing-usurpation-dadresse-courriel)

## Cas concret 

Les attaques de type hameçonnage Man-In-The-Middle (MITM) représentent une menace de plus en plus préoccupante pour toutes les organisations, qu’il s’agisse de TPE, de PME, d’entreprises de taille intermédiaire ou d’entités publiques. Ces attaques, souvent sophistiquées, visent à intercepter et manipuler les échanges entre deux parties sans qu’aucune ne s’en rende compte.

Un cas concret a été remonté par [CheckPoint](https://research.checkpoint.com/2019/incident-response-casefile-a-successful-bec-leveraging-lookalike-domains/) en 2019 : 

Un groupe d’attaquants a intercepté un virement d’1 million de dollars américains entre une startup et un fonds de capital-risque. Ils ont enregistré deux domaines très proches des domaines officiels et les ont utilisés pour relayer des dizaines de courriels.

![img](checkpoint.png)

Les messages étaient interceptés, parfois modifiés (coordonnées bancaires), puis retransmis depuis les domaines usurpés, à chaque échange. L'acteur de la menace a même annulé un rendez-vous physique entre les partenaires pour empêcher toute vérification

Des cas similaires ont été observés chez AISI, à plus petite échelle.

## Qu’est-ce qu’une attaque Man-In-The-Middle (MITM) par courriel ?

Une attaque Man-In-The-Middle (MITM) est une technique d’interception avancée dans laquelle un acteur malveillant s'intercale discrètement entre deux entités légitimes — typiquement deux entreprises — qui pensent communiquer directement l'une avec l'autre.

Dans le cas d’un hameçonnage MITM, l'acteur malveillant intercepte les courriels échangés entre deux parties. Il va enregistrer des noms de domaine usurpant leur identité, visuellement très proches des domaines officiels (ex. : changement d'une lettre, ajout d’un caractère), afin de les utiliser pour se faire passer pour l’une ou l’autre des parties. Une fois les courriels récupérés, ils vont être consultés et modifiés avant d'être relayés.

![img](mitmphishing.png)

Grâce à cette dissimulation, l’attaquant peut :
- espionner des échanges confidentiels sans éveiller les soupçons
- modifier ou falsifier des messages (par exemple des changements subtils dans les documents ou les demandes)
- rediriger des informations sensibles, notamment des coordonnées bancaires, vers ses propres infrastructures

Ce type d’attaque est particulièrement dangereux car il exploite la confiance existante entre les parties, tout en détournant les flux de communication à des fins frauduleuses, souvent sans déclencher d’alerte immédiate.

L'objectif est très souvent le gain financier. Les cybercriminels ciblent en priorité les échanges commerciaux, les paiements en attente ou les demandes de virement, dans le but de détourner des fonds. Ils vont alors modifier les relevés d'identité bancaire (RIB) pour déclencher un virement vers un compte contrôlé par l'attaquant. Cela se nomme les FOVI.

![img](fovi.jpeg)

## Étapes du scénario observé

1. **Enregistrement de faux noms de domaine**  
   → Création de domaines très proches des originaux (`bugged1n.com`, `crypt0zilla.com`) via typosquatting ou homoglyphes.

2. **Usurpation d'identité par courriel**  
   → Envoi de courriels depuis ces domaines pour se faire passer pour une entreprise légitime.

3. **Interception des courriels**  
   → L’attaquant s’intercale entre les deux entreprises sans qu’elles le sachent.

4. **Modification du contenu des messages**  
   → Changement subtil d'informations : RIB, instructions, montants, etc.

5. **Relais entre les deux victimes**  
   → Les deux entreprises croient échanger directement ; l’attaquant manipule les messages en temps réel.


## Étude de cas AISI

Chez AISI, nous avons récemment été exposés à plusieurs attaques de type hameçonnage MITM, la plus récente datant de juin.

### Analyse et investigation

Dans le cas observé, l'acteur malveillant est parvenu à s’immiscer discrètement dans les échanges entre deux entreprises partenaires en exploitant des noms de domaine usurpés : 

| Domaine légitime | Domaine Usurpé     |
| ---------------- | ------------------ |
| maisonmère.com   | maisonèmre.com     |
| distributeur.pl  | distributeurpl.com |

Dans cet incident, il est intéressant de noter que la levée de doute chez AISI a eu lieu le 25 juin 2025 et que le domaine frauduleux ```distributeurpl.com``` a été créé le 23 avril 2025. Dans le cadre de campagnes d'hameçonnage, des domaines récemment créés sont un indicateur de domaines créés à des fins d'usurpation ciblée.

Les fils de courriels partagés par Maison Mère a montré que l'acteur malveillant s'est positionné entre les échanges légitimes de Maison Mère et Distributeur. Grâce à cela, l'acteur de la menace a pu modifier le relevé d'identité bancaire de Maison Mère et le transmettre à Distributeur. 

La confiance accordée aux échanges a été renforcée par la réutilisation d'une chaîne de courriels légitime modifiée et volée (que nous allons désigner comme "Distributeur x Maison Mère - Commande").

L'objectif de l'investigation était  
- de confirmer l'usurpation de domaine
- d'exclure la compromission de la boîte courriel de le Maison Mère. 
Il était suspecté que les courriels aient été pu être exfiltrés depuis la boîte courriel d'Utilisateur.

L’analyse de la boîte courriel de l’utilisateur a révélé la présence d’événements tels que Create, Send, Soft Delete et MoveToDeletedItems, associés à des messages portant l’objet "Distributeur x Maison Mère - Commande".
Ces artefacts, issus des journaux d’audit de messagerie (Exchange, Microsoft 365, etc.), permettent de retracer les actions réalisées sur un courriel,notamment sa création, son envoi, sa suppression ou son déplacement vers les éléments supprimés.

Toutefois, aucun événement de transfert vers l’extérieur, qui pourrait indiquer une exfiltration du courriel portant l’objet "Distributeur x Maison Mère - Commande", n’a été observé dans la boîte courriel de l'utilisateur.

Ce scénario concret soulève une question : Si aucune boîte courriel de la Maison Mère n’a pas été compromise, comment l’attaquant a-t-il pu s’insérer dans les échanges entre les deux sociétés ? Le premier mail frauduleux ne devait-il pas être identifiable ?

### Comment l'acteur malveillant intercepte le premier courriel et s'insère dans les échanges ?

Si l'acteur malveillant n’a pas accédé à la boîte courriel de la Maison Mère pour se positionner dans la chaîne. Il a pu :

- Observer ou voler un fil de discussion du côté Distributeur

Dans ce cas le mail frauduleux initial semble légitime, car il reprend un fil déjà établi. Cela est possible si Distributeur est compromis ou s’il a déjà répondu à un mail frauduleux

- Initier une nouvelle conversation en usurpant l’identité du fournisseur, en s’appuyant sur des informations publiques ou déduites (nom du contact, timing d’une commande, adresse de facturation, etc.)

Dans ce cas, le premier mail frauduleux peut effectivement être hors fil, mais construit pour ressembler à une relance légitime, parfois avec une fausse pièce jointe ou une copie stylisée du précédent échange.

## Que faire en cas de réception d'un courriel d'hameçonnage ?

### Bons réflexes

> ⚠️ **Conservez le courriel frauduleux : il constitue une preuve indispensable pour les investigations.** ⚠️

  - [x] Conserver le message en l'état (ne pas le supprimer)
  - [x] Prendre contact avec l'autre entreprise usurpée pour signaler l'hameçonnage

Si un utilisateur a reçu un courriel d'arnaque et a donné suite : 

  - [x] Contacter immédiatement la banque pour signaler l’arnaque et tenter de bloquer ou de récupérer les fonds

### Actions en cas de spoofing

Le spoofing est une technique d’usurpation d’adresse courriel, souvent utilisée pour contourner les protections et duper le destinataire.

Pour limiter ces attaques, il est essentiel de configurer correctement les mécanismes SPF, DKIM et DMARC.

![img](recomailbox)

Il est également possible de mettre en place :

- [x] Un filtrage anti-spam avancé capable de détecter les comportements suspects, les anomalies dans les en-têtes, et les tentatives d’usurpation

- [x] Des sessions de formation et de sensibilisation des utilisateurs pour apprendre à reconnaître les signes d’un courriel usurpé

- [x] Des mécanismes de validation lors de la modification d'une empreinte bancaire ou lors de l'envoi de sommes importantes.
  
### Surveillance des domaines de typosquatting

Pour renforcer la défense contre les attaques de phishing MITM, il est essentiel de mettre en place une surveillance proactive des noms de domaine similaires au vôtre. Plusieurs solutions sont possibles : 

- Utiliser des services spécialisés comme qui détectent automatiquement les enregistrements de domaines proches ou similaires, incluant les homoglyphes et substitutions de caractères.

- Mettre en place une veille manuelle régulière en consultant les bases de données publiques WHOIS et en effectuant des recherches sur les variantes orthographiques de votre domaine.
  - DNSTwist (https://dnstwist.it/) : Génère automatiquement des variantes typo d'un domaine
  - URLCrazy (https://morningstarsecurity.com/research/urlcrazy) : Génère des variations de noms de domaine

- Mettre en place une veille automatique grâce à un script utilisant l'outil Python DNSTwist : https://github.com/elceef/dnstwist

- Former les collaborateurs pour qu’ils signalent immédiatement tout courriel ou communication suspect provenant de domaines inhabituels ou ressemblant à votre organisation.

## Checklist de sécurité à télécharger

### En cas de réception d’un courriel suspect

- [ ] Ne pas répondre au message
- [ ] Ne pas supprimer le courriel (il est une preuve)
- [ ] Transférer le courriel à l’équipe sécurité
- [ ] Lancer une enquête interne pour déterminer :
  - [ ] S’il y a eu compromission
  - [ ] Ou simple spoofing
---

### En cas de réponse donnée au courriel frauduleux

- [ ] Contacter immédiatement la banque
- [ ] Conserver tous les messages échangés

---

### Si un compte a été compromis

#### Compte utilisateur
- [ ] Réinitialiser le mot de passe
- [ ] Supprimer les applications suspectes dans Entra ID
- [ ] Révoquer les appareils inconnus
- [ ] Vérifier l’activation du MFA
- [ ] Réinitialiser les jetons OAuth

#### Boîte courriel
- [ ] Supprimer les redirections suspectes
- [ ] Supprimer les règles de messagerie non légitimes
- [ ] Examiner les courriels envoyés

---

### En cas de spoofing (usurpation d'adresse courriel)

- [ ] Vérifier SPF / DKIM / DMARC
- [ ] Activer un filtrage anti-spam avancé
- [ ] Sensibiliser les utilisateurs
- [ ] Mettre en place des procédures de validation :
  - [ ] Changement de coordonnées bancaires
  - [ ] Validation en amont des virements




