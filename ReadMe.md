## Instructions

- Créer une page index qui appelle les routes `users` (ou `auth`) et `products`.

## Page d’accueil

Créer la page d’accueil avec un lien vers les pages trois villes : Paris, Lyon et Marseille

## Pages d’authentification

Dans la barre de navigation, créer deux liens : login et signup qui redirigent sur les routes du même nom.

À l’enregistrement l’utilisateur enregistre son nom d’utilisateur et son mot de passe. Il sera redirigé sur la page /profile qui affichera son nom d’utilisateur. Lorsque l’utilisateur se login, il est redirigé sur la page d’accueil et la barre de navigation n’affiche plus les liens de login et de signup. Il affiche à la place le nom d’utilisateur et un lien pour le logout

## Admin

Tous les utilisateurs peuvent ajouter un produit et accéder à la page `/admin`.

La page `/admin` permet d’uploader un produit avec ses photos.

## Product list page

Sur la page d’accueil, ajouter le lien pour afficher les offres d’une ville : `/products/cities/:city`

## Product page

Chaque produit de la page `product list` affiche un lien vers un produit spécifique : `/products/:id`

## Bonus - Admin

Tous les utilisateurs enregistrées ont un type `normal` ou `admin`. Seul les utilisateurs de type `admin` peuvent ajouter des produits et donc voir et accéder à la page `/admin`

## Bonus - Home

- Ajouter une carte de la France en SVG

## Bonus - Pagination

Créer la pagination qui affichera 5 éléments par page avec le lien suivant : [http://localhost:3000/products/cities/paris?page=2](http://localhost:3000/products/cities/paris?page=2) par exemple.

## Bonus - Message

Chaque utilisateur enregistré pourra envoyer un message à l’utilisateur qui a créé une annonce (`Product`).

Créer la page qui permet aux utilisateurs d’envoyer un message sur un produit particulier.
