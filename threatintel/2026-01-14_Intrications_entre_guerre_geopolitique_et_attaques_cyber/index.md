---
layout: post
title: "Intrications entre guerre-géopolitique et attaques cyber"
date: 2026-01-14 09:00:00 +0100
author: elf
categories: [blog]
tags: [threatintel, geopolitique]
---

# Introduction 

Aujourd’hui, les dirigeants placent la géopolitique au premier rang de leurs préoccupations stratégiques. Selon une étude récente, 66 % des dirigeants identifient le risque géopolitique comme prioritaire, tandis que le risque cyber est relégué au second rang et est identifié par un tiers des dirigeants. ([source](https://www.cci.fr/sites/g/files/mwbcuj1451/files/2026-01/le-barometre-des-dirigeants-francais-2026.pdf))

Cette hiérarchisation est basée sur une vision cloisonnée des menaces. La menace cyber est encore perçue comme un risque IT, alors qu’elle est devenue un outil géopolitique et financier au même titre que les sanctions ou les conflits armés. En effet, dans un contexte de guerre hybride, les cyberattaques sont devenues des instruments militaires, économiques et informationnels. Elles permettent de déstabiliser une puissance mais aussi de fournir les moyens financiers nécessaires à l'effort de guerre.

Ce rapport vise à éclairer les intrications entre tensions géopolitiques et menaces cyber, en particulier celles émanant d’acteurs affiliés à des États et qui sont impliqués dans des cyberattaques ciblant les infrastructures critiques d’autres nations.

# Cyberattaquants étatiques : espionnage, influence et pression politique.

Les gouvernements de certains pays utilisent des groupes de la menace pour mener des cyberattaques. Ces groupes sont considérés comme affiliés à un État ou à une nation. Ils agissent comme des "soldats numériques" et ciblent des entreprises, des infrastructures critiques (énergie, santé, télécoms) ou des institutions publiques. Voici les principaux acteurs :

## Le gouvernement chinois

Le **gouvernement chinois** utilise des groupes de la menace comme outil stratégique d’État. Leur objectif principal n’est pas l’argent, mais l’espionnage et la préparation de crises futures.

1. Espionnage économique et technologique pour voler des technologies, des données sensibles et des secrets industriels afin d’accélérer le développement économique et technologique chinois.
2. Pré-positionnement dans les infrastructures critiques pour établir un accès discret et durable dans un objectif de perturber ou de paralyser ces services en cas de crise majeure.
3. Surveillance politique afin de collecter des informations sensibles et de préparer des actions d’influence ou de pression politique.

Les groupes déployés sont, entre autres, [Brass Typhoon]( https://attack.mitre.org/groups/G0096/), [Mulberry Typhoon](https://attack.mitre.org/groups/G1023/) et [Violet Typhoon](https://attack.mitre.org/groups/G0128/).

## Le gouvernement iranien

Le **gouvernement iranien** déploie ses groupes de la menace à des fins de surveillance, d’influence et de pression politique, principalement à l’échelle régionale mais aussi internationale.

1. Opérations de compromission idéologiques et démonstratives pour afficher une capacité de nuisance, intimider et affirmer une présence politique dans l’espace numérique.
2. Espionnage ciblé d’organisations stratégiques pour collecter des renseignements politiques, militaires et économiques, et surveiller des acteurs jugés sensibles ou hostiles au régime.

Les groupes déployés sont, entre autres, [Remix Kitten](https://attack.mitre.org/groups/G0087/), [Static Kitten](https://attack.mitre.org/groups/G0069/) et [Charming Kitten](https://attack.mitre.org/groups/G0059/). 

## Le gouvernement nord-coréen 

La **Corée du Nord** utilise le cyberespace comme outil central de survie économique et de pression politique. Contrairement à d’autres États, ses cyberattaques servent directement le financement du régime

1. Vol de monnaies et de cryptomonnaies pour financer les besoins de l'État et contourner les sanctions internationales.
2.  Espionnage stratégique ciblé afin de collecter des renseignements diplomatiques, militaires et économiques pour soutenir les priorités stratégiques du régime.
3.  Attaques destructrices et représailles assumées pour punir, dissuader et envoyer un signal politique clair aux personnes hostiles au régime.
    
Les groupes déployés sont, entre autres, [Labyrinth Chollima](https://attack.mitre.org/groups/G0032/), [Velvet Chollima](https://attack.mitre.org/groups/G0094/) et [Silent Chollima](https://attack.mitre.org/groups/G0138/).

## Le gouvernement russe 

La **Russie** utilise l'espace numérique comme instrument à part entière de sa stratégie militaire et d’influence, étroitement coordonné avec ses objectifs géopolitiques.

1. Espionnage stratégique à long terme afin d'obtenir un avantage militaire, diplomatique et technologique sur le long terme.
2. Opérations de déstabilisation et d’influence pour affaiblir les États adverses sans conflit militaire direct.
3. Attaques destructrices contre des infrastructures critiques afin de causer une nuisance immédiate en cas de conflit ouvert.

Les groupes déployés sont, entre autres, [Venomous Bear](https://attack.mitre.org/groups/G0010/), [Cozy Bear](https://attack.mitre.org/groups/G0016/) et [Fancy Bear](https://attack.mitre.org/groups/G0007/).

## Le gouvernement états-unien

Les **États-Unis** disposent probablement des capacités cyber les plus avancées au monde, utilisées principalement à des fins de renseignement stratégique et de maintien d’un avantage technologique.

1. Espionnage stratégique et pré-positionnement global pour collecter du renseignement diplomatique, militaire et économique, et conserver un accès durable aux infrastructures critiques mondiales.
2. Capacité de sabotage cyber ciblé et avancé pour atteindre un effet stratégique sans conflit armé direct.
3. Surveillance globale et accès aux données via le cadre légal américain pour conserver une souveraineté numérique et un contrôle des données stratégiques.

Le seul groupe déployé connu est nommé [Equation Group](https://attack.mitre.org/groups/G0020/).

# Les rançongiciels : une arme lucrative mais pas pour tous les États.

Les rançongiciels (logiciels qui bloquent les données et demandent une rançon) sont devenus un outil central de la cybercriminalité mondiale. Toutefois, tous les États ne les utilisent pas de la même manière. Il existe une différence entre usage étatique assumé et usage toléré.

Pour le premier cas, la Corée du Nord est le cas le plus explicite d’utilisation de rançongiciel pour générer des revenus. Les groupes sponsorisés par l'état vont déployer ces logiciels malveillants pour :

1. cibler directement des entités financières (instituions financières, systèmes SWIFT, industrie des cryptomonnaies)
2. voler des monnaies et des cryptomonnaies. 

Le groupe de la menace Labyrinth Chollima a été observé déployer le rançongiciel [WannaCry](https://attack.mitre.org/software/S0366/) et demander une rançon en bitcoin. Également, le groupe de la menace [Stardust Chollima](https://attack.mitre.org/groups/G0082/) a été observé utiliser le rançongiciel Hermes.

Ces opérations servent directement à financer le régime, contourner les sanctions internationales et soutenir l’effort militaire.

> Entre 2024 et 2025, les vols de cryptomonnaies et rançons attribués à la Corée du Nord sont estimés à près de [2,84 milliards de dollars américains](https://msmt.info/view/save/2025/10/22/26294780-c396-407d-bb33-88afe988cd96-The_DPRK%E2%80%99s_Violation_and_Evasion_of_UN_Sanctions_through_Cyber_and_Information_Technology_Worker_Activities_%28MSMT_2025_2%29.pdf).

Concernant le deuxième cas, la Russie illustre l'usage toléré car l'État n’utilise pas officiellement les rançongiciels mais tolère l’activité de groupes criminels russophones, tant que

1. les cibles ne sont pas des intérêts russes,
2. ils opèrent principalement contre des entreprises occidentales.

Parmi ces groupes nous pouvons citer les rançongiciels-en-tant-que-service (rançongiciel proposé à la location) [Lockbit](https://attack.mitre.org/software/S1202/) et [Conti](https://attack.mitre.org/software/S0575/) mais aussi les rançongiciels [Ryuk](https://attack.mitre.org/software/S0446/) et [REvil](https://attack.mitre.org/software/S0496/).

> Ces groupes ont généré des centaines de millions de dollars américains depuis le territoire russe ([rapport FINCEN](https://www.fincen.gov/system/files/2025-12/FTA-Ransomware.pdf) et [rapport Advintel/Hyas](https://www.lemondeinformatique.fr/actualites/lire-ryuk-assis-sur-un-pactole-de-150-m$-81583.html)).

De son côté, l'Iran a recours au rançongiciel de manière limitée et ciblée. Ce dernier n’est pas un pilier de la stratégie iranienne, mais un outil parmi d’autres.

Tandis que pour la Chine et les États-Unis, aucun n’utilise les rançongiciels pour financer leurs actions. La Chine donne la priorité à l’espionnage industriel et technologique. Tandis que les États-Unis privilégient le renseignement, le pré-positionnement et le sabotage ciblé.

# Cibles privilégiées : infrastructures, technologies et institutions sous surveillance

Les cyberattaques ne frappent pas au hasard : certains secteurs, par leur rôle stratégique ou leur valeur économique, sont particulièrement exposés aux opérations des États et des groupes de menace. Ces dernières ciblent surtout :

* Les infrastructures critiques (énergie, eau, télécommunication, santé) en raison de leur rôle systémique et du potentiel de perturbation en cas de crise (ex. : la [Chine](https://www.justice.gov/archives/opa/pr/us-government-disrupts-botnet-peoples-republic-china-used-conceal-hacking-critical) et la [Russie](https://www.dni.gov/files/NCSC/documents/SafeguardingOurFuture/SolarWinds%20Orion%20Software%20Supply%20Chain%20Attack.pdf) se pré-positionnent pour saboter des systèmes en cas de conflit).
* Les entreprises technologiques par le vol de brevets, d'innovations et plus généralement de propriété intellectuelle (ex. : la [Chine](https://www.congress.gov/crs-product/IF12798) espionne les entreprises de télécommunication).
* Les institutions financières, telles que les banques et les plateformes de cryptomonnaies (ex. : la Corée du Nord cible des plateformes d’échange de cryptomonnaies telles que [Bybit](https://www.nccgroup.com/research-blog/in-depth-technical-analysis-of-the-bybit-hack/)).
* Les gouvernements, collectivités et processus électoraux à des fins d'influence ou de déstabilisation (ex. : la [Russie](https://www.diplomatie.gouv.fr/fr/dossiers-pays/russie/evenements/evenements-de-l-annee-2025/article/russie-attribution-de-cyberattaques-contre-la-france-au-service-de) cible et compromet des campagnes électorales).
* Les médias, ONG et dissidents dans l’intention de mener une surveillance et des représailles actives (ex. : tentatives concrètes d'espionnage par l'[Iran Charming Kitten](https://www.verfassungsschutz.de/SharedDocs/kurzmeldungen/DE/2023/2023-08-10-cyber-brief-01-2023.html?nn=679196#Start) contre des entités iraniennes en Allemagne)

La menace n’est pas uniforme, mais alignée avec les objectifs nationaux. Ainsi, une PME peut être ciblée non pour elle-même, mais parce qu’elle constitue un point d’entrée ou un maillon faible vers une organisation plus stratégique.


# Conflits armés et cyberattaques : interactions et implications stratégiques

Les cyberattaques sont un prolongement direct des tensions géopolitiques. Elles ne sont pas aléatoires : elles suivent des objectifs stratégiques et précis selon le contexte international.

* **Russie/Ukraine :** La Russie utilise les cyberattaques pour déstabiliser et affaiblir avant et pendant le conflit (coupures de courant, fuites de données).
* **Corée du Nord/Corée du Sud :** La Corée du Nord lance des attaques contre des médias sud-coréens et vole des cryptomonnaies pour financer son régime.
* **Chine/Taïwan :** La Chine espionne Taïwan et se prépare à saboter ses infrastructures critiques en cas de conflit.
* **Iran/Israël :** L’Iran attaque de manière ciblée les institutions israéliennes et soutient des groupes armés (ex. : Hezbollah) pour étendre l’influence régionale.
* **États-Unis/Iran** : Les États-Unis ont détruit physiquement des équipements industriels iraniens afin de retarder le programme nucléaire. 

Les cyberattaques sont devenues un outil politique et militaire clé, permettant aux États de protéger ou d’avancer leurs intérêts stratégiques sans passer par la guerre conventionnelle.

# Que retenir pour votre organisation ?

Dans un contexte où les cyberattaques sont de plus en plus sophistiquées et géopolitiquement motivées, certaines organisations sont particulièrement exposées et les risques diffèrent.

* Si vous êtes un secteur stratégique (tech, santé, énergie, transport, finances), vous êtes une cible privilégiée pour l’espionnage industriel et le sabotage par 
    * la Chine : vol de propriété intellectuelle et collecte de données pour le développement technologique national.
    * la Russie et la Corée du Nord : pré-positionnement pour des perturbations ou destructions en cas de conflit.

* Si vous gérez des données sensibles, vous êtes une cible privilégiée pour des  groupes comme Lazarus (Corée du Nord) ou Cozy Bear (Russie) qui pourraient tenter 
    * de voler vos données stratégiques
    * déployer des rançongiciels ou des malwares pour chiffrer et bloquer vos systèmes.
    
* Si vous travaillez avec des institutions publiques ou des missions diplomatiques, vous êtes une cible privilégiée pour les attaques d’influence ou de fuites de données visant à :
    * manipuler l’opinion
    * déstabiliser des processus électoraux ou décisionnels.
    
* Si vous utilisez des cryptomonnaies, vous êtes une cible privilégiée pour la Corée du Nord qui mène des opérations de rançongiciel visant à voler des monnaies et des cryptomonnaies

Il ne faut pas oublier que même si votre organisation semble secondaire, vous pouvez être ciblé indirectement si vous êtes le fournisseur ou le prestataire d’une entreprise critique, intégré dans une chaîne de valeur stratégique. 

## En résumé 

Les cyberattaques étatiques ne sont plus de la science-fiction et sont désormais des instruments de guerre modernes. La question n’est plus “si”, mais “quand” votre organisation pourrait être ciblée. 

**Objectifs principaux : espionnage, sabotage, vol de données et influence.**

Pour se protéger, il faut :
- Renforcer la sécurité des infrastructures critiques et les chaînes de valeur stratégiques.
- Former les équipes à repérer les attaques (ex. : courriels d'hameçonnage, rançongiciels).
- Coopérer avec les autorités pour partager des informations sur les menaces.
- Anticiper les risques géopolitiques : une cyberattaque peut précéder une crise.

L'ensemble des recherches est disponible de manière détaillée en [Annexe](annexe.md).
