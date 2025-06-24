const navLinks = [
  {
    name: "Trabajo", // Traducido
    link: "#work",
  },
  {
    name: "Experiencia", // Traducido
    link: "#experience",
  },
  {
    name: "Habilidades", // Traducido
    link: "#skills",
  },
  {
    name: "Diseños", // Traducido
    link: "https://www.behance.net/henridelacruz",
  },
  {
    name: "Testimonios", // Traducido
    link: "#testimonials",
  },
];

const words = [
  { text: "Ideas", imgPath: "/images/ideas.svg" }, // Puedes traducir estos si quieres
  { text: "Conceptos", imgPath: "/images/concepts.svg" }, // Por ejemplo, "Ideas" a "Ideas" (ya es español),
  { text: "Diseños", imgPath: "/images/designs.svg" }, // "Concepts" a "Conceptos", "Designs" a "Diseños",
  { text: "Código", imgPath: "/images/code.svg" }, // "Code" a "Código"
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Conceptos", imgPath: "/images/concepts.svg" },
  { text: "Diseños", imgPath: "/images/designs.svg" },
  { text: "Código", imgPath: "/images/code.svg" },
];

const counterItems = [
  { value: 3, suffix: "+", label: "Años de Experiencia" }, // Traducido
  { value: 200, suffix: "+", label: "Campañas Realizadas" }, // Traducido
  { value: 280, suffix: "+", label: "Proyectos Completados" }, // Traducido
  { value: 1000, suffix: "+", label: "Diseños" }, // Traducido
];

const logoIconsList = [
  {
    imgPath: "/images/logos/company-logo-1.png",
  },
  {
    imgPath: "/images/logos/company-logo-2.png",
  },
  {
    imgPath: "/images/logos/company-logo-12.png",
  },
  {
    imgPath: "/images/logos/company-logo-4.png",
  },
  {
    imgPath: "/images/logos/company-logo-5.png",
  },
  {
    imgPath: "/images/logos/company-logo-6.png",
  },

  {
    imgPath: "/images/logos/company-logo-9.png",
  },
  {
    imgPath: "/images/logos/company-logo-10.png",
  },
  {
    imgPath: "/images/logos/company-logo-11.png",
  },
  {
    imgPath: "/images/logos/company-logo-13.png",
  },
  {
    imgPath: "/images/logos/company-logo-14.png",
  },
];

const abilities = [
  {
    imgPath: "/images/seo.png",
    title: "Soluciones Creativas",
    desc: "Integro diseño, desarrollo y estrategia digital para crear experiencias visuales y funcionales que impactan.",
  },
  {
    imgPath: "/images/chat.png",
    title: "Colaboración Efectiva",
    desc: "Trabajo en equipo con enfoque ágil, aportando ideas claras y ejecutando proyectos con eficiencia y compromiso.",
  },
  {
    imgPath: "/images/time.png",
    title: "Espíritu Competitivo",
    desc: "Apasionado por destacar, me esfuerzo en cada proyecto con mentalidad ganadora, innovación constante y visión de crecimiento.",
  },
];

const techStackImgs = [
  {
    name: "React Developer",
    imgPath: "/images/logos/react.png",
  },
  {
    name: "Python Developer",
    imgPath: "/images/logos/python.svg",
  },
  {
    name: "Backend Developer",
    imgPath: "/images/logos/node.png",
  },
  {
    name: "Interactive Developer",
    imgPath: "/images/logos/three.png",
  },
  {
    name: "Project Manager",
    imgPath: "/images/logos/git.svg",
  },
];

