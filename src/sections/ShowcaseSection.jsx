import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const AppShowcase = () => {
  const sectionRef = useRef(null);
  const rydeRef = useRef(null);
  const libraryRef = useRef(null);
  const ycDirectoryRef = useRef(null);

  useGSAP(() => {
    // Animation for the main section
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      {
        opacity: 1,
        duration: 1.5,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom-=150",
          toggleActions: "play none none none",
        },
      }
    );

    // Animations for each app showcase
    // Asegúrate de que los refs sean válidos antes de usarlos
    const cards = [rydeRef.current, libraryRef.current, ycDirectoryRef.current].filter(
      Boolean
    );

    cards.forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.3 * (index + 1),
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
            toggleActions: "play none none none",
          },
        }
      );
    });
  }, []); // Dependencias vacías ya que los refs son estáticos

  return (
    <div id="work" ref={sectionRef} className="app-showcase">
      <div className="w-full">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-white">
          Mis Proyectos
        </h2>
        <div className="showcaselayout">
          {/* Proyecto Ryde (Grande) */}
          <div ref={rydeRef} className="first-project-wrapper">
            <div
              // COMBINAMOS las clases de dimensiones con las de posicionamiento y hover
              className="xl:h-[70vh] md:h-[50vh] h-96 relative overflow-hidden rounded-xl group"
            >
              <img
                src="/images/project1.png"
                alt="Ryde App Interface"
                // object-cover es para el proyecto grande
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              {/* Overlay "Ver Más" para Ryde */}
              <a
                href="https://www.clubdeingeniero.com/" // <--- CAMBIA ESTO por el enlace real de Ryde
                target="_blank"
                rel="noopener noreferrer"
                className="absolute inset-0 bg-black bg-opacity-70 flex justify-center items-center opacity-0 transition-opacity duration-300 cursor-pointer rounded-xl group-hover:opacity-80" // CAMBIO AQUÍ: opacity-80
              >
                <span className="text-white text-xl md:text-2xl font-semibold">
                  Ver Más
                </span>
              </a>
            </div>
            <div className="text-content">
              <h2>
                Página web de una de las clubs de EDUCARE INTERNACIONAL
              </h2>
              <p className="text-white-50 md:text-xl">
                Desarrollo completo de la plataforma de venta de cursos de especialización. Cada
                escuela cuenta con una Pagina web personalizada, moderna y orientada a la conversión.
              </p>
            </div>
          </div>

          <div className="project-list-wrapper overflow-hidden">
            {/* Proyecto Library (Pequeño) */}
            <div className="project relative z-10" ref={libraryRef}>
              <div
                // COMBINAMOS las clases de dimensiones con las de posicionamiento y hover
                className="xl:h-[37vh] md:h-52 lg:h-72 h-64 relative overflow-hidden rounded-xl group bg-[#FFEFDB]"
              >
                <img
                  src="/images/project2.png"
                  alt="Library Management Platform"
                  // Usamos object-cover para que la imagen llene todo el espacio
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                {/* Overlay "Ver Más" para Library */}
                <a
                  href="https://avenda-o-two.vercel.app/project" // <--- CAMBIA ESTO por el enlace real de Library
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute inset-0 bg-black bg-opacity-70 flex justify-center items-center opacity-0 transition-opacity duration-300 cursor-pointer rounded-xl group-hover:opacity-80" // CAMBIO AQUÍ: opacity-80
                >
                  <span className="text-white text-xl md:text-2xl font-semibold">
                    Ver Más
                  </span>
                </a>
              </div>
              <h2>Página web para Restaurante LUROMY</h2>
            </div>

            {/* Proyecto YC Directory (Pequeño) */}
            <div className="project relative z-10" ref={ycDirectoryRef}>
              <div
                // COMBINAMOS las clases de dimensiones con las de posicionamiento y hover
                className="xl:h-[37vh] md:h-52 lg:h-72 h-64 relative overflow-hidden rounded-xl group bg-[#FFE7EB]"
              >
                <img
                  src="/images/project3.png"
                  alt="YC Directory App"
                  // Usamos object-cover para que la imagen llene todo el espacio
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                {/* Overlay "Ver Más" para YC Directory */}
                <a
                  href="https://avenda-o-two.vercel.app/project" // <--- CAMBIA ESTO por el enlace real de YC Directory
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute inset-0 bg-black bg-opacity-70 flex justify-center items-center opacity-0 transition-opacity duration-300 cursor-pointer rounded-xl group-hover:opacity-80" // CAMBIO AQUÍ: opacity-80
                >
                  <span className="text-white text-xl md:text-2xl font-semibold">
                    Ver Más
                  </span>
                </a>
              </div>
              <h2>DXN Ayacucho – Tienda Online</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppShowcase;