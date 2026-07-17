export const NAV_LINKS = [
  { href: '#sobre', label: 'Sobre' },
  { href: '#experiencia', label: 'Experiência' },
  { href: '#stack', label: 'Stack' },
  { href: '#projetos', label: 'Projetos' },
  { href: '#percurso', label: 'Percurso' },
  { href: '#contacto', label: 'Contacto' },
]

export const CONTACT = {
  name: 'Vandro Correia',
  github: 'https://github.com/VandroCr',
  githubHandle: 'VandroCr',
  email: 'vandrocr@gmail.com',
  linkedin: 'https://www.linkedin.com/in/vandro-correia-1b6935378',
  location: 'Moçambique',
}

export const DEV_STACK = {
  Linguagens: ['Java', 'Python', 'JavaScript', 'SQL', 'HTML5', 'CSS3'],
  Frameworks: ['Spring Boot', 'React', 'FastAPI'],
  'Bases de Dados': ['MySQL', 'H2 Database'],
  Ferramentas: [
    'Git',
    'GitHub',
    'IntelliJ IDEA',
    'VS Code',
    'MySQL Workbench',
    'Maven',
    'Postman',
    'Packet Tracer',
    'VMware',
  ],
  'Outras tecnologias': [
    'REST APIs',
    'JWT Authentication',
    'RabbitMQ',
    'OCR',
    'Metabase',
    'Linux (básico)',
  ],
}

export const DESIGN_STACK = {
  Competências: [
    'Design gráfico',
    'Edição de vídeo',
    'Motion Graphics (básico/intermédio)',
    'Produção de conteúdos para redes sociais',
    'Identidade visual',
    'Criação de thumbnails',
    'Edição de fotografias',
    'Captação e edição de áudio',
    'Storytelling visual',
  ],
  Ferramentas: [
    'Adobe Photoshop',
    'Adobe Illustrator',
    'Adobe Premiere Pro',
    'Adobe After Effects',
    'CapCut',
    'Canva',
    'FL Studio (produção e edição de áudio)',
    'Sony Vegas Pro',
  ],
}

export const PROFESSIONAL_ROLES = [
  {
    id: 'zsystems',
    title: 'UX/UI Designer',
    company: 'Z-Systems',
    roleType: 'Colaborador',
    location: 'Beira, Moçambique',
    website: 'https://zsystems.vercel.app',
    websiteLabel: 'zsystems.vercel.app',
    description:
      'Membro da equipa de uma empresa de tecnologia sediada em Beira, focada em desenvolvimento de websites, sistemas web e soluções digitais para negócios.',
    focus:
      'Design de interfaces e optimização da experiência do utilizador nos projectos da empresa da wireframe ao pixel final.',
    highlights: [
      'UI para websites e sistemas web',
      'Optimização de UX',
      'Colaboração com equipa de desenvolvimento',
    ],
    current: true,
  },
  {
    id: 'audiovisual',
    title: 'Design & Produção Audiovisual',
    roleType: 'Experiência independente',
    description:
      'Criação de conteúdos visuais e audiovisuais para redes sociais, marcas e projectos pessoais combinando criatividade com rigor técnico para materiais atrativos e profissionais.',
    deliverables: [
      'Produção de vídeos promocionais',
      'Reels e Shorts para redes sociais',
      'Design de posts e banners',
      'Criação de identidades visuais',
      'Produção de conteúdos audiovisuais para eventos e projetos',
    ],
  },
]

export const PROJECT_CATEGORIES = [
  {
    id: 'software',
    title: 'Desenvolvimento de software',
    subtitle: 'Sistemas web, APIs e bases de dados para contextos reais.',
  },
  {
    id: 'audiovisual',
    title: 'Design & audiovisual',
    subtitle: 'Conteúdos visuais e produção multimédia para marcas e redes sociais.',
  },
]

export const PROJECTS = [
  {
    id: 'gestao-academica',
    category: 'software',
    name: 'Sistema Web para Gestão Académica (UCM)',
    description:
      'Plataforma que liga a Secretaria e o Controlo de Crédito da FEG, centralizando informação académica e reduzindo trocas manuais entre departamentos.',
    technologies: ['Spring Boot', 'Java', 'MySQL', 'HTML/CSS', 'JavaScript'],
    domain: 'Académico',
  },
  {
    id: 'hotelrez',
    category: 'software',
    name: 'HotelRez',
    description:
      'Sistema de gestão hoteleira com reservas, quartos, clientes e painel administrativo do check-in ao relatório operacional.',
    technologies: ['Java', 'Spring Boot', 'MySQL'],
    domain: 'Hotelaria',
  },
  {
    id: 'ocr-ia',
    category: 'software',
    name: 'Sistema OCR com IA',
    description:
      'API de reconhecimento óptico de caracteres que extrai texto de documentos digitalizados, pronta para integração com outros sistemas.',
    technologies: ['Python', 'FastAPI', 'OCR'],
    domain: 'OCR',
  },
  {
    id: 'porto-ressano',
    category: 'software',
    name: 'Sistema Integrado Porto de Maputo – Ressano Garcia',
    description:
      'Canal de comunicação entre o Porto de Maputo e a fronteira de Ressano Garcia para notificações e estimativa de chegada de veículos.',
    technologies: ['REST APIs', 'Java', 'MySQL'],
    domain: 'Logística',
  },
  {
    id: 'dashboard-bi',
    category: 'software',
    name: 'Dashboard BI',
    description:
      'Dashboards analíticos com Metabase para apoiar decisões operacionais com indicadores visuais e consultas sobre dados reais.',
    technologies: ['Metabase', 'SQL', 'MySQL'],
    domain: 'BI',
  },
  {
    id: 'videos-promocionais',
    category: 'audiovisual',
    name: 'Produção de vídeos promocionais',
    description:
      'Vídeos para marcas e negócios com narrativa visual clara, edição profissional e foco em conversão.',
    technologies: ['Premiere Pro', 'After Effects', 'CapCut'],
    domain: 'Vídeo',
  },
  {
    id: 'reels-shorts',
    category: 'audiovisual',
    name: 'Reels e Shorts para redes sociais',
    description:
      'Conteúdo vertical optimizado para Instagram, TikTok e YouTube Shorts ritmo, legibilidade e impacto em poucos segundos.',
    technologies: ['CapCut', 'Premiere Pro', 'After Effects'],
    domain: 'Social',
  },
  {
    id: 'posts-banners',
    category: 'audiovisual',
    name: 'Design de posts e banners',
    description:
      'Peças gráficas para redes sociais e campanhas digitais layouts consistentes, legíveis e alinhados com a identidade da marca.',
    technologies: ['Photoshop', 'Illustrator', 'Canva'],
    domain: 'Design',
  },
  {
    id: 'identidades-visuais',
    category: 'audiovisual',
    name: 'Criação de identidades visuais',
    description:
      'Logotipos, paletas de cor e sistemas visuais completos para marcas e projectos da concepção à aplicação.',
    technologies: ['Illustrator', 'Photoshop', 'Canva'],
    domain: 'Branding',
  },
  {
    id: 'conteudos-eventos',
    category: 'audiovisual',
    name: 'Produção de conteúdos audiovisuais para eventos e projetos',
    description:
      'Captação e edição de material para eventos, coberturas e projectos especiais vídeo, áudio e entrega final polida.',
    technologies: ['Premiere Pro', 'Sony Vegas Pro', 'FL Studio'],
    domain: 'Eventos',
  },
]

export const TIMELINE = [
  {
    year: '2023',
    title: 'Início da Licenciatura',
    description: 'Primeiros projetos em Java e fundamentos de engenharia de software na UCM – FEG.',
  },
  {
    year: '2024',
    title: 'Spring Boot & REST APIs',
    description: 'Desenvolvimento de APIs REST, modelação de bases de dados e sistemas web completos.',
  },
  {
    year: '2025',
    title: 'FastAPI, OCR & Metabase',
    description: 'Integração de IA para OCR, dashboards de BI e projetos de maior escala técnica.',
  },
  {
    year: '2026',
    title: 'Produção, Z-Systems & mercado',
    description:
      'Colaboração UX/UI na Z-Systems (Beira), consolidação de projectos de software e procura activa do primeiro emprego como developer.',
    current: true,
  },
]

export const EDUCATION = {
  degree: 'Licenciatura em Tecnologias de Informação',
  institution: 'Universidade Católica de Moçambique (UCM – FEG)',
  status: 'Finalista',
}

export const CERTIFICATION_GOALS = [
  { provider: 'Cisco', focus: 'Redes & Segurança' },
  { provider: 'AWS', focus: 'Cloud Computing' },
  { provider: 'Google', focus: 'Data Analytics' },
  { provider: 'Microsoft', focus: 'Azure Fundamentals' },
]

export const EXPERIENCE_SUMMARY =
  'Experiência em projectos académicos e profissionais: desenvolvimento de APIs REST, modelação de bases de dados, design UX/UI na Z-Systems, produção audiovisual e documentação técnica.'

export const ABOUT_PARAGRAPHS = [
  'Estudante finalista da Licenciatura em Tecnologias de Informação na Universidade Católica de Moçambique (UCM – FEG). Trabalho com desenvolvimento de software, web, bases de dados, cibersegurança e análise de dados sempre orientado a problemas concretos.',
  'Construo sistemas que ligam departamentos, processos e dados. Em paralelo, actuo como UX/UI Designer na Z-Systems (Beira) e produzo conteúdos visuais e audiovisuais da interface ao vídeo promocional.',
  'Objectivo imediato: iniciar carreira como Desenvolvedor de Software, contribuindo para projectos inovadores enquanto evoluo tecnicamente em equipas de produção.',
]