const techStackIcons = [
  {
    name: "Desarrollador de React",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "Desarrollador de Python",
    modelPath: "/models/python-transformed.glb",
    scale: 0.8,
    rotation: [0, 0, 0],
  },
  {
    name: "Desarrollador de backend",
    modelPath: "/models/node-transformed.glb",
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: "Desarrollador interactivo",
    modelPath: "/models/three.js-transformed.glb",
    scale: 0.05,
    rotation: [0, 0, 0],
  },
  {
    name: "Gerente de proyectos",
    modelPath: "/models/git-svg-transformed.glb",
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
];

const expCards = [
  {
    review:
      "Henri fue clave en la transformación digital de nuestra plataforma educativa. Sus desarrollos optimizaron tanto el diseño como la funcionalidad de nuestros servicios.",
    imgPath: "/images/exp3.png",
    logoPath: "/images/logo3.png",
    title: "Desarrollador Full Stack y Diseñador en Marketing Digital",
    date: "Marzo 2025 – Julio 2025",
    responsibilities: [
      "Diseñé certificados, banners y flyers para campañas de marketing de cada nuevo curso.",
      "Ejecuté estrategias de marketing digital en redes sociales, incluyendo videos promocionales.",
      "Desarrollé landing pages y modernicé el sistema web de cada escuela, creando sitios modernos y funcionales.",
    ],
  },
  {
    review:
      "Henri aportó ideas frescas y habilidades técnicas que potenciaron nuestra imagen de marca y visibilidad en línea.",
    imgPath: "/images/exp2.png",
    logoPath: "/images/logo2.png",
    title: "Desarrollador Full Stack y Asistente en Marketing Digital",
    date: "Noviembre 2024 - Enero 2025",
    responsibilities: [
      "Diseñé la identidad visual de la marca (branding, flyers y materiales para las campañas).",
      "Desarrollé estrategias de marketing digital, incluyendo contenido audiovisual y gestión de redes.",
      "Administré redes sociales y creé páginas web, mejorando el posicionamiento en Google y RRSS.",
    ],
  },
  {
    review:
      "Henri demostró gran capacidad para desarrollar sistemas completos, mejorando notablemente la experiencia del usuario en nuestras plataformas web.",
    imgPath: "/images/exp1.png",
    logoPath: "/images/logo1.png",
    title: "Ingeniero de Sistemas y Software",
    date: "Enero 2024 - Julio 2024",
    responsibilities: [
      "Responsable del desarrollo completo de las páginas web, optimizando la experiencia de usuarios y clientes.",
      "Creación de soluciones digitales y estrategias de marketing para fortalecer la presencia en línea y la identidad de marca.",
      "Diseño de elementos visuales, incluyendo gráficos, para mejorar la comunicación y atractivo visual de la marca.",
    ],
  },
];

const expLogos = [
  {
    name: "logo1",
    imgPath: "/images/logo1.png",
  },
  {
    name: "logo2",
    imgPath: "/images/logo2.png",
  },
  {
    name: "logo3",
    imgPath: "/images/logo3.png",
  },
];

const testimonials = [
  {
    name: "EDUCARE INTERNACIONAL",
    username: "@estherhoward",
    review:
      "Henri transformó completamente nuestra plataforma educativa. Su trabajo en diseño de certificados, campañas y páginas web fue clave para el éxito de nuestros cursos.",
    rating: 5,
    company: "EDUCARE INTERNACIONAL",
  },
  {
    name: "EBT CHIKEN Y HARUSAM",
    username: "@wadewarren",
    review:
      "Gracias a Henri, nuestra marca ganó presencia en redes y Google. Su enfoque creativo y técnico en branding y desarrollo web nos ayudó a conectar mejor con los clientes.",
    rating: 5,
    company: "EBT CHIKEN Y HARUSAM",
  },
  {
    name: "GRUPO LUTECCI",
    username: "@guyhawkins",
    review:
      "El sitio web que desarrolló Henri superó nuestras expectativas. Siempre atento a los detalles y comprometido con la calidad. Altamente recomendado.",
    rating: 5,
    company: "GRUPO LUTECCI",
  },
  {
    name: "GRUPO LUTECCI",
    username: "@marvinmckinney",
    review:
      "Henri fue fundamental para modernizar nuestras páginas web y aplicar estrategias de marketing efectivas. Su capacidad para combinar desarrollo con diseño es excelente.",
    rating: 5,
    company: "GRUPO LUTECCI",
  },
  {
    name: "EDUCARE INTERNACIONAL",
    username: "@floydmiles",
    review:
      "La dedicación de Henri y su rapidez en resolver problemas marcaron la diferencia en nuestros proyectos. Profesional en todo sentido.",
    rating: 5,
    company: "EDUCARE INTERNACIONAL",
  },
  {
    name: "Proyectos Freelance",
    username: "@albertflores",
    review:
      "Combina diseño y desarrollo con una visión moderna. Henri entregó soluciones funcionales y visualmente atractivas para nuestra presencia digital.",
    rating: 5,
    company: "Proyectos Freelance",
  },
];

const socialImgs = [
  {
    name: "fb",
    imgPath: "/images/fb.png",
    link: "https://www.facebook.com/henri76300424", // ¡Cambia esto!
  },

  {
    name: "linkedin",
    imgPath: "/images/linkedin.png",
    link: "https://www.linkedin.com/in/henri-de-la-cruz-avenda%C3%B1o-855043228/", // ¡Cambia esto!
  },
  {
    name: "whatsapp",
    imgPath: "/images/whatsapp.png", // Asegúrate de tener esta imagen en tu carpeta /public/images
    link: "https://wa.me/51918237837?text=Hola!%20Vengo%20de%20tu%20sitio%20web.", // ¡Cambia esto con tu número y mensaje!
  },
];

export {
  abilities,
  counterItems,
  expCards,
  expLogos,
  logoIconsList,
  navLinks,
  socialImgs,
  techStackIcons,
  techStackImgs,
  testimonials,
  words,
};
