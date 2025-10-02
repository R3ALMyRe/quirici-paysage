import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

// Compteur animé
function Counter({ target, duration }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = target / (duration / 10);
    const step = () => {
      start += increment;
      if (start < target) {
        setCount(Math.floor(start));
        requestAnimationFrame(step);
      } else {
        setCount(target);
      }
    };
    requestAnimationFrame(step);
  }, [target, duration]);

  return count;
}

const servicesSections = [
  {
    key: "creation",
    title: "Création",
    text: "Façonnez votre espace extérieur avec créativité et expertise.",
    bgImage: "/images/creation.jpg",
    link: "/creation",
  },
  {
    key: "elagage",
    title: "Élagage",
    text: "Prenez soin de vos arbres avec nos services professionnels d'élagage.",
    bgImage: "/images/elagage.jpg",
    link: "/elagage",
  },
  {
    key: "entretien",
    title: "Entretien",
    text: "Maintenez la beauté de votre jardin toute l'année grâce à notre entretien régulier.",
    bgImage: "/images/entretien.jpg",
    link: "/entretien",
  },
];

export default function Accueil() {
  const [hovered, setHovered] = useState(null);

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <>
      {/* Section plein écran avec image de fond */}
      <motion.div
        className="
          w-full max-w-full overflow-x-hidden
          flex flex-col items-center
          bg-cover bg-no-repeat relative position-absolute top-0 left-0 right-0
        "
        style={{
          backgroundImage: "url('/images/accueil.png')",
          backgroundPosition: "bottom center",
          height: "calc(100vh - 78px)",
        }}
        initial="hidden"
        animate="visible"
        variants={fadeUp}
      >
        {/* Titre en haut */}
        <div className="mt-[100px]">
          <img
            src="/images/titreaccueil.jpg"
            alt="Titre Accueil"
            className="max-w-[80vw] h-auto pointer-events-none select-none"
            draggable={false}
            onContextMenu={(e) => e.preventDefault()}
          />
        </div>

{/* Bloc statistiques */}
<motion.div
  className="
    absolute bottom-[50px]
    flex items-center gap-4 sm:gap-8
    text-white font-switzer text-center
    justify-center
  "
  initial="hidden"
  animate="visible"
  variants={fadeUp}
>
  <div>
    <div className="text-2xl sm:text-4xl font-bold">
      +<Counter target={500} duration={4000} />
    </div>
    <div className="text-sm font-light">Clients satisfaits</div>
  </div>

  <div className="w-px h-8 sm:h-12 bg-white opacity-70"></div>

  <div>
    <div className="text-2xl sm:text-4xl font-bold">
      +<Counter target={8} duration={2000} />
    </div>
    <div className="text-sm font-light">Années d’expérience</div>
  </div>

  <div className="w-px h-8 sm:h-12 bg-white opacity-70"></div>

  <div>
    <div className="text-2xl sm:text-4xl font-bold">
      <Counter target={2} duration={2000} />
    </div>
    <div className="text-sm font-light">Agences</div>
  </div>
</motion.div>



      </motion.div>

      {/* Section titre sous l'image */}
      <motion.section
        className="max-w-7xl px-8 py-16 mx-auto text-left"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
      >
        <h2 className="text-[#315747] text-4xl font-archivo font-semibold">
          C’est quoi <span className="italic font-light">Quirici Paysage</span> ?
        </h2>
      </motion.section>

      {/* Blocs de texte */}
      <motion.section
        className="max-w-7xl px-8 mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 pb-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
      >
  {/* Colonne gauche */}
  <p className="text-black font-switzer font-regular text-lg leading-relaxed">
    <strong>Quirici Paysage</strong> façonne des espaces extérieurs durables et esthétiques, adaptés à vos envies et à l’environnement.
    <br /><br />
    Depuis plusieurs années, notre équipe de paysagistes passionnés conçoit, aménage et entretient vos jardins pour aujourd’hui et pour demain.
  </p>

  {/* Colonne droite */}
  <p className="text-black font-switzer font-regular text-lg leading-relaxed">
    Nous proposons également des services professionnels d’<strong>élagage et d’abattage d’arbres</strong>, pour assurer la sécurité et la santé de vos plantations. Nos experts interviennent avec soin, respect de l’environnement et équipement adapté pour toutes tailles et espèces d’arbres.
    <br /><br />
    Faites appel à nous pour donner vie à vos projets extérieurs. De l’idée à la réalisation, nous vous accompagnons à chaque étape avec des solutions simples, efficaces et pensées pour votre terrain.
  </p>
      </motion.section>

      {/* Zone géographique */}
      <motion.section
        className="max-w-7xl px-8 mx-auto flex flex-col md:flex-row items-center gap-12 pb-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
      >
        <div className="md:w-1/2 text-left">
          <h2 className="text-[#315747] font-archivo text-4xl mb-6">
            <span className="font-bold">Retrouvez-nous partout en </span>
            <span className="italic font-normal">Île-de-France</span>
          </h2>
          <p className="text-black font-switzer text-lg leading-relaxed">
            <strong>Basés à Chelles</strong>, avec notre dépôt situé à Pomponne,
            nous intervenons dans toute l’Île-de-France. Que vous soyez un particulier ou un professionnel, nous mettons notre savoir-faire à votre service, où que vous soyez dans la région.
          </p>
        </div>
        <div className="md:w-1/2 justify-center flex">
          <img
            src="/images/map.png"
            alt="Carte Île-de-France"
            className="md:ml-0 h-auto rounded-lg"
          />
        </div>
      </motion.section>

      {/* Services (mobile et desktop) */}
      <motion.section
        className="max-w-7xl mx-auto px-6 sm:px-8 md:px-10 mt-20 mb-28"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
      >
        {/* Mobile */}
        <div className="flex flex-col gap-10 md:hidden">
          {servicesSections.map(({ key, title, text, bgImage }) => (
            <motion.div
              key={key}
              className="flex flex-col items-center"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <img src={bgImage} alt={title} className="w-full h-56 object-cover rounded-lg shadow-md" />
              <h3 className="text-[#315747] text-2xl font-semibold mt-4">{title}</h3>
              <p className="text-gray-700 text-center text-sm px-4 mt-2">{text}</p>
              <Link
                to={`/${key}`}
                className="mt-4 bg-[#315747] text-white font-medium py-2 px-6 hover:bg-[#264736] transition rounded-none"
              >
                Découvrir
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Desktop */}
        <div className="hidden md:flex flex-row h-[680px] overflow-hidden shadow-lg border border-white">
          {servicesSections.map(({ key, title, text, bgImage }) => {
            const isHovered = hovered === key;
            const flexGrow = hovered ? (isHovered ? 4 : 1.8) : 1.8;

            return (
              <motion.div
                key={key}
                onMouseEnter={() => setHovered(key)}
                onMouseLeave={() => setHovered(null)}
                className="relative flex flex-col justify-end select-none"
                style={{
                  backgroundImage: `url(${bgImage})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  flexGrow,
                }}
                animate={{ flexGrow }}
                transition={{ duration: 0.5 }}
              >
                <div
                  className="absolute bottom-0 left-0 w-full h-1/2 flex flex-col items-center justify-center p-5 text-center"
                  style={{
                    backgroundColor: "rgba(0, 0, 0, 0.25)",
                    backdropFilter: "blur(6px)",
                    WebkitBackdropFilter: "blur(6px)",
                    boxShadow: "inset 0 0 20px rgba(0,0,0,0.5)",
                  }}
                >
                  <div className="w-20 h-[1px] bg-yellow-400 mb-3"></div>
                  <h3 className="text-white text-3xl sm:text-4xl font-semibold mb-2">{title}</h3>
                  <p className="text-white font-light max-w-[260px] mb-5 text-sm sm:text-base">{text}</p>
                  <Link to={`/${key}`}>
                    <img
                      src="/images/bouton-catalogue.svg"
                      alt={`Voir ${title}`}
                      className="cursor-pointer w-7 hover:scale-110 transition-transform duration-300"
                    />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.section>

      {/* CTA Contact */}
      <motion.section
        className="max-w-7xl mx-auto px-8 py-8 flex flex-col md:flex-row gap-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
      >
        <div className="md:w-1/2 flex flex-col justify-center">
          <h2 className="text-3xl font-semibold text-[#315747] mb-4">
            Offrez une nouvelle vie à votre jardin avec Quirici Paysage !
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            Profitez d’un remboursement de 50 % grâce au crédit d’impôt dédié à vos extérieurs avec jusqu’à 5000€ de dépenses par an.
          </p>
          <Link
            to="/contact"
            className="bg-[#315747] text-white py-3.5 px-8 hover:bg-[#264736] transition w-max font-semibold"
          >
            Contactez-nous
          </Link>
        </div>
        <div className="md:w-1/2 bg-[#F3F5F7] p-8 flex flex-col justify-center text-center">
          <p className="text-[#315747] font-semibold text-3xl mb-1">
            Bénéficiez de 50% de crédits d’impôts*
          </p>
          <p className="text-[#315747] text-xs font-light">
            *Selon l’article 199 sexdecies du code général des impôts
          </p>
        </div>
      </motion.section>

      {/* Services inclus */}
      <motion.section
        className="max-w-[1215px] mx-auto px-6 sm:px-8 md:px-10 pb-16 bg-[#F3F5F7]"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
      >
        <h3 className="text-[#315747] font-bold text-[30px] mb-8">Service inclus</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-6">
          <div className="text-left">
            <p className="border-b border-[#315747] pb-3 mb-3">Tonte de pelouse</p>
            <p className="border-b border-[#315747] pb-3 mb-3">Taille de haies</p>
            <p className="border-b border-[#315747] pb-3 mb-3">Ramassage des feuilles</p>
            <p>Désherbage</p>
          </div>
          <div className="text-left">
            <p className="border-b border-[#315747] pb-3 mb-3">Débroussaillage</p>
            <p className="border-b border-[#315747] pb-3 mb-3">Arrosage manuel</p>
            <p className="border-b border-[#315747] pb-3 mb-3">Petits travaux</p>
            <p>Déneigement des allées</p>
          </div>
          <div className="text-left">
            <p className="border-b border-[#315747] pb-3 mb-3">Karchérisation</p>
            <p className="border-b border-[#315747] pb-3 mb-3">Entretien de potagers</p>
            <p className="border-b border-[#315747] pb-3 mb-3">Plantations</p>
            <p>Évacuation déchets végétaux</p>
          </div>
        </div>
      </motion.section>

      {/* Ressources */}
      <motion.section
        className="max-w-7xl mx-auto px-8 py-16 flex flex-col md:flex-row items-center gap-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
      >
        <div className="md:w-1/2 text-left">
          <h2 className="text-[#315747] text-4xl mb-6">
            <span className="font-bold">Nos</span>{" "}
            <span className="italic">ressources disponibles</span>
          </h2>
<p className="mt-8 text-black text-lg leading-relaxed"> <strong>Chez Quirici Paysage</strong>, rien ne se perd ! Lors de nos interventions paysagères, nous récupérons le bois, les plantes et autres végétaux issus de nos chantiers. Ces éléments sont soigneusement triés, recyclés ou transformés pour être remis en circulation (<strong>Bois de chauffage</strong>, <strong>troncs décoratifs</strong>, <strong>plantes à replanter</strong>, <strong>copeaux de paillage</strong>…) <br /><br /> Vous pouvez consulter toutes nos ressources disponibles directement sur notre site. Un simple appel suffit pour passer commande et on s’occupe du reste ! </p>
          <Link
            to="/ventes"
            className="mt-8 bg-[#315747] hover:bg-[#264736] text-white font-semibold py-3.5 px-8 transition inline-block"
          >
            En savoir plus
          </Link>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <img
            src="/images/bois-accueil.jpg"
            alt="Ressources bois"
            className="rounded-lg max-w-full h-auto"
          />
        </div>
      </motion.section>
    </>
  );
}
