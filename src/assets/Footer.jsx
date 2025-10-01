import React from "react";
import { Link } from "react-router-dom"; // Important pour React Router

export default function Footer() {
  return (
    <footer className="bg-[#152821] text-white py-12 px-6 mt-50">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-30 items-start">
        
        {/* Colonne 1 : Logo + droits */}
        <div className="flex flex-col items-start">
          <img
            src="/images/logo-footer.png"
            alt="Logo Quirici Paysage"
            className="h-20 mb-4"
          />
          <p className="text-sm text-gray-300">
            © Société QUIRICI Paysage - Tous droits réservés
          </p>
        </div>

        {/* Colonne 2 : Nos services */}
        <div className="flex flex-col items-start">
          <h3 className="text-xl mb-4 font-archivo">
            <span className="font-bold">Nos</span>{" "}
            <span className="italic font-light">services</span>
          </h3>
          <ul className="w-full text-gray-200 space-y-4">
            {[
              { label: "Abattage d’arbre", href: "#abattage" },
              { label: "Élagage d’arbre", href: "#elagage" },
              { label: "Création paysagère", href: "#creation" },
              { label: "Entretien paysagère", href: "#entretien" },
              { label: "Maçonnerie paysagère", href: "#maconnerie" },
            ].map((service, i) => (
              <li key={i} className="w-full">
                <a
                  href={service.href}
                  className="block py-2 border-b border-gray-500 hover:text-yellow-400 transition"
                >
                  ➤ {service.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Colonne 3 : Nous contacter */}
        <div className="flex flex-col items-start">
          <h3 className="text-xl mb-4 font-archivo">
            <span className="font-bold">Nous</span>{" "}
            <span className="italic font-light">contacter</span>
          </h3>

          <ul className="space-y-4 text-gray-200">
            <li className="flex items-center gap-3">
              <img src="/images/home.svg" alt="Adresse" className="h-5 w-5" />
              <a
                href="https://www.google.com/maps?q=59+Av.+de+l'Abbaye,+77500+Chelles"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-yellow-400 transition"
              >
                59 Av. de l&apos;Abbaye, 77500 Chelles
              </a>
            </li>

            <li className="flex items-center gap-3">
              <img src="/images/email.svg" alt="Mail" className="h-5 w-5" />
              <a
                href="mailto:quiricipaysage@orange.fr"
                className="hover:text-yellow-400 transition"
              >
                quiricipaysage@orange.fr
              </a>
            </li>

            <li className="flex items-center gap-3">
              <img src="/images/telephone.svg" alt="Téléphone" className="h-5 w-5" />
              <a
                href="tel:+33631498703"
                className="hover:text-yellow-400 transition"
              >
                06 31 49 87 03
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Lien Mentions légales centré sous le footer */}
      <div className="mt-6 text-center">
        <Link 
          to="/mentions-legales" 
          className="text-sm text-gray-300 hover:text-yellow-400 transition underline"
        >
          Mentions légales
        </Link>
      </div>
    </footer>
  );
}