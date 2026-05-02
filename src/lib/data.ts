export const personal = {
  firstName: "Elhadj Alhassana",
  lastName: "CAMARA",
  fullName: "Elhadj Alhassana CAMARA",
  title: "Développeur Web & Mobile",
  tagline:
    "Développeur Web & Mobile passionné par la conception d'expériences numériques uniques. Mon objectif est de transformer vos visions en réalités digitales percutantes et intuitives, alliant performance technique, sécurité et accessibilité pour garantir une expérience utilisateur optimale sur tous les supports.",
  bio: "Perspicace, travailleur et volontaire, possédant une très bonne faculté de diligence et un sens de révérence développé. Passionné par la création d'applications web modernes, performantes et accessibles.",
  longBio:
    "Passionné par les technologies modernes et l'innovation, j'ai suivi ma formation académique à l'Université Mercure International de Conakry où j'ai obtenu ma Licence BAC+4 en MIAGE, possedant également un titre classé au niveau 5 dans la domaine d'activité 326t et au niveau cadre 5 union européen des certifications en tant que Développeur Full Stack à Africa Digitale Académie aussi un certificat de formation de l'Institut CORTEX en Gestion Administrative et Financière. Spécialisé dans la création de solutions numériques personnalisées et performantes.",
  email: "astronetgn@gmail.com",
  phone: "+224 624 62 94 77",
  location: "C/Sonfonia Centre, Conakry, Guinée",
  currentSite: "https://astronetgn.page.gd/",
  cvUrl: "/cv_elhadj_dev.pdf",
  avatarUrl: "/avatar.jpg",
  available: true,
} as const;

export const socials = [
  { name: "GitHub", url: "https://github.com/alhassaneplea04", icon: "github" },
  { name: "LinkedIn", url: "https://linkedin.com/in/alhassaneplea04", icon: "linkedin" },
  { name: "X", url: "https://x.com/alhassaneplea04", icon: "x" },
  { name: "Facebook", url: "https://facebook.com/alhassaneplea04", icon: "facebook" },
  { name: "Email", url: "mailto:astronetgn@gmail.com", icon: "mail" },
] as const;

export const stats = [
  { value: 6, suffix: "+", label: "Projets livrés" },
  { value: 4, suffix: " ans", label: "D'expérience" },
  { value: 15, suffix: "+", label: "Technologies" },
  { value: 3, suffix: "", label: "Langues parlées" },
] as const;

export const services = [
  {
    title: "Développement Web",
    description: "Création de sites web modernes, responsives et performants avec les dernières technologies.",
    icon: "code",
    color: "primary",
    features: ["Python - Django", "Angular", "PHP / MySQL", "API REST", "React JS / NextJS"],
  },
  {
    title: "Développement Mobile",
    description: "Applications mobiles natives Android et hybrides avec Ionic / TypeScript.",
    icon: "smartphone",
    color: "accent",
    features: ["Android", "iOS", "Ionic", "TypeScript", "Cross-platform"],
  },
  {
    title: "Maintenance Informatique",
    description: "Support technique, configuration système et optimisation des performances.",
    icon: "settings",
    color: "primary-glow",
    features: ["Configuration", "Réglages", "Installation", "Optimisation", "Assistance"],
  },
  {
    title: "Design & Infographie",
    description: "Création de visuels attractifs et interfaces utilisateur intuitives.",
    icon: "palette",
    color: "accent-glow",
    features: ["UI/UX Design", "Photoshop", "Illustrator", "Branding", "Création de logo"],
  },
] as const;

export type SkillCategory = "Frontend" | "Backend" | "Mobile" | "Design" | "Outils" | "IA";

export const skills: { name: string; icon: string; color: string; category: SkillCategory; level: number }[] = [
  { name: "HTML5", icon: "html5", color: "#E34F26", category: "Frontend", level: 95 },
  { name: "CSS", icon: "css3", color: "#1572B6", category: "Frontend", level: 92 },
  { name: "JavaScript", icon: "javascript", color: "#F7DF1E", category: "Frontend", level: 70 },
  { name: "TypeScript", icon: "typescript", color: "#3178C6", category: "Frontend", level: 70 },
  { name: "Bootstrap", icon: "bootstrap", color: "#7952B3", category: "Frontend", level: 95 },
  { name: "Angular", icon: "angular", color: "#DD0031", category: "Frontend", level: 75 },
  { name: "React", icon: "react", color: "#61DAFB", category: "Frontend", level: 65 },
  { name: "Next.js", icon: "next", color: "#000000", category: "Frontend", level: 60 },
  { name: "Tailwind CSS", icon: "tailwind", color: "#38B2AC", category: "Frontend", level: 70 },

  { name: "PHP", icon: "php", color: "#777BB4", category: "Backend", level: 90 },
  { name: "Python", icon: "python", color: "#3776AB", category: "Backend", level: 90 },
  { name: "Django", icon: "django", color: "#092E20", category: "Backend", level: 85 },
  { name: "MySQL", icon: "mysql", color: "#4479A1", category: "Backend", level: 88 },
  { name: "MongoDB", icon: "mongodb", color: "#47A248", category: "Backend", level: 60 },
  {name: "FastAPI", icon: "fastapi", color: "#009688", category: "Backend", level: 50},
  { name: "Node.js", icon: "nodejs", color: "#47A248", category: "Backend", level: 50 },

  { name: "Ionic", icon: "ionic", color: "#3880FF", category: "Mobile", level: 75 },
  { name: "Java", icon: "java", color: "#007396", category: "Mobile", level: 60 },
  { name: "Android", icon: "android", color: "#3880FF", category: "Mobile", level: 50 },

  { name: "Photoshop", icon: "photoshop", color: "#31A8FF", category: "Design", level: 80 },
  { name: "Illustrator", icon: "illustrator", color: "#FF9A00", category: "Design", level: 60 },
  { name: "Figma", icon: "figma", color: "#31A8FF", category: "Design", level: 60 },
  { name: "Canva", icon: "canva", color: "#31A8FF", category: "Design", level: 80 },
  
  { name: "Git", icon: "git", color: "#F05032", category: "Outils", level: 85 },
  { name: "VS Code", icon: "vscode", color: "#007ACC", category: "Outils", level: 95 },
  { name: "GitHub", icon: "github", color: "#181717", category: "Outils", level: 90 },
  { name: "Android Studio", icon: "androidstudio", color: "#3DDC84", category: "Outils", level: 70 },
  { name: "Codex", icon: "codex", color: "#10A37F", category: "Outils", level: 80 },
  { name: "Antigravity", icon: "antigravity", color: "#9B59B6", category: "Outils", level: 75 },
  { name: "PyCharm", icon: "pycharm", color: "#21D789", category: "Outils", level: 75 },
  { name: "Docker", icon: "docker", color: "#2496ED", category: "Outils", level: 60 },
  { name: "FileZilla", icon: "filezilla", color: "#BF0000", category: "Outils", level: 80 },
  { name: "MS Office", icon: "msoffice", color: "#D83B01", category: "Outils", level: 90 },

  { name: "Claude", icon: "claude", color: "#D97757", category: "IA", level: 100 },
  { name: "GitHub Copilot", icon: "githubcopilot", color: "#181717", category: "IA", level: 100 },
  { name: "ChatGPT", icon: "chatgpt", color: "#10A37F", category: "IA", level: 100 },
  { name: "Google Opal", icon: "googleopal", color: "#4285F4", category: "IA", level: 25 },
];

export const experiences = [
  {
    role: "Développeur Web & Mobile",
    company: "Sanoutech",
    location: "Lambangnie",
    period: "Depuis novembre 2025",
    current: true,
    description:
      "Analyse et conception des services de site internet de Sanoutech (prévention et soins médicaux) et SMIT (maladies infectieuses et tropicales). Mise en place d'une application de prise de rendez-vous médical.",
    tags: ["Python - Django", "MySQL", "Bootstrap"],
    link: "https://www.sanoutech.net/",
    link2: "https://www.infectiologie-gn.com/",
  },
  {
    role: "Stagiaire Informaticien & Caissier",
    company: "Loterie Nationale de Guinée",
    location: "Agence T7",
    period: "Depuis février 2024",
    current: true,
    description:
      "Réalisation des tâches de caisse, billetages, rangements et rôle d'informaticien. Saisie des montants, évaluations, bilans et services d'assistance en ligne.",
    tags: ["Excel", "Maintenance", "Support"],
  },
  {
    role: "Stagiaire Informatique",
    company: "Tulip Industrie",
    location: "Sonfonia",
    period: "Mai - août 2022",
    current: false,
    description:
      "Analyse et développement web en Django, PHP et mobile en Java Android à travers différents projets de l'entreprise.",
    tags: ["Django", "PHP", "Java Android"],
  },
  {
    role: "Analyste Développeur Web & Mobile",
    company: "Africa Digitale Académie",
    location: "Conakry",
    period: "Décembre 2021 - mai 2022",
    current: false,
    description: "Mise en place d'une plateforme de gestion de points de lecture dans la commune de Ratoma.",
    tags: ["Web", "Mobile", "Gestion"],
    link: "https://www.pointdelecture.org",
  },
  {
    role: "Stagiaire Formateur",
    company: "Cabinet de Formation CAMACI",
    location: "Cyber Tassana",
    period: "Septembre 2021 - 2023",
    current: false,
    description:
      "Enseignement des cours d'informatique de base (suite Microsoft Office) et gestion des services informatiques.",
    tags: ["Formation", "MS Office", "Pédagogie"],
  },
] as const;

