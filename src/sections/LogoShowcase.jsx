import { logoIconsList } from "../constants";

const LogoIcon = ({ icon }) => {
  return (
    <div className="flex-none flex-center marquee-item">
      <img src={icon.imgPath} alt={icon.name} />
    </div>
  );
};

const LogoShowcase = () => (
  <div className="md:my-20 my-10 relative py-20">
    <div className="gradient-edge" />
    <div className="gradient-edge" />
    <h2 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text- text-center opacity-70 pb-20">
      Habilidades Profesionales
    </h2> 

    <div className="marquee h-52">
      <div className="marquee-box md:gap-12 gap-5">
        {logoIconsList.map((icon, index) => (
          <LogoIcon key={index} icon={icon} />
        ))}

        {/* Duplicar los iconos para un desplazamiento continuo del marquee */}
        {logoIconsList.map((icon, index) => (
          <LogoIcon key={`duplicate-${index}`} icon={icon} />
        ))}
      </div>
    </div>
  </div>
);

export default LogoShowcase;
