import React, { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";

export default function ContactPage() {
  const formRef = useRef();
  const [sending, setSending] = useState(false);
  const [resultMessage, setResultMessage] = useState("");
  const [startTime, setStartTime] = useState(0);

  useEffect(() => {
    setStartTime(Date.now());
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();
    setSending(true);
    setResultMessage("");

    if (formRef.current.website.value !== "") {
      setSending(false);
      return;
    }

    if (Date.now() - startTime < 3000) {
      setResultMessage(
        "Merci de prendre un peu plus de temps pour remplir le formulaire"
      );
      setSending(false);
      return;
    }

    const lastSentTime = localStorage.getItem("lastSentTime");
    if (lastSentTime && Date.now() - parseInt(lastSentTime, 10) < 5 * 60 * 1000) {
      setResultMessage(
        "Vous avez déjà envoyé un message récemment. Merci de patienter avant de renvoyer."
      );
      setSending(false);
      return;
    }

    emailjs
      .sendForm(
        "service_quirici",
        "template_1",
        formRef.current,
        "JJC76SV2utuZlWDoW"
      )
      .then(
        () => {
          setResultMessage("Votre message a bien été envoyé !");
          setSending(false);
          formRef.current.reset();
          setStartTime(Date.now());
          localStorage.setItem("lastSentTime", Date.now());
        },
        () => {
          setResultMessage("Une erreur est survenue, merci de réessayer.");
          setSending(false);
        }
      );
  };

  return (
    <div className="bg-white px-4 sm:px-6 md:px-12 py-10 md:py-20 flex flex-col gap-10 max-w-[1200px] mx-auto">
      
      {/* TITRE + TEXTE */}
      <div className="max-w-[650px]">
        <h1 className="text-[#315747] font-archivo text-4xl sm:text-5xl md:text-6xl leading-tight">
          <span className="font-semibold">Nous </span>
          <span className="font-light italic">contacter</span>
        </h1>
        <p className="mt-4 text-black font-switzer text-sm sm:text-base md:text-lg leading-relaxed">
          Pour tout <strong>renseignement</strong> ou <strong>demande de devis</strong>, n&apos;hésitez pas à nous contacter en <strong>remplissant ce formulaire</strong> ou en nous <strong>appelant directement</strong>. Pour toute demande effectuée sur le site nous vous répondrons dans les plus brefs délais.
        </p>
      </div>

      {/* FORMULAIRE + COORDONNÉES */}
      <div className="flex flex-col md:flex-row gap-8">
        
        {/* FORMULAIRE */}
        <form
          ref={formRef}
          className="md:flex-[0_0_65%] bg-[#F3F5F7] p-6 rounded-none flex flex-col gap-4"
          onSubmit={sendEmail}
        >
          <input
            type="text"
            name="website"
            style={{ display: "none" }}
            tabIndex="-1"
            autoComplete="off"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="name"
                className="block mb-1 font-switzer text-black text-sm sm:text-base"
              >
                Votre nom et prénom
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-none focus:outline-none focus:ring-2 focus:ring-green-700 text-sm sm:text-base"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block mb-1 font-switzer text-black text-sm sm:text-base"
              >
                Votre mail
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-none focus:outline-none focus:ring-2 focus:ring-green-700 text-sm sm:text-base"
              />
            </div>

            <div>
              <label
                htmlFor="city"
                className="block mb-1 font-switzer text-black text-sm sm:text-base"
              >
                Votre ville + code postal
              </label>
              <input
                type="text"
                id="city"
                name="city"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-none focus:outline-none focus:ring-2 focus:ring-green-700 text-sm sm:text-base"
              />
            </div>

            <div>
              <label
                htmlFor="phone"
                className="block mb-1 font-switzer text-black text-sm sm:text-base"
              >
                N° de téléphone
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-none focus:outline-none focus:ring-2 focus:ring-green-700 text-sm sm:text-base"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="message"
              className="block mb-1 font-switzer text-black text-sm sm:text-base"
            >
              Votre demande
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-none resize-none focus:outline-none focus:ring-2 focus:ring-green-700 text-sm sm:text-base"
            ></textarea>
          </div>

          <button
            type="submit"
            disabled={sending}
            className="self-start bg-[#315747] text-white px-6 py-2 font-archivo font-semibold rounded-none hover:bg-green-800 transition disabled:opacity-50 text-sm sm:text-base"
          >
            {sending ? "Envoi en cours..." : "Envoyer la demande"}
          </button>

          {resultMessage && (
            <p className="mt-4 font-switzer text-sm sm:text-base text-center text-green-700">
              {resultMessage}
            </p>
          )}
        </form>

        {/* COORDONNÉES */}
        <div className="md:flex-[0_0_35%] flex flex-col justify-between gap-4">
          <div className="bg-[#315747] p-6 rounded-none text-white font-archivo flex flex-col gap-2 flex-grow">
            <h2 className="font-semibold text-lg sm:text-xl leading-snug">Nos Coordonnées</h2>
            <p className="font-switzer leading-snug text-sm sm:text-base">
              Quirci Paysage <br />
              59 Av. de l&apos;Abbaye, 77500 Chelles
            </p>
            <h3 className="font-semibold mt-6 text-sm sm:text-base leading-snug">Pour nous joindre</h3>
            <p className="font-switzer text-sm sm:text-base leading-snug">06.31.49.87.03</p>
            <p className="font-switzer text-sm sm:text-base leading-snug">quiricipaysage@orange.fr</p>
          </div>
          <div className="bg-[#315747] text-white font-archivo italic text-sm sm:text-base p-8 rounded-none flex items-center justify-center">
            Ouvert du Lundi au vendredi de 7h à 19h
          </div>
        </div>
      </div>

      {/* GOOGLE MAP */}
      <div className="w-full h-[400px] mt-8">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2634.36454039764!2d2.5922294768420444!3d48.876624299471206!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e613d79d0dc0a5%3A0x86a504e5ff1dd6ec!2s59%20Av.%20de%20l'Abbaye%2C%2077500%20Chelles!5e0!3m2!1sfr!2sfr!4v1691332839463!5m2!1sfr!2sfr"
          className="w-full sm:w-[103%] h-full border-0"
          allowFullScreen=""
          loading=""
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}
