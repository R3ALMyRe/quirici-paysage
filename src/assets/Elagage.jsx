import React, { useState, useEffect } from "react";

export default function Elagage() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  // Détection mobile
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize(); // initial check
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="w-full flex flex-col items-center">
      <div className="w-full flex flex-col items-center">
        {/* Conteneur mobile : uniquement le titre */}
        <div className="w-full mt-16 flex flex-col items-center md:hidden">
          <img
            src="/images/titre-elagage-mobile.png"
            alt="Titre Élagage"
            className="h-44 sm:h-48 object-contain max-w-[95%] min-w-[320px]"
          />
        </div>

        {/* Conteneur tablette/PC : titre en haut à gauche sur l'image */}
        <div className="relative w-full mt-16 hidden md:block">
          <img
            src="/images/img-elagages.jpg"
            alt="Fond Élagage"
            className="w-full h-auto max-h-[85vh] object-contain mx-auto"
          />
          <div className="absolute top-8 left-[15%] p-3 rounded-md bg-white/70">
            <img
              src="/images/titre-elagage.png"
              alt="Titre Élagage"
              className="h-28 lg:h-36 object-contain"
            />
          </div>
        </div>
      </div>

      {/* Section principale */}
      <section className="max-w-7xl w-full px-4 md:px-8 mx-auto flex flex-col md:flex-row gap-16 mt-16">
        {/* Texte */}
        <div className="md:w-1/2 flex flex-col gap-6">
          <h2 className="text-[#315747] font-bold text-3xl lg:text-4xl font-archivo leading-snug">
            Une intervention{" "}
            <span className="italic font-light">sécurisée et respectueuse</span>{" "}
            de l’arbre
          </h2>
          <p className="text-black font-archivo leading-relaxed text-sm sm:text-base md:text-lg">
            Chez <strong>Quirici Paysage</strong>, nous considérons chaque arbre
            comme un <strong>élément vivant</strong> à part entière de votre
            jardin. Notre mission est de préserver leur{" "}
            <strong>santé</strong> et leur <strong>esthétique</strong>, tout en
            garantissant la <strong>sécurité</strong> de votre environnement.
            <br />
            <br />
            Qu’il s’agisse d’un{" "}
            <span className="italic font-light">élagage raisonné</span> ou d’un{" "}
            <span className="italic font-light">abattage nécessaire</span>, nos
            équipes formées interviennent avec <strong>rigueur</strong>, dans le
            respect des <strong>règles de sécurité</strong> et des{" "}
            <strong>équilibres naturels</strong>.
            <br />
            <br />
            Nous adaptons nos prestations aussi bien aux{" "}
            <strong>particuliers</strong> qu’aux <strong>professionnels</strong>
            , en fonction de la <strong>configuration du site</strong>, de
            l’<strong>état de l’arbre</strong> et de l’<strong>objectif
            recherché</strong> : sécurité, esthétisme, ou confort au quotidien.
          </p>

          <h2 className="text-[#315747] font-bold text-3xl lg:text-4xl font-archivo leading-snug mt-6">
            Nos prestations{" "}
            <span className="italic font-light">d’élagage et d’abattage</span>
          </h2>
          <p className="text-black font-archivo leading-relaxed text-sm sm:text-base md:text-lg">
            Chaque opération est précédée d’un{" "}
            <strong>diagnostic précis</strong> afin de déterminer la meilleure
            approche. Nous privilégions toujours les{" "}
            <strong>solutions de préservation</strong> avant d’envisager
            l’<strong>abattage</strong>.
          </p>
        </div>

        {/* Image */}
        <div className="md:w-1/2 flex justify-center items-start lg:justify-end">
          <img
            src="/images/prestations-elagage.jpg"
            alt="Prestations Élagage"
            className="h-full w-auto object-cover rounded-lg lg:rounded-tr-[80px]"
          />
        </div>
      </section>

      {/* Services élagage */}
      <section className="max-w-7xl w-full px-4 md:px-8 mx-auto mt-16">
        <ul className="text-black font-archivo text-sm sm:text-base md:text-lg leading-relaxed border-gray-300">
          {[
            "🢒 Élagage en taille douce : préservation de la forme, de la santé et de la longévité de l’arbre",
            "🢒 Taille de formation : accompagner le développement harmonieux d’un jeune arbre",
            "🢒 Taille de réduction : limiter l’emprise d’un arbre trop volumineux ou envahissant",
            "🢒 Taille de mise en sécurité : élimination du bois mort et des branches dangereuses",
            "🢒 Abattage sécurisé : lorsqu’un arbre malade, dépérissant ou mal placé devient une menace",
            "🢒 Démontage avec ou sans rétention : pour intervenir dans des environnements contraints",
            "🢒 Dessouchage : enlèvement de la souche pour libérer l’espace et éviter la repousse",
          ].map((service, i, arr) => (
            <li
              key={i}
              className={`border-b border-gray-300 py-2 ${
                i === arr.length - 1 ? "border-b-0" : ""
              }`}
            >
              <strong>{service.split(":")[0]}:</strong>
              {service.split(":")[1]}
            </li>
          ))}
        </ul>
      </section>

      {/* Bloc responsable */}
      <section className="max-w-7xl w-full px-4 md:px-8 mx-auto flex flex-col lg:flex-row gap-16 mt-16">
        <div className="lg:w-1/2 flex justify-center items-start order-2 lg:order-1">
          <img
            src="/images/elagage-responsable.jpg"
            alt="Élagage responsable"
            className="h-full w-auto object-cover rounded-lg lg:rounded-bl-[80px]"
          />
        </div>

        <div className="lg:w-1/2 flex flex-col justify-start gap-4 order-1 lg:order-2">
          <h2 className="text-[#315747] font-bold font-archivo text-3xl lg:text-4xl leading-snug">
            Une approche <span className="italic font-light">responsable</span>
          </h2>
          <p className="text-black font-archivo leading-relaxed text-sm sm:text-base md:text-lg">
            Nous sommes <strong>élagueurs-grimpeurs qualifiés</strong> et
            travaillons dans le respect des <strong>règles de sécurité</strong>{" "}
            comme de l’<strong>environnement</strong>.
            <br />
            <br />
            Chaque intervention est <strong>planifiée avec soin</strong>, en
            tenant compte des <strong>périodes favorables</strong> pour préserver
            la <strong>faune</strong> et la <strong>biodiversité</strong>.
            <br />
            <br />
            Notre objectif : garantir la <strong>sécurité</strong> tout en
            conservant la <strong>beauté</strong> et la{" "}
            <strong>vitalité</strong> de vos arbres.
          </p>
        </div>
      </section>

      {/* Bloc technique */}
      <section className="max-w-7xl w-full px-4 md:px-8 mx-auto flex flex-col lg:flex-row gap-16 mt-16">
        <div className="lg:w-1/2 flex flex-col justify-start gap-4">
          <h2 className="text-[#315747] font-bold font-archivo text-3xl lg:text-4xl leading-snug">
            L’élagage et l’abattage : des{" "}
            <span className="italic font-light">
              opérations techniques et délicates
            </span>
          </h2>
          <p className="text-black font-archivo leading-relaxed text-sm sm:text-base md:text-lg">
            L’<strong>élagage</strong> et l’<strong>abattage</strong> sont des
            opérations qui demandent à la fois une{" "}
            <strong>expertise technique</strong>, une{" "}
            <strong>maîtrise du matériel</strong> et une{" "}
            <strong>connaissance approfondie des arbres</strong>. Tenter une
            intervention soi-même peut s’avérer risqué, autant pour votre{" "}
            <strong>sécurité</strong> que pour vos{" "}
            <strong>aménagements extérieurs</strong>.
            <br />
            <br />
            En choisissant <strong>Quirici Paysage</strong>, vous bénéficiez de
            l’<strong>expérience</strong> d’une <strong>équipe qualifiée</strong>
            , capable de <strong>travailler en hauteur</strong>, d’anticiper les
            contraintes de l’environnement et de garantir un{" "}
            <strong>résultat soigné</strong>, sans endommager vos{" "}
            <strong>espaces</strong>.
          </p>
        </div>

        <div className="lg:w-1/2 flex flex-col justify-start gap-4">
          <h2 className="text-[#315747] font-bold font-archivo text-3xl lg:text-4xl leading-snug">
            Quel est le{" "}
            <span className="italic font-light">
              bon moment pour abattre ou élaguer un arbre
            </span>{" "}
            ?
          </h2>
          <p className="text-black font-archivo leading-relaxed text-sm sm:text-base md:text-lg">
            Le meilleur moment pour l’<strong>élagage</strong> se situe
            généralement entre la <strong>mi-automne</strong> et la{" "}
            <strong>fin de l’hiver</strong>, lorsque l’arbre est en{" "}
            <strong>repos végétatif</strong> et que la <strong>sève</strong> est
            redescendue. À cette période, la taille est moins traumatisante pour
            l’arbre et limite les risques de <strong>maladies</strong> ou de{" "}
            <strong>fragilisation</strong>. L’<strong>absence de feuillage</strong>{" "}
            facilite également la <strong>visibilité</strong>, le{" "}
            <strong>travail</strong> et le <strong>nettoyage du chantier</strong>
            , tout en préservant la <strong>santé</strong> et la{" "}
            <strong>structure</strong> de l’arbre.
            <br />
            <br />
            Pour l’<strong>abattage</strong>, la période entre la{" "}
            <strong>mi-automne</strong> et la <strong>fin de l’hiver</strong>{" "}
            reste la plus favorable : le <strong>bois</strong> est plus léger et
            l’<strong>absence de feuilles</strong> offre une meilleure
            visibilité, facilitant une <strong>intervention sûre et précise</strong>.
            <br />
            <br />
            Cependant, il est tout à fait possible, et parfois nécessaire,
            d’<strong>abattre un arbre à tout moment de l’année</strong> pour
            des <strong>raisons de sécurité</strong>. Un arbre présentant un{" "}
            <strong>risque immédiat</strong> pour les <strong>personnes</strong>{" "}
            ou les <strong>biens</strong> doit être traité sans attendre, toujours
            en appliquant les <strong>mesures de sécurité appropriées</strong>.
          </p>
        </div>
      </section>

      {/* Galerie photo */}
      <section className="max-w-7xl w-full px-2 sm:px-4 md:px-12 mx-auto flex flex-col gap-6 mt-24">
        <h2 className="text-[#315747] font-archivo text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-snug text-left lg:max-w-[70%]">
          <span className="font-bold">Exemples de nos</span>{" "}
          <span className="font-light italic">élagages / abattages</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 justify-center">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="w-full h-56 overflow-hidden rounded-md cursor-pointer"
              onClick={() =>
                !isMobile && setSelectedImage(`/images/elagage-${i + 1}.jpg`)
              }
            >
              <img
                src={`/images/elagage-${i + 1}.jpg`}
                alt={`Elagage ${i + 1}`}
                className={`w-full h-full object-cover transition-transform duration-500 ${
                  !isMobile ? "hover:scale-110" : ""
                }`}
              />
            </div>
          ))}
        </div>

        {/* Avant/Après */}
        <div className="flex flex-col lg:flex-row gap-2 mt-2 justify-center">
          {[
            { src: "/images/avant-elagage.jpg", label1: "Avant", label2: "l'intervention" },
            { src: "/images/apres-elagage.jpg", label1: "Après", label2: "l'intervention" },
          ].map((img, i) => (
            <div
              key={i}
              className="relative lg:w-1/2 overflow-hidden cursor-pointer"
              onClick={() => !isMobile && setSelectedImage(img.src)}
            >
              <img
                src={img.src}
                alt={img.label1}
                className={`w-full h-full object-cover transition-transform duration-500 ${
                  !isMobile ? "hover:scale-110" : ""
                }`}
              />
              <div className="absolute bottom-0 left-0 w-full bg-[#315747] p-3 text-white text-center">
                <span className="font-light italic">{img.label1}</span>{" "}
                <span className="font-bold">{img.label2}</span>
              </div>
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
