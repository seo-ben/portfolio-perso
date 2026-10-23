import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import { 
  Server, 
  Smartphone, 
  Database, 
  Layers, 
  Shield, 
  Cpu, 
  Workflow, 
  Sparkles, 
  Terminal,
  Globe, 
  Radio, 
  Briefcase, 
  Plane, 
  CreditCard, 
  Utensils, 
  GraduationCap, 
  ArrowRight, 
  MoreHorizontal
} from 'lucide-react';

// ============================================================================
// 4 CATÉGORIES • 6 CARTES CHACUNE • SUPERPOSITION DYNAMIQUE AU DÉFILEMENT (SCROLL)
// Le scroll empile les cartes l'une sur l'autre en cascade
// ============================================================================
const stackedCategories = [
  {
    id: 'backend',
    num: '01',
    name: 'Backend & Architecture',
    glowColor: 'rgba(59, 130, 246, 0.12)',
    cards: [
      {
        id: 'laravel',
        subtitle: 'ARCHITECTURE BACKEND & API',
        title: 'Laravel 11 & Écosystème PHP',
        tags: ['Queues Redis', 'Eloquent ORM', 'Sanctum'],
        status: 'Architecture Modulaire',
        metric: '+99.9% Robustesse',
        colorTheme: 'blue',
        decorType: 'wave',
        icon: <Server size={22} />
      },
      {
        id: 'php',
        subtitle: 'TYPAGE STRICT & CLEAN CODE',
        title: 'PHP 8+ & SOLID Architecture',
        tags: ['POO Avancée', 'SOLID', 'Repository Pattern'],
        status: 'Typage Strict & Robuste',
        metric: 'Zéro Dette Technique',
        colorTheme: 'purple',
        decorType: 'bars',
        icon: <Terminal size={22} />
      },
      {
        id: 'python-django',
        subtitle: 'AUTOMATISATION & FLUX MASSIFS',
        title: 'Python & Django REST',
        tags: ['Django REST Framework', 'Automation', 'Tâches Cron'],
        status: 'Traitement Flux Massifs',
        metric: 'Batch & Tâches Asynchrones',
        colorTheme: 'green',
        decorType: 'trend',
        icon: <Cpu size={22} />
      },
      {
        id: 'api-rest',
        subtitle: 'INTEROPÉRABILITÉ SÉCURISÉE',
        title: 'API RESTful & Webhooks',
        tags: ['OpenAPI / Swagger', 'Webhooks', 'JWT Auth'],
        status: 'Interopérabilité Sécurisée',
        metric: 'Contrats Swagger Validés',
        colorTheme: 'blue',
        decorType: 'wave',
        icon: <Workflow size={22} />
      },
      {
        id: 'architecture-modulaire',
        subtitle: 'CONCEPTION HAUTE PERFORMANCE',
        title: 'Architecture Modulaire & DDD',
        tags: ['Domain-Driven Design', 'Clean Code', 'Scalabilité'],
        status: 'Zéro Dette Technique',
        metric: 'Découplage Modulaire',
        colorTheme: 'purple',
        decorType: 'bars',
        icon: <Layers size={22} />
      },
      {
        id: 'owasp',
        subtitle: 'CYBERSÉCURITÉ APPLICATIVE',
        title: 'Sécurité OWASP & Conformité',
        tags: ['Chiffrement AES-256', 'Anti-Injections', 'CSRF / XSS'],
        status: 'Cybersécurité Données',
        metric: 'Conforme OWASP Top 10',
        colorTheme: 'green',
        decorType: 'trend',
        icon: <Shield size={22} />
      }
    ]
  },
  {
    id: 'frontend-mobile',
    num: '02',
    name: 'Frontend Réactif & Mobile',
    glowColor: 'rgba(168, 85, 247, 0.12)',
    cards: [
      {
        id: 'flutter',
        subtitle: 'APPLICATION CAISSE TACTILE',
        title: 'Flutter & Dart (Caisse POS)',
        tags: ['Caisse Tactile POS', 'Cross-Platform', 'Impression ESC/POS'],
        status: 'Application Caisse Mobile',
        metric: 'Impression Réseau Local',
        colorTheme: 'blue',
        decorType: 'wave',
        icon: <Smartphone size={22} />
      },
      {
        id: 'react-native',
        subtitle: 'AGENTS DE TERRAIN & MARCHÉS',
        title: 'React Native (Collecte Tontine)',
        tags: ['100% Offline-First', 'SQLite Local', 'Sync Serveur'],
        status: 'Collecte Tontine Marchés',
        metric: '100% Hors-Ligne Résilient',
        colorTheme: 'green',
        decorType: 'trend',
        icon: <Smartphone size={22} />
      },
      {
        id: 'react-ts',
        subtitle: 'SINGLE PAGE APPLICATIONS',
        title: 'React.js & TypeScript',
        tags: ['Single Page Apps', 'Context & Redux', 'Vite SPA'],
        status: 'Typage Strict & Vélocité',
        metric: 'Interface Réactive 60fps',
        colorTheme: 'purple',
        decorType: 'bars',
        icon: <Cpu size={22} />
      },
      {
        id: 'vue-nuxt',
        subtitle: 'PORTAILS & DASHBOARDS MÉTIER',
        title: 'Vue.js & Nuxt Framework',
        tags: ['Dashboards Métier', 'Composants Réactifs', 'Nuxt SSR'],
        status: 'Portails & Supervision',
        metric: 'Tableaux de Bord RH / BTP',
        colorTheme: 'blue',
        decorType: 'wave',
        icon: <Layers size={22} />
      },
      {
        id: 'tailwind-css',
        subtitle: 'DESIGN SYSTEM & ERGONOMIE',
        title: 'TailwindCSS & Design Systems',
        tags: ['UI / UX Précision', 'Micro-Interactions', '60fps'],
        status: 'Ergonomie Multi-Écrans',
        metric: 'Responsive Mobile & Desktop',
        colorTheme: 'purple',
        decorType: 'bars',
        icon: <Sparkles size={22} />
      },
      {
        id: 'pwa-offline',
        subtitle: 'RÉSILIENCE CLIENT HORS-LIGNE',
        title: 'PWA & Mode Hors-Ligne',
        tags: ['Service Workers', 'IndexedDB', 'Cache API'],
        status: 'Résilience Client Maximale',
        metric: 'Continuité de Service Zéro Web',
        colorTheme: 'green',
        decorType: 'trend',
        icon: <Globe size={22} />
      }
    ]
  },
  {
    id: 'data-cloud',
    num: '03',
    name: 'Données, Cloud & Sécurité',
    glowColor: 'rgba(16, 185, 129, 0.12)',
    cards: [
      {
        id: 'formatec-security',
        subtitle: 'FORMATION SUPÉRIEURE D’INGÉNIERIE',
        title: 'Sécurité Informatique (FORMATEC)',
        tags: ['Licence Sécurité FORMATEC', 'Audits Systèmes', 'Réseaux'],
        status: 'Diplômé FORMATEC Lomé',
        metric: 'Licence Informatique & Réseaux',
        colorTheme: 'purple',
        decorType: 'avatar',
        icon: <Shield size={22} />
      },
      {
        id: 'mysql-postgres',
        subtitle: 'PERSISTANCE TRANSACTIONNELLE',
        title: 'MySQL & PostgreSQL',
        tags: ['Transactions ACID', 'Indexation B-Tree', 'Intégrité'],
        status: 'Persistance Transactionnelle',
        metric: 'Intégrité Comptable Garantie',
        colorTheme: 'blue',
        decorType: 'trend',
        icon: <Database size={22} />
      },
      {
        id: 'mongodb',
        subtitle: 'BASE DOCUMENTAIRE FLEXIBLE',
        title: 'MongoDB & NoSQL',
        tags: ['Stockage JSON', 'Pipelines Agrégation', 'Flexibilité'],
        status: 'Données ZOO Invest',
        metric: 'Flexibilité Schéma & Agrégation',
        colorTheme: 'green',
        decorType: 'wave',
        icon: <Database size={22} />
      },
      {
        id: 'redis',
        subtitle: 'ACCÉLÉRATION EN MÉMOIRE VIVE',
        title: 'Redis In-Memory Cache',
        tags: ['Cache RAM Distribué', 'Queues Asynchrones', 'Verrous'],
        status: 'Accélération Haute Vélocité',
        metric: '< 2ms Temps de Réponse',
        colorTheme: 'purple',
        decorType: 'bars',
        icon: <Cpu size={22} />
      },
      {
        id: 'linux-nginx',
        subtitle: 'SYSADMIN & HÉBERGEMENT VPS',
        title: 'Linux Ubuntu VPS & Nginx',
        tags: ['Reverse-Proxy Nginx', 'SSL / TLS Certbot', 'UFW Firewall'],
        status: 'SysAdmin & Déploiements',
        metric: '99.98% Uptime Serveurs',
        colorTheme: 'blue',
        decorType: 'wave',
        icon: <Server size={22} />
      },
      {
        id: 'lan-pos',
        subtitle: 'INFRASTRUCTURE RÉSEAU LOCAL',
        title: 'Réseaux Locaux (LAN) Caisses',
        tags: ['IP Statique Dédiée', 'Zéro Dépendance Web', 'ESC/POS'],
        status: 'Restaurant CIGUSTA Lomé',
        metric: 'Isolation LAN & Caisse Sécurisée',
        colorTheme: 'green',
        decorType: 'trend',
        icon: <Radio size={22} />
      }
    ]
  },
  {
    id: 'solutions',
    num: '04',
    name: 'Solutions Métier Déployées',
    glowColor: 'rgba(255, 77, 21, 0.12)',
    cards: [
      {
        id: 'cigusta',
        subtitle: 'RESTAURATION & CAISSE TACTILE',
        title: 'CIGUSTA Lomé (Restaurant POS)',
        tags: ['Co-concepteur avec Richard', 'Caisse Tactile', 'LAN ESC/POS'],
        status: 'En Exploitation Réelle',
        metric: 'Caisse Locale & Impression Rapide',
        colorTheme: 'blue',
        decorType: 'wave',
        icon: <Utensils size={22} />
      },
      {
        id: 'microfinance',
        subtitle: 'SUITE 3 APPLICATIONS FINTECH',
        title: 'Suite Microfinance & Tontines',
        tags: ['Web Admin Laravel', 'Caisse Flutter', 'RN Terrain Offline'],
        status: 'Suite 3 Applications Intégrées',
        metric: 'Admin + Caisse + Terrain',
        colorTheme: 'purple',
        decorType: 'trend',
        icon: <CreditCard size={22} />
      },
      {
        id: 'flypoints',
        subtitle: 'BILLETTERIE & PAIEMENT EN LIGNE',
        title: 'FlyPoints (Fintech Voyage)',
        tags: ['Passerelles Bancaires', 'Mobile Money', 'Fintech Voyage'],
        status: 'Paiement Échelonné Sécurisé',
        metric: 'T-Money, Flooz & Cartes Visa',
        colorTheme: 'green',
        decorType: 'wave',
        icon: <Plane size={22} />
      },
      {
        id: 'zoo',
        subtitle: 'FINANCEMENT DE PROJETS',
        title: 'Plateforme d’Investissement ZOO',
        tags: ['Financement Projets', 'Modélisation Financière', 'Dashboards'],
        status: 'Porteurs & Investisseurs',
        metric: 'Mise en Relation Sécurisée',
        colorTheme: 'blue',
        decorType: 'bars',
        icon: <Briefcase size={22} />
      },
      {
        id: 'samre',
        subtitle: 'PORTAIL NATIONAL RECRUTEMENT',
        title: 'SAMRE Stages & Emplois Togo',
        tags: ['Recrutement & Offres', 'Étudiants & Entreprises', 'Événements'],
        status: 'Portail National RH Togo',
        metric: 'Matching Universités & Sociétés',
        colorTheme: 'purple',
        decorType: 'trend',
        icon: <GraduationCap size={22} />
      },
      {
        id: 'volonte-btp',
        subtitle: 'SOLUTIONS D’ENTREPRISE DÉPLOYÉES',
        title: 'VOLONTEUNIVERSITY & Suivi BTP',
        tags: ['LMS Académique FORMATEC', 'Chantiers BTP', 'Gestion Matériel'],
        status: 'Solutions d’Entreprise Déployées',
        metric: 'Supervision Matériel & Académie',
        colorTheme: 'green',
        decorType: 'bars',
        icon: <Layers size={22} />
      }
    ]
  }
];

