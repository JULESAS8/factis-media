import { Article, Story, FactCheck, EbolaSnapshot, ProvinceExetat } from '../types';

export const HERO_FEATURED_ARTICLES: Article[] = [
  {
    id: 'hero-main',
    category: 'Infrastructure & Géopolitique',
    kicker: 'Dossier Spécial',
    title: 'Le Corridor de Lobito : Comment une infrastructure redessine la géopolitique régionale.',
    author: 'David Hall',
    date: '28 Juillet 2026',
    timeAgo: 'à l\'instant',
    readTime: '6 min',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDI9UewbQoTwUXFuEeNEYODBe47XaywQ79xpaytj-N4a45p9-jkYlhWqb-Mw2xp2IgS9VIrN_vXpdgCf4cFQ3WUleAzzhqFK29oB9g4o9fvOelWiDdKTS5QZG7ZSBgoAb02k-F1eT3IwvYoclTZeMX-sPV_gJKcelMP18VP3kBOG_1LH3Y_f0xgMhE5mxVIE-NBdlGv-geyQhPcVjlYOt_vJ9DN8KAOcXvavysYG-Y8AbuJ9laohYVrtg',
    excerpt: 'Analyse stratégique de l’impact économique, minier et géopolitique du Corridor de Lobito en Afrique centrale reliant la Katanga belt à l\'Atlantique.',
    content: `Le Corridor de Lobito représente l'un des projets d'infrastructures ferroviaires et portuaires les plus ambitieux de la décennie en Afrique centrale. Traversant l'Angola, la République Démocratique du Congo (RDC) et la Zambie, ce canal de transport stratégique relie la ceinture de cuivre et de cobalt directement à l'océan Atlantique.

Historiquement enclavées ou dépendantes de routes maritimes de l'océan Indien longues de plusieurs milliers de kilomètres, les régions minières d'Afrique centrale disposent désormais d'un accès direct, réduisant le temps de transit des marchandises vers l'Europe et les Amériques de près de 50%.

Au-delà des aspects purement logistiques, le projet réaligne la diplomatie des infrastructures mondiales, attirant des financements conjoints des États-Unis, de la Banque Européenne d'Investissement et du Partenariat pour les Infrastructures Mondiales.`
  },
  {
    id: 'hero-left-1',
    category: 'Opinion',
    title: 'L\'alternance ne se décrète pas, elle se prépare',
    author: 'La Rédaction',
    date: '28 Juillet 2026',
    timeAgo: 'il y a 2h',
    formatBadge: 'OPINION',
    formatColor: '#D72638',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB_b3ekPwmxr03O0PKIbZ5RRGc2aiGoIeNpyGHIsoNw3goKO-MiztBpkgYnAh8JCBvlkFPkpCjbChBjNjy7s87m8bSOrwDVHwDTzTy3LB-d3rqnABZh68uWCH0-xfqqaqWHoYaDmrFGNzy0CkFCXip0CPVbGTO6rvmKr84fXjayIrK_EI0mOV3_cAFy8NySqJMtLSyESvoi3kA0Sp6MhJ3EdfR3KyCFtsfnRHUf6vLXpMyJALHgXkFh3w',
    excerpt: 'Réflexion politique sur la culture démocratique et la préparation institutionnelle.'
  },
  {
    id: 'hero-left-2',
    category: 'Grand Angle',
    title: 'Loi référendaire en RDC : ce que disent, article par article, les treize dispositions réservées',
    author: 'La Rédaction',
    date: '28 Juillet 2026',
    timeAgo: 'il y a 3h',
    formatBadge: 'DÉCRYPTAGE',
    formatColor: '#6C3483',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuABWDFDWLolv92YNN9aobzKT5CMCOjN408LyelILsMZzzUFgAlM7VcQgzztXsWW5uCnWPtUe-gfjP9T2xmU4wyOv5EIeCmuW2efPnvlfdTqvNWy0f3rbtgIYH_9Au0oUP0nAYypx1HJ-nhNW2WB37xT6tMrlnpncnnlmd515F0hbtI8BfdwNaRQhibcm8C5k8YGLBCQEiIcA1_0KcM2hHLDETSRpOFh5xC7A0_f-UGRWDf7_QfqZvKgKw',
    excerpt: 'FACTIS a pu consulter les 45 articles adoptés et décortique les points de friction juridique.'
  }
];

