# @Backend_Blog_API

## Vue d'ensemble

`@Backend_Blog_API` developpee avec Node.js, Express et Prisma, est une API backend pour la gestion des articles de blog. Elle permet de creer, lire, modifier, supprimer et rechercher des articles.


## Technologie utilisees

- TypeScript pour le typage statique et une intelligence de code avancée
- Express.js pour la création d'APIs et d'applications web robustes
- Support des variables d'environnement avec dotenv et env-var
- Intégration de Swagger pour la documentation des APIs
- MySQL comme base de donnees
- Prisma ORM

## Pour commencer

### Installation

1- Clonez le dépôt :
```bash
git clone git@github.com:Ghislano26/blog_api.git        (si connecte en SSH)
git clone https://github.com/Ghislano26/blog_api.git    (si connecte en HTTP)

cd blog_api
```

2- Installer les dependances :
```bash
npm install
```


3- Configurer la base de donnees

a- creer une base de donnees MySQL:
```bash
CREATE DATABASE blog;
```
b- configurer le fichier .env:
```bash
DATABASE_URL="mysql://USER:PASSWORD@localhost:3306/blog"
```


4- Lancer Prisma : 
```bash
npx prisma migrate dev --name init
```

### Exécution en mode développement

Pour démarrer le serveur de développement avec redémarrages automatiques en cas de modifications des fichiers, utilisez :

```bash
npm run dev
```

### Compilation du projet

Pour compiler le projet pour la production, utilisez :

```bash
npx tsc
```

### Démarrage de l'application

Pour démarrer l'application après la compilation, utilisez :

```bash
npm start
```


## Utilisation

Démarrage du serveur
Pour démarrer le serveur, exécutez la commande suivante :

```bash
npm start
```

Le serveur sera lancé sur le port : http://localhost:3000

Documentation de l'API
La documentation de l'API est accessible à l'adresse suivante :

```sh
http://localhost:3000/api-docs
 ```

## Endpoints

### Creer un article
- POST : /api/articles

Exemple de requetes:
```bash
{
    "titre": "Le monde du web",
    "auteur": "Diboma",
    "contenu" : "Decouvrez l'univers de l'apprentissage du web",
    "categorie": "Technologie",
    "date": "2026-01-01"
}

```

### Recuperer tous les articles
- GET : /api/articles

### Recuperer un article par son ID
- GET : /api/articles/{id}

### Modidier un article par son ID
- PUT : /api/articles/{id}

### Supprimer un article par son ID
- DELETE : /api/articles/{id}

### Rechercher un article avec un texte appartenant au titre ou au contenu de l'article
- GET : /api/articles/search?q=texte

Exemple de requetes:
```bash
http://localhost:3000/api/article/search?q=tabac

```


## Auteur

Ghislain Ateba Chouacha

- Projet academique