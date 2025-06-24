import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import AnimatedCounter from "../components/AnimatedCounter";
import HeroExperience from "../components/models/hero_models/HeroExperience";
import { words } from "../constants";

const Hero = () => {
  useGSAP(() => {
    gsap.fromTo(
      ".hero-text h1",
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.2, duration: 1, ease: "power2.inOut" }
    );
    gsap.fromTo(
      "#view-cv-link",
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, delay: 0.8, duration: 1, ease: "power2.inOut" }
    );
  });

  return (
    <section id="hero" className="relative overflow-hidden pt-20">
      {/* This div contains the 'bg.png' image, which you correctly hid on mobile */}
      <div className="absolute top-0 left-0 z-10 hidden md:block">
        <img src="/images/bg.png" alt="Fondo" />
      </div>

      <div className="hero-layout">
        {/* LEFT: Hero Content */}
        <header className="flex flex-col justify-center md:w-full w-screen md:px-20 px-5">
          <div className="flex flex-col gap-7">
            <div className="hero-text">
              <h1>
                Desarrollo
                <span className="slide">
                  <span className="wrapper">
                    {words.map((word, index) => (
                      <span
                        key={index}
                        className="flex items-center md:gap-3 gap-1 pb-2"
                      >
                        <img
                          src={word.imgPath}
                          alt="icono"
                          className="xl:size-12 md:size-10 size-7 md:p-2 p-1 rounded-full bg-white-50"
                        />
                        <span>{word.text}</span>
                      </span>
                    ))}
                  </span>
                </span>
              </h1>
              <h1>en Proyectos Reales</h1>
              <h1>que Ofrecen Resultados</h1>
            </div>

            <p className="text-white-50 md:text-lg relative z-10 pointer-events-none">
              Soy Avendaño, un desarrollador full stack con base en Ayacucho -
              Perú. <br /> Ayudo a empresas y emprendedores a resolver problemas reales
              <br />con tecnología, creando aplicaciones modernas, eficientes y
              escalables.
            </p>

            <a
              href="/images/Avendaño_cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-sky-900 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition-colors duration-300
                         md:w-80 md:h-16 w-60 h-12 mt-4 px-6 py-3 text-lg"
              id="view-cv-link"
              aria-label="Ver Mi Currículum"
            >
              Ver Mi Currículum
            </a>
          </div>
        </header>

        {/* RIGHT: 3D Model or Visual */}
        <figure>
          {/* Apply hidden md:block here to hide the 3D model on mobile */}
          <div className="hero-3d-layout hidden md:block">
            <HeroExperience />
          </div>
        </figure>
      </div>

      <AnimatedCounter />
    </section>
  );
};

export default Hero;