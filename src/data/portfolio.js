import {
  BadgeCheck,
  Brush,
  Code2,
  Database,
  Figma,
  Github,
  Globe2,
  Instagram,
  Layers3,
  Linkedin,
  Mail,
  Palette,
  PenTool,
  Phone,
  Smartphone,
  Sparkles,
  Facebook,
  Rocket,
  MessageSquare,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export const profile = {
  logo: "LOGO",
  logoMark: "/images/logo-mark.png",
  logoFull: "/images/logo-full.png",
  name: "DOMINIQUE BRIA",
  role: "Ing. Informatique, developpeur web/mobile fullstack",
  intro: "Hi I am",
  tagline:
    "Je cree des experiences digitales propres, modernes et faciles a utiliser.",
  photo: "/images/ma-photo-portfolio.jpg",
  aboutPhoto: "/images/ma-photo-portfolio-about.jpg",
  cvUrl: "/files/mon-cv.pdf",
  email: "d.bria00@gmail.com",
  phone: "+237 699707810",
  location: "Yaoundé, Cameroun",
};

export const navItems = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "About me", href: "#about" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Contact me", href: "#contact" },
];

export const socials = [
  { label: "GitHub", href: "https://github.com/Dominique-BRIA", icon: Github },
  { label: "WhatsApp", href: "https://wa.me/237699707810", icon: FaWhatsapp },
  { label: "Facebook", href: "https://facebook.com/d.bria00", icon: Facebook },
];

export const stats = [
  { value: "5+", label: "Experiences" },
  { value: "20+", label: "Project done" },
  { value: "80+", label: "Happy Clients" },
];

export const services = [
  {
    title: "Developpement Mobile (Kotlin/Java)",
    description:
      "Interfaces mobiles fluides, maquettes propres et parcours utilisateurs coherents.",
    icon: Smartphone,
  },
   {
    title: "Backend Spring Boot",
    description:
      "Construire des backend robustes et scalables avec Spring Boot pour des applications performantes.",
    icon: Rocket,
  },
  {
    title: "Website Design",
    description:
      "Sites vitrines et portfolios modernes avec une direction visuelle soignee.",
    icon: Brush,
  },
  {
    title: "Frontend React",
    description:
      "Integration responsive en React avec une structure claire et maintenable.",
    icon: Code2,
  },
  {
    title: "Branding",
    description:
      "Identite visuelle simple, reconnaissable et adaptee aux supports digitaux.",
    icon: Sparkles,
  },
  {
    title: "UI System",
    description:
      "Composants, couleurs et styles reutilisables pour garder un produit coherent.",
    icon: Layers3,
  },
  {
    title: "Product Audit",
    description:
      "Analyse UX, recommandations et priorisation des ameliorations importantes.",
    icon: BadgeCheck,
  },
  
];

export const about = {
  eyebrow: "Ingenieur Informatique, developpeur web/mobile fullstack",
  text:
    "Je suis Dominique Bria, un ingenieur informatique specialise dans le developpement web et mobile fullstack. Avec une passion pour la creation d'experiences digitales propres, modernes et faciles a utiliser, je m'efforce de transformer les idees en realite. Mon expertise s'etend du design d'interface utilisateur a la construction de backend robustes, en passant par la direction visuelle et l'audit de produits. Je suis toujours a la recherche de nouveaux defis pour continuer a evoluer et a creer des solutions innovantes.",
};

export const skills = [
  { name: "Figma", level: 100, icon: Figma },
  { name: "Spring Boot", level: 100, icon: Code2 },
  { name: "Python", level: 100, icon: Database },
  { name: "React", level: 85, icon: Code2 },
  { name: "Kotlin/Java", level: 60, icon: Code2 },
];

export const projectCategories = [
  "All",
  "Developpement Web",
  "Developpement Mobile",
  "Developpement Desktop",
];

export const projects = [
  {
    title: "Fast Doms",
    category: "Developpement Mobile",
    image: "/images/fast-doms.png",
  },
  {
    title: "Vision Plus",
    category: "Developpement Web",
    image: "/images/logo-vp.jpg",
  },
  {
    title: "My Portfolio",
    category: "Developpement Web",
    image: "/images/ma-photo-portfolio.jpg",
  },
  {
    title: "API Authentification",
    category: "Developpement Web",
    image: "/images/auth-api.png",
  },
  {
    title: "Ecclesia Vote",
    category: "Developpement Desktop",
    image: "/images/ecclesia-vote.png",
  },
];
