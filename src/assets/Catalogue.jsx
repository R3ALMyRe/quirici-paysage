import React, { useEffect, useState } from "react";

export default function Catalogue() {
  const [produits, setProduits] = useState([]);
  const [selectedProduit, setSelectedProduit] = useState(null);

useEffect(() => {
  fetch("https://script.google.com/macros/s/AKfycbzQHyKFiWK_qCzTT4-rH2GGJfFakV8-Rg3cWokyxTVsgzKge_MO_sluux2G9dsGw5ACwQ/exec")
    .then(res => res.json())
    .then(data => setProduits(data))
    .catch(err => console.error("Erreur chargement produits :", err));
}, []);

  const openModal = (produit) => setSelectedProduit(produit);
  const closeModal = () => setSelectedProduit(null);

  const capitalizeFirst = (str) =>
    str ? str.charAt(0).toUpperCase() + str.slice(1) : "";

  return (
    <>

<div className="w-full flex flex-col justify-between items-start gap-8 pt-10 pb-20 px-4 sm:px-6 md:px-16 mt-20 bg-white flex-row-900">

  {/* Colonne gauche */}
  <div className="w-full w-left">
    <h2 className="text-[#315747] font-archivo leading-tight mb-4 
                   text-[32px] sm:text-[40px] md:text-[56px] max-w-full max-w-left">
      Vente de bois et matériaux issus de notre activité paysagère.
    </h2>
    <p className="text-black font-switzer font-light text-[14px] sm:text-[16px]">
      Pour toute commande ou demande de paiement, merci de nous contacter.<br />
      Notre site vous permet de consulter nos produits mis en vente, mais les achats ne peuvent pas être effectués en ligne.
    </p>
  </div>

  {/* Colonne droite */}
  <div className="w-full w-right text-center text-right-900">
    <h3 className="text-[#315747] font-archivo text-[24px] sm:text-[28px] md:text-[30px] mb-3">
      Des questions ?
    </h3>
    <p className="text-black font-switzer font-light text-[14px] sm:text-[16px] mb-4">
      Contactez nous directement !
    </p>

    <a
      href="tel:0631498703"
      className="bg-yellow-400 text-black rounded-full px-5 py-2 font-switzer font-normal text-[16px] sm:text-[18px] block mb-3 w-fit mx-auto md:ml-auto md:mr-0 text-center"
      style={{ boxShadow: "7px 10px 10px rgba(250, 204, 21, 0.5)" }}
    >
      06.31.49.87.03
    </a>

    <a
      href="mailto:quiricipaysage@orange.fr"
      className="bg-yellow-400 text-black rounded-full px-5 py-2 font-switzer font-normal text-[16px] sm:text-[18px] block w-fit mx-auto md:ml-auto md:mr-0 text-center"
      style={{ boxShadow: "7px 10px 10px rgba(250, 204, 21, 0.5)" }}
    >
      quiricipaysage@orange.fr
    </a>
  </div>
</div>





      {/* ========================== */}
      {/*        GRID START          */}
      {/* ========================== */}
      <div className="px-4 sm:px-6 md:px-0">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 max-w-[calc(3*522px+2*12px)] mx-auto font-bebas">
          {produits.map((produit, i) => (
            <div
              key={i}
              className="relative w-full h-[400px] sm:h-[450px] md:h-[522px] bg-cover bg-center rounded"
              style={{ backgroundImage: `url(${produit.ImageURL})` }}
            >
              <div className="absolute bottom-0 w-full h-1/2 bg-black/30 backdrop-blur-xs flex flex-col items-center justify-center text-white rounded-b">
                <div className="w-[42px] h-[2px] bg-[#E59E32] mb-3"></div>

                {/* Taille du nom augmentée à 40px sur desktop */}
                <h2 className="text-[24px] sm:text-[30px] md:text-[40px] mb-3 font-bebas text-center px-2">
                  {produit.Nom}
                </h2>

                <img
                  onClick={() => openModal(produit)}
                  src="/images/bouton-catalogue.svg"
                  alt="Voir produit"
                  className="w-[20px] sm:w-[22px] md:w-[25px] h-auto mb-3 cursor-pointer hover:scale-110 transition-transform duration-200"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ========================== */}
      {/*        MODAL START         */}
      {/* ========================== */}
      {selectedProduit && (
        <div
          className="fixed inset-0 bg-black bg-black/90 backdrop-blur-xs flex justify-center items-center z-50 px-4"
          onClick={closeModal}
        >
          <div
            className="bg-white/90 w-full max-w-[900px] h-[auto] max-h-[90vh] relative flex flex-col md:flex-row shadow-lg overflow-y-auto rounded"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Texte en haut sur mobile, à gauche en desktop */}
            <div className="md:w-[40%] p-6 md:p-8 bg-white/80 flex flex-col justify-between relative z-10 font-archivo">
              <div>
                <h2 className="text-3xl font-bold mb-6 text-[#315747] text-[32px] md:text-[40px]">
                  {capitalizeFirst(selectedProduit.Nom)}
                </h2>

                {/* Téléphone */}
                <div className="flex items-center mb-4 text-[16px] md:text-[18px]">
                  <span className="text-green-600 mr-3 w-5">
                    <img src="images/telephone-black.svg" alt="telephone" />
                  </span>
                  <a
                    href="tel:0631498703"
                    className="text-gray-800 hover:underline"
                  >
                    06 31 49 87 03
                  </a>
                </div>

                {/* Email */}
                <div className="flex items-center mb-6 text-[16px] md:text-[18px]">
                  <span className="text-green-600 mr-3 w-5">
                    <img src="images/email-black.svg" alt="email" />
                  </span>
                  <a
                    href="mailto:quiricipaysage@orange.fr"
                    className="text-gray-800 hover:underline"
                  >
                    quiricipaysage@orange.fr
                  </a>
                </div>


                <p className="font-archivo text-[14px] md:text-[15px]">
                  Description : {selectedProduit.Description}
                </p>
              </div>

              <div
                className="bg-yellow-400 text-black rounded-full px-3 py-2 text-lg font-switzer w-max mt-5 min-w-[90px] text-center"
                style={{ boxShadow: "7px 10px 10px rgba(250, 204, 21, 0.5)" }}
              >
                {selectedProduit.Prix}
              </div>
            </div>

            {/* Image en bas sur mobile, à droite sur desktop */}
            <div className="md:w-[60%] relative overflow-hidden h-[250px] md:h-auto">
              <img
                src={selectedProduit.ImageURL}
                alt={`Image du produit ${selectedProduit.Nom}`}
                className="w-full h-full object-cover rounded-b md:rounded-l md:rounded-r-none"
              />
            </div>

            {/* Flou overlay bordure entre texte et image */}
            <div
              className="hidden md:block absolute top-0 h-full pointer-events-none z-20"
              style={{
                width: "4rem",
                left: "calc(40% - 1.5rem)",
                background:
                  "linear-gradient(to right, rgba(255,255,255,0.3), rgba(255,255,255,0))",
                backdropFilter: "blur(8px)",
              }}
            />

            <button
              onClick={closeModal}
              className="absolute top-5 right-5 text-gray-700 hover:text-white text-5xl font-bebas cursor-pointer"
              aria-label="Fermer modal"
            >
              ×
            </button>
          </div>
        </div>
      )}
      {/* ========================== */}
      {/*         MODAL END          */}
      {/* ========================== */}
    </>
  );
}
