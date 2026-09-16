# Le Bistro — Direction artistique et référence

## Référence ground-truth

Le site de référence analysé est [Kivu Fiesta](https://www.kivufiesta.com). Sa structure perçue repose sur une navigation d’accès rapide, une accroche éditoriale forte — « Là où la musique ne dort jamais » — puis une lecture par expériences : Terrasse, Resto, Disco. Le site enchaîne ensuite une présentation de marque, un bloc dédié au Bistro, un appel à réserver via WhatsApp, une promesse food & cocktails, une section News à base de visuels, puis les informations pratiques, réseaux sociaux et contact. Cette logique de parcours doit être conservée, mais transposée pour Le Bistro avec une hiérarchie plus nocturne, plus premium et davantage orientée réservation VIP.

La composition retenue pour la nouvelle expérience est donc : header sticky → hero immersif → bandeau d’informations nocturnes → agenda / soirées → offre VIP & carte → galerie → infos pratiques / réservation → footer. La référence Kivu Fiesta est l’autorité pour la structure et la logique de découverte ; l’identité Le Bistro devient l’autorité pour la couleur, l’atmosphère et les contenus.

## Approche choisie : Midnight Editorial Club

### Design Movement

Un mélange de **Swiss International Style nocturne** et de **direction artistique éditoriale de club**, avec une rigueur typographique, des marges généreuses, des repères de programmation et des accents lumineux contrôlés plutôt qu’un cyberpunk générique.

### Core Principles

1. **La nuit comme matière** : fonds charbon, halos chauds, grain discret et profondeur photographique.
2. **L’information comme programmation** : dates, lieux, heures et offres traités comme des éléments d’affiche culturelle.
3. **Le contraste comme signature** : ivoire chaud pour lire, vert acide citronné pour agir, rose rougeoyant pour signaler l’énergie.
4. **L’asymétrie maîtrisée** : grands blocs éditoriaux, repères latéraux, cartes qui débordent légèrement de la grille.

### Color Philosophy

La base presque noire installe une sensation de club intime et protège la lisibilité des images. L’ivoire évite le blanc froid des interfaces SaaS. Le **lime électrique** devient la couleur propriétaire de l’action et des repères de réservation, tandis qu’un rouge framboise sert uniquement à ponctuer les moments de forte intensité. Les accents lumineux doivent rester rares pour conserver une impression premium.

### Layout Paradigm

Une composition éditoriale en bande verticale : la navigation reste compacte en haut, le hero occupe la largeur avec un axe texte décalé, les sections alternent entre rails horizontaux, colonnes asymétriques et cartes d’événements superposées. Les textes courts et les métadonnées rythment la page comme un programme de soirée.

### Signature Elements

- Un **monogramme rond LB** utilisable dans le header et le footer.
- Un filet lime vertical et des micro-labels uppercase pour introduire les sections.
- Des halos ovales façon lumière de scène, appliqués en arrière-plan avec parcimonie.

### Interaction Philosophy

Les interactions doivent donner l’impression d’entrer dans une soirée : boutons qui répondent immédiatement, cartes qui se soulèvent légèrement, navigation mobile qui se déploie sans rupture et liens de réservation qui ouvrent directement WhatsApp. Les animations enrichissent l’orientation mais ne doivent jamais ralentir l’accès à l’information.

### Animation

Les entrées de section utilisent uniquement opacité + translation verticale courte, avec des décalages de 40 à 70 ms. Les cartes d’événements gagnent un léger déplacement et une bordure lumineuse au survol. Les halos se déplacent très lentement en arrière-plan, uniquement lorsque `prefers-reduced-motion` l’autorise. Aucun effet ne doit provoquer de reflow ; la page reste fluide sur mobile.

### Typography System

- **Display** : `DM Serif Display`, pour les titres de hero et les phrases de marque.
- **Interface / corps** : `Manrope`, pour les navigations, métadonnées, boutons et textes utilitaires.
- Les titres sont courts, contrastés, parfois en italique éditorial ; les labels sont en uppercase avec tracking augmenté.

### Brand Essence

**Le Bistro est le point de rendez-vous nocturne de Goma pour celles et ceux qui veulent dîner, danser et réserver leur espace avec style.**

Personnalité : **magnétique, généreuse, précise**.

### Brand Voice

Les headlines sont directes et sensorielles. Les CTA sont concrets, jamais génériques. Les microcopies parlent comme un hôte sûr de lui, avec peu de mots et une invitation claire.

Exemples :

- « La nuit commence à table. »
- « Réservez votre angle de la soirée. »

### Wordmark & Logo

Le logo est un sceau circulaire : un cercle plein ou annulaire contenant un monogramme **LB** géométrique, avec un petit repère d’étoile ou de rayon. Il doit être lisible à petite taille, fonctionner en ivoire sur fond charbon et en charbon sur fond lime, sans dépendre d’un simple mot écrit dans une police par défaut.

### Signature Brand Color

**Le Bistro Lime — `#D8F23F`** : un vert citron lumineux, immédiatement reconnaissable dans l’obscurité et assez chaud pour dialoguer avec les photos de nuit.

## Variables éditables prévues

Les couleurs principales, le texte de marque, les liens sociaux, le numéro WhatsApp, l’adresse, les horaires, les événements, les offres VIP et les images seront regroupés dans des constantes React et des variables CSS documentées, afin de faciliter une future personnalisation sans reprendre la structure de la page.
