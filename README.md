mboka-expo/
├── app/
│   ├── (public)/
│   │   ├── page.tsx            # Accueil
│   │   ├── layout.tsx          # Layout public
│   │   ├── projects/
│   │   │   └── page.tsx        # Liste des innovations
│   │   ├── expo/
│   │   │   └── page.tsx        # Expositions / événements
│   │   └── about/
│   │       └── page.tsx        # À propos
│   │
│   ├── (auth)/
│   │   ├── login/
│   │   │   └── page.tsx        # Connexion
│   │   ├── register/
│   │   │   └── page.tsx        # Inscription
│   │   └── layout.tsx          # Layout auth
│   │
│   ├── (dashboard)/
│   │   ├── dashboard/
│   │   │   └── page.tsx        # Tableau de bord
│   │   ├── my-projects/
│   │   │   └── page.tsx        # Projets de l'utilisateur
│   │   └── layout.tsx          # Layout dashboard
│   │
│   ├── api/
│   │   └── projects/
│   │       └── route.ts        # API innovations (plus tard)
│   │
│   ├── layout.tsx              # Layout global
│   └── globals.css             # Styles globaux
│
├── components/
│   ├── ui/
│   │   ├── Btn.tsx             # Bouton réutilisable
│   │   ├── Card.tsx            # Carte projet
│   │   └── Input.tsx           # Champs formulaire
│   │
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   └── MobileMenu.tsx
│   │
│   └── sections/
│       ├── Hero.tsx
│       ├── Features.tsx
│       └── CallToAction.tsx
│
├── lib/
│   ├── data/
│   │   └── projects.ts         # Fake data / mock
│   ├── utils.ts                # Fonctions utilitaires
│   └── constants.ts            # Constantes (routes, rôles…)
│
├── public/
│   ├── images/
│   ├── logos/
│   └── icons/
│
├── styles/
│   └── theme.css               # Variables CSS (optionnel)
│
├── types/
│   └── project.ts              # Types TypeScript
│
├── tailwind.config.js
├── tsconfig.json
└── package.json
