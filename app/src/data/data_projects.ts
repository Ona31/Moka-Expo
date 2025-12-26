// data projects 



// typage 

export type Project = {
  id: number;
  title: string;
  author: string;
  school: string;
  category: string;
  image: string;
  slug: string;
};


// la liste 
export const featuredProjects: Project[] = [
  {
    id: 1,
    title: "Smart Irrigation System",
    author: "Jean Mukendi",
    school: "Université de Kinshasa",
    category: "IoT / Agriculture",
    image: "/projects/1.jpg",
    slug: "smart-irrigation-system",
  },
  {
    id: 2,
    title: "E-Health Mobile App",
    author: "Grace Tshibangu",
    school: "Institut Supérieur d'Informatique",
    category: "Santé / Mobile",
    image: "/projects/2.jpg",
    slug: "e-health-mobile-app",
  },
  {
    id: 3,
    title: "Solar Power Backpack",
    author: "Patrick Kalombo",
    school: "École Technique Industrielle",
    category: "Énergie / Innovation",
    image: "/projects/3.jpg",
    slug: "solar-power-backpack",
  },
  {
    id: 4,
    title: "Plateforme d’Apprentissage en Ligne",
    author: "Sarah Mbuyi",
    school: "Université Catholique du Congo",
    category: "Éducation / Web",
    image: "/projects/4.jpg",
    slug: "plateforme-apprentissage-en-ligne",
  },
  {
    id: 5,
    title: "Système de Gestion de Déchets",
    author: "Moïse Kabeya",
    school: "Institut Supérieur des Techniques Appliquées",
    category: "Environnement",
    image: "/projects/5.jpg",
    slug: "systeme-gestion-dechets",
  },
  {
    id: 6,
    title: "Application de Géolocalisation des Stations",
    author: "Elisée Onyembo",
    school: "Projet indépendant",
    category: "Mobilité / Web",
    image: "/projects/6.jpg",
    slug: "geolocalisation-stations",
  },
];




//  card

export const cardData = [
  {
    image: "/projects/4.png",
    title: "Identité Congolaise",
    description:
      "Des templates inspirés des cultures congolaises, mettant en valeur les motifs, couleurs et symboles locaux.",
  },
  {
    image: "/projects/5.png",
    title: "Communauté de Développeurs",
    description:
      "Une plateforme dédiée aux développeurs congolais pour partager, apprendre et collaborer autour du web moderne.",
  },
  {
    image: "/projects/6.png",
    title: "Open Source & Moderne",
    description:
      "Des composants et templates open source, conçus avec Next.js, Tailwind CSS et les meilleures pratiques actuelles.",
  },
];
