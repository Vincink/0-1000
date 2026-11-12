// Base officielle des 198 questions d'estimation pour le jeu 0 à 1000 (réponses vérifiées entre 0 et 1000)
const QUESTIONS_0_A_1000 = [
  {
    "id": 1,
    "question": "Hauteur de la Tour Eiffel en mètres (antenne comprise) ?",
    "value": 330
  },
  {
    "id": 2,
    "question": "Nombre de marches pour monter à pied du sol jusqu'au 2e étage de la Tour Eiffel ?",
    "value": 674
  },
  {
    "id": 3,
    "question": "Hauteur de l'Atomium de Bruxelles en mètres ?",
    "value": 102
  },
  {
    "id": 4,
    "question": "Hauteur de la flèche de l'Hôtel de Ville sur la Grand-Place de Bruxelles (en mètres) ?",
    "value": 96
  },
  {
    "id": 5,
    "question": "Nombre de marches de la Montagne de Bueren à Liège ?",
    "value": 374
  },
  {
    "id": 6,
    "question": "Hauteur du beffroi de Bruges en mètres ?",
    "value": 83
  },
  {
    "id": 7,
    "question": "Hauteur du beffroi de Mons en mètres ?",
    "value": 87
  },
  {
    "id": 8,
    "question": "Hauteur du beffroi de Tournai en mètres ?",
    "value": 72
  },
  {
    "id": 9,
    "question": "Hauteur de la tour de Pise en mètres (côté le plus élevé) ?",
    "value": 57
  },
  {
    "id": 10,
    "question": "Nombre de marches à l'intérieur de la tour de Pise ?",
    "value": 294
  },
  {
    "id": 11,
    "question": "Hauteur de l'Arc de Triomphe à Paris en mètres ?",
    "value": 50
  },
  {
    "id": 12,
    "question": "Hauteur de la cathédrale Notre-Dame de Paris au sommet de sa flèche (en mètres) ?",
    "value": 96
  },
  {
    "id": 13,
    "question": "Hauteur de la statue de la Liberté en mètres (socle et piédestal compris) ?",
    "value": 93
  },
  {
    "id": 14,
    "question": "Hauteur de la statue de la Liberté seule, des pieds au sommet de la torche (en mètres) ?",
    "value": 46
  },
  {
    "id": 15,
    "question": "Hauteur de la statue du Christ Rédempteur à Rio de Janeiro en mètres (piédestal compris) ?",
    "value": 38
  },
  {
    "id": 16,
    "question": "Hauteur de la Grande Pyramide de Khéops à l'origine (en mètres) ?",
    "value": 146
  },
  {
    "id": 17,
    "question": "Longueur totale du pont de Brooklyn à New York (en mètres, travée principale) ?",
    "value": 486
  },
  {
    "id": 18,
    "question": "Hauteur des tours du pont du Golden Gate à San Francisco au-dessus de l'eau (en mètres) ?",
    "value": 227
  },
  {
    "id": 19,
    "question": "Hauteur de la tour horloge Big Ben (Elizabeth Tower) à Londres en mètres ?",
    "value": 96
  },
  {
    "id": 20,
    "question": "Nombre de marches de l'escalier menant au sommet de Big Ben ?",
    "value": 334
  },
  {
    "id": 21,
    "question": "Hauteur du bâtiment principal du Manneken-Pis en centimètres (statue seule) ?",
    "value": 55
  },
  {
    "id": 22,
    "question": "Longueur de la rue Neuve (piétonnier commerçant) à Bruxelles en mètres ?",
    "value": 610
  },
  {
    "id": 23,
    "question": "Hauteur du Colisée de Rome en mètres ?",
    "value": 48
  },
  {
    "id": 24,
    "question": "Longueur du grand axe extérieur du Colisée de Rome en mètres ?",
    "value": 188
  },
  {
    "id": 25,
    "question": "Hauteur de la basilique Saint-Pierre de Rome au sommet de la croix (en mètres) ?",
    "value": 136
  },
  {
    "id": 26,
    "question": "Hauteur de la Sagrada Família à Barcelone au sommet de la tour centrale de Jésus-Christ (en mètres) ?",
    "value": 172
  },
  {
    "id": 27,
    "question": "Longueur du paquebot Titanic en mètres ?",
    "value": 269
  },
  {
    "id": 28,
    "question": "Largeur maximale du paquebot Titanic en mètres ?",
    "value": 28
  },
  {
    "id": 29,
    "question": "Nombre de cheminées sur le paquebot Titanic ?",
    "value": 4
  },
  {
    "id": 30,
    "question": "Longueur de l'avion Airbus A380 en mètres ?",
    "value": 73
  },
  {
    "id": 31,
    "question": "Envergure des ailes de l'avion Airbus A380 en mètres ?",
    "value": 80
  },
  {
    "id": 32,
    "question": "Capacité maximale en passagers d'un Airbus A380 certifiée en configuration classe unique ?",
    "value": 853
  },
  {
    "id": 33,
    "question": "Envergure de l'avion supersonique Concorde en mètres ?",
    "value": 26
  },
  {
    "id": 34,
    "question": "Longueur de la fusée Saturn V d'Apollo 11 en mètres ?",
    "value": 111
  },
  {
    "id": 35,
    "question": "Hauteur de la fusée Ariane 5 en mètres ?",
    "value": 53
  },
  {
    "id": 36,
    "question": "Nombre de communes en Belgique ?",
    "value": 581
  },
  {
    "id": 37,
    "question": "Altitude du point culminant de la Belgique (Signal de Botrange) en mètres ?",
    "value": 694
  },
  {
    "id": 38,
    "question": "Longueur du littoral belge sur la mer du Nord en kilomètres ?",
    "value": 67
  },
  {
    "id": 39,
    "question": "Longueur totale du fleuve Escaut de sa source en France jusqu'à la mer du Nord (en kilomètres) ?",
    "value": 355
  },
  {
    "id": 40,
    "question": "Longueur totale de la Meuse de sa source en France jusqu'à la mer du Nord (en kilomètres) ?",
    "value": 950
  },
  {
    "id": 41,
    "question": "Nombre de ponts traversant la Seine à Paris ?",
    "value": 37
  },
  {
    "id": 42,
    "question": "Nombre de stations dans le métro de Paris (hors RER) ?",
    "value": 321
  },
  {
    "id": 43,
    "question": "Nombre de stations dans le métro de Bruxelles (lignes 1, 2, 5 et 6) ?",
    "value": 59
  },
  {
    "id": 44,
    "question": "Nombre de municipalités (communes) aux Pays-Bas (en 2024) ?",
    "value": 342
  },
  {
    "id": 45,
    "question": "Superficie de la principauté de Monaco en hectares ?",
    "value": 208
  },
  {
    "id": 46,
    "question": "Superficie du Vatican en hectares ?",
    "value": 44
  },
  {
    "id": 47,
    "question": "Nombre d'îles composant l'archipel des Seychelles ?",
    "value": 115
  },
  {
    "id": 48,
    "question": "Nombre d'îles principales formant l'archipel des Comores ?",
    "value": 4
  },
  {
    "id": 49,
    "question": "Altitude du sommet du Mont Blanc en mètres (divisée par 10, arrondie à l'entier) ?",
    "value": 481
  },
  {
    "id": 50,
    "question": "Longueur du canal de Suez en kilomètres ?",
    "value": 193
  },
  {
    "id": 51,
    "question": "Longueur du canal de Panama en kilomètres ?",
    "value": 82
  },
  {
    "id": 52,
    "question": "Nombre d'écluses sur le canal de Panama (côté Atlantique et Pacifique réunis, ancien tracé) ?",
    "value": 12
  },
  {
    "id": 53,
    "question": "Profondeur maximale du lac Léman en mètres ?",
    "value": 310
  },
  {
    "id": 54,
    "question": "Profondeur maximale du Loch Ness en mètres ?",
    "value": 230
  },
  {
    "id": 55,
    "question": "Hauteur des chutes du Niagara (chutes canadiennes Horseshoe) en mètres ?",
    "value": 57
  },
  {
    "id": 56,
    "question": "Hauteur de la plus haute cascade du monde, Salto Ángel au Venezuela (en mètres) ?",
    "value": 979
  },
  {
    "id": 57,
    "question": "Nombre de volcans actifs environ dans le monde sur les terres émergées (arrondi à la centaine) ?",
    "value": 500
  },
  {
    "id": 58,
    "question": "Vitesse maximale enregistrée en piqué pour un faucon pèlerin (en km/h) ?",
    "value": 389
  },
  {
    "id": 59,
    "question": "Vitesse maximale d'un guépard en pointe (en km/h) ?",
    "value": 115
  },
  {
    "id": 60,
    "question": "Vitesse maximale d'un espadon voilier à la nage (en km/h) ?",
    "value": 110
  },
  {
    "id": 61,
    "question": "Durée moyenne de gestation d'un éléphant d'Afrique en jours ?",
    "value": 660
  },
  {
    "id": 62,
    "question": "Durée moyenne de gestation d'une girafe en jours ?",
    "value": 457
  },
  {
    "id": 63,
    "question": "Durée moyenne de gestation d'un cheval en jours ?",
    "value": 340
  },
  {
    "id": 64,
    "question": "Durée moyenne de gestation d'un ours polaire en jours ?",
    "value": 240
  },
  {
    "id": 65,
    "question": "Nombre d'os dans le corps humain adulte ?",
    "value": 206
  },
  {
    "id": 66,
    "question": "Nombre de muscles squelettiques environ dans le corps humain ?",
    "value": 639
  },
  {
    "id": 67,
    "question": "Nombre de papilles gustatives environ sur la langue humaine (en dizaines) ?",
    "value": 800
  },
  {
    "id": 68,
    "question": "Battements de cœur par minute au repos d'un colibri ?",
    "value": 250
  },
  {
    "id": 69,
    "question": "Battements de cœur par minute d'une baleine bleue en plongée profonde ?",
    "value": 2
  },
  {
    "id": 70,
    "question": "Profondeur maximale atteinte en plongée libre (apnée No Limit) par Herbert Nitsch (en mètres) ?",
    "value": 253
  },
  {
    "id": 71,
    "question": "Nombre de variétés officielles de bières trappistes reconnues dans le monde (label ATP) ?",
    "value": 10
  },
  {
    "id": 72,
    "question": "Température moyenne à la surface de la planète Vénus en degrés Celsius ?",
    "value": 462
  },
  {
    "id": 73,
    "question": "Température moyenne à la surface de la planète Mercure côté jour en degrés Celsius ?",
    "value": 430
  },
  {
    "id": 74,
    "question": "Distance moyenne entre la Terre et la Lune en milliers de kilomètres ?",
    "value": 384
  },
  {
    "id": 75,
    "question": "Nombre d'étoiles visibles à l'œil nu depuis un site très sombre dans un hémisphère (en dizaines) ?",
    "value": 300
  },
  {
    "id": 76,
    "question": "Nombre de jours durant lesquels a duré le règne le plus court de l'histoire de France (Louis XIX, en minutes) ?",
    "value": 20
  },
  {
    "id": 77,
    "question": "Nombre d'années de règne de Louis XIV sur le trône de France ?",
    "value": 72
  },
  {
    "id": 78,
    "question": "Nombre d'années de règne de la reine Élisabeth II sur le trône britannique ?",
    "value": 70
  },
  {
    "id": 79,
    "question": "Nombre de présidents des États-Unis de George Washington à Joe Biden inclus ?",
    "value": 46
  },
  {
    "id": 80,
    "question": "Nombre de députés à la Chambre des représentants de Belgique ?",
    "value": 150
  },
  {
    "id": 81,
    "question": "Nombre de députés à l'Assemblée nationale en France ?",
    "value": 577
  },
  {
    "id": 82,
    "question": "Nombre de sénateurs au Sénat français ?",
    "value": 348
  },
  {
    "id": 83,
    "question": "Nombre de sièges de députés au Parlement européen (législature 2024-2029) ?",
    "value": 720
  },
  {
    "id": 84,
    "question": "Nombre de membres permanents au Conseil de sécurité de l'ONU ?",
    "value": 5
  },
  {
    "id": 85,
    "question": "Nombre d'États membres de l'ONU ?",
    "value": 193
  },
  {
    "id": 86,
    "question": "Nombre d'articles dans la Déclaration universelle des droits de l'homme de 1948 ?",
    "value": 30
  },
  {
    "id": 87,
    "question": "Nombre d'articles dans la Constitution des États-Unis (hors amendements) ?",
    "value": 7
  },
  {
    "id": 88,
    "question": "Nombre d'amendements ratifiés dans la Constitution des États-Unis ?",
    "value": 27
  },
  {
    "id": 89,
    "question": "Nombre de jours qu'a duré le siège de Leningrad pendant la Seconde Guerre mondiale ?",
    "value": 872
  },
  {
    "id": 90,
    "question": "Nombre d'années qu'a duré la guerre de Cent Ans (de 1337 à 1453) ?",
    "value": 116
  },
  {
    "id": 91,
    "question": "Nombre de soldats spartiates célèbres à la bataille des Thermopyles ?",
    "value": 300
  },
  {
    "id": 92,
    "question": "Nombre de conspirateurs impliqués dans l'assassinat de Jules César (selon Suétone) ?",
    "value": 60
  },
  {
    "id": 93,
    "question": "Nombre de coups de poignard reçus par Jules César lors de son assassinat ?",
    "value": 23
  },
  {
    "id": 94,
    "question": "Nombre de passagers et membres d'équipage à bord du Mayflower en 1620 ?",
    "value": 132
  },
  {
    "id": 95,
    "question": "Nombre de jours de traversée de l'Atlantique par Christophe Colomb lors de son premier voyage (aller) ?",
    "value": 70
  },
  {
    "id": 96,
    "question": "Nombre de jours passés sur la Lune au total par les astronautes d'Apollo 11 (arrondi à l'heure) ?",
    "value": 22
  },
  {
    "id": 97,
    "question": "Nombre d'astronautes ayant marché sur la Lune au total ?",
    "value": 12
  },
  {
    "id": 98,
    "question": "Nombre de missions habitées du programme Apollo ayant aluni ?",
    "value": 6
  },
  {
    "id": 99,
    "question": "Nombre de jours passés dans l'espace en un seul vol par Valeri Poliakov (record absolu) ?",
    "value": 437
  },
  {
    "id": 100,
    "question": "Nombre de tours de Terre effectués par Youri Gagarine lors du premier vol spatial habité ?",
    "value": 1
  },
  {
    "id": 101,
    "question": "Nombre de cloches dans la cathédrale Notre-Dame de Paris (beffrois nord et sud) ?",
    "value": 10
  },
  {
    "id": 102,
    "question": "Poids en tonnes du grand bourdon « Emmanuel » de Notre-Dame de Paris (arrondi à l'entier) ?",
    "value": 13
  },
  {
    "id": 103,
    "question": "Nombre de colonnes sur la place Saint-Pierre de Rome (colonnade du Bernin) ?",
    "value": 284
  },
  {
    "id": 104,
    "question": "Nombre de statues de saints sur la colonnade de la place Saint-Pierre de Rome ?",
    "value": 140
  },
  {
    "id": 105,
    "question": "Nombre de tapisseries dans la tenture de l'Apocalypse d'Angers (conservées aujourd'hui) ?",
    "value": 67
  },
  {
    "id": 106,
    "question": "Nombre de tableaux authentifiés de Johannes Vermeer reconnus aujourd'hui ?",
    "value": 37
  },
  {
    "id": 107,
    "question": "Nombre de tableaux vendus par Vincent van Gogh de son vivant (officiellement attesté) ?",
    "value": 1
  },
  {
    "id": 108,
    "question": "Nombre d'années qu'il a fallu à Léonard de Vinci pour peindre la Joconde (environ) ?",
    "value": 4
  },
  {
    "id": 109,
    "question": "Hauteur de la toile de La Joconde en centimètres ?",
    "value": 77
  },
  {
    "id": 110,
    "question": "Largeur de la toile de La Joconde en centimètres ?",
    "value": 53
  },
  {
    "id": 111,
    "question": "Longueur de la tapisserie de Bayeux en mètres (arrondie à l'entier) ?",
    "value": 68
  },
  {
    "id": 112,
    "question": "Nombre de personnages représentés sur la tapisserie de Bayeux ?",
    "value": 626
  },
  {
    "id": 113,
    "question": "Nombre de chiens représentés sur la tapisserie de Bayeux ?",
    "value": 55
  },
  {
    "id": 114,
    "question": "Nombre de bateaux représentés sur la tapisserie de Bayeux ?",
    "value": 41
  },
  {
    "id": 115,
    "question": "Nombre de marches de l'escalier du Palais des Festivals à Cannes (les célèbres marches rouges) ?",
    "value": 24
  },
  {
    "id": 116,
    "question": "Score maximal réalisable en une seule visite au snooker (sans faute adverse) ?",
    "value": 147
  },
  {
    "id": 117,
    "question": "Score maximal réalisable en une partie de bowling à 10 quilles ?",
    "value": 300
  },
  {
    "id": 118,
    "question": "Score maximal réalisable en 3 fléchettes sur une cible traditionnelle ?",
    "value": 180
  },
  {
    "id": 119,
    "question": "Nombre de cases sur un plateau de Scrabble standard (15×15) ?",
    "value": 225
  },
  {
    "id": 120,
    "question": "Nombre de tuiles dans un jeu de Scrabble francophone standard ?",
    "value": 102
  },
  {
    "id": 121,
    "question": "Nombre de dominos dans un jeu de double-douze ?",
    "value": 91
  },
  {
    "id": 122,
    "question": "Nombre de tuiles dans un jeu de Mah-jong chinois traditionnel ?",
    "value": 144
  },
  {
    "id": 123,
    "question": "Nombre de cartes dans un jeu de Tarot français complet ?",
    "value": 78
  },
  {
    "id": 124,
    "question": "Nombre de cartes dans un jeu de Uno classique ?",
    "value": 108
  },
  {
    "id": 125,
    "question": "Nombre de cases sur un plateau de jeu de l'Oie traditionnel ?",
    "value": 63
  },
  {
    "id": 126,
    "question": "Nombre de trous sur un plateau de Petits Chevaux classique (parcours complet) ?",
    "value": 56
  },
  {
    "id": 127,
    "question": "Niveau maximal théorique atteignable dans le jeu d'arcade Pac-Man original ?",
    "value": 256
  },
  {
    "id": 128,
    "question": "Nombre de Pokémon de la première génération (Kanto) ?",
    "value": 151
  },
  {
    "id": 129,
    "question": "Nombre de lunes de puissance à récolter au total dans le jeu Super Mario Odyssey ?",
    "value": 880
  },
  {
    "id": 130,
    "question": "Nombre de sanctuaires dans le jeu The Legend of Zelda: Breath of the Wild (hors DLC) ?",
    "value": 120
  },
  {
    "id": 131,
    "question": "Nombre de noix Korogu cachées dans The Legend of Zelda: Breath of the Wild ?",
    "value": 900
  },
  {
    "id": 132,
    "question": "Nombre de secondes du record du monde masculin du 400 mètres (Wayde van Niekerk, arrondi) ?",
    "value": 43
  },
  {
    "id": 133,
    "question": "Nombre de secondes du record du monde masculin du 800 mètres (David Rudisha, arrondi) ?",
    "value": 101
  },
  {
    "id": 134,
    "question": "Nombre de secondes du record du monde masculin du 1 500 mètres (Hicham El Guerrouj, arrondi) ?",
    "value": 206
  },
  {
    "id": 135,
    "question": "Record du monde du saut à la perche masculin en centimètres (Armand Duplantis, en 2024) ?",
    "value": 626
  },
  {
    "id": 136,
    "question": "Record du monde du saut en hauteur masculin en centimètres (Javier Sotomayor) ?",
    "value": 245
  },
  {
    "id": 137,
    "question": "Record du monde du saut en longueur masculin en centimètres (Mike Powell) ?",
    "value": 895
  },
  {
    "id": 138,
    "question": "Record du monde féminin du saut en longueur en centimètres (Galina Chistyakova) ?",
    "value": 752
  },
  {
    "id": 139,
    "question": "Nombre de buts inscrits en carrière officielle par Pelé (selon la FIFA) ?",
    "value": 757
  },
  {
    "id": 140,
    "question": "Nombre de buts inscrits en carrière par Zinedine Zidane en équipe de France ?",
    "value": 31
  },
  {
    "id": 141,
    "question": "Nombre de sélections en équipe nationale de Belgique pour Jan Vertonghen ?",
    "value": 157
  },
  {
    "id": 142,
    "question": "Nombre de victoires d'étapes sur le Tour de France pour Eddy Merckx ?",
    "value": 34
  },
  {
    "id": 143,
    "question": "Nombre de victoires d'étapes sur le Tour de France pour Mark Cavendish ?",
    "value": 35
  },
  {
    "id": 144,
    "question": "Nombre de jours en maillot jaune sur le Tour de France au total pour Eddy Merckx ?",
    "value": 96
  },
  {
    "id": 145,
    "question": "Nombre de Grands Prix de Formule 1 remportés par Michael Schumacher ?",
    "value": 91
  },
  {
    "id": 146,
    "question": "Nombre de pole positions en Formule 1 remportées par Ayrton Senna ?",
    "value": 65
  },
  {
    "id": 147,
    "question": "Nombre de titres de champion du monde en MotoGP (catégorie reine) pour Valentino Rossi ?",
    "value": 7
  },
  {
    "id": 148,
    "question": "Nombre de tournois du Grand Chelem en simple remportés par Roger Federer ?",
    "value": 20
  },
  {
    "id": 149,
    "question": "Nombre de tournois du Grand Chelem en simple remportés par Novak Djokovic ?",
    "value": 24
  },
  {
    "id": 150,
    "question": "Nombre de titres à Roland-Garros en simple messieurs remportés par Rafael Nadal ?",
    "value": 14
  },
  {
    "id": 151,
    "question": "Nombre de minutes qu'a duré le match de tennis le plus long de l'histoire (Isner-Mahut à Wimbledon) ?",
    "value": 665
  },
  {
    "id": 152,
    "question": "Nombre de jeux disputés au total lors du match Isner-Mahut à Wimbledon en 2010 ?",
    "value": 183
  },
  {
    "id": 153,
    "question": "Nombre de points marqués en un seul match NBA par Wilt Chamberlain (record absolu) ?",
    "value": 100
  },
  {
    "id": 154,
    "question": "Hauteur réglementaire d'un panier de basketball en centimètres ?",
    "value": 305
  },
  {
    "id": 155,
    "question": "Hauteur réglementaire du filet de tennis au centre en centimètres (arrondie) ?",
    "value": 91
  },
  {
    "id": 156,
    "question": "Nombre de plumes d'oie sur un volant de badminton de compétition ?",
    "value": 16
  },
  {
    "id": 157,
    "question": "Nombre de fossettes sur une balle de golf standard (en moyenne) ?",
    "value": 336
  },
  {
    "id": 158,
    "question": "Poids réglementaire d'une balle de baseball en grammes (arrondi) ?",
    "value": 145
  },
  {
    "id": 159,
    "question": "Nombre d'épisodes au total de la série télévisée Friends ?",
    "value": 236
  },
  {
    "id": 160,
    "question": "Nombre d'épisodes au total de la série télévisée The Big Bang Theory ?",
    "value": 279
  },
  {
    "id": 161,
    "question": "Nombre d'épisodes au total de la série télévisée How I Met Your Mother ?",
    "value": 208
  },
  {
    "id": 162,
    "question": "Nombre d'épisodes au total de la série télévisée The Office (version US) ?",
    "value": 201
  },
  {
    "id": 163,
    "question": "Nombre d'épisodes au total de la série télévisée Game of Thrones ?",
    "value": 73
  },
  {
    "id": 164,
    "question": "Nombre d'épisodes au total de la série télévisée Breaking Bad ?",
    "value": 62
  },
  {
    "id": 165,
    "question": "Nombre d'épisodes de la série animée Dragon Ball Z (version originale japonaise) ?",
    "value": 291
  },
  {
    "id": 166,
    "question": "Nombre d'épisodes de la série animée Naruto (première série avant Shippuden) ?",
    "value": 220
  },
  {
    "id": 167,
    "question": "Nombre d'épisodes de la série animée Naruto Shippuden ?",
    "value": 500
  },
  {
    "id": 168,
    "question": "Nombre d'épisodes de la série Kaamelott (Livres I à VI réunis) ?",
    "value": 458
  },
  {
    "id": 169,
    "question": "Durée en minutes du film Titanic de James Cameron (version cinéma) ?",
    "value": 194
  },
  {
    "id": 170,
    "question": "Durée en minutes du film Le Seigneur des anneaux : Le Retour du roi (version cinéma) ?",
    "value": 201
  },
  {
    "id": 171,
    "question": "Durée en minutes du film Avatar : La Voie de l'eau ?",
    "value": 192
  },
  {
    "id": 172,
    "question": "Durée en minutes du film Avengers: Endgame ?",
    "value": 181
  },
  {
    "id": 173,
    "question": "Nombre d'Oscars remportés par le film Ben-Hur (1959), Titanic (1997) et Le Retour du roi (2003) ?",
    "value": 11
  },
  {
    "id": 174,
    "question": "Nombre de nominations aux Oscars obtenues par Meryl Streep dans sa carrière ?",
    "value": 21
  },
  {
    "id": 175,
    "question": "Nombre de chansons officielles enregistrées et publiées par les Beatles ?",
    "value": 213
  },
  {
    "id": 176,
    "question": "Nombre de touches sur un piano de concert standard ?",
    "value": 88
  },
  {
    "id": 177,
    "question": "Nombre de boutons sur un accordéon chromatique standard (main droite + main gauche, modèle 120 basses) ?",
    "value": 197
  },
  {
    "id": 178,
    "question": "Nombre de cordes sur une harpe de concert moderne ?",
    "value": 47
  },
  {
    "id": 179,
    "question": "Nombre de tuyaux dans le grand orgue de Notre-Dame de Paris (en dizaines) ?",
    "value": 800
  },
  {
    "id": 180,
    "question": "Nombre de fables écrites par Jean de La Fontaine (dans les 12 livres) ?",
    "value": 243
  },
  {
    "id": 181,
    "question": "Nombre de sonnets écrits par William Shakespeare ?",
    "value": 154
  },
  {
    "id": 182,
    "question": "Nombre de pièces de théâtre attribuées à William Shakespeare ?",
    "value": 37
  },
  {
    "id": 183,
    "question": "Nombre de volumes de l'Encyclopédie de Diderot et d'Alembert (volumes de texte + planches) ?",
    "value": 28
  },
  {
    "id": 184,
    "question": "Nombre de pages de l'édition originale française du roman Les Misérables (tome 1 à 5 réunis, en dizaines) ?",
    "value": 190
  },
  {
    "id": 185,
    "question": "Nombre de chapitres dans le roman Le Petit Prince d'Antoine de Saint-Exupéry ?",
    "value": 27
  },
  {
    "id": 186,
    "question": "Nombre de chapitres dans le roman Vingt Mille Lieues sous les mers de Jules Verne ?",
    "value": 47
  },
  {
    "id": 187,
    "question": "Nombre d'albums de la série Astérix parus jusqu'en 2023 (L'Iris blanc inclus) ?",
    "value": 40
  },
  {
    "id": 188,
    "question": "Nombre d'albums de Tintin achevés par Hergé ?",
    "value": 23
  },
  {
    "id": 189,
    "question": "Nombre de personnages différents apparaissant dans les aventures de Tintin (environ, en dizaines) ?",
    "value": 35
  },
  {
    "id": 190,
    "question": "Nombre de pages dans un album standard de Tintin en couleur ?",
    "value": 62
  },
  {
    "id": 191,
    "question": "Nombre de pages dans un album standard d'Astérix ?",
    "value": 48
  },
  {
    "id": 192,
    "question": "Nombre de cases sur la première planche de Tintin au Tibet ?",
    "value": 12
  },
  {
    "id": 193,
    "question": "Nombre de langues dans lesquelles Le Petit Prince a été traduit (en centaines, arrondi) ?",
    "value": 5
  },
  {
    "id": 194,
    "question": "Nombre de touches sur un clavier AZERTY français standard (PC de bureau avec pavé numérique) ?",
    "value": 105
  },
  {
    "id": 195,
    "question": "Nombre de caractères maximum d'un SMS standard (encodage GSM-7) ?",
    "value": 160
  },
  {
    "id": 196,
    "question": "Nombre de caractères maximum d'un tweet classique sur Twitter/X (depuis 2017) ?",
    "value": 280
  },
  {
    "id": 197,
    "question": "Nombre de nuances de gris dans le titre du célèbre roman d'E. L. James ?",
    "value": 50
  },
  {
    "id": 198,
    "question": "Nombre de calories environ dans un Big Mac standard (en kcal) ?",
    "value": 503
  }
];
