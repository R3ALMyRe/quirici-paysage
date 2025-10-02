import React, { useState, useEffect } from "react";

export default function Entretien() {

  const [selectedImage, setSelectedImage] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  // Vérifie si on est sur mobile
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize(); // vérification initiale
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="w-full flex flex-col items-center">
      {/* Conteneur mobile : uniquement le titre */}
      <div className="w-full mt-16 flex flex-col items-center md:hidden">
        <img
          src="/images/titre-entretien-mobile.png"
          alt="Titre Entretien"
          className="h-44 sm:h-48 object-contain max-w-[95%]"
        />
      </div>

      {/* Conteneur tablette/PC : titre en haut à gauche de l'image */}
      <div className="relative w-full mt-16 hidden md:block">
        <img
          src="/images/img-entretien.webp"
          alt="Fond Entretien"
          className="w-full h-auto max-h-[90vh] object-contain mx-auto"
        />
        <div className="absolute top-8 left-[15%] p-2 rounded-md bg-white/10 backdrop-blur-[2px]">
          <img
            src="/images/titre-entretien.png"
            alt="Titre Entretien"
            className="h-28 lg:h-36 object-contain"
          />
        </div>
      </div>

      {/* Bloc 1 */}
      <section className="max-w-7xl w-full px-1 sm:px-2 md:px-8 mx-auto flex flex-col md:flex-row gap-10 mt-16">
        <div className="w-full lg:w-1/2 text-left">
          <h2 className="text-[#315747] font-archivo mb-4 leading-snug text-xl sm:text-2xl md:text-3xl lg:text-4xl">
            <span className="font-bold">Une</span>{" "}
            <span className="font-light italic">expertise adaptée</span>{" "}
            <span className="font-bold">à chaque besoin</span>
          </h2>

          <p className="text-black font-switzer leading-relaxed mb-3 text-xs sm:text-sm md:text-base lg:text-base">
            Chez <strong>Quirici Paysage</strong>, nous mettons un point
            d’honneur à respecter les <strong>délais</strong>, les{" "}
            <strong>contraintes</strong> et les{" "}
            <strong>spécificités</strong> de chaque projet. Que l’intervention
            soit <strong>ponctuelle</strong> ou <strong>régulière</strong>, nous
            veillons à agir avec <strong>soin</strong> et{" "}
            <strong>discrétion</strong>, dans le respect de votre environnement.
          </p>

          <p className="text-black font-switzer leading-relaxed text-xs sm:text-sm md:text-base lg:text-base">
            Nous proposons des prestations destinées aussi bien aux{" "}
            <strong>particuliers</strong> qu’aux{" "}
            <strong>professionnels</strong>, avec la possibilité d’établir un{" "}
            <strong>contrat d’entretien annuel</strong> ou{" "}
            <strong>saisonnier</strong> selon la <strong>surface</strong>, le{" "}
            <strong>type de végétation</strong> et la{" "}
            <strong>fréquence souhaitée</strong>.
          </p>
        </div>
      </section>

      {/* Bloc 2 */}
      <section className="max-w-7xl w-full px-1 sm:px-2 md:px-8 mx-auto flex flex-col gap-12 mt-16">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Texte */}
          <div className="lg:w-1/2 text-left flex flex-col justify-start gap-3">
            <h2 className="text-[#315747] font-archivo leading-snug text-xl sm:text-2xl md:text-3xl lg:text-4xl">
              <span className="font-bold">Nos</span>{" "}
              <span className="font-light italic">prestations d’entretien</span>
            </h2>

            <p className="text-black font-switzer leading-relaxed text-xs sm:text-sm md:text-base lg:text-base">
              <strong>Chaque action</strong> est pensée dans une{" "}
              <strong>logique durable</strong>, tenant compte des{" "}
              <strong>cycles naturels des plantes</strong>, de la{" "}
              <strong>faune locale</strong> et de la{" "}
              <strong>préservation de la biodiversité</strong>.
              <br />
              <br />
              Nous assurons une <strong>gamme complète de services</strong> pour
              prendre soin de vos extérieurs :
            </p>

            <ul className="text-black font-switzer text-xs sm:text-sm md:text-base lg:text-base leading-relaxed border-gray-300 mt-6">
              {[
                "Taille de haies, arbustes et fruitiers",
                "Tonte de pelouses (toutes surfaces)",
                "Désherbage manuel ou écologique",
                "Bêchage et entretien des massifs",
                "Soins préventifs et traitements adaptés à la saison",
                "Repiquage et entretien des plantes",
                "Ramassage des feuilles et enlèvement des déchets verts",
              ].map((service, index, arr) => (
                <li
                  key={index}
                  className={`flex items-center border-b border-gray-300 py-1.5 ${
                    index === arr.length - 1 ? "border-b-0" : ""
                  }`}
                >
                  <span className="mr-2">🢒</span> {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Image */}
          <div className="lg:w-1/2 flex justify-center items-start">
            <img
              src="/images/prestations.png"
              alt="Prestations d'entretien"
              className="h-full w-auto object-cover rounded-lg lg:rounded-tr-[80px]"
            />
          </div>
        </div>

        {/* Entretien responsable */}
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="lg:w-1/2 flex justify-center items-start order-2 lg:order-1">
            <img
              src="/images/entretien-responsable.png"
              alt="Entretien responsable"
              className="h-full w-auto object-cover rounded-lg lg:rounded-bl-[80px]"
            />
          </div>

          <div className="lg:w-1/2 text-left flex flex-col justify-start gap-3 order-1 lg:order-2">
            <h2 className="text-[#315747] font-archivo leading-snug text-xl sm:text-2xl md:text-3xl lg:text-4xl">
              <span className="font-bold">Un</span>{" "}
              <span className="font-light italic">entretien responsable</span>{" "}
              <span className="font-bold">, pour tous vos espaces</span>
            </h2>

            <p className="text-black font-switzer leading-relaxed text-xs sm:text-sm md:text-base lg:text-base">
              Nous adoptons une <strong>approche globale et durable</strong> de
              l’<strong>entretien paysager</strong>, qu’il s’agisse
              d’<strong>interventions chez les particuliers</strong>, dans les{" "}
              <strong>entreprises</strong> ou au sein de{" "}
              <strong>copropriétés</strong>.
              <br />
              <br />
              Nos équipes sont formées aux{" "}
              <strong>pratiques écologiques</strong> :{" "}
              <strong>désherbage manuel ou thermique</strong> sans produits
              chimiques, <strong>taille raisonnée</strong>,{" "}
              <strong>gestion des déchets verts</strong>, et{" "}
              <strong>utilisation responsable des ressources</strong> comme
              l’eau.
            </p>
          </div>
        </div>
      </section>

      {/* Bloc 3 */}
      <section className="max-w-7xl w-full px-2 sm:px-4 md:px-12 mx-auto flex flex-col gap-10 mt-24">
        <h2 className="text-[#315747] font-archivo leading-snug text-xl sm:text-2xl md:text-3xl lg:text-4xl text-left lg:max-w-[70%]">
          <span className="font-bold">Nos</span>{" "}
          <span className="font-light italic">prestations</span>{" "}
          <span className="font-bold">sont</span>{" "}
          <span className="font-light italic">adaptées</span>{" "}
          <span className="font-bold">à chaque typologie de client</span>
        </h2>

        <div className="flex flex-col lg:flex-row gap-10">
          <div className="lg:w-1/2 flex flex-col gap-3 text-left">
            <h3 className="text-[#315747] font-semibold text-lg sm:text-xl">
              Particuliers
            </h3>
            <p className="text-black font-switzer text-xs sm:text-sm md:text-base lg:text-base leading-relaxed">
              Pour les <strong>particuliers</strong>, nous réalisons des{" "}
              <strong>petits travaux de jardinage réguliers ou ponctuels</strong>.
              <br />
              <br />
              Ces prestations s’inscrivent dans le cadre des{" "}
              <strong>“services à la personne”</strong>, ce qui vous permet de
              bénéficier d’un <strong>crédit d’impôt de 50 %</strong> sur les{" "}
              <strong>sommes engagées</strong>, dans la limite de{" "}
              <strong>5 000 € par an et par foyer fiscal</strong>.
              <br />
              <br />
              C’est un <strong>avantage non négligeable</strong> qui allège le{" "}
              <strong>coût de l’entretien</strong> de votre jardin tout en vous
              garantissant un <strong>service professionnel</strong>, régulier,
              et respectueux de l’environnement.
            </p>
          </div>

          <div className="lg:w-1/2 flex flex-col gap-3 text-left">
            <h3 className="text-[#315747] font-semibold text-lg sm:text-xl">
              Professionnels / Co-propriétés
            </h3>
            <p className="text-black font-switzer text-xs sm:text-sm md:text-base lg:text-base leading-relaxed">
              Pour les <strong>entreprises</strong>, les{" "}
              <strong>copropriétés</strong> et les{" "}
              <strong>établissements hôteliers</strong>, nous assurons des{" "}
              <strong>prestations de jardinage sur mesure</strong>, qu’il
              s’agisse d’<strong>interventions ponctuelles</strong> ou d’un{" "}
              <strong>suivi régulier des espaces verts</strong>.
              <br />
              <br />
              Ces <strong>services</strong> s’adressent à des{" "}
              <strong>structures professionnelles</strong> et ne relèvent donc
              pas du cadre des <strong>“services à la personne”</strong>. À ce
              titre, ils ne sont pas éligibles au <strong>crédit d’impôt</strong>.
              <br />
              <br />
              Cela n’empêche pas une <strong>approche de qualité</strong>,
              alliant <strong>savoir-faire horticole</strong>,{" "}
              <strong>fiabilité des équipes</strong> et{" "}
              <strong>respect des principes environnementaux</strong>, dans une{" "}
              <strong>logique de valorisation durable des extérieurs</strong>.
            </p>
          </div>
        </div>
      </section>

        {/* Bloc 4 avec hover + lightbox conditionnelle */}
      <section className="max-w-7xl w-full px-2 sm:px-4 md:px-12 mx-auto flex flex-col gap-6 mt-24">
        <h2 className="text-[#315747] font-archivo leading-snug text-xl sm:text-2xl md:text-3xl lg:text-4xl text-left lg:max-w-[70%]">
          <span className="font-bold">Exemples de nos</span>{" "}
          <span className="font-light italic">entretiens</span>
        </h2>

        {/* Galerie */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 justify-center">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="w-full h-56 overflow-hidden rounded-md cursor-pointer"
              onClick={() =>
                !isMobile && setSelectedImage(`/images/galerie-${i + 1}.webp`)
              }
            >
              {/* miniature */}
              <img
                src={`/images/galerie-${i + 1}.webp`}
                alt={`Galerie ${i + 1}`}
                className={`w-full h-full object-cover transition-transform duration-500 ${
                  !isMobile ? "hover:scale-110" : ""
                }`}
              />
            </div>
          ))}
        </div>

        {/* Avant / Après */}
        <div className="flex flex-col lg:flex-row gap-2 mt-2 justify-center">
          <div
            className="relative overflow-hidden rounded-md cursor-pointer group"
            onClick={() => !isMobile && setSelectedImage("/images/avant.webp")}
          >
            <img
              src="/images/avant.webp"
              alt="Avant la remise en état"
              className={`w-full h-full object-cover transition-transform duration-500 ${
                !isMobile ? "group-hover:scale-110" : ""
              }`}
            />
            <div className="absolute bottom-0 left-0 w-full bg-[#315747] p-3 text-white text-center">
              <span className="font-light italic">Avant</span>{" "}
              <span className="font-bold">la remise en état</span>
            </div>
          </div>

          <div
            className="relative lg:w-1/2 overflow-hidden rounded-md cursor-pointer group"
            onClick={() => !isMobile && setSelectedImage("/images/apres.webp")}
          >
            <img
              src="/images/apres.webp"
              alt="Après la remise en état"
              className={`w-full h-full object-cover transition-transform duration-500 ${
                !isMobile ? "group-hover:scale-110" : ""
              }`}
            />
            <div className="absolute bottom-0 left-0 w-full bg-[#315747] p-3 text-white text-center">
              <span className="font-light italic">Après</span>{" "}
              <span className="font-bold">la remise en état</span>
            </div>
          </div>
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
