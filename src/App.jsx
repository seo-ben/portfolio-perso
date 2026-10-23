import React, { useState } from 'react';
import {
  MessageCircle,
  ArrowUpRight,
  ArrowRight,
  Shield,
  Smartphone,
  Server,
  CheckCircle2,
  Phone,
  Mail,
  MapPin,
  Menu,
  X,
  Layers,
  ChevronRight,
  ChevronDown,
  Plane,
  Briefcase,
  TrendingUp,
  CreditCard,
  GraduationCap,
  Utensils,
  Building2,
  Cpu,
  Workflow,
  Sparkles,
  Code2,
  ShieldCheck,
  Terminal,
  Wifi,
  Check,
  Zap,
  Printer,
  Clock,
  Lock,
  Monitor,
  Activity
} from 'lucide-react';
import './App.css';
import SkillsCardsSection from './SkillsCardsSection';

// Custom clean SVG Icons for Socials
const GithubIcon = ({ size = 20, className = '' }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon = ({ size = 20, className = '' }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const FacebookIcon = ({ size = 20, className = '' }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const TiktokIcon = ({ size = 20, className = '' }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
  </svg>
);

// Filter Tabs definition matching the exact mockup
const filterOptions = [
  { id: 'tous', label: 'Tous les projets' },
  { id: 'gestion', label: 'Gestion' },
  { id: 'finance', label: 'Finance' },
  { id: 'web-mobile', label: 'Web & Mobile' },
  { id: 'paiement', label: 'Paiement' },
  { id: 'education', label: 'Éducation' }
];

// Helper to render project icons matching mockup
const renderProjectIcon = (iconName) => {
  switch (iconName) {
    case 'briefcase':
      return <Briefcase size={22} />;
    case 'credit-card':
      return <CreditCard size={22} />;
    case 'trending-up':
      return <TrendingUp size={22} />;
    case 'smartphone':
      return <Smartphone size={22} />;
    case 'graduation-cap':
      return <GraduationCap size={22} />;
    case 'utensils':
      return <Utensils size={22} />;
    case 'building':
      return <Building2 size={22} />;
    default:
      return <Briefcase size={22} />;
  }
};

// Projets data (Section 2 - Exact Mockup Reproduction)
const caseStudiesData = [
  {
    id: 'samre',
    num: '01',
    icon: 'briefcase',
    title: 'SAMRE – Stages, Emplois & Événements au Togo',
    summary: 'Plateforme complète de mise en relation entre candidats, entreprises et organisateurs d’événements.',
    technologies: ['Laravel', 'React', 'MySQL', 'AWS', 'API REST'],
    image: '/images/bernard-consulting.jpg',
    flip: false,
    filterTags: ['gestion', 'web-mobile'],
    details: {
      client: 'Plateforme SAMRE Togo',
      role: 'Chef d’Équipe Technique & Lead Technique',
      context: 'SAMRE est née pour connecter directement les jeunes talents, diplômés et professionnels aux opportunités d’emploi, de stage et aux grands événements professionnels au Togo et à l’international. Direction technique et pilotage complet du projet logiciel.',
      challenge: 'Gérer de gros volumes de candidatures, classifier intelligemment les offres et événements, coordonner les développements et assurer des notifications temps réel pour les utilisateurs.',
      solution: 'Pilotage et direction de projet logiciel, conception d’un portail web ultra-rapide avec tableau de bord recruteur, recherche géolocalisée et filtrage avancé des opportunités professionnelles.',
      impact: 'Rapprochement direct entre candidats et recruteurs, accélération du placement des stagiaires et ouverture d’opportunités hors frontières.'
    }
  },
  {
    id: 'flypoints',
    num: '02',
    icon: 'credit-card',
    title: 'FlyPoints – Paiement de Billets d’Avion Sans Stress',
    summary: 'Solution de réservation et de paiement de billets d’avion sécurisée et intuitive.',
    technologies: ['Laravel', 'Vue.js', 'Paiement', 'API GDS', 'Cloud'],
    image: '/images/bernard-coding.jpg',
    flip: true,
    filterTags: ['finance', 'paiement', 'web-mobile'],
    details: {
      client: 'Plateforme FlyPoints Travel & Fintech',
      role: 'Lead Architecte & Développeur Backend',
      context: 'L’achat de billets d’avion est souvent source de stress financier et logistique. FlyPoints réinvente cette expérience en proposant des facilités et un paiement sécurisé sans stress.',
      challenge: 'Garantir une sécurité bancaire sans compromis, la gestion rigoureuse des réservations et la réconciliation immédiate des paiements.',
      solution: 'Architecture backend transactionnelle Laravel sécurisée, intégration multi-passerelles (cartes, mobile money) et interface utilisateur fluide en React/Vue.',
      impact: 'Démocratisation de l’accès aux vols aériens et réduction du stress lié au règlement des billets d’avion.'
    }
  },
  {
    id: 'zoo',
    num: '03',
    icon: 'trending-up',
    title: 'ZOO – Financement de Projets & Croissance Entrepreneuriale',
    summary: 'Application collaborative pour connecter les porteurs de projets et les investisseurs.',
    technologies: ['Laravel', 'Flutter', 'React', 'Node.js', 'MongoDB'],
    image: '/images/bernard-architecture.jpg',
    flip: false,
    filterTags: ['finance', 'gestion', 'web-mobile'],
    details: {
      client: 'Plateforme d’Investissement ZOO',
      role: 'Tech Lead & Concepteur Logiciel',
      context: 'ZOO est une plateforme conçue pour donner aux créateurs, entrepreneurs et innovateurs les moyens d’accéder à du financement direct pour leurs projets.',
      challenge: 'Assurer la transparence totale des campagnes de financement, la modélisation des paliers d’investissement et le suivi des contributions.',
      solution: 'Modélisation rigoureuse des transactions financières, dashboards d’analyse pour investisseurs et porteurs de projets, et application mobile réactive.',
      impact: 'Création d’un pont direct entre capitaux et projets prometteurs, stimulant l’écosystème entrepreneurial.'
    }
  },
  {
    id: 'microfinance',
    num: '04',
    icon: 'smartphone',
    title: 'Microfinance & Tontines – Suite Caisse, Terrain & Administration',
    summary: 'Écosystème financier complet : Portail Web d’Administration, Application Mobile de Caisse sous Flutter et Application Mobile de Terrain pour les agents de collecte de tontines sous React Native.',
    technologies: ['Laravel', 'Flutter (Caisse)', 'React Native (Terrain)', 'MySQL', 'Offline-First'],
    image: '/images/bernard-executive.jpg',
    flip: true,
    filterTags: ['finance', 'gestion', 'web-mobile', 'paiement'],
    details: {
      client: 'Structure de Microfinance & Finance Inclusive',
      role: 'Architecte Logiciel & Développeur Full-Stack (Web, Flutter & React Native)',
      context: 'Digitalisation de bout en bout de l’institution financière : du back-office central jusqu’aux guichets de caisse et aux agents de collecte d’épargne journalière (tontine) sur les marchés et quartiers.',
      challenge: 'Interconnecter 3 applications distinctes avec synchronisation fluide : une gestion administrative et comptable centralisée, une application de caisse rapide et fiable au guichet sous Flutter, et une application mobile pour agents de terrain sous React Native capable de fonctionner 100% hors-ligne en cas de coupure réseau.',
      solution: 'Conception d’un écosystème tri-partite : (1) Portail Web d’Administration sous Laravel/MySQL pour le paramétrage des taux, la validation des crédits et les bilans financiers ; (2) Application mobile de Caisse sous Flutter pour les encaissements, décaissements et clôtures journalières au guichet ; (3) Application mobile dédiée aux agents de collecte sous React Native avec stockage local chiffré SQLite (offline-first), géolocalisation et réconciliation automatique dès reconnexion réseau.',
      impact: 'Zéro divergence de caisse, traçabilité instantanée des collectes journalières de tontines, gain de temps considérable pour les caissiers et confiance totale des adhérents.'
    }
  },
  {
    id: 'volonteuniversity',
    num: '05',
    icon: 'graduation-cap',
    title: 'VOLONTEUNIVERSITY – Gestion de Cours en Ligne',
    summary: 'Plateforme e-learning avec gestion des cours, leçons, quiz et certificats.',
    technologies: ['PHP', 'MySQL', 'JavaScript', 'HTML5/CSS3'],
    image: '/images/bernard-thesis.jpg',
    flip: false,
    filterTags: ['education', 'gestion', 'web-mobile'],
    details: {
      client: 'Institut Technologique Volonté University (Lomé)',
      role: 'Auteur du Mémoire & Concepteur Développeur',
      context: 'Projet de fin d’études de Licence en Informatique et Sécurité Informatique à l’Université FORMATEC.',
      challenge: 'Structurer un portail d’enseignement en ligne robuste, facile d’accès et optimisé pour le contexte togolais.',
      solution: 'Espaces sécurisés pour étudiants, enseignants et administrateurs, gestion des devoirs, examens et notes.',
      impact: 'Soutenance de licence validée avec succès et modernisation de la gestion pédagogique.'
    }
  },
  {
    id: 'cigusta-lome',
    num: '06',
    icon: 'utensils',
    title: 'CIGUSTA Lomé Togo – Logiciel de Gestion de Restaurant & Caisse POS',
    summary: 'Logiciel de gestion complet pour les restaurants : commandes, ventes, stocks, caisse et rapports.',
    technologies: ['Laravel', 'Bootstrap', 'Point de vente (POS)', 'Impression Thermique'],
    image: '/images/bernard-lifestyle.jpg',
    flip: true,
    filterTags: ['gestion', 'paiement'],
    details: {
      client: 'CIGUSTA Lomé Togo (Restaurant & Glacier)',
      role: 'Co-concepteur & Développeur Logiciel (avec TIGHANEKOUBE Richard)',
      context: 'CIGUSTA est une référence incontournable de la gastronomie et de la restauration à Lomé. L’établissement nécessitait un logiciel sur mesure puissant pour gérer l’affluence en salle, la synchronisation des commandes et les encaissements sans dépendre d’Internet.',
      challenge: 'Garantir une transmission instantanée des commandes en cuisine/bar aux heures de pointe, éliminer les erreurs de commande et fiabiliser la caisse journalière.',
      solution: 'Architecture en réseau local (LAN) avec terminaux tactiles serveurs, communication directe vers les imprimantes thermiques de tickets et module de caisse centralisé sous Laravel/MySQL.',
      impact: 'Service en salle ultra-fluide, zéro arrêt de travail en cas de coupure Internet et traçabilité financière irréprochable des ventes.'
    }
  },
  {
    id: 'btp-chantiers',
    num: '07',
    icon: 'building',
    title: 'BTP & Construction – Suivi de Chantiers, Matériel & Équipes',
    summary: 'Solution de gestion de projets de chantier BTP avec suivi des tâches, matériel, planning et rapports.',
    technologies: ['Laravel', 'Project Mgmt', 'Rapports PDF/Excel', 'Notifications'],
    image: '/images/bernard-mobile-fintech.jpg',
    flip: false,
    filterTags: ['gestion'],
    details: {
      client: 'Entreprises BTP & Travaux Publics',
      role: 'Architecte Logiciel & Développeur Full-Stack',
      context: 'Coordination complexe des chantiers de construction, gestion des approvisionnements en matériaux et suivi des ouvriers et sous-traitants.',
      challenge: 'Remplacer les fiches papier par un outil numérique réactif accessible sur smartphone et ordinateur par les chefs de chantier.',
      solution: 'Portail de supervision centralisé avec saisie simplifiée des consommations de matériaux, feuilles de présence et alertes de stock critique.',
      impact: 'Réduction des pertes de matériaux, meilleure maîtrise des budgets de chantier et visibilité temps réel pour les directeurs de travaux.'
    }
  }
];


// Services & Domaines d'intervention (Section 4)
const servicesData = [
  {
    id: 'web',
    title: 'Applications Web & SaaS',
    desc: 'Plateformes métiers, portails et API sur mesure.',
    stack: 'Laravel · Django · React'
  },
  {
    id: 'mobile',
    title: 'Mobile & Caisses POS',
    desc: 'Apps Android / iOS et caisses tactiles hors-ligne.',
    stack: 'Flutter · React Native'
  },
  {
    id: 'fintech',
    title: 'FinTech & Paiements',
    desc: 'Intégration Mobile Money, cartes et microfinance.',
    stack: 'MoMo · Flooz · Visa'
  },
  {
    id: 'security',
    title: 'Cybersécurité & Audit',
    desc: 'Audit de code, failles OWASP, protection des données.',
    stack: 'OWASP · SSL/TLS'
  },
  {
    id: 'cloud',
    title: 'Serveurs & Déploiement',
    desc: 'VPS Linux, Nginx, SSL et sauvegardes automatiques.',
    stack: 'Ubuntu · Nginx · CI/CD'
  },
  {
    id: 'lan',
    title: 'Réseaux LAN',
    desc: 'Réseau local caisses et imprimantes, sans coupure.',
    stack: 'Switch · IP fixe · ESC/POS'
  }
];

// Expérience et parcours (Section 5)
const experiencesData = [
  {
    period: '2022 — Aujourd’hui',
    company: 'Ingénieur Logiciel & Concepteur de Solutions',
    location: 'Lomé, Togo',
    role: '+12 Solutions Conçues & Déployées (Multi-Secteurs)',
    tags: ['Laravel', 'Python Django', 'React', 'Flutter', 'PostgreSQL', 'VPS Linux'],
    tasks: [
      'Direction technique et déploiement de +12 solutions : Écoles, BTP, Restauration (CIGUSTA), Universités, RH & Emploi (SAMRE), Billets d’avion (FlyPoints), Investissement (ZOO) et Microfinance.',
      'Conception d’architectures backend modulaires et administration de serveurs VPS haute disponibilité.'
    ]
  },
  {
    period: '2024 — 2025',
    company: 'CIGUSTA Lomé Togo (Restaurant & Glacier)',
    location: 'Lomé, Togo',
    role: 'Co-concepteur Logiciel de Restauration & Caisse POS (avec TIGHANEKOUBE Richard)',
    tags: ['Flutter POS', 'Réseau LAN Dédié', 'ESC/POS Thermique', 'SQLite Local'],
    tasks: [
      'Conception et développement du logiciel complet : caisse tactile, prises de commandes serveurs, gestion des tables et stocks.',
      'Architecture réseau local (LAN) autonome garantissant l’impression en cuisine/bar sans coupure Internet.'
    ]
  },
  {
    period: '2025 — Janvier 2026',
    company: 'SAMRE Togo & ACMEDIA',
    location: 'Lomé, Togo (Agoè-Zongo)',
    role: 'Chef d’Équipe Technique & Lead Technique',
    tags: ['Chef d’Équipe', 'Lead Technique', 'Pilotage Projets', 'Laravel', 'React', 'Mobile App'],
    tasks: [
      'Pilotage et direction de projets logiciels : encadrement de l’équipe technique, planification des livraisons et arbitrages d’architecture.',
      'Conception, développement et déploiement de la plateforme SAMRE (stages, emplois et événements au Togo et à l’international) et pilotage des solutions de l’agence ACMEDIA.'
    ]
  },
  {
    period: '2025 — Janvier 2026',
    company: 'Institut VOLONTE',
    location: 'Lomé, Togo (Adétikopé)',
    role: 'Informaticien & Responsable Systèmes',
    tags: ['Infrastructure Réseau', 'Maintenance Systèmes', 'Numérisation Académique'],
    tasks: [
      'Gestion et maintenance de l’infrastructure informatique et du réseau local de l’établissement.',
      'Numérisation et automatisation des relevés, cartes d’étudiants et dossiers académiques.'
    ]
  },
  {
    period: 'Août 2026',
    company: 'Université FORMATEC',
    location: 'Lomé, Togo',
    role: 'Licence en Informatique et Sécurité Informatique',
    tags: ['Diplôme FORMATEC', 'Sécurité Informatique', 'Cryptographie', 'Mémoire Soutenu'],
    tasks: [
      'Soutenance du mémoire de licence professionnelle : « Conception d’une application de gestion de cours en ligne : cas de VOLONTEUNIVERSITY ».',
      'Spécialisation poussée en sécurité informatique, cryptographie et développement logiciel sécurisé.'
    ]
  },
  {
    period: '2020 — 2021',
    company: 'Lycée de Badou',
    location: 'Plateaux, Togo',
    role: 'Baccalauréat Scientifique (Mention Assez Bien)',
    tags: ['Série C / Scientifique', 'Listes Officielles de l’État', 'Mention Assez Bien'],
    tasks: [
      'Obtention du Baccalauréat Scientifique avec mention Assez Bien (listes officielles de l’État togolais).'
    ]
  }
];

// Méthode de travail (Section 6)
const workflowSteps = [
  {
    step: '01',
    title: 'Cadrage',
    desc: 'Analyse du besoin métier et des contraintes réelles.',
    deliverable: 'Cahier des charges'
  },
  {
    step: '02',
    title: 'Architecture',
    desc: 'Modélisation des données, choix de la stack, sécurité OWASP intégrée.',
    deliverable: 'Schéma BDD & flux'
  },
  {
    step: '03',
    title: 'Développement',
    desc: 'Sprints courts avec démo à chaque fin de cycle.',
    deliverable: 'Versions testables'
  },
  {
    step: '04',
    title: 'Mise en production',
    desc: 'Tests, déploiement VPS Linux / Nginx / SSL, puis suivi.',
    deliverable: 'Documentation & support'
  }
];


export default function App() {
  const [activeFilter, setActiveFilter] = useState('tous');
  const [selectedCase, setSelectedCase] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);

  const filteredCases = activeFilter === 'tous'
    ? caseStudiesData
    : caseStudiesData.filter(item => item.filterTags && item.filterTags.includes(activeFilter));

  const getWhatsAppUrl = (msg = "Bonjour Bernard, j'aimerais échanger sur un projet...") => {
    const phone = '22896281671';
    return `https://wa.me/${phone}?text=${encodeURIComponent(msg)}`;
  };

  return (
    <div className="portfolio-app">
      {/* ===================================================================
          NAVBAR CHIC
          =================================================================== */}
      <header className="navbar">
        <div className="container nav-container">
          <a href="#accueil" className="nav-brand" id="nav-brand-logo">
            <img
              src="/images/skb-symbol.jpg"
              alt="Logo SKB - Sewoda Komla Bernard"
              className="nav-avatar"
            />
            <div className="nav-brand-text">
              <span className="nav-brand-name">Sewoda K. Bernard</span>
              <span className="nav-brand-title">Full-Stack & Mobile Lead</span>
            </div>
          </a>

          <nav>
            <ul className={`nav-links ${mobileMenuOpen ? 'mobile-open' : ''}`}>
              <li>
                <a href="#accueil" className="nav-link" onClick={() => setMobileMenuOpen(false)}>
                  Accueil
                </a>
              </li>

              <li>
                <a href="#competences" className="nav-link" onClick={() => setMobileMenuOpen(false)}>
                  Compétences
                </a>
              </li>

              <li
                className="nav-dropdown-item"
                onMouseEnter={() => setServicesDropdownOpen(true)}
                onMouseLeave={() => setServicesDropdownOpen(false)}
              >
                <a
                  href="#services"
                  className="nav-link nav-dropdown-btn"
                  onClick={(e) => {
                    // on mobile, toggle dropdown
                    if (window.innerWidth <= 768) {
                      e.preventDefault();
                      setServicesDropdownOpen(!servicesDropdownOpen);
                    }
                  }}
                >
                  <span>Services</span>
                  <ChevronDown size={14} className={`dropdown-chevron ${servicesDropdownOpen ? 'open' : ''}`} />
                </a>

                {servicesDropdownOpen && (
                  <div className="nav-dropdown-menu">
                    <a
                      href="#services"
                      className="dropdown-link"
                      onClick={() => { setServicesDropdownOpen(false); setMobileMenuOpen(false); }}
                    >
                      <span className="dropdown-link-title">Services & Offres</span>
                      <span className="dropdown-link-sub">Développement Web, Mobile & Cloud</span>
                    </a>
                    <a
                      href="#projets"
                      className="dropdown-link"
                      onClick={() => { setServicesDropdownOpen(false); setMobileMenuOpen(false); }}
                    >
                      <span className="dropdown-link-title">Projets Phares</span>
                      <span className="dropdown-link-sub">SAMRE, FlyPoints, ZOO, CIGUSTA (+12 solutions)</span>
                    </a>
                    <a
                      href="#parcours"
                      className="dropdown-link"
                      onClick={() => { setServicesDropdownOpen(false); setMobileMenuOpen(false); }}
                    >
                      <span className="dropdown-link-title">Expérience & Parcours</span>
                      <span className="dropdown-link-sub">+12 Solutions, CIGUSTA, FORMATEC, SAMRE</span>
                    </a>
                    <a
                      href="#methode"
                      className="dropdown-link"
                      onClick={() => { setServicesDropdownOpen(false); setMobileMenuOpen(false); }}
                    >
                      <span className="dropdown-link-title">Méthode de travail</span>
                      <span className="dropdown-link-sub">Processus de conception en 4 étapes</span>
                    </a>
                  </div>
                )}
              </li>

              <li>
                <a href="#contact" className="nav-link" onClick={() => setMobileMenuOpen(false)}>
                  Contact
                </a>
              </li>
            </ul>
          </nav>

          <div className="nav-actions">
            <a
              href={getWhatsAppUrl("Bonjour Bernard, je souhaite discuter d'un projet web/mobile.")}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
              id="nav-btn-call"
            >
              <MessageCircle size={18} />
              <span>Discuter d’un projet</span>
            </a>

            <button
              className="mobile-menu-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
              id="mobile-menu-toggle"
            >
              {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>
      </header>

      {/* ===================================================================
          1. HERO (ACCUEIL)
          =================================================================== */}
      <main>
        <section id="accueil" className="hero-section">
          <div className="container">
            <div className="hero-grid">

              {/* Left Column */}
              <div className="hero-content">
                <h1 className="hero-title">
                  Lead Technique, <span className="highlight">Chef de Projet & Ingénieur Logiciel</span>
                </h1>

                <p className="hero-description">
                  Bonjour ! Je suis <strong>Sewoda Komla Bernard</strong>, également connu sous le pseudonyme <strong>SKB</strong>.{' '}
                  <strong>Chef d'équipe technique & Lead Technique</strong> (notamment sur la plateforme <strong>SAMRE</strong>), spécialisé dans le <strong>pilotage et la direction de projets logiciels</strong>.
                  Diplômé en <strong>Informatique et Sécurité Informatique</strong> à l'<strong>Université FORMATEC</strong>,
                  j'ai conçu et résolu plus de <strong>12 solutions logicielles complètes</strong> dans divers domaines :
                  restauration (concepteur du logiciel de gestion de restaurant pour <strong>CIGUSTA Lomé Togo</strong> avec <strong>TIGHANEKOUBE Richard</strong>),
                  plateformes RH & emploi (<strong>SAMRE</strong> au Togo et à l'international),
                  billetterie aérienne (<strong>FlyPoints</strong> pour régler ses billets d’avion sans stress),
                  financement de projets & investissement (<strong>ZOO</strong>),
                  écoles et universités (<strong>VOLONTEUNIVERSITY</strong>), BTP & chantiers, et microfinance (suite complète : portail web d'administration, application mobile de caisse sous <strong>Flutter</strong> et application mobile terrain de collecte des tontines sous <strong>React Native</strong>).
                  Spécialiste <strong>Laravel, Python, Django, React, TypeScript et Flutter</strong>, j’accompagne les organisations
                  de l'idée à la production.
                </p>

                <div className="hero-actions">
                  <a
                    href={getWhatsAppUrl("Bonjour Bernard, j'aimerais vous contacter concernant une opportunité de développement logiciel.")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary"
                    id="hero-cta-whatsapp"
                  >
                    <MessageCircle size={18} />
                    <span>Discuter sur WhatsApp</span>
                  </a>

                  <a href="#projets" className="btn-secondary" id="hero-cta-cases">
                    <span>Explorer mes réalisations</span>
                    <ArrowUpRight size={18} />
                  </a>
                </div>
              </div>

              {/* Right Column: Bernard's Cutout Image without background, enlarged */}
              <div className="hero-image-wrapper">
                <div className="hero-cutout-container">
                  <img
                    src="/images/bernard-hero-cutout.png"
                    onError={(e) => { e.target.src = '/images/bernard-hero-mizko.jpg'; }}
                    alt="Sewoda Komla Bernard - Développeur Full-Stack et Lead Technique à Lomé"
                    className="hero-cutout-img"
                    fetchPriority="high"
                    loading="eager"
                  />
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ===================================================================
            2. PROJETS MAJEURS & RÉALISATIONS (REPRODUCTION FIDÈLE DE LA MAQUETTE)
            =================================================================== */}
        <section id="projets" className="projects-showcase-section">
          <div className="container">

            {/* Header: Left Text + Filters, Right Organic Graphic */}
            <div className="projects-top-header">
              <div className="projects-header-left">
                <h2 className="projects-main-title">Projets majeurs & Réalisations concrètes</h2>
                <p className="projects-main-subtitle">
                  Plus de 12 solutions logicielles conçues et déployées avec succès. Découvrez comment mes compétences techniques et ma vision stratégique créent de la valeur et transforment des idées en réalités impactantes.
                </p>

                {/* Filter Pills matching Mockup */}
                <div className="projects-filter-pills">
                  {filterOptions.map((f) => (
                    <button
                      key={f.id}
                      className={`project-pill-btn ${activeFilter === f.id ? 'active' : ''}`}
                      onClick={() => setActiveFilter(f.id)}
                    >
                      {f.label}
                    </button>
                  ))}
                </div>
              </div>

              <div className="projects-header-right">
                <div className="projects-hero-graphic">
                  <img
                    src="/images/bernard-consulting.jpg"
                    alt="Bernard Sewoda - Concepteur Logiciel & Stratégie"
                    className="projects-hero-graphic-img"
                  />
                </div>
              </div>
            </div>

            {/* Alternating Zig-Zag Timeline with Serpentine Winding Line */}
            <div className="projects-timeline-container">
              <div className="projects-timeline-list">
                {filteredCases.map((item, idx) => {
                  const nextItem = filteredCases[idx + 1];
                  const isLeft = !item.flip;
                  const nextIsLeft = nextItem ? !nextItem.flip : false;

                  return (
                    <React.Fragment key={item.id}>
                      <div
                        className={`timeline-row ${item.flip ? 'row-flipped' : 'row-normal'}`}
                      >
                        {/* Left Column */}
                        <div className="timeline-col timeline-col-left">
                          {!item.flip ? (
                            <div className="timeline-card-content">
                              <h3 className="timeline-card-title">{item.title}</h3>
                              <p className="timeline-card-desc">{item.summary}</p>
                              <div className="timeline-card-tags">
                                {item.technologies.map((tech, i) => (
                                  <span key={i} className="timeline-tag-pill">{tech}</span>
                                ))}
                              </div>
                              <button
                                className="timeline-action-link"
                                onClick={() => setSelectedCase(item)}
                              >
                                <span>Voir les détails du projet</span>
                                <ArrowRight size={16} />
                              </button>
                            </div>
                          ) : (
                            <div className="timeline-card-media" onClick={() => setSelectedCase(item)}>
                              <img
                                src={item.image}
                                alt={item.title}
                                className="timeline-media-img"
                                loading="lazy"
                              />
                            </div>
                          )}
                        </div>

                        {/* Center Column: Continuous Serpentine Rail Track + Number Circle */}
                        <div className="timeline-center-col">
                          <div className={`timeline-track-rail ${isLeft ? 'rail-left' : 'rail-right'} ${idx === 0 ? 'rail-first' : ''} ${idx === filteredCases.length - 1 ? 'rail-last' : ''}`}>
                            {idx > 0 && <span className="timeline-rail-dot dot-top" />}
                            <span className="timeline-rail-dot dot-mid" />
                            {idx < filteredCases.length - 1 && <span className="timeline-rail-dot dot-bot" />}
                          </div>

                          <div className={`timeline-node-circle ${isLeft ? 'circle-left' : 'circle-right'}`}>
                            {item.num}
                          </div>
                        </div>

                        {/* Right Column */}
                        <div className="timeline-col timeline-col-right">
                          {item.flip ? (
                            <div className="timeline-card-content">
                              <h3 className="timeline-card-title">{item.title}</h3>
                              <p className="timeline-card-desc">{item.summary}</p>
                              <div className="timeline-card-tags">
                                {item.technologies.map((tech, i) => (
                                  <span key={i} className="timeline-tag-pill">{tech}</span>
                                ))}
                              </div>
                              <button
                                className="timeline-action-link"
                                onClick={() => setSelectedCase(item)}
                              >
                                <span>Voir les détails du projet</span>
                                <ArrowRight size={16} />
                              </button>
                            </div>
                          ) : (
                            <div className="timeline-card-media" onClick={() => setSelectedCase(item)}>
                              <img
                                src={item.image}
                                alt={item.title}
                                className="timeline-media-img"
                                loading="lazy"
                              />
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Serpentine Connecting Curved Line to Next Project */}
                      {nextItem && (
                        <div className="timeline-step-connector">
                          <svg
                            className="timeline-connector-svg"
                            viewBox="0 0 100 60"
                            preserveAspectRatio="none"
                          >
                            {isLeft && !nextIsLeft ? (
                              /* Left rail (20px) to Right rail (80px) serpentine S-curve */
                              <path
                                d="M 20,0 L 20,10 Q 20,30 40,30 L 60,30 Q 80,30 80,50 L 80,60"
                                fill="none"
                                stroke="#fed7aa"
                                strokeWidth="2"
                                strokeLinecap="round"
                              />
                            ) : !isLeft && nextIsLeft ? (
                              /* Right rail (80px) to Left rail (20px) serpentine S-curve */
                              <path
                                d="M 80,0 L 80,10 Q 80,30 60,30 L 40,30 Q 20,30 20,50 L 20,60"
                                fill="none"
                                stroke="#fed7aa"
                                strokeWidth="2"
                                strokeLinecap="round"
                              />
                            ) : (
                              /* Straight connection fallback */
                              <path
                                d={isLeft ? "M 20,0 L 20,60" : "M 80,0 L 80,60"}
                                fill="none"
                                stroke="#fed7aa"
                                strokeWidth="2"
                                strokeLinecap="round"
                              />
                            )}
                          </svg>
                        </div>
                      )}
                    </React.Fragment>
                  );
                })}
              </div>
            </div>

          </div>
        </section>

        {/* Modal de détail d'architecture */}
        {selectedCase && (
          <div className="modal-overlay" onClick={() => setSelectedCase(null)}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <div className="modal-header">
                <div>
                  <h3 style={{ fontSize: '1.6rem', margin: 0 }}>{selectedCase.title}</h3>
                  <p style={{ color: '#6b7280', fontSize: '0.9rem', marginTop: '4px' }}>{selectedCase.details.role} • {selectedCase.details.client}</p>
                </div>
                <button className="modal-close-btn" onClick={() => setSelectedCase(null)}>
                  <X size={20} />
                </button>
              </div>

              <div className="modal-body">
                <div>
                  <h4 style={{ fontSize: '1.1rem', marginBottom: '6px', color: '#111827' }}>Le Contexte & L’Objectif</h4>
                  <p style={{ color: '#4b5563', lineHeight: 1.6 }}>{selectedCase.details.context}</p>
                </div>

                <div>
                  <h4 style={{ fontSize: '1.1rem', marginBottom: '6px', color: '#111827' }}>Le Défi Technique</h4>
                  <p style={{ color: '#4b5563', lineHeight: 1.6 }}>{selectedCase.details.challenge}</p>
                </div>

                <div>
                  <h4 style={{ fontSize: '1.1rem', marginBottom: '6px', color: '#111827' }}>L’Architecture & La Solution Mise en Place</h4>
                  <p style={{ color: '#4b5563', lineHeight: 1.6 }}>{selectedCase.details.solution}</p>
                </div>

                <div>
                  <h4 style={{ fontSize: '1.1rem', marginBottom: '6px', color: '#059669' }}>Résultat & Valeur Livrée</h4>
                  <p style={{ color: '#4b5563', lineHeight: 1.6 }}>{selectedCase.details.impact}</p>
                </div>

                <div style={{ paddingTop: '10px' }}>
                  <a
                    href={getWhatsAppUrl(`Bonjour Bernard, j'aimerais échanger avec vous au sujet du projet ${selectedCase.title}`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary"
                    style={{ width: 'fit-content' }}
                  >
                    <MessageCircle size={18} />
                    <span>Échanger sur ce type de projet</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ===================================================================
            3. COMPÉTENCES TECHNIQUES & STACK LOGICIEL (CARTES MODERNES)
            =================================================================== */}
        <SkillsCardsSection />

        {/* ===================================================================
            4. SERVICES & DOMAINES D'INTERVENTION (LISTE ÉDITORIALE)
            =================================================================== */}
        <section id="services" className="services-section-wrapper">
          <div className="container">
            <div className="services-layout">
              <div className="services-intro">
                <h2 className="services-main-title">Services & Domaines d'intervention</h2>
                <p className="services-subtitle">
                  De la conception au déploiement sécurisé.
                </p>
                <a
                  href={getWhatsAppUrl("Bonjour Bernard, j'aimerais discuter d'un projet.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="services-intro-link"
                >
                  <span>Discuter d'un projet</span>
                  <ArrowUpRight size={16} />
                </a>
              </div>

              <ol className="services-list">
                {servicesData.map((service, index) => (
                  <li key={service.id} className="services-row" style={{ '--i': index }}>
                    <a
                      href={getWhatsAppUrl(`Bonjour Bernard, je suis intéressé par : ${service.title}`)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="services-row-link"
                    >
                      <span className="services-row-num">{String(index + 1).padStart(2, '0')}</span>
                      <div className="services-row-main">
                        <h3 className="services-row-title">{service.title}</h3>
                        <p className="services-row-desc">{service.desc}</p>
                      </div>
                      <span className="services-row-stack">{service.stack}</span>
                      <ArrowUpRight size={20} className="services-row-arrow" />
                    </a>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        {/* ===================================================================
            5. EXPÉRIENCE ET FORMATION (TIMELINE ÉDITORIALE)
            =================================================================== */}
        <section id="parcours" className="career-section-wrapper">
          <div className="container">
            <div className="career-layout">
              {/* Colonne gauche : Titre éditorial + faits marquants fixes */}
              <div className="career-intro">
                <h2 className="career-main-title">Expérience professionnelle & Formation</h2>
                <p className="career-subtitle">
                  Pilotage et direction de projets logiciels, encadrement d'équipes techniques et spécialisation universitaire en sécurité informatique.
                </p>

                <div className="career-stats-strip">
                  <div className="career-stat-card">
                    <span className="career-stat-num">+12</span>
                    <span className="career-stat-text">Solutions Déployées</span>
                  </div>
                  <div className="career-stat-card">
                    <span className="career-stat-num">LEAD & CHEF D'ÉQUIPE</span>
                    <span className="career-stat-text">SAMRE & Projets Majeurs</span>
                  </div>
                  <div className="career-stat-card">
                    <span className="career-stat-num">FORMATEC</span>
                    <span className="career-stat-text">Sécurité Informatique</span>
                  </div>
                </div>

                <a
                  href={getWhatsAppUrl("Bonjour Bernard, j'aimerais échanger au sujet de votre parcours.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="career-intro-link"
                >
                  <span>Discuter d'une opportunité</span>
                  <ArrowUpRight size={16} />
                </a>
              </div>

              {/* Colonne droite : Chronologie sans cartes, continue et épurée */}
              <div className="career-timeline">
                {experiencesData.map((exp, index) => (
                  <div key={index} className="career-entry">
                    <div className="career-node-column">
                      <div className="career-node-dot" />
                      <div className="career-node-line" />
                    </div>

                    <div className="career-entry-body">
                      <div className="career-entry-meta">
                        <span className="career-entry-period">{exp.period}</span>
                        <span className="career-meta-sep">•</span>
                        <span className="career-entry-location">{exp.location}</span>
                      </div>

                      <h3 className="career-entry-company">{exp.company}</h3>
                      <h4 className="career-entry-role">{exp.role}</h4>

                      <ul className="career-entry-tasks">
                        {exp.tasks.map((task, tIndex) => (
                          <li key={tIndex}>{task}</li>
                        ))}
                      </ul>

                      {exp.tags && (
                        <div className="career-entry-tags">
                          {exp.tags.map((tag, tagIndex) => (
                            <span key={tagIndex} className="career-tech-tag">{tag}</span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ===================================================================
            6. MÉTHODE DE TRAVAIL (PROCESSUS ÉDITORIAL HAUT DE GAMME)
            =================================================================== */}
        <section id="methode" className="method-section-wrapper">
          <div className="container">
            <div className="method-head">
              <h2 className="method-main-title">Méthode de travail</h2>
              <p className="method-subtitle">Quatre phases, du besoin à la production.</p>
            </div>

            <ol className="method-rail">
              {workflowSteps.map((step) => (
                <li key={step.step} className="method-phase">
                  <div className="method-phase-marker">
                    <span className="method-phase-dot" />
                  </div>
                  <span className="method-phase-num">{step.step}</span>
                  <h3 className="method-phase-title">{step.title}</h3>
                  <p className="method-phase-desc">{step.desc}</p>
                  <p className="method-phase-output">
                    <ArrowUpRight size={14} />
                    {step.deliverable}
                  </p>
                </li>
              ))}
            </ol>

            <a
              href={getWhatsAppUrl("Bonjour Bernard, j'aimerais échanger sur le cadrage d'un projet.")}
              target="_blank"
              rel="noopener noreferrer"
              className="method-cta"
            >
              <span>Démarrer un cadrage</span>
              <ArrowUpRight size={16} />
            </a>
          </div>
        </section>

      </main>

      {/* ===================================================================
          VRAI FOOTER PERSO EN BLANC (SANS FORMULAIRE)
          =================================================================== */}
      <footer id="contact" className="site-footer-white">
        <div className="container">

          {/* Bannière d'appel au projet */}
          <div className="footer-cta-banner">
            <div className="footer-cta-text">
              <h2 className="footer-cta-title">Démarrons votre projet ensemble</h2>
              <p className="footer-cta-subtitle">
                Vous avez un projet d’application web, mobile ou de système d'entreprise (comme SAMRE, FlyPoints, ZOO ou CIGUSTA) ? Discutons-en dès aujourd’hui. Je réponds rapidement sur WhatsApp ou par e-mail.
              </p>
            </div>
            <div className="footer-cta-actions">
              <a
                href={getWhatsAppUrl("Bonjour Bernard, j'aimerais échanger sur un projet.")}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-btn-whatsapp"
              >
                <MessageCircle size={18} />
                <span>Discuter sur WhatsApp</span>
              </a>
              <a
                href="mailto:sewodakomla@gmail.com"
                className="footer-btn-email"
              >
                <Mail size={18} />
                <span>Envoyer un e-mail</span>
              </a>
            </div>
          </div>

          {/* Grille principale du footer */}
          <div className="footer-main-grid">

            {/* Colonne 1 : Identité & Bio */}
            <div className="footer-col footer-col-brand">
              <div className="footer-brand-header">
                <img
                  src="/images/skb-symbol.jpg"
                  alt="Logo SKB"
                  className="footer-brand-avatar"
                />
                <div>
                  <h3 className="footer-brand-name">Sewoda Komla Bernard</h3>
                  <p className="footer-brand-title">Chef d’équipe technique & Lead Technique</p>
                </div>
              </div>
              <p className="footer-brand-desc">
                Conception et direction technique d'architectures logicielles fiables, scalables et sécurisées à Lomé, Togo.
              </p>
              <div className="footer-social-row">
                <a
                  href="https://www.linkedin.com/in/sewoda-komla-bernard"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-social-circle linkedin"
                  aria-label="LinkedIn"
                  title="LinkedIn"
                >
                  <LinkedinIcon size={18} />
                </a>
                <a
                  href="https://www.tiktok.com/@sewoda_bernard"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-social-circle tiktok"
                  aria-label="TikTok"
                  title="TikTok"
                >
                  <TiktokIcon size={18} />
                </a>
                <a
                  href="https://www.facebook.com/sewoda.bernard"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-social-circle facebook"
                  aria-label="Facebook"
                  title="Facebook"
                >
                  <FacebookIcon size={18} />
                </a>
                <a
                  href="https://github.com/sew-ben"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-social-circle github"
                  aria-label="GitHub principal (sew-ben)"
                  title="GitHub (sew-ben)"
                >
                  <GithubIcon size={18} />
                </a>
                <a
                  href="https://github.com/Sewoda"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-social-circle github"
                  aria-label="GitHub organisation (Sewoda)"
                  title="GitHub (Sewoda)"
                >
                  <GithubIcon size={18} />
                </a>
                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-social-circle whatsapp"
                  aria-label="WhatsApp"
                  title="WhatsApp"
                >
                  <MessageCircle size={18} />
                </a>
              </div>
            </div>

            {/* Colonne 2 : Coordonnées directes */}
            <div className="footer-col">
              <h4 className="footer-col-heading">Coordonnées</h4>
              <ul className="footer-links-list">
                <li>
                  <a href="mailto:sewodakomla@gmail.com" className="footer-contact-link">
                    <Mail size={16} className="footer-link-icon" />
                    <div>
                      <span className="footer-link-sub">Adresse E-mail</span>
                      <span className="footer-link-main">sewodakomla@gmail.com</span>
                    </div>
                  </a>
                </li>
                <li>
                  <div className="footer-contact-link">
                    <Phone size={16} className="footer-link-icon" />
                    <div>
                      <span className="footer-link-sub">Téléphone direct</span>
                      <div className="footer-phones-wrap">
                        <a href="tel:+22896281671" className="footer-link-main">+228 96 28 16 71</a>
                        <span className="footer-phone-sep">/</span>
                        <a href="tel:+22870645336" className="footer-link-main">+228 70 64 53 36</a>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="footer-contact-link">
                    <MapPin size={16} className="footer-link-icon" />
                    <div>
                      <span className="footer-link-sub">Localisation</span>
                      <span className="footer-link-main">Adidogomé — Lomé, Togo</span>
                    </div>
                  </div>
                </li>
              </ul>
            </div>

            {/* Colonne 3 : Navigation rapide */}
            <div className="footer-col">
              <h4 className="footer-col-heading">Navigation</h4>
              <ul className="footer-nav-list">
                <li><a href="#accueil">Accueil</a></li>
                <li><a href="#projets">Projets & Réalisations</a></li>
                <li><a href="#services">Services & Architecture</a></li>
                <li><a href="#parcours">Expérience & Formation</a></li>
                <li><a href="#methode">Méthode de travail</a></li>
              </ul>
            </div>

            {/* Colonne 4 : Réseaux professionnels */}
            <div className="footer-col">
              <h4 className="footer-col-heading">Réseaux & Code</h4>
              <ul className="footer-nav-list">
                <li>
                  <a href="https://www.linkedin.com/in/sewoda-komla-bernard" target="_blank" rel="noopener noreferrer" className="footer-ext-link">
                    <span>LinkedIn</span>
                    <ArrowUpRight size={14} />
                  </a>
                </li>
                <li>
                  <a href="https://github.com/sew-ben" target="_blank" rel="noopener noreferrer" className="footer-ext-link">
                    <span>GitHub (sew-ben)</span>
                    <ArrowUpRight size={14} />
                  </a>
                </li>
                <li>
                  <a href="https://github.com/Sewoda" target="_blank" rel="noopener noreferrer" className="footer-ext-link">
                    <span>GitHub (Sewoda)</span>
                    <ArrowUpRight size={14} />
                  </a>
                </li>
                <li>
                  <a href="https://www.tiktok.com/@sewoda_bernard" target="_blank" rel="noopener noreferrer" className="footer-ext-link">
                    <span>TikTok</span>
                    <ArrowUpRight size={14} />
                  </a>
                </li>
                <li>
                  <a href="https://www.facebook.com/sewoda.bernard" target="_blank" rel="noopener noreferrer" className="footer-ext-link">
                    <span>Facebook</span>
                    <ArrowUpRight size={14} />
                  </a>
                </li>
              </ul>
            </div>

          </div>

          {/* Barre inférieure de copyright */}
          <div className="footer-bottom-bar">
            <p className="footer-copyright-text">
              © {new Date().getFullYear()} <strong>Sewoda Komla Bernard (SKB)</strong>. Développeur Full-Stack & Lead Technique à Lomé, Togo.
            </p>
            <p className="footer-tech-note">
              Conçu avec rigueur · Architecture propre & Sécurité native
            </p>
          </div>

        </div>
      </footer>
    </div>
  );
}
