import { useEffect, useState } from "react";

import { navLinks } from "../constants";

const NavBar = () => {
  // track if the user has scrolled down the page
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    // create an event listener for when the user scrolls
    const handleScroll = () => {
      // check if the user has scrolled down at least 10px
      // if so, set the state to true
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

    // add the event listener to the window
    window.addEventListener("scroll", handleScroll);

    // cleanup the event listener when the component is unmounted
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Define tu número de WhatsApp y el mensaje predefinido
  const whatsappPhoneNumber = "51918237837"; // Reemplaza con tu número de WhatsApp en formato internacional sin +
  const prefilledMessage = encodeURIComponent("¡Hola! Me gustaría contactar contigo después de visitar tu portfolio."); // Mensaje predefinido, codificado en URL

  // URL completa de WhatsApp
  const whatsappLink = `https://wa.me/${whatsappPhoneNumber}?text=${prefilledMessage}`;
  // Si no quieres mensaje predefinido, solo usa: `https://wa.me/${whatsappPhoneNumber}`

  return (
    <header className={`navbar ${scrolled ? "scrolled" : "not-scrolled"}`}>
      <div className="inner">
        <a href="#hero" className="logo">
          Avendaño
        </a>

        <nav className="desktop">
          <ul>
            {navLinks.map(({ link, name }) => (
              <li key={name} className="group">
                <a href={link}>
                  <span>{name}</span>
                  <span className="underline" />
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Botón "Contactame" ahora redirige a WhatsApp */}
        <a 
          href={whatsappLink} 
          target="_blank" // Abre el enlace en una nueva pestaña
          rel="noopener noreferrer" // Mejora la seguridad al abrir en nueva pestaña
          className="contact-btn group"
        >
          <div className="inner">
            <span>Contactame</span>
          </div>
        </a>
      </div>
    </header>
  );
}

export default NavBar;