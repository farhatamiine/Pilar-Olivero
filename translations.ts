// translations.ts - Multilingual content for Pilar Olivero Portfolio
// Default language: French (FR)

export type Language = 'es' | 'fr' | 'en';

export const translations = {
    // ==================== BIO ====================
    bio: {
        es: `Pilar Olivero
Artista multidisciplinaria y arteterapeuta argentina, especializada en fotografía alternativa, bordado e instalaciones. Formada en derecho con especialización en derechos humanos, combina su práctica artística con un fuerte compromiso social, explorando la creación colectiva y los vínculos humanos.

Cuenta con experiencia en la coordinación de talleres centrados en la inclusión social y el feminismo, trabajando con personas en situaciones de vulnerabilidad y utilizando el arte como herramienta de transformación y encuentro. Su obra articula archivos familiares, materiales sensibles y textiles, abordando la memoria, el cuerpo y el espacio.

Entre París y Argentina, ha participado en residencias internacionales, ha publicado Dix pellicules trente-cinq millimètres (2023) y ha expuesto en numerosos países, entre los que destacan Francia, Argentina, China, Grecia, España, Austria y Alemania. Actualmente estudia en la Maison Elinaya, escuela de bordado artístico en París, donde profundiza su práctica textil.`,

        fr: `Pilar Olivero
Artiste multidisciplinaire et art-thérapeute argentine, spécialisée en photographie alternative, broderie et installations. Formée en droit avec une spécialisation en droits humains, elle associe sa pratique artistique à un fort engagement social, explorant la création collective et les liens humains.

Elle anime des ateliers axés sur l'inclusion sociale et le féminisme, travaillant avec des personnes en situation de vulnérabilité et utilisant l'art comme outil de transformation et de rencontre. Son travail articule archives familiales, matériaux sensibles et textiles, abordant les questions de mémoire, de corps et d'espace.

Entre Paris et l'Argentine, elle a participé à des résidences internationales, publié Dix pellicules trente-cinq millimètres (2023) et exposé dans de nombreux pays, notamment en France, en Argentine, en Chine, en Grèce, en Espagne, en Autriche et en Allemagne. Elle étudie actuellement à la Maison Elinaya, école de broderie artistique à Paris, où elle approfondit sa pratique textile.`,

        en: `Pilar Olivero
Argentine multidisciplinary artist and art therapist, specializing in alternative photography, embroidery, and installations. Trained in law with a specialization in human rights, she combines her artistic practice with a strong social commitment, exploring collective creation and human relationships.

With experience leading workshops focused on social inclusion and feminism, she works with people in vulnerable situations, using art as a tool for transformation and encounter. Her work brings together family archives, sensitive materials, and textiles, addressing memory, the body, and space.

Based between Paris and Argentina, she has participated in international residencies, published Dix pellicules trente-cinq millimètres (2023), and exhibited in numerous countries, with her most significant exhibitions taking place in France, Argentina, China, Greece, Spain, Austria, and Germany. She is currently studying at Maison Elinaya, an artistic embroidery school in Paris, where she continues to deepen her textile practice.`,
    },

    // ==================== UI STRINGS ====================
    ui: {
        es: {
            archive: 'Archivo',
            profile: 'Perfil',
            contact: 'Contacto',
            spotlight: 'Destacados 2025',
            viewProject: 'Ver proyecto',
            back: 'Volver',
            stage: 'Etapa',
            technique: 'Técnica',
            dimensions: 'Dimensiones',
            embroideredText: 'Texto bordado',
        },
        fr: {
            archive: 'Archive',
            profile: 'Profil',
            contact: 'Contact',
            spotlight: 'À la une 2025',
            viewProject: 'Voir le projet',
            back: 'Retour',
            stage: 'Étape',
            technique: 'Technique',
            dimensions: 'Dimensions',
            embroideredText: 'Texte brodé',
        },
        en: {
            archive: 'Archive',
            profile: 'Profile',
            contact: 'Contact',
            spotlight: 'Spotlight 2025',
            viewProject: 'View project',
            back: 'Back',
            stage: 'Stage',
            technique: 'Technique',
            dimensions: 'Dimensions',
            embroideredText: 'Embroidered Text',
        },
    },

    // ==================== PROJECTS ====================
    projects: {
        // ========== 1. CHANGEMENT D'ÉTAT (2025) ==========
        'changement-detat': {
            title: {
                es: "Changement d'état",
                fr: "Changement d'état",
                en: "Changement d'état",
            },
            subtitle: {
                es: 'Instalación inmersiva',
                fr: 'Installation immersive',
                en: 'Immersive Installation',
            },
            year: '2025',
            category: 'Installation / Textile',
            technique: {
                es: 'Fotografía analógica 35 mm, collage, textiles teñidos con cebolla y bordado a mano.',
                fr: "Photographie analogique 35 mm, collage, textiles teints à l'oignon et broderie à la main.",
                en: '35mm analog photography, collage, onion-dyed textiles and hand embroidery.',
            },
            dimensions: '3 × 3 mètres',
            description: {
                es: 'Instalación inmersiva de 3 × 3 metros.',
                fr: 'Installation immersive de 3 × 3 mètres.',
                en: 'Immersive installation, 3 × 3 meters.',
            },
        },

        // ========== 2. LA TISSEUSE (2025) ==========
        'la-tisseuse': {
            title: {
                es: 'La Tisseuse',
                fr: 'La Tisseuse',
                en: 'The Weaver',
            },
            subtitle: {
                es: 'Instalación colectiva',
                fr: 'Installation collective',
                en: 'Collective Installation',
            },
            year: '2025',
            category: 'Installation / Textile',
            technique: {
                es: 'Hilos de lana y algodón teñidos a mano, metal tejidos a crochet; escultura realizada con tubos multicapa, espuma de construcción, masilla de alisado y pintura en spray; encaje de bolillos en seda negra y alambre metálico; fotografía analógica de 35 mm impresa sobre muselina de seda, bordada a mano con hilos de algodón.',
                fr: 'Fils de laine et de coton teints à la main et fils métalliques crochetés ; sculpture réalisée à partir de tubes multicouches Equation, mousse de construction, enduit de lissage et peinture en spray ; dentelle aux fuseaux en soie noire et fil métallique ; photographie argentique 35 mm imprimée sur mousseline de soie, broderie à la main avec fils de coton.',
                en: 'Wool and cotton threads hand-dyed and crocheted metal threads; sculpture made with Equation multilayer tubes, construction foam, smoothing compound, and spray paint; bobbin lace in black silk and metal thread; 35 mm analog photography printed on silk muslin, hand-embroidered with cotton threads.',
            },
            description: {
                es: `Instalación colectiva que explora el dolor femenino y el uso del textil como acto de resiliencia. El proceso forma parte de la obra: el momento en que el cuerpo se convierte en escritura, en un fragmento de historia compartida. La figura de la araña funciona como metáfora de la mujer: aquella que teje su propia red y se protege del dolor.

La costura y las artes textiles permiten reparar lo que ha sido destruido, adaptarse a los cambios, transformar las formas existentes y crear algo nuevo.

Estas prácticas también conectan a las mujeres entre sí, fortaleciéndolas a través de la creación de comunidad. Una forma de recuperar el control, de ser tejedora cuando todo arde alrededor.`,
                fr: `Installation collective, explorant la douleur féminine et l'usage du textile comme acte de résilience. Le processus fait partie intégrante de l'œuvre : le moment où le corps devient écriture, fragment d'une histoire partagée. La figure de l'araignée apparaît comme une métaphore de la femme — celle qui tisse sa propre toile et se protège de la douleur.

La couture et les arts textiles deviennent des gestes de réparation : réparer ce qui a été détruit, s'adapter au changement, transformer les formes existantes et faire émerger de nouvelles possibilités. Ces pratiques relient également les femmes entre elles, les renforçant à travers la création d'une communauté. Une manière de reprendre le contrôle, d'être tisseuse lorsque tout brûle autour de soi.`,
                en: `Collective installation exploring feminine pain and the use of textile as an act of resilience. The process is conceived as part of the work: the moment in which the body becomes writing, a fragment of shared history. The spider figure serves as a metaphor for women — weaving their own web and protecting themselves from pain.

Sewing and textile arts become acts of repair: mending what has been broken, adapting to change, transforming existing forms, and creating something new.

These practices also connect women to one another, strengthening them through community. A way to regain control, to be a weaver when everything burns around you.`,
            },
        },

        // ========== 3. RESIDENCIA NY20+ (2025) ==========
        'residencia-ny20': {
            title: {
                es: 'Residencia NY20+',
                fr: 'Résidence NY20+',
                en: 'NY20+ Residency',
            },
            subtitle: {
                es: 'Chengdu, Sichuan, China',
                fr: 'Chengdu, Sichuan, Chine',
                en: 'Chengdu, Sichuan, China',
            },
            year: '2025',
            category: 'Residency / Installation',
            technique: {
                es: 'Fotografía analógica 35mm, collage y bordado.',
                fr: 'Photographie analogique 35 mm, collage, et broderie.',
                en: '35mm analog photography, collage, and embroidery.',
            },
            description: {
                es: `Residencia internacional apoyada por Nongyuan Culture, dedicada a la promoción artística y al intercambio cultural. Desarrollo de un proyecto personal dentro de una comunidad de artistas internacionales. Participación en talleres, diálogos creativos y exposiciones colectivas. Realización de un taller en la Escuela de Bordado de Sichuan, compartiendo mi práctica con estudiantes y artistas locales.

Exposición final de la residencia:
NY20+ International Art and Intangible Cultural Heritage Achievements Exhibition, Chengdu, China.`,
                fr: `Résidence internationale soutenue par Nongyuan Culture, dédiée à la promotion artistique et à l'échange culturel. Développement d'un projet personnel au sein d'une communauté d'artistes internationaux. Participation à des ateliers, dialogues créatifs et expositions collectives. Réalisation d'un atelier à l'École de broderie du Sichuan, partageant ma pratique avec les étudiant·es et artistes local·es.

Exposition finale de la résidence :
NY20+ International Art and Intangible Cultural Heritage Achievements Exhibition, Chengdu, China.`,
                en: `International residency supported by Nongyuan Culture, dedicated to artistic promotion and cultural exchange. Development of a personal project within a community of international artists. Participation in workshops, creative dialogues, and collective exhibitions. Conducting a workshop at the Sichuan Embroidery School, sharing my practice with local students and artists.

Final residency exhibition:
NY20+ International Art and Intangible Cultural Heritage Achievements Exhibition, Chengdu, China.`,
            },
        },

        // ========== 4. AU MILIEU DE MURS FRAGILES (2021-2025) ==========
        'murs-fragiles': {
            title: {
                es: 'Au Milieu de Murs Fragiles',
                fr: 'Au Milieu de Murs Fragiles',
                en: 'Au Milieu de Murs Fragiles',
            },
            subtitle: {
                es: 'Proyecto en etapas',
                fr: 'Projet en étapes',
                en: 'Project in Stages',
            },
            year: '2021–2025',
            category: 'Installation / Public Intervention',
            technique: {
                es: 'Tienda de campaña, texto bordado a mano, fotografía analógica 35mm.',
                fr: 'Tente, texte brodé à la main, photographie argentique 35 mm.',
                en: 'Tent, hand-embroidered text, 35mm analog photography.',
            },
            dimensions: '130 × 210 × 107 cm',
            stages: {
                stage1: {
                    title: {
                        es: 'Primera etapa',
                        fr: 'Première étape',
                        en: 'First Stage',
                    },
                    type: {
                        es: 'Instalación / intervención en vía pública',
                        fr: "Installation / intervention dans l'espace public",
                        en: 'Installation / Public Intervention',
                    },
                    description: {
                        es: `En esta primera etapa, la obra se presenta como una tienda de campaña instalada en el espacio público. En su superficie se borda un texto autobiográfico que reconstruye recuerdos de la infancia, escenas domésticas y vínculos familiares atravesados por la precariedad, el cuidado y la pérdida.

Previo a la construcción de la instalación, se fotografiaron las tiendas de campaña en película analógica 35 mm. A partir de esas imágenes, construyó su propia tienda, sobre la cual bordó el texto de la infancia. Estas fotografías también sirven como base para la segunda etapa del proyecto, donde se transforman en carteles inmobiliarios utilizando las locaciones verdaderas de las tiendas y las imágenes capturadas.

La tienda articula dos mundos habitualmente separados: el hogar y la calle. Funciona al mismo tiempo como refugio íntimo y como estructura expuesta, desplazando la idea de casa hacia una forma frágil y provisoria. Al situarse en distintos barrios, la obra activa lecturas diversas según el contexto urbano, poniendo en tensión la noción de hogar, pertenencia y protección.

El gesto del bordado, lento, repetitivo y doméstico. inscribe la memoria en un soporte precario. La casa aparece como cuerpo, como herencia y como ruina: un legado transmitido entre generaciones de mujeres, marcado por la inestabilidad material y afectiva.`,
                        fr: `Dans cette première étape, l'œuvre se présente comme une tente installée dans l'espace public. Sur sa surface est brodé un texte autobiographique qui reconstruit des souvenirs d'enfance, des scènes domestiques et des liens familiaux traversés par la précarité, le soin et la perte.

Avant la construction de l'installation, les tentes ont été photographiées sur pellicule argentique 35 mm. À partir de ces images, l'artiste a construit sa propre tente, sur laquelle elle a brodé le texte de l'enfance. Ces photographies servent également de base à la deuxième étape du projet, où elles sont transformées en affiches immobilières utilisant les emplacements réels des tentes et les images capturées.

La tente articule deux mondes habituellement séparés : le foyer et la rue. Elle fonctionne à la fois comme refuge intime et comme structure exposée, déplaçant l'idée de maison vers une forme fragile et provisoire. En se situant dans différents quartiers, l'œuvre active des lectures diverses selon le contexte urbain, questionnant les notions de foyer, d'appartenance et de protection.

Le geste de la broderie, lent, répétitif et domestique, inscrit la mémoire sur un support précaire. La maison apparaît comme corps, comme héritage et comme ruine : un legs transmis entre générations de femmes, marqué par l'instabilité matérielle et affective.`,
                        en: `In this first stage, the work is presented as a tent installed in public space. On its surface, an autobiographical text is hand-embroidered, reconstructing childhood memories, domestic scenes, and family bonds shaped by precarity, care, and loss.

Before constructing the installation, the tents were photographed using 35 mm analog film. From these images, the artist built her own tent, onto which she embroidered the text of her childhood. These photographs also serve as the basis for the second stage of the project, where they are transformed into real estate posters using the actual locations of the tents and the captured images.

The tent bridges two worlds that are usually separate: home and street. It functions both as an intimate refuge and as an exposed structure, shifting the idea of home toward something fragile and provisional. By being placed in different neighborhoods, the work invites multiple readings depending on the urban context, questioning notions of home, belonging, and protection.

The act of embroidery—slow, repetitive, and domestic—inscribes memory onto a precarious support. The house appears as body, inheritance, and ruin: a legacy transmitted across generations of women, marked by material and emotional instability.`,
                    },
                },
                stage2: {
                    title: {
                        es: 'Segunda etapa: À Louer',
                        fr: 'Deuxième étape : À Louer',
                        en: 'Second Stage: À Louer',
                    },
                    type: {
                        es: 'Intervención urbana / acción en el espacio público',
                        fr: "Intervention urbaine / action dans l'espace public",
                        en: 'Urban Intervention / Public Space Action',
                    },
                    description: {
                        es: `En esta segunda etapa, titulada À Louer, las fotografías de la tiendas se transforman en anuncios inmobiliarios. Las imágenes adoptan la estética, el formato y el lenguaje visual del mercado inmobiliario y son pegadas manualmente en distintos barrios de París.

Mediante el uso de la ironía, la obra se apropia de los códigos de la publicidad inmobiliaria para generar un contraste entre la promesa de hogar y la realidad de la precariedad habitacional. Allí donde habitualmente se anuncian ventas y alquileres, aparecen refugios frágiles.

Esta acción busca dar visibilidad al problema inmobiliario y a una población urbana cada vez más numerosa que queda sin acceso a la vivienda. El relato íntimo se desplaza hacia el espacio público y se vuelve colectivo, señalando la violencia estructural de un sistema que transforma el hogar en mercancía.`,
                        fr: `Dans cette deuxième étape, intitulée À Louer, les photographies des tentes sont transformées en annonces immobilières. Les images adoptent l'esthétique, le format et le langage visuel du marché immobilier et sont collées manuellement dans différents quartiers de Paris.

Par l'utilisation de l'ironie, l'œuvre s'approprie les codes de la publicité immobilière pour créer un contraste entre la promesse d'un foyer et la réalité de la précarité du logement. Là où sont habituellement affichées des annonces de vente et de location, apparaissent des abris fragiles.

Cette action cherche à rendre visible le problème du logement et une population urbaine de plus en plus nombreuse qui se retrouve sans accès au logement. Le récit intime se déplace vers l'espace public et devient collectif, dénonçant la violence structurelle d'un système qui transforme le foyer en marchandise.`,
                        en: `In this second stage, titled À Louer, the photographs of the tents are transformed into real estate advertisements. The images adopt the aesthetics, format, and visual language of the real estate market and are manually pasted in various neighborhoods of Paris.

Using irony, the work appropriates the codes of real estate advertising to create a contrast between the promise of a home and the reality of housing precarity. Where sales and rental ads are usually displayed, fragile shelters appear instead.

This action seeks to highlight the housing problem and the growing urban population left without access to housing. The intimate narrative shifts into public space and becomes collective, exposing the structural violence of a system that turns home into commodity.`,
                    },
                },
            },
            // The embroidered poem - kept in original Spanish with translations
            embroideredPoem: {
                es: `El cuarto tenía dos camas iguales, almohadones en forma de corazón, dos acolchados con flores, mesitas de luz idénticas, lámparas rosadas.

Todas las noches, antes de dormir, venía alguien a despedirnos.

Si la que entraba era mi abuela lo hacía con tiempo. La veo con el té de boldo en la mano y la bombilla que gira en la taza. Me sentía grande tomando aquella bebida con aroma a flores. Me encantaban todos sus rituales y su dulzura.

En cambio, si entraba mi mamá, todo era más rápido, un beso corto, taparnos sin arreglar las sábanas, apagar la luz. No había tiempo. Sin embargo, si ella se hubiera quedado yo habría podido pasar horas mirándola, la veía tan hermosa y triste a la vez, la maternidad nunca fue para ella.

Cuando cumplí cuatro años mis papás se separaron, la casa era un desastre, nosotras también.

La imaginación fue mi refugio. Me gustaba jugar en la cocina, saltaba y unía sus baldosas desiguales con los triángulos que dibujaban mis pies. El techo era de chapa, podía estar dentro de una tormenta, aunque afuera solo cayeran algunas gotas. De niña amaba jugar con lo que tenía.

Cierro los ojos con fuerza, camino así hasta llegar al pasillo de la entrada. Mis manos tocan las paredes, todo es áspero, nada está revestido, todo es cemento. Dejo de jugar a que no veo y estás vos, abuela Yaya, con el jarrito para regar las plantas. Yo las toco una a una. Un escalofrío lento me recorre, mis manos sienten una energía caliente / tibia y este amor vegetal me hace consciente de la finitud del momento. Estás ahí, me haces señas y sonreís. El vaivén entre el balde y el jarro va creando vida.

Ha caído un legado de cemento sobre las mujeres de mi familia. La casa se cae a pedazos, la precariedad es el centro de nuestras vidas.

¿Sentiste alguna vez que te falta el aire para respirar? Es como si las paredes de tu casa se derrumbaran sobre tu pecho.

Me veo salir de debajo de los escombros, me uno a mi linaje.

Delante de mí una puerta con el número ciento veintidós. En esa casa vivió la niña que no soy.

Yaya, sigo las huellas que dejan tus pisadas. Sé que voy a unir los fragmentos de nuestra esencia.

Abuela, no te preocupes, estoy parada sobre nuestros restos.`,
                fr: `La chambre avait deux lits identiques, des coussins en forme de cœur, deux couettes à fleurs, des tables de nuit identiques, des lampes roses.

Chaque soir, avant de dormir, quelqu'un venait nous dire bonne nuit.

Si c'était ma grand-mère qui entrait, elle prenait son temps. Je la vois avec le thé de boldo à la main et la paille qui tourne dans la tasse. Je me sentais grande en buvant cette boisson au parfum de fleurs. J'adorais tous ses rituels et sa douceur.

En revanche, si c'était ma mère, tout était plus rapide: un bref baiser, nous border sans arranger les draps, éteindre la lumière. Il n'y avait pas de temps. Pourtant, si elle était restée, j'aurais pu passer des heures à la regarder — je la trouvais si belle et triste à la fois; la maternité n'était jamais faite pour elle.

Quand j'ai eu quatre ans, mes parents se sont séparés, la maison était un désastre, nous aussi.

L'imagination est devenue mon refuge. J'aimais jouer dans la cuisine, sauter et relier les carreaux inégaux avec les triangles que dessinaient mes pieds. Le toit était en tôle — je pouvais être au cœur d'une tempête même si dehors il ne tombait que quelques gouttes. Enfant, j'adorais jouer avec ce que j'avais.

Je ferme les yeux fort, je marche ainsi jusqu'au couloir de l'entrée. Mes mains touchent les murs, tout est rugueux, rien n'est revêtu, tout est en ciment. J'arrête de faire semblant de ne pas voir et tu es là, grand-mère Yaya, avec le petit arrosoir pour les plantes. Je les touche une à une. Un frisson lent me traverse, mes mains sentent une énergie chaude / tiède et cet amour végétal me rend consciente de la finitude du moment. Tu es là, tu me fais signe et tu souris. Le va-et-vient entre le seau et l'arrosoir crée la vie.

Un héritage de ciment est tombé sur les femmes de ma famille. La maison s'effondre, la précarité est au centre de nos vies.

As-tu déjà eu l'impression de manquer d'air pour respirer ? C'est comme si les murs de ta maison s'effondraient sur ta poitrine.

Je me vois émerger des décombres, je rejoins ma lignée.

Devant moi, une porte avec le numéro cent vingt-deux. Dans cette maison vivait la petite fille que je ne suis pas.

Yaya, je suis les traces de tes pas. Je sais que je vais réunir les fragments de notre essence.

Grand-mère, ne t'inquiète pas, je me tiens sur nos restes.`,
                en: `The room had two identical beds, heart-shaped pillows, two floral quilts, matching nightstands, pink lamps.

Every night, before going to sleep, someone would come to say goodnight.

If it was my grandmother, she took her time. I see her with the boldo tea in her hand and the stirring straw in the cup. I felt grown-up drinking that floral-scented tea. I loved all her rituals and her sweetness.

If it was my mother, everything was quicker: a short kiss, tucking us in without straightening the sheets, turning off the light. There was no time. Yet if she had stayed, I could have spent hours watching her—I saw her so beautiful and sad at the same time; motherhood was never meant for her.

When I turned four, my parents separated, the house was a mess, we were too.

Imagination became my refuge. I liked playing in the kitchen, jumping and connecting the uneven tiles with the triangles drawn by my feet. The roof was made of metal sheets—I could be inside a storm even if only a few drops fell outside. As a child, I loved playing with what I had.

I close my eyes tightly and walk until I reach the entrance hallway. My hands touch the walls; everything is rough, uncoated, all cement. I stop pretending I don't see, and there you are, Grandma Yaya, with the watering can. I touch the plants one by one. A slow shiver runs through me; my hands feel a warm energy, and this vegetal love makes me aware of the moment's finitude. You are there, gesturing, smiling. The back-and-forth between bucket and can creates life.

A legacy of cement has fallen upon the women in my family. The house is crumbling; precarity is at the center of our lives.

Have you ever felt like you cannot breathe? It's as if the walls of your house collapse on your chest.

I see myself emerging from the rubble, joining my lineage.

Before me, a door with the number one hundred twenty-two. In that house lived the girl I am not.

Yaya, I follow the traces of your footsteps. I know I will piece together the fragments of our essence.

Grandmother, don't worry—I am standing on our remains.`,
            },
            closingStatement: {
                es: 'Au Milieu de Murs Fragiles es un proyecto en proceso que articula memoria, territorio y herencia, donde el hogar aparece como un espacio inestable, pero también como un lugar de resistencia y transmisión.',
                fr: 'Au Milieu de Murs Fragiles est un projet en cours qui articule mémoire, territoire et héritage, où le foyer apparaît comme un espace instable, mais aussi comme un lieu de résistance et de transmission.',
                en: 'Au Milieu de Murs Fragiles is an ongoing project that connects memory, territory, and heritage, where the home appears as an unstable space, yet also as a place of resistance and transmission.',
            },
        },
    },
};

// Helper function to get text by language
export function t<T>(obj: Record<Language, T>, lang: Language): T {
    return obj[lang];
}