// Mini-Composant Décoratif SVG (Fidèle au mockup)
const CardDecorGraphic = ({ decorType }) => {
  if (decorType === 'avatar') {
    return (
      <div className="card-decor-avatar-badge" title="Sewoda Bernard - Lead Developer">
        <img src="/images/bernard-executive.jpg" alt="Sewoda Bernard" />
      </div>
    );
  }

  if (decorType === 'bars') {
    return (
      <svg className="card-decor-svg bars" viewBox="0 0 60 45" fill="none" aria-hidden="true">
        <rect x="5" y="26" width="8" height="19" rx="3" fill="currentColor" opacity="0.35" />
        <rect x="18" y="15" width="8" height="30" rx="3" fill="currentColor" opacity="0.55" />
        <rect x="31" y="22" width="8" height="23" rx="3" fill="currentColor" opacity="0.75" />
        <rect x="44" y="6" width="8" height="39" rx="3" fill="currentColor" opacity="0.95" />
      </svg>
    );
  }

  if (decorType === 'trend') {
    return (
      <svg className="card-decor-svg trend" viewBox="0 0 110 45" fill="none" aria-hidden="true">
        <path d="M0 38 Q 30 32 60 18 T 110 6" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" />
      </svg>
    );
  }

  return (
    <svg className="card-decor-svg wave" viewBox="0 0 130 50" fill="none" aria-hidden="true">
      <path 
        d="M0 40 C 25 40, 45 12, 70 28 C 95 44, 110 8, 130 4" 
        stroke="currentColor" 
        strokeWidth="2.8" 
        strokeLinecap="round" 
      />
    </svg>
  );
};

