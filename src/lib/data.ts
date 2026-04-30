export const personal = {
  firstName: "Elhadj Alhassana",
  lastName: "CAMARA",
  fullName: "Elhadj Alhassana CAMARA",
  title: "Développeur Web & Mobile",
  tagline: "Solutions numériques personnalisées, modernes et performantes",
  bio: "Perspicace, travailleur et volontaire, possédant une très bonne faculté de diligence et un sens de révérence développé. Passionné par la création d'applications web modernes, performantes et accessibles.",
  longBio: "Passionné par les technologies modernes et l'innovation, j'ai suivi une formation académique à l'Université Mercure International de Conakry où j'ai obtenu ma licence en MIAGE, et je suis également diplômé en tant que Développeur Web Full Stack à Africa Digitale Académie. Spécialisé dans la création de solutions numériques personnalisées et performantes.",
  email: "astronetgn@gmail.com",
  phone: "+224 624 62 94 77",
  location: "C/Sonfonia Centre, Conakry, Guinée",
  currentSite: "https://astronetgn.page.gd/",
  cvUrl: "/cv_elhadj_dev.pdf",
  avatarUrl: "/avatar.jpg",
  available: true,
} as const;

export const socials = [
  { name: "GitHub",   url: "https://github.com/",   icon: "github"   },
  { name: "LinkedIn", url: "https://linkedin.com/", icon: "linkedin" },
  { name: "X",        url: "https://x.com/",        icon: "x"        },
  { name: "Facebook", url: "https://facebook.com/", icon: "facebook" },
  { name: "Discord",  url: "https://discord.com/",  icon: "discord"  },
  { name: "Email",    url: "mailto:astronetgn@gmail.com", icon: "mail" },
] as const;

export const stats = [
  { value: 6,  suffix: "+",  label: "Projets livrés" },
  { value: 4,  suffix: " ans", label: "D'expérience" },
  { value: 15, suffix: "+",  label: "Technologies" },
  { value: 3,  suffix: "",   label: "Langues parlées" },
] as const;

export const services = [
  {
    title: "Développement Web",
    description: "Création de sites web modernes, responsives et performants avec les dernières technologies.",
    icon: "code",
    color: "primary",
    features: ["React / Next.js", "Django / PHP", "API REST", "Responsive Design"],
  },
  {
    title: "Développement Mobile",
    description: "Applications mobiles natives Android et hybrides avec Ionic / TypeScript.",
    icon: "smartphone",
    color: "accent",
    features: ["Java Android", "Ionic", "TypeScript", "Cross-platform"],
  },
  {
    title: "Maintenance Informatique",
    description: "Support technique, configuration système et optimisation des performances.",
    icon: "settings",
    color: "primary-glow",
    features: ["Configuration", "Dépannage", "Optimisation", "Support 24/7"],
  },
  {
    title: "Design & Infographie",
    description: "Création de visuels attractifs et interfaces utilisateur intuitives.",
    icon: "palette",
    color: "accent-glow",
    features: ["UI/UX Design", "PhotoShop", "Illustrator", "Branding"],
  },
] as const;

export type SkillCategory = "Frontend" | "Backend" | "Mobile" | "Design" | "Outils";

export const skills: { name: string; icon: string; color: string; category: SkillCategory; level: number }[] = [
  { name: "HTML5",      icon: "html5",      color: "#E34F26", category: "Frontend", level: 95 },
  { name: "CSS",        icon: "css3",       color: "#1572B6", category: "Frontend", level: 92 },
  { name: "JavaScript", icon: "javascript", color: "#F7DF1E", category: "Frontend", level: 88 },
  { name: "TypeScript", icon: "typescript", color: "#3178C6", category: "Frontend", level: 80 },
  { name: "Bootstrap",  icon: "bootstrap",  color: "#7952B3", category: "Frontend", level: 95 },
  { name: "Angular",    icon: "angular",    color: "#DD0031", category: "Frontend", level: 75 },
  { name: "PHP",        icon: "php",        color: "#777BB4", category: "Backend",  level: 90 },
  { name: "Python",     icon: "python",     color: "#3776AB", category: "Backend",  level: 85 },
  { name: "Django",     icon: "django",     color: "#092E20", category: "Backend",  level: 85 },
  { name: "MySQL",      icon: "mysql",      color: "#4479A1", category: "Backend",  level: 88 },
  { name: "MongoDB",    icon: "mongodb",    color: "#47A248", category: "Backend",  level: 70 },
  { name: "Ionic",      icon: "ionic",      color: "#3880FF", category: "Mobile",   level: 75 },
  { name: "Java",       icon: "java",       color: "#007396", category: "Mobile",   level: 70 },
  { name: "Photoshop",  icon: "photoshop",  color: "#31A8FF", category: "Design",   level: 80 },
  { name: "Illustrator",icon: "illustrator",color: "#FF9A00", category: "Design",   level: 70 },
  { name: "Git",        icon: "git",        color: "#F05032", category: "Outils",   level: 85 },
  { name: "VS Code",    icon: "vscode",     color: "#007ACC", category: "Outils",   level: 95 },
  { name: "GitHub",     icon: "github",     color: "#181717", category: "Outils",   level: 85 },
];

export const experiences = [
  {
    role: "Développeur Web & Mobile",
    company: "Sanoutech",
    location: "Lambangnie",
    period: "Depuis Novembre 2025",
    current: true,
    description: "Analyse et conception des services de site internet de Sanoutech (soins médicaux) et SMIT (maladies infectieuses et tropicales). Mise en place d'une application de prise de rendez-vous médical.",
    tags: ["Django", "PHP", "MySQL", "Bootstrap"],
  },
  {
    role: "Stagiaire Informaticien & Caissier",
    company: "Loterie Nationale de Guinée",
    location: "Agence T7",
    period: "Depuis Février 2024",
    current: true,
    description: "Réalisation des tâches de la caisse, billetages, rangements et rôle d'informaticien. Saisie des montants, évaluations, bilans et services d'assistance en ligne.",
    tags: ["Excel", "Maintenance", "Support"],
  },
  {
    role: "Stagiaire Informatique",
    company: "Tulip Industrie",
    location: "Sonfonia",
    period: "Mai – Août 2022",
    current: false,
    description: "Analyste et Développeur Web en Django, PHP & Mobile en Java Android à travers les différents projets de l'entreprise.",
    tags: ["Django", "PHP", "Java Android"],
  },
  {
    role: "Analyste Développeur Web & Mobile",
    company: "Africa Digitale Académie",
    location: "Conakry",
    period: "Décembre 2021 – Mai 2022",
    current: false,
    description: "Mise en place d'une plateforme de Gestion de Points de Lecture dans la Commune de Ratoma.",
    tags: ["Web", "Mobile", "Gestion"],
    link: "https://www.pointdelecture.org",
  },
  {
    role: "Stagiaire Formateur",
    company: "Cabinet de Formation CAMACI",
    location: "Cyber Tassana",
    period: "Septembre 2021 – 2023",
    current: false,
    description: "Enseignement des cours d'informatique de base (suite Microsoft Office) et de la gestion des services informatiques.",
    tags: ["Formation", "MS Office", "Pédagogie"],
  },
] as const;

export const educations = [
  {
    degree: "Développeur Web & Mobile",
    school: "Africa Digitale Académie",
    level: "Licence RNCP 5",
    period: "2022",
    description: "Formation Full Stack en développement web et mobile.",
  },
  {
    degree: "MIAGE (Méthodes Informatiques Appliquées à la Gestion)",
    school: "Université Mercure International",
    level: "Licence BAC+4",
    period: "2015 – 2020",
    description: "Formation académique en informatique et gestion.",
  },
  {
    degree: "Gestion Administrative et Financière",
    school: "Institut CORTEX | Yattaya",
    level: "Formation continue",
    period: "Nov 2025 – Fév 2026",
    description: "Gestion de projets, RH, comptabilité, logistique et rédaction administrative.",
  },
] as const;

export const projects = [
  {
    title: "Plateforme Sanoutech & SMIT",
    category: "Web Médical",
    description: "Plateforme de gestion des soins médicaux de prévention et de suivi pour Sanoutech, et SMIT pour les maladies infectieuses tropicales. Application de prise de rendez-vous médical en cours.",
    tags: ["Django", "PHP", "MySQL", "Bootstrap"],
    image: "gradient-1",
    link: "#",
    featured: true,
  },
  {
    title: "Points de Lecture Ratoma",
    category: "Plateforme Web",
    description: "Plateforme de Gestion de Points de Lecture dans la Commune de Ratoma, déployée pour Africa Digitale Académie.",
    tags: ["Web", "Gestion", "Database"],
    image: "gradient-2",
    link: "https://www.pointdelecture.org",
    featured: true,
  },
  {
    title: "STOCK MANAGER",
    category: "Migration & Refonte",
    description: "Réécriture complète du code PHP7 vers PHP8 pour le projet de Gestion de Stock de Diatas Dev. Optimisations de performance et sécurité.",
    tags: ["PHP 8", "MySQL", "Refactoring"],
    image: "gradient-3",
    link: "#",
    featured: true,
  },
  {
    title: "GST Logistique",
    category: "Application Métier",
    description: "Site web moderne pour la logistique de l'entreprise GST, développé pour Diatas Dev en Python/Django.",
    tags: ["Python", "Django", "Logistique"],
    image: "gradient-4",
    link: "#",
    featured: false,
  },
  {
    title: "Apps Mobile Tulip",
    category: "Mobile Android",
    description: "Développement d'applications mobiles natives en Java Android et web en Django/PHP pour Tulip Industrie.",
    tags: ["Java Android", "Django", "PHP"],
    image: "gradient-5",
    link: "#",
    featured: false,
  },
  {
    title: "Gestion Caisse LoNaGui",
    category: "Outils Internes",
    description: "Fichier Excel avancé pour la gestion de la caisse à la Loterie Nationale de Guinée, automatisations et tableaux de bord.",
    tags: ["Excel", "VBA", "Automatisation"],
    image: "gradient-6",
    link: "#",
    featured: false,
  },
] as const;

export const interests = ["Coder", "IA", "Nouvelles Technologies", "Sport", "Esprit d'équipe", "Animés"] as const;

export const languages = [
  { name: "Soussou",  level: "Langue maternelle", percent: 100 },
  { name: "Français", level: "Courant",           percent: 90  },
  { name: "Anglais",  level: "Intermédiaire",     percent: 60  },
] as const;

export const navLinks = [
  { href: "#hero",        label: "Accueil"     },
  { href: "#about",       label: "À Propos"    },
  { href: "#skills",      label: "Compétences" },
  { href: "#services",    label: "Services"    },
  { href: "#projects",    label: "Projets"     },
  { href: "#experience",  label: "Expérience"  },
  { href: "#contact",     label: "Contact"     },
] as const;
