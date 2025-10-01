import React, { useState, useEffect } from "react";

export default function Creation() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  // Vérifie si on est sur mobile
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize(); // Vérif initiale
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="w-full flex flex-col items-center">
      {/* Conteneur mobile : titre au-dessus */}
      <div className="w-full mt-16 flex flex-col items-center md:hidden">
        <img
          src="/images/titre-creation-mobile.png"
          alt="Titre Création"
          className="h-44 sm:h-48 object-contain max-w-[95%]"
        />
      </div>

      {/* Conteneur tablette/PC : titre en haut à gauche */}
      <div className="relative w-full mt-16 hidden md:block">
        <img
          src="/images/img-creation.png"
          alt="Fond Création"
          className="w-full h-auto max-h-[90vh] object-contain mx-auto"
        />
        <div className="absolute top-8 left-[15%] p-2 rounded-md bg-white/10 backdrop-blur-[2px]">
          <img
            src="/images/titre-creation.png"
            alt="Titre Création"
            className="h-28 lg:h-36 object-contain"
          />
        </div>
      </div>

      {/* Bloc 1 : Présentation */}
      <section className="max-w-7xl w-full px-1 sm:px-2 md:px-8 mx-auto flex flex-col md:flex-row gap-10 mt-16">
        <div className="w-full lg:w-1/2 text-left">
          <h2 className="text-[#315747] font-archivo mb-4 leading-snug text-xl sm:text-2xl md:text-3xl lg:text-4xl">
            <span className="font-bold">Nos</span>{" "}
            <span className="font-light italic">prestations</span>{" "}
            <span className="font-bold">de</span>{" "}
            <span className="font-light italic">création paysagère</span>
          </h2>

          <p className="text-black font-switzer leading-relaxed mb-3 text-xs sm:text-sm md:text-base lg:text-base">
            Chez <strong>Quirici Paysage</strong>, chaque jardin ou espace
            extérieur est conçu pour être <strong>cohérent</strong>,{" "}
            <strong>fonctionnel</strong> et <strong>esthétique</strong>, en
            reflétant vos besoins et votre style. Que ce soit pour{" "}
            <strong>aménager un terrain vierge</strong> ou{" "}
            <strong>améliorer un espace existant</strong>, nous accompagnons
            chaque étape du projet, de la préparation du chantier à la
            réalisation finale.
          </p>

          <p className="text-black font-switzer leading-relaxed mb-3 text-xs sm:text-sm md:text-base lg:text-base">
            Nous privilégions des <strong>matériaux durables</strong> et des{" "}
            <strong>aménagements sûrs</strong>, en respectant
            l’environnement et l’écosystème local, afin de créer des espaces
            agréables, harmonieux et pensés pour durer dans le temps.
          </p>

          <p className="text-black font-switzer leading-relaxed text-xs sm:text-sm md:text-base lg:text-base">
            Pour concrétiser vos projets, <strong>Quirici Paysage</strong> met
            en œuvre une <strong>large gamme de travaux</strong>, adaptés à vos
            besoins et à l’aménagement de votre terrain. Nous intervenons aussi
            bien sur les <strong>aménagements paysagers</strong> que sur la{" "}
            <strong>maçonnerie paysagère</strong>, pour créer des espaces
            fonctionnels, esthétiques et durables.
          </p>
        </div>

        <div className="lg:w-1/2 flex justify-center items-start">
          <img
            src="/images/creation-presentation.jpg"
            alt="Présentation Création Paysagère"
            className="h-full w-auto object-cover rounded-lg lg:rounded-tr-[80px]"
          />
        </div>
      </section>

      {/* Bloc 2 : Prestations listées */}
      <section className="max-w-7xl w-full px-1 sm:px-2 md:px-8 mx-auto flex flex-col lg:flex-row gap-12 mt-16">
        {/* Colonne gauche */}
        <div className="lg:w-1/2 text-left">
          <ul className="text-black font-switzer text-xs sm:text-sm md:text-base lg:text-base leading-relaxed border-gray-300">
            {[
              "🢒 Terrassement : bois, pierre, dalles…",
              "🢒 Engazonnement et plantations",
              "🢒 Installation d’arrosage automatique / robots de tonte",
              "🢒 Création d’allées et chemins",
              "🢒 Construction d’abris de petite et moyenne surface",
              "🢒 Enlèvement de souches",
            ].map((service, i, arr) => (
              <li
                key={i}
                className={`border-b border-gray-300 py-1.5 ${
                  i === arr.length - 1 ? "border-b-0" : ""
                }`}
              >
                {service}
              </li>
            ))}
          </ul>
        </div>

        {/* Colonne droite */}
        <div className="lg:w-1/2 text-left">
          <ul className="text-black font-switzer text-xs sm:text-sm md:text-base lg:text-base leading-relaxed border-gray-300">
            {[
              "🢒 Construction de murs et murets",
              "🢒 Installation de clôtures, portails et accès",
              "🢒 Création de terrasses",
            ].map((service, i, arr) => (
              <li
                key={i}
                className={`border-b border-gray-300 py-1.5 ${
                  i === arr.length - 1 ? "border-b-0" : ""
                }`}
              >
                {service}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Bloc 3 : Expertise maçonnerie */}
      <section className="max-w-7xl w-full px-1 sm:px-2 md:px-8 mx-auto flex flex-col lg:flex-row gap-12 mt-16">
        <div className="lg:w-1/2 flex justify-center items-start order-2 lg:order-1">
          <img
            src="/images/creation-maconnerie.jpg"
            alt="Maçonnerie paysagère"
            className="h-full w-auto object-cover rounded-lg lg:rounded-bl-[80px]"
          />
        </div>

        <div className="lg:w-1/2 text-left flex flex-col justify-start gap-3 order-1 lg:order-2">
          <h2 className="text-[#315747] font-archivo leading-snug text-xl sm:text-2xl md:text-3xl lg:text-4xl">
            <span className="font-bold">Expertise en</span>{" "}
            <span className="font-light italic">maçonnerie paysagère</span>{" "}
            <span className="font-bold">et</span>{" "}
            <span className="font-light italic">qualité des matériaux</span>
          </h2>

          <p className="text-black font-switzer leading-relaxed text-xs sm:text-sm md:text-base lg:text-base">
            Forts de plus de <strong>7 ans d’expérience</strong>, nous avons
            développé une véritable compétence en{" "}
            <strong>maçonnerie paysagère</strong>, ce qui nous permet de
            garantir la <strong>solidité</strong>, la{" "}
            <strong>durabilité</strong> et l’<strong>esthétique</strong> de
            chaque réalisation.
          </p>

          <p className="text-black font-switzer leading-relaxed text-xs sm:text-sm md:text-base lg:text-base">
            Nous sélectionnons des <strong>matériaux de qualité</strong>,
            respectueux de l’environnement et harmonieux avec votre espace.
            Chaque chantier est traité avec soin, quelle que soit sa taille,
            pour offrir un résultat <strong>précis</strong>,{" "}
            <strong>fonctionnel</strong> et <strong>durable</strong> dans le
            temps.
          </p>
        </div>
      </section>

      {/* Bloc 4 : Galerie */}
      <section className="max-w-7xl w-full px-2 sm:px-4 md:px-12 mx-auto flex flex-col gap-8 mt-24">
        <h2 className="text-[#315747] text-xl sm:text-2xl md:text-3xl lg:text-4xl font-archivo leading-snug text-left lg:max-w-[70%]">
          <span className="font-bold">Exemples de nos</span>{" "}
          <span className="font-light italic">créations paysagères</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 justify-center">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="w-full h-56 overflow-hidden rounded-md cursor-pointer"
              onClick={() =>
                !isMobile && setSelectedImage(`/images/creation-galerie-${i + 1}.jpg`)
              }
            >
              <img
                src={`/images/creation-galerie-${i + 1}.jpg`}
                alt={`Galerie Création ${i + 1}`}
                className={`w-full h-full object-cover transition-transform duration-500 ${
                  !isMobile ? "hover:scale-110" : ""
                }`}
              />
            </div>
          ))}
        </div>
      </section>

      {/* Lightbox */}
      {!isMobile && selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <img
            src={selectedImage}
            alt="Agrandissement"
            className="w-[50vw] h-auto object-contain"
          />
        </div>
      )}
    </div>
  );
}