export const educations = [
  {
    degree: "MIAGE (Méthodes Informatiques Appliquées à la Gestion)",
    school: "Université Mercure International",
    facebookUrl: "https://www.facebook.com/univmercure/",
    websiteUrl: "https://umi-gn.com/",
    level: "Licence BAC+4",
    period: "2015 - 2020",
    description: "Formation académique en informatique et gestion.",
  },
  {
    degree: "Développeur Web & Mobile",
    school: "Africa Digitale Académie",
    facebookUrl: "https://www.facebook.com/africadigitaleacademie/",
    websiteUrl: "https://africa-digitale-academie.com/",
    level: "Licence RNCP 5",
    period: "2022",
    description: "Formation Full Stack en développement web et mobile.",
  },
  {
    degree: "Gestion Administrative et Financière",
    school: "Institut CORTEX | Yattaya",
    facebookUrl: "https://www.facebook.com/p/Institut-Cortex-100070551382333/",
    websiteUrl: "https://www.institut-cortex.com/",
    level: "Formation continue",
    period: "Nov. 2025 - fév. 2026",
    description: "Gestion de projets, RH, comptabilité, logistique et rédaction administrative.",
  },
] as const;

export const projects = [
  {
    title: "Plateforme Sanoutech & SMIT",
    category: "Web médical",
    description:
      "Plateforme de gestion des soins médicaux de prévention et de suivi pour Sanoutech, et SMIT pour les maladies infectieuses tropicales. Application de prise de rendez-vous médical en cours.",
    tags: ["Django", "PHP", "MySQL", "Bootstrap"],
    image: "gradient-1",
    link: "https://www.infectiologie-gn.com",
    featured: true,
  },
  {
    title: "Points de Lecture Ratoma",
    category: "Plateforme web",
    description:
      "Plateforme de gestion de points de lecture dans la commune de Ratoma, déployée pour Africa Digitale Académie.",
    tags: ["Web", "Gestion", "Database"],
    image: "gradient-2",
    link: "#",
    featured: true,
  },
  {
    title: "STOCK MANAGER",
    category: "Migration & refonte",
    description:
      "Réécriture complète du code PHP 7 vers PHP 8 pour le projet de gestion de stock de Diatas Dev. Optimisations de performance et sécurité.",
    tags: ["PHP 8", "MySQL", "Refactoring"],
    image: "gradient-3",
    link: "#",
    featured: true,
  },
  {
    title: "GST Logistique",
    category: "Application métier",
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
    category: "Outils internes",
    description:
      "Fichier Excel avancé pour la gestion de la caisse à la Loterie Nationale de Guinée, automatisations et tableaux de bord.",
    tags: ["Excel", "VBA", "Automatisation"],
    image: "gradient-6",
    link: "#",
    featured: false,
  },
] as const;

export const interests = ["Coder", "IA", "Nouvelles technologies", "Sport", "Esprit d'équipe", "Animés"] as const;

export const languages = [
  { name: "Soussou", level: "Langue maternelle", percent: 100 },
  { name: "Français", level: "Courant", percent: 95 },
  { name: "Anglais", level: "Intermédiaire", percent: 50 },
] as const;

export const navLinks = [
  { href: "#hero", label: "Accueil" },
  { href: "#about", label: "À propos" },
  { href: "#experience", label: "Expérience" },
  { href: "#skills", label: "Compétences" },
  { href: "#services", label: "Services" },
  { href: "#projects", label: "Projets" },
  { href: "#contact", label: "Contact" },
] as const;