export default function SkillsCardsSection() {
  const containerRef = useRef(null);
  const [activeCategoryIdx, setActiveCategoryIdx] = useState(0);
  const [stackedCount, setStackedCount] = useState(1); // De 1 à 6 cartes empilées

  const currentCategory = stackedCategories[activeCategoryIdx];
  const totalCardsInCat = currentCategory.cards.length;

  // --------------------------------------------------------------------------
  // SUPERPOSITION DYNAMIQUE AU DÉFILEMENT (LE SCROLL SUPERPOSE LES CARTES)
  // --------------------------------------------------------------------------
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const navbarHeight = 72;
      
      const totalScrollable = containerRef.current.offsetHeight - window.innerHeight;
      if (totalScrollable <= 0) return;

      // Début du scroll quand le conteneur arrive sous la navbar
      const currentScroll = navbarHeight - rect.top;
      const progress = Math.min(Math.max(currentScroll / totalScrollable, 0), 0.999);

      // 4 Paliers (0..0.25 -> Cat 0, 0.25..0.50 -> Cat 1, etc.)
      const catIndex = Math.min(Math.floor(progress * 4), 3);
      setActiveCategoryIdx(catIndex);

      // Progression à l'intérieur du palier actif (0..1)
      const subProgress = (progress * 4) - catIndex;

      // Nombre de cartes superposées (de 1 à 6 au fur et à mesure du défilement)
      const count = Math.min(Math.max(Math.floor(subProgress * 6) + 1, 1), 6);
      setStackedCount(count);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Saut direct par clic sur un onglet de catégorie
  const selectCategory = (catIdx) => {
    if (!containerRef.current) return;
    const navbarHeight = 72;
    const totalScrollable = containerRef.current.offsetHeight - window.innerHeight;
    const targetProgress = (catIdx + 0.05) / 4;
    const containerTop = window.scrollY + containerRef.current.getBoundingClientRect().top;
    const targetTop = containerTop - navbarHeight + (targetProgress * totalScrollable);
    window.scrollTo({ top: targetTop, behavior: 'smooth' });
    setActiveCategoryIdx(catIdx);
    setStackedCount(1);
  };

  return (
    <section 
      id="competences" 
      className="stacked-cards-scroll-container" 
      ref={containerRef}
    >
      {/* Halo d'ambiance pastel en arrière-plan */}
      <div 
        className="stacked-ambient-glow"
        style={{
          background: `radial-gradient(circle at 50% 30%, ${currentCategory.glowColor} 0%, rgba(245, 247, 250, 0.5) 45%, #ffffff 80%)`
        }}
      />

      {/* Viewport Sticky sous la navbar pendant le défilement de superposition */}
      <div className="stacked-cards-sticky-viewport">
        
        {/* ===================================================================
            EN-TÊTE : TITRE PUR + 4 ONGLETS DE DOMAINES + INDICATEUR DISCRET
            =================================================================== */}
        <div className="stacked-cards-header">
          <h2 className="stacked-cards-title">Compétences techniques & Stack logiciel</h2>

          <div className="stacked-category-tabs">
            {stackedCategories.map((cat, idx) => (
              <button
                key={cat.id}
                type="button"
                className={`stacked-cat-tab-btn ${activeCategoryIdx === idx ? 'active' : ''}`}
                onClick={() => selectCategory(idx)}
              >
                <span className="cat-tab-num">{cat.num}.</span>
                <span className="cat-tab-name">{cat.name}</span>
              </button>
            ))}
          </div>

          {/* Indicateur de superposition par le scroll */}
          <div className="stacked-scroll-hint-pill">
            <span className="hint-pulse-dot" />
            <span>Défilez pour superposer les technologies • Étape {stackedCount} / {totalCardsInCat}</span>
          </div>
        </div>

        {/* ===================================================================
            LE DECK DE CARTES GLASSMORPHIC QUI SE SUPERPOSENT AU SCROLL
            Chaque nouvelle carte glisse et vient s'empiler au-dessus de la pile
            =================================================================== */}
        <div className="stacked-deck-stage">
          <div className="stacked-deck-wrapper">
            
            {currentCategory.cards.map((card, cardIdx) => {
              const isStacked = cardIdx < stackedCount;
              const isTopCard = cardIdx === stackedCount - 1;
              
              // Décalage vertical progressif vers le bas pour créer la pile superposée
              const baseOffsetY = cardIdx * 48;
              const scale = 1 - (totalCardsInCat - 1 - cardIdx) * 0.012;
              
              // Z-Index : chaque nouvelle carte empilée se pose AU-DESSUS des précédentes
              const zIndex = isStacked ? (20 + cardIdx) : (10 - cardIdx);

              return (
                <div
                  key={card.id}
                  className={`stacked-glass-card theme-${card.colorTheme} ${isStacked ? 'is-stacked' : 'is-pending'} ${isTopCard ? 'is-topmost' : ''}`}
                  style={{
                    transform: isStacked 
                      ? `translateY(${baseOffsetY}px) scale(${scale})` 
                      : `translateY(${baseOffsetY + 75}px) scale(0.92)`,
                    opacity: isStacked ? 1 : 0,
                    zIndex: zIndex,
                    pointerEvents: isStacked ? 'auto' : 'none',
                    '--card-base-offset': `${baseOffsetY}px`
                  }}
                  onClick={() => setStackedCount(cardIdx + 1)}
                >
                  {/* Graphique décoratif SVG en filigrane */}
                  <div className="card-decor-container">
                    <CardDecorGraphic decorType={card.decorType} />
                  </div>

                  {/* Ligne Supérieure : Icône Squircle à gauche, '•••' à droite */}
                  <div className="card-glass-top-row">
                    <div className="card-glass-icon-circle">
                      {card.icon}
                    </div>
                    <div className="card-glass-dots-btn">
                      <MoreHorizontal size={20} />
                    </div>
                  </div>

                  {/* Corps de la Carte : Subtitle, Titre en Gras & Métrique */}
                  <div className="card-glass-body">
                    <span className="card-glass-subtitle">{card.subtitle}</span>
                    <h3 className="card-glass-title">{card.title}</h3>
                    
                    {/* Badge de Métrique */}
                    <div className="card-glass-metric-pill">
                      <span className="metric-dot" />
                      <span className="metric-value">{card.metric}</span>
                    </div>

                    {/* Liste des Tags de Stack */}
                    <div className="card-glass-tags-list">
                      {card.tags.map((tag, tIdx) => (
                        <span key={tIdx} className="card-glass-tag-pill">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Ligne Inférieure : Statut badge à gauche, Flèche '→' à droite */}
                  <div className="card-glass-bottom-row">
                    <div className="card-glass-status-badge">
                      <span className="status-dot" />
                      <span>{card.status}</span>
                    </div>

                    <div className="card-glass-arrow-btn">
                      <ArrowRight size={18} />
                    </div>
                  </div>

                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
