# Capitals Explorer

**Capitals Explorer** est une application web qui permet aux utilisateurs d'explorer et de gérer des informations sur les différentes capitales du monde. L'application est basée sur l'API Google Maps pour la représentation visuelle et permet aux utilisateurs de modifier, supprimer et ajouter de nouvelles capitales.

## Structure du Projet :

### 1. Architecture Modulaire :

Le projet est structuré de manière modulaire avec trois composants principaux - Home, Capitals et EditCapital. Cette approche facilite la maintenance du code en séparant les responsabilités et en améliorant la lisibilité.

### 2. Service de Gestion des Données :

Le service CapitalsService est le pivot pour toutes les opérations liées aux données. Il assure la gestion des opérations pour les capitales et met à jour le local storage en conséquence. Cette approche favorise une meilleure organisation du code et la réutilisation des fonctionnalités liées aux données.

### 3. Intégration de Google Maps :

L'intégration avec l'API Google Maps est au cœur du projet. Le composant Home offre une visualisation interactive des capitales sur une carte, améliorant ainsi l'expérience utilisateur. Les interactions avec les marqueurs fournissent des informations sur les capitales. Cela nous permettra également de connaître la position de l'utilisateur et de l'afficher sur la carte.

### 4. Interaction Utilisateur :

L'interaction utilisateur est essentielle au projet. Le composant Capitals offre une table pour une manipulation facile des données, permettant aux utilisateurs de modifier, supprimer et ajouter de nouvelles capitales. Les changements sont immédiatement reflétés sur la carte grâce au service.

### 5. Potentiel d'Améliorations Futures :

Le projet est conçu avec une évolutivité à l'esprit. Des améliorations futures pourraient inclure l'intégration avec des API externes pour des données en temps réel, et une transition du stockage local vers un serveur backend pour une meilleure persistance des données.

## Faisabilité de l'Intégration d'une Base de Données :

### 1. Approche Actuelle avec Local Storage :

L'utilisation du local storage convient aux applications de petite échelle et offre une configuration rapide pour stocker des données spécifiques à l'utilisateur. Cependant, pour des ensembles de données plus importants et dans des scénarios où les données doivent être partagées entre les utilisateurs, une transition vers une base de données serait essentielle.

### 2. Considérations pour l'Intégration d'une Base de Données :

- **Serveur Backend :** Implémentation d'un serveur backend (Node.js, Express, etc.) pour gérer les opérations de base de données.
- **Choix de la Base de Données :** Sélection d'un système de base de données SQL (PostgreSQL) car nous travaillons avec des tables.
- **Points d'API :** Établissement de points d'API clairs pour les opérations CRUD afin d'interagir avec la base de données. C: creation de capitales R: récupuration des capitales U: Mise à jour des information sur les capitales D: supression des capitales

### 3. Impact sur le Frontend :

- **Modification du Service :** Adaptation du service CapitalsService pour communiquer avec le backend au lieu du stockage local.
- **Flux de Données :** Ajustement du flux de données et gestion des opérations asynchrones pour les appels à la base de données.
- **Réactivité de l'UI :** Garantie de la réactivité de l'interface utilisateur pendant les interactions avec la base de données.


## Conclusion :

L'approche actuelle avec le stockage local convient bien à la portée du projet. Cependant, une transition vers une base de données devient impérative à mesure que l'application se développe. La structure modulaire et la conception orientée service rendent la migration réalisable, assurant que le projet reste adaptable aux besoins futurs.
