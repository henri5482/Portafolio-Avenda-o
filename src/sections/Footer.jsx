import { socialImgs } from "../constants"; // Asegúrate de que esta ruta sea correcta

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="flex flex-col justify-center">
          {/* Puedes hacer que los términos y condiciones también sean un enlace si tienes una página para ellos */}
          <p>Términos y condiciones</p>
        </div>
        <div className="socials">
          {socialImgs.map((socialImg, index) => (
            <div key={index} className="icon">
              {/* Agregamos la etiqueta <a> y usamos socialImg.link */}
              <a
                href={socialImg.link}
                target="_blank" // Abre el enlace en una nueva pestaña
                rel="noopener noreferrer" // Mejora la seguridad
              >
                <img src={socialImg.imgPath} alt={`${socialImg.name} icon`} />
              </a>
            </div>
          ))}
        </div>
        <div className="flex flex-col justify-center">
          <p className="text-center md:text-end">
            © {new Date().getFullYear()} Avendaño. Todos los derechos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;