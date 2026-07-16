export const NAV_LINKS = [
  { href: '#sobre', label: 'Sobre' },
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

export const STACK = {
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

export const PROJECTS = [
  {
    id: 'gestao-academica',
    name: 'Sistema Web para Gestão Académica (UCM)',
    description:
      'Plataforma que liga a Secretaria e o Controlo de Crédito da FEG, centralizando informação académica e reduzindo trocas manuais entre departamentos.',
    technologies: ['Spring Boot', 'Java', 'MySQL', 'HTML/CSS', 'JavaScript'],
    featured: true,
    domain: 'Académico',
  },
  {
    id: 'hotelrez',
    name: 'HotelRez',
    description:
      'Sistema de gestão hoteleira com reservas, quartos, clientes e painel administrativo — do check-in ao relatório operacional.',
    technologies: ['Java', 'Spring Boot', 'MySQL'],
    featured: true,
    domain: 'Hotelaria',
  },
  {
    id: 'ocr-ia',
    name: 'Sistema OCR com IA',
    description:
      'API de reconhecimento óptico de caracteres que extrai texto de documentos digitalizados, pronta para integração com outros sistemas.',
    technologies: ['Python', 'FastAPI', 'OCR'],
    featured: false,
    domain: 'OCR',
  },
  {
    id: 'porto-ressano',
    name: 'Sistema Integrado Porto de Maputo – Ressano Garcia',
    description:
      'Canal de comunicação entre o Porto de Maputo e a fronteira de Ressano Garcia para notificações e estimativa de chegada de veículos.',
    technologies: ['REST APIs', 'Java', 'MySQL'],
    featured: false,
    domain: 'Logística',
  },
  {
    id: 'dashboard-bi',
    name: 'Dashboard BI',
    description:
      'Dashboards analíticos com Metabase para apoiar decisões operacionais com indicadores visuais e consultas sobre dados reais.',
    technologies: ['Metabase', 'SQL', 'MySQL'],
    featured: false,
    domain: 'BI',
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
    title: 'Projetos completos & mercado',
    description: 'Consolidação de projetos de produção e procura activa do primeiro emprego como developer.',
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
  'Experiência adquirida em projetos académicos, desenvolvimento de APIs REST, modelação de bases de dados, documentação técnica, análise de requisitos e testes de software.'

export const ABOUT_PARAGRAPHS = [
  'Estudante finalista da Licenciatura em Tecnologias de Informação na Universidade Católica de Moçambique (UCM – FEG). Trabalho com desenvolvimento de software, web, bases de dados, cibersegurança e análise de dados — sempre orientado a problemas concretos.',
  'Construo sistemas que ligam departamentos, processos e dados: da secretaria académica ao porto alfandegário, da reserva hoteleira ao dashboard de decisão. Aprendo continuamente novas tecnologias e aplico boas práticas de engenharia de software em cada entrega.',
  'Objectivo imediato: iniciar carreira como Desenvolvedor de Software, contribuindo para projetos inovadores enquanto evoluo tecnicamente em equipas de produção.',
]
