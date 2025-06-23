import { useRef, useState } from "react";
// import emailjs from "@emailjs/browser"; // Ya no es necesario para la redirección a WhatsApp

import TitleHeader from "../components/TitleHeader";
import ContactExperience from "../components/models/contact/ContactExperience";

const Contact = () => {
  const formRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true); // Mostrar estado de cargando (brevemente)

    // Define tu número de WhatsApp (reemplázalo con tu número real, incluyendo el código de país)
    const whatsappNumber = "51918237837"; // Ejemplo: +51 987 654 321 (reemplaza las X con tu número)

    // Codifica los datos del formulario para el mensaje de WhatsApp
    const whatsappMessage = `¡Hola!%0AMi nombre es: ${encodeURIComponent(form.name)}%0AMi email es: ${encodeURIComponent(form.email)}%0AMensaje: ${encodeURIComponent(form.message)}`;

    // Construye la URL de WhatsApp
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

    // Redirige a WhatsApp
    window.open(whatsappUrl, "_blank");

    // Opcional: Reinicia el formulario y detiene el estado de carga después de un breve retraso
    // (Este retraso ayuda a asegurar que la redirección comience antes de que se perciba el reinicio del formulario)
    setTimeout(() => {
      setForm({ name: "", email: "", message: "" });
      setLoading(false);
    }, 1000); // Retraso de 1 segundo
  };

  return (
    <section id="contact" className="flex-center section-padding">
      <div className="w-full h-full md:px-10 px-5">
        <TitleHeader
          title="Ponte en Contacto – Conectemos"
          sub="💬 ¿Preguntas o ideas? ¡Hablemos! 🚀"
        />
        <div className="grid-12-cols mt-16">
          <div className="xl:col-span-5">
            <div className="flex-center card-border rounded-xl p-10">
              <form
                ref={formRef}
                onSubmit={handleSubmit}
                className="w-full flex flex-col gap-7"
              >
                <div>
                  <label htmlFor="name">Tu nombre</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="¿Cuál es tu nombre?"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email">Tu correo electrónico</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="¿Cuál es tu dirección de correo?"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message">Tu mensaje</label>
                  <textarea
                    id="message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="¿Cómo puedo ayudarte?"
                    rows="5"
                    required
                  />
                </div>

                <button type="submit">
                  <div className="cta-button group">
                    <div className="bg-circle" />
                    <p className="text">
                      {loading ? "Redirigiendo a WhatsApp..." : "Enviar por WhatsApp"}
                    </p>
                    <div className="arrow-wrapper">
                      <img src="/images/arrow-down.svg" alt="arrow" />
                    </div>
                  </div>
                </button>
              </form>
            </div>
          </div>
          <div className="xl:col-span-7 min-h-96">
            <div className="bg-[#cd7c2e] w-full h-full hover:cursor-grab rounded-3xl overflow-hidden">
              <ContactExperience />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;