export const FIL_INFO_ENTRIES: Article[] = [
  {
    id: 'fil-1',
    category: 'ANALYSE',
    title: 'Loi référendaire validée en RDC : ce que la décision de la Cour change, et les scénarios qui s\'ouvrent',
    timeAgo: '16h',
    timelineHour: '16h',
    date: '29 JUILLET',
    isAnalysis: true,
    cardVariant: 'highlightDark',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAdaDs7lhIH4fozL49uipD-23Bm_qyXF6WU-9vMaqSAkpCBFzxcKdtAbq9SUYFrFdYJnkZD3AeNfmW4RwBALuPEh4tiwz4OOQ9L-erhF4FClpek-yXR2XlJZA2MXbFiiE_GYdSa0xAfC9JSfWZWl2vtBPPCTFDMBfuFkn8NhYP89f9po8KcxYFtLPGHJKRudJxIyEwaMs7lexxfgBDqwKCfvR0vlya0Z3ivuBc0SvnRPYBtB9LYRVHxWQ',
    excerpt: 'En déclarant la loi référendaire conforme à la Constitution « sous réserves » de treize article...'
  },
  {
    id: 'fil-2',
    category: 'POLITIQUE',
    title: 'RDC: La Cour constitutionnelle déclare la loi sur le Référendum conforme à la Constitution, sous réserve de 13 articles',
    timeAgo: '16h',
    timelineHour: '16h',
    date: '29 JUILLET',
    cardVariant: 'light',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB_b3ekPwmxr03O0PKIbZ5RRGc2aiGoIeNpyGHIsoNw3goKO-MiztBpkgYnAh8JCBvlkFPkpCjbChBjNjy7s87m8bSOrwDVHwDTzTy3LB-d3rqnABZh68uWCH0-xfqqaqWHoYaDmrFGNzy0CkFCXip0CPVbGTO6rvmKr84fXjayIrK_EI0mOV3_cAFy8NySqJMtLSyESvoi3kA0Sp6MhJ3EdfR3KyCFtsfnRHUf6vLXpMyJALHgXkFh3w',
    excerpt: 'La Cour constitutionnelle a déclaré, ce mardi 28 juillet, la loi fixant les conditions d’organisation...'
  },
  {
    id: 'fil-3',
    category: 'ANALYSE',
    title: 'La musique congolaise rapporte, mais ses auteurs ne touchent presque rien',
    timeAgo: '15h',
    timelineHour: '15h',
    date: '29 JUILLET',
    isAnalysis: true,
    cardVariant: 'dark',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCS_fVx_QoASkLH5qAgaOaAJNFZkS_M-8aNp77xa-1e2kNEImRTYzUtWLVZN3TIur9roz-jGAez4VsNuI6bnN81zbqxrk5aAaV01_ZLN7fcyPoAMbzrDdF0aOC3-fcKDvC5xQJvBMpqHemonTEVrbSLtBOQ7ey3avCvar6LkUTHAHDb_MbNc-NETSuSiSD-zBc-nwSW-vaJWCulzksYdUFPLS60YmqPJ_J4oY34Ki81M9z55AQJ4LWuqw',
    excerpt: 'Le rapport CISAC 2025 chiffre les droits perçus dans le monde à 13,97 milliards d\'euros. L\'Afriq...'
  },
  {
    id: 'fil-4',
    category: 'BRÈVE',
    title: 'Bourses Excellentia : le couple présidentiel récompense les lauréats de la première édition nationale',
    timeAgo: '15h',
    timelineHour: '15h',
    date: '29 JUILLET',
    isBreve: true,
    cardVariant: 'light',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuChPem1hR3mrMAqDQ9HiZDA4lJ8VWYawyivJ63pc4LA1KqGw2Jbtna3CLPbiwMwkM7aYSkYMaWwjD-3R_39-MRjYiraXKaQ5GpxdO5-h4OUsNtnPL_spQ63TMIluwrUlTJvD6vggb8c5OtcUJ-byrfWLF4FZt5qqi4XCnIHBUqltkgvuIvADNowAeEsptlXYLN00JoKmXtGMg-cb1fpl5H3RW7xnmimWkkchy18Al17V1iVUz4f3GiuhA',
    excerpt: 'Remise solennelle de prix d’excellence à Kinshasa pour soutenir les talents scientifiques.'
  },
  {
    id: 'fil-5',
    category: 'SANTÉ',
    title: 'Vaccin contre l’Ebola Bundibugyo : le premier volontaire vacciné, 620 000 doses en stock',
    timeAgo: '14h',
    timelineHour: '14h',
    date: '29 JUILLET',
    cardVariant: 'dark',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD_Zhq5aO7R1takTKifKOjDYOa_tlYtHeDYAE1jYP9LnkZ9DETmFtInhbOXYFRzZzshULBV5p1NvNaTpDc5dSGaOCx2rvub5syeO1u8TQ5yCOIbJx2yZdgYKPHiRLi8fuL2G6X25V0Kj1zRo4fidQvwdln3R0bV0Jc8LmqhuiKJCctJvoirzbbRAkNmLRXjRLej7LoOPRQ-lePNQ66f-dcQGu8dF1Yl1GaNiZWtKci1y9jJ3eJrkuY5WQ',
    excerpt: 'Inoculation réussie lors des essais cliniques de phase II pour enrayer la résurgence.'
  },
  {
    id: 'fil-6',
    category: 'ÉCONOMIE',
    title: '350 millions de dollars à récupérer : l’État lance le recouvrement forcé des créances du FPI',
    timeAgo: '14h',
    timelineHour: '14h',
    date: '29 JUILLET',
    cardVariant: 'light',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAv0shYBw5soGisS1uOTZt_HXeJG-l4_TWn16fyLPrbB_L086OtyL2WbkOKv3adT5ku8c4iMA8EL94y-lObvHzuaDRqybs438vrMGmhTnOxwygpOQ60S5madcCYi1SH4Vuq-cP-EDLbGJXSA62T7sx8vG-V8DN9uLnHKpWt6Fava-FbRPThD8qAWyb8zwyCKU3GCcGPOt_AyX43r4zHTUV3lwRPI8a9Jy8SEsu-FhV8X9LkUaVah7lhzw',
    excerpt: 'Ultimatum de 30 jours accordé aux débiteurs insolvables sous peine de saisies conservatoires.'
  }
];

export const STORIES_DATA: Story[] = [
  {
    id: 'story-1',
    title: 'STORY/ Exétat 2026 : les leçons du Kasaï-Oriental 2',
    category: 'Éducation',
    author: 'La Rédaction',
    date: '28 Juil 2026',
    thumb: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAdaDs7lhIH4fozL49uipD-23Bm_qyXF6WU-9vMaqSAkpCBFzxcKdtAbq9SUYFrFdYJnkZD3AeNfmW4RwBALuPEh4tiwz4OOQ9L-erhF4FClpek-yXR2XlJZA2MXbFiiE_GYdSa0xAfC9JSfWZWl2vtBPPCTFDMBfuFkn8NhYP89f9po8KcxYFtLPGHJKRudJxIyEwaMs7lexxfgBDqwKCfvR0vlya0Z3ivuBc0SvnRPYBtB9LYRVHxWQ',
    typeLabel: 'Story',
    excerpt: 'Analyse verticale des résultats des filières littéraires et techniques.'
  },
  {
    id: 'story-2',
    title: 'STORY/ Cartographie des hubs numériques de Kinshasa',
    category: 'Tech',
    author: 'David Hall',
    date: '27 Juil 2026',
    thumb: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCS_fVx_QoASkLH5qAgaOaAJNFZkS_M-8aNp77xa-1e2kNEImRTYzUtWLVZN3TIur9roz-jGAez4VsNuI6bnN81zbqxrk5aAaV01_ZLN7fcyPoAMbzrDdF0aOC3-fcKDvC5xQJvBMpqHemonTEVrbSLtBOQ7ey3avCvar6LkUTHAHDb_MbNc-NETSuSiSD-zBc-nwSW-vaJWCulzksYdUFPLS60YmqPJ_J4oY34Ki81M9z55AQJ4LWuqw',
    typeLabel: 'Vidéo',
    excerpt: 'Tour d\'horizon des pépinières technologiques et incubateurs émergents.'
  },
  {
    id: 'story-3',
    title: 'STORY/ Le fleuve Congo : axe de fret & biodiversité',
    category: 'Environnement',
    author: 'La Rédaction',
    date: '26 Juil 2026',
    thumb: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBJzfV89KP3E0J83d15ZyNiwGx7svkpu0jrokYWPgDpxzoXwZrObhyAXSDb0VaZ3d-4dqLFkeb9ytN3JTqejyX8j7ywLhcMatsnbx9z1m-z0eMrWL-KljgsGKf6yY6-2ARVM4O2dusNW6d6QaeW3XcLqFd80JuYx5zSzAukiTllOcrMQyJZwaqCBOqJnpjlVOMTxRrhT55mcrcx35e0rj4Ns6-92A8-LfbvAyOSOgb4ARQVSkom7XGvcg',
    typeLabel: 'Story',
    excerpt: 'Immersion à bord des barges de transport et défis de navigation.'
  },
  {
    id: 'story-4',
    title: 'STORY/ L\'examen numérique et la numérisation des copies',
    category: 'Tech',
    author: 'La Rédaction',
    date: '25 Juil 2026',
    thumb: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDemnQieU4dNlYCp6hBCOJ8m0EV4xgh8vWImBGIeQ-z9gKow43QgS6280YyD6eDEt4s_1GID3mqiP9iAOq8C5W-UlUqaUPekggP1HcXh25WxEmcFNTKeINw_U1tUAtj-yPgUxYQR_N5x4TOuFBmUXMvxoz9hzXR262a62eS6rZGB-ZClGcqspTQ-96RnM9okcKChXvSxaMKEzI6c2dqBM_wIJmwDPT1gP3g5Xi9FQ1HWFOXC7Ii90bL3g',
    typeLabel: 'Story',
    excerpt: 'Comment la correction optique sécurise le palmarès national.'
  },
  {
    id: 'story-5',
    title: 'STORY/ Sicomines : autopsie d\'une convention révisée',
    category: 'Mines',
    author: 'David Hall',
    date: '24 Juil 2026',
    thumb: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDI9UewbQoTwUXFuEeNEYODBe47XaywQ79xpaytj-N4a45p9-jkYlhWqb-Mw2xp2IgS9VIrN_vXpdgCf4cFQ3WUleAzzhqFK29oB9g4o9fvOelWiDdKTS5QZG7ZSBgoAb02k-F1eT3IwvYoclTZeMX-sPV_gJKcelMP18VP3kBOG_1LH3Y_f0xgMhE5mxVIE-NBdlGv-geyQhPcVjlYOt_vJ9DN8KAOcXvavysYG-Y8AbuJ9laohYVrtg',
    typeLabel: 'Story',
    excerpt: 'Bilan des investissements dans le programme d\'infrastructures.'
  }
];

export const FACT_CHECKS_DATA: FactCheck[] = [
  {
    id: 'fc-1',
    claim: 'Le spectaculaire retournement de veste de Bob Kabamba sur la révision constitutionnelle en RDC',
    source: 'Analyse politique',
    verdict: 'Trompeur',
    date: '28 Juillet 2026',
    excerpt: 'Confrontation des déclarations publiques de 2020 et 2026 concernant la pertinence de la loi fondamentale.'
  },
  {
    id: 'fc-2',
    claim: 'Faux : la Direction générale des impôts n’a pas ouvert de portail de recrutement en ligne',
    source: 'Réseaux Sociaux',
    verdict: 'Faux',
    date: '21 Juillet 2026',
    excerpt: 'Alerte phishing : l\'administration fiscale dément catégoriquement l\'existence d\'un tel formulaire.'
  },
  {
    id: 'fc-3',
    claim: 'FACTIS Vérité — Non, le M23 n’a pas abattu d’avion des FARDC : la guerre de l’image à l’Est',
    source: 'Infox Militaires',
    verdict: 'Faux',
    date: '12 Juillet 2026',
    excerpt: 'Authentification d\'un montage vidéo de synthèse créé par IA et diffusé sur Telegram.'
  }
];

export const EBOLA_SNAPSHOT_MOCK: EbolaSnapshot = {
  updatedAt: '2026-07-28T12:00:00+01:00',
  source: 'INSP / COUSP RDC, rapport de situation n°073.',
  ituriShare: 0.889,
  series: [
    { date: '31 mai', cas: 282, deces: 42 },
    { date: '10 juin', cas: 675, deces: 135 },
    { date: '25 juin', cas: 1203, deces: 321 },
    { date: '1er juil', cas: 1460, deces: 447 },
    { date: '15 juil', cas: 2124, deces: 828 },
    { date: '21 juil', cas: 2536, deces: 1033 },
    { date: '26 juil', cas: 3262, deces: 1437 }
  ],
  repartition: [
    { prov: 'Ituri', cas: 2901, part: 0.889 },
    { prov: 'Nord-Kivu', cas: 314, part: 0.096 },
    { prov: 'Haut-Uélé', cas: 38, part: 0.012 },
    { prov: 'Tshopo', cas: 5, part: 0.002 },
    { prov: 'Sud-Kivu', cas: 3, part: 0.001 }
  ]
};

export const PROVINCES_EXETAT_MOCK: ProvinceExetat[] = [
  { name: 'Kinshasa', proc: true, date: '27 juin 2026', best: '88 % · Latin-Philo' },
  { name: 'Haut-Katanga', proc: true, date: '27 juin 2026', best: '89 % · Sciences' },
  { name: 'Kasaï-Oriental', proc: true, date: '27 juin 2026', best: '75 % · Pédagogie' },
  { name: 'Kongo-Central', proc: true, date: '1er juillet 2026' },
  { name: 'Nord-Ubangi', proc: true, date: '1er juillet 2026' },
  { name: 'Haut-Lomami', proc: true, date: '1er juillet 2026' },
  { name: 'Tanganyika', proc: true, date: '1er juillet 2026' },
  { name: 'Lomami', proc: true, date: '1er juillet 2026' },
  { name: 'Kwilu', proc: true, date: '10 juillet 2026' },
  { name: 'Mongala', proc: true, date: '10 juillet 2026' },
  { name: 'Haut-Uele', proc: true, date: '10 juillet 2026' },
  { name: 'Ituri', proc: true, date: '10 juillet 2026' },
  { name: 'Lualaba', proc: true, date: '10 juillet 2026' },
  { name: 'Sankuru', proc: true, date: '10 juillet 2026' },
  { name: 'Mai-Ndombe', proc: true, date: '10 juillet 2026' },
  { name: 'Kwango', proc: true, date: '10 juillet 2026' },
  { name: 'Bas-Uele', proc: true, date: '10 juillet 2026' },
  { name: 'Kasaï', proc: true, date: '5 juillet 2026' },
  { name: 'Kasaï-Central', proc: true, date: '5 juillet 2026' },
  { name: 'Maniema', proc: false },
  { name: 'Sud-Kivu', proc: true, date: '10 juillet 2026' },
  { name: 'Nord-Kivu', proc: true, date: '10 juillet 2026' },
  { name: 'Tshopo', proc: true, date: '5 juillet 2026' },
  { name: 'Tshuapa', proc: true, date: '5 juillet 2026' },
  { name: 'Équateur', proc: true, date: '5 juillet 2026' },
  { name: 'Sud-Ubangi', proc: true, date: '10 juillet 2026' }
];
