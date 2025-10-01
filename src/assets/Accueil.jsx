import React, { useState, useEffect } from "react";

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
  },
  {
    key: "elagage",
    title: "Élagage",
    text: "Prenez soin de vos arbres avec nos services professionnels d'élagage.",
    bgImage: "/images/elagage.jpg",
  },
  {
    key: "entretien",
    title: "Entretien",
    text: "Maintenez la beauté de votre jardin toute l'année grâce à notre entretien régulier.",
    bgImage: "/images/entretien.jpg",
  },
];

export default function Accueil() {
  const [hovered, setHovered] = useState(null);

  return (
    <>
      {/* Section plein écran avec image de fond */}
      <div
  className="
    w-full max-w-full overflow-x-hidden
    flex flex-col items-center
    bg-cover bg-no-repeat relative position-absolute top-0 left-0 right-0
  "
  style={{
    backgroundImage: "url('/images/accueil.png')",
    backgroundPosition: "bottom center",
    height: "calc(100vh - 78px)", // 80px = hauteur de ta navbar
  }}
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
        <div
          className="
            absolute bottom-[50px]
            flex items-center gap-8
            text-white font-switzer text-center
          "
        >
          {/* Colonne 1 */}
          <div>
            <div className="text-4xl font-bold">
              +<Counter target={500} duration={6000} />
            </div>
            <div className="text-sm font-light">Clients satisfaits</div>
          </div>

          <div className="w-px h-12 bg-white opacity-70"></div>

          {/* Colonne 2 */}
          <div>
            <div className="text-4xl font-bold">
              +<Counter target={8} duration={2000} />
            </div>
            <div className="text-sm font-light">Années d’expérience</div>
          </div>

          <div className="w-px h-12 bg-white opacity-70"></div>

          {/* Colonne 3 */}
          <div>
            <div className="text-4xl font-bold">
              <Counter target={2} duration={2000} />
            </div>
            <div className="text-sm font-light">Agences</div>
          </div>
        </div>
      </div>

      {/* Section titre sous l'image */}
      <section className="max-w-7xl px-8 py-16 mx-auto text-left">
        <h2 className="text-[#315747] text-4xl font-archivo font-semibold">
          C’est quoi{" "}
          <span className="italic font-light">Quirici Paysage</span> ?
        </h2>
      </section>

      {/* Blocs de texte en noir */}
      <section className="max-w-7xl px-8 mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 pb-16">
        <p className="text-black font-switzer font-regular text-lg leading-relaxed">
          <strong>Quirici Paysage</strong> façonne des espaces extérieurs durables
          et esthétiques, adaptés à vos envies et à l’environnement.
          <br />
          <br />
          Depuis plusieurs années, notre équipe de paysagistes passionnés
          conçoit, aménage et entretient vos jardins pour aujourd’hui et pour demain.
        </p>
        <p className="text-black font-switzer font-regular text-lg leading-relaxed">
          Faites appel à nous pour donner vie à vos projets extérieurs.
          <br />
          <br />
          De l’idée à la réalisation, nous vous accompagnons à chaque étape avec
          des solutions simples, efficaces et pensées pour votre terrain.
        </p>
      </section>

<section className="max-w-7xl px-8 mx-auto flex flex-col md:flex-row items-center gap-12 pb-20">
  <div className="md:w-1/2 text-left">
<h2 className="text-[#315747] font-archivo text-4xl mb-6">
  <span className="font-bold">Retrouvez-nous partout en{" "}</span>
  <span className="italic font-normal">Île-</span>
  <span className="italic font-normal">de</span>
  <span className="italic font-normal"> France</span>
</h2>

    <p className="text-black font-switzer text-lg leading-relaxed">
      <strong>Basés à Chelles</strong>, avec notre dépôt situé à Pomponne,
      nous intervenons dans toute l’Île-de-France. Que vous soyez un
      particulier ou un professionnel, nous mettons notre savoir-faire à
      votre service, où que vous soyez dans la région.
      <br />
      <br />
      Notre emplacement stratégique en Seine-et-Marne, renforcé par notre
      dépôt à Pomponne, nous permet de couvrir rapidement les départements
      voisins, tout en assurant un service fiable et de proximité.
    </p>
  </div>
  <div className="md:w-1/2 justify-center flex">
    <img
      src="/images/map.png"
      alt="Carte Île-de-France"
      className="md:ml-0 h-auto rounded-lg"
    />
  </div>
</section>


      <section className="max-w-7xl mx-auto px-6 sm:px-8 md:px-10 mt-20 mb-28">
  <div className="flex flex-col md:flex-row h-auto md:h-[680px] overflow-hidden shadow-lg border border-white">
    {servicesSections.map(({ key, title, text, bgImage }) => {
      const isHovered = hovered === key;
      const flexGrow = hovered ? (isHovered ? 4 : 1.8) : 1.8;

      return (
        <div
          key={key}
          onMouseEnter={() => setHovered(key)}
          onMouseLeave={() => setHovered(null)}
          className="relative flex flex-col justify-end cursor-pointer transition-all duration-500 ease-in-out select-none"
          style={{
            backgroundImage: `url(${bgImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            flexGrow,
            transitionProperty: "flex-grow",
            borderRadius: 0,
            border: "none",
            minHeight: '220px',
          }}
        >
          {/* Overlay noir moitié basse avec opacité un peu plus élevée */}
          <div
            className="absolute bottom-0 left-0 w-full h-1/2"
            style={{
              backgroundColor: "rgba(0, 0, 0, 0.25)",
              backdropFilter: "blur(6px)",
              WebkitBackdropFilter: "blur(6px)",
              boxShadow: "inset 0 0 20px rgba(0,0,0,0.5)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              padding: "1.25rem 1.5rem",
              textAlign: "center",
            }}
          >
            {/* Trait jaune plus fin */}
            <div className="w-20 h-[1px] bg-yellow-400 mb-3"></div>

            {/* Titre blanc */}
            <h3 className="text-white text-3xl sm:text-4xl font-semibold mb-2 select-none">
              {title}
            </h3>

            {/* Texte blanc light */}
            <p className="text-white font-light max-w-[260px] mb-5 select-none text-sm sm:text-base">
              {text}
            </p>

            {/* Bouton image caché sur mobile */}
            <img
              src="/images/bouton-catalogue.svg"
              alt={`Voir ${title}`}
              className="hidden md:inline cursor-pointer w-7 hover:scale-110 transition-transform duration-300 select-none"
            />
          </div>
        </div>
      );
    })}
  </div>
</section>


<section className="max-w-7xl mx-auto px-8 py-8 flex flex-col md:flex-row gap-12">
  {/* Gauche : texte + bouton */}
  <div className="md:w-1/2 flex flex-col justify-center">
    <h2 className="text-3xl md:text-2xl font-semibold text-[#315747] mb-4 leading-snug">
      Offrez une nouvelle vie à votre jardin tout en maîtrisant votre budget avec Quirici Paysage !
    </h2>
    <p className="text-lg text-gray-700 mb-6 leading-snug">
      Profitez d’un remboursement de 50 % grâce au crédit d’impôt dédié à l’entretien de vos extérieurs avec jusqu’à 5000€ de dépenses par an. C’est le moment idéal pour embellir votre espace vert sans vous ruiner.<br /><br />
      Contactez-nous dès maintenant pour en savoir plus.
    </p>
    <button className="bg-[#315747] text-white py-3.5 px-8 rounded-none hover:bg-[#264736] transition w-max font-semibold select-none">
      Contactez-nous
    </button>
  </div>

  {/* Droite : bloc "Bénéficiez de 50% crédits d'impôts" */}
  <div className="md:w-1/2 bg-[#F3F5F7] p-8 flex flex-col justify-center select-none text-center rounded-none">
    <p className="text-[#315747] font-semibold text-3xl leading-snug mb-1">
      Bénéficiez de 50% de crédits d’impôts*
    </p>
    <p className="text-[#315747] text-xs font-light">
      *Selon l’article 199 sexdecies du code général des impôts
    </p>
  </div>
</section>



<section className="max-w-[1215px] mx-auto px-6 sm:px-8 md:px-10 pb-16 bg-[#F3F5F7]">
  <h3 className="text-[#315747] font-bold text-[30px] mb-8 text-left select-none">
    Service inclus
  </h3>
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-6 w-full">
    {/* Colonne 1 */}
    <div className="text-left">
      <p className="border-b border-[#315747] pb-3 mb-3 text-black text-base sm:text-lg font-light">
        Tonte de pelouse
      </p>
      <p className="border-b border-[#315747] pb-3 mb-3 text-black text-base sm:text-lg font-light">
        Taille de haies, arbustes et massifs
      </p>
      <p className="border-b border-[#315747] pb-3 mb-3 text-black text-base sm:text-lg font-light">
        Ramassage des feuilles
      </p>
      <p className="text-black text-base sm:text-lg font-light">Désherbage</p>
    </div>

    {/* Colonne 2 */}
    <div className="text-left">
      <p className="border-b border-[#315747] pb-3 mb-3 text-black text-base sm:text-lg font-light">
        Débroussaillage
      </p>
      <p className="border-b border-[#315747] pb-3 mb-3 text-black text-base sm:text-lg font-light">
        Arrosage manuel
      </p>
      <p className="border-b border-[#315747] pb-3 mb-3 text-black text-base sm:text-lg font-light">
        Petits travaux d'entretien paysager
      </p>
      <p className="text-black text-base sm:text-lg font-light">Déneigement des allées</p>
    </div>

    {/* Colonne 3 */}
    <div className="text-left">
      <p className="border-b border-[#315747] pb-3 mb-3 text-black text-base sm:text-lg font-light">
        Karchérisation
      </p>
      <p className="border-b border-[#315747] pb-3 mb-3 text-black text-base sm:text-lg font-light">
        Entretien de potagers ou jardinières
      </p>
      <p className="border-b border-[#315747] pb-3 mb-3 text-black text-base sm:text-lg font-light">
        Plantations
      </p>
      <p className="text-black text-base sm:text-lg font-light">Évacuation déchets végétaux</p>
    </div>
  </div>
</section>
<section className="mt-30 max-w-7xl mx-auto px-8 py-16 flex flex-col md:flex-row items-center gap-12">
  {/* Gauche : texte */}
  <div className="md:w-1/2 text-left">
    <h2 className="text-[#315747] text-4xl mb-6">
      <span className="font-bold">Nos</span>{" "}
      <span className="italic font-normal">ressources disponibles</span>
    </h2>

    <p className="mt-8 text-black text-lg leading-relaxed">
      <strong>Chez Quirici Paysage</strong>, rien ne se perd ! Lors de nos interventions paysagères, nous récupérons le bois, les plantes et autres végétaux issus de nos chantiers. Ces éléments sont soigneusement triés, recyclés ou transformés pour être remis en circulation (<strong>Bois de chauffage</strong>, <strong>troncs décoratifs</strong>, <strong>plantes à replanter</strong>, <strong>copeaux de paillage</strong>…)
      <br /><br />
      Vous pouvez consulter toutes nos ressources disponibles directement sur notre site. Un simple appel suffit pour passer commande et on s’occupe du reste !
    </p>

    <button className="mt-8 bg-[#315747] hover:bg-[#264736] text-white font-semibold py-3.5 px-8 rounded-none select-none transition">
      En savoir plus
    </button>
  </div>

  {/* Droite : image */}
  <div className="md:w-1/2 flex justify-center">
    <img
      src="/images/bois-accueil.jpg"
      alt="Ressources bois Quirici Paysage"
      className="rounded-lg max-w-full h-auto"
    />
  </div>
</section>


    </>
  );
}
