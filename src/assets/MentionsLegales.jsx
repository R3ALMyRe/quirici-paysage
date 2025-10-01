import React from "react";

export default function MentionsLegales() {
  return (
    <div className="max-w-7xl mx-auto px-8 py-16 text-black font-switzer leading-relaxed">
      <h1 className="text-4xl font-archivo font-semibold text-[#315747] mb-8">
        Mentions légales
      </h1>

      <section className="mb-8">
        <h2 className="text-2xl font-archivo font-semibold mb-2 text-[#315747]">Éditeur du site</h2>
        <p className="text-lg">
          Quirici Paysage<br />
          Société à responsabilité limitée (SARL) au capital de 2 000,00 €<br />
          Siège social : 59 avenue de l’Abbaye, 77500 Chelles – France<br />
          Immatriculée au Registre du Commerce et des Sociétés de Meaux sous le numéro 824 720 783<br />
          Numéro de TVA intracommunautaire : FR45 824 720 783
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-archivo font-semibold mb-2 text-[#315747]">Directeurs de la publication</h2>
        <p className="text-lg">M. Mathieu Quirici et M. Julien Quirici – Gérants de la société</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-archivo font-semibold mb-2 text-[#315747]">Hébergement</h2>
        <p className="text-lg">
          o2switch<br />
          222-224 Boulevard Gustave Flaubert, 63000 Clermont-Ferrand – France<br />
          Téléphone : +33 4 44 44 60 40<br />
          Site : <a href="https://www.o2switch.fr" className="text-[#315747] underline hover:text-yellow-400">www.o2switch.fr</a>
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-archivo font-semibold mb-2 text-[#315747]">Contact</h2>
        <p className="text-lg">
          Téléphone : 06 31 49 87 03<br />
          E-mail : <a href="mailto:quiricipaysage@orange.fr" className="text-[#315747] underline hover:text-yellow-400">quiricipaysage@orange.fr</a>
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-archivo font-semibold mb-2 text-[#315747]">Propriété intellectuelle</h2>
        <p className="text-lg">
          L’ensemble des éléments présents sur ce site (textes, images, graphismes, logo, etc.) est la propriété exclusive de Quirici Paysage, sauf mention contraire. Toute reproduction, distribution ou utilisation, totale ou partielle, est strictement interdite sans autorisation écrite préalable.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-archivo font-semibold mb-2 text-[#315747]">Données personnelles</h2>
        <p className="text-lg">
          Les informations transmises via le formulaire de contact sont utilisées uniquement pour répondre aux demandes des utilisateurs. Elles ne sont pas enregistrées dans une base de données ni transmises à des tiers. Conformément au RGPD, vous disposez d’un droit d’accès, de rectification et de suppression de vos données. Vous pouvez exercer ce droit en écrivant à : <a href="mailto:quiricipaysage@orange.fr" className="text-[#315747] underline hover:text-yellow-400">quiricipaysage@orange.fr</a>.
        </p>
      </section>
    </div>
  );
}
