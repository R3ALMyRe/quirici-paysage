import React from 'react'; 
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './assets/Navbar';
import Footer from './assets/Footer';
import Accueil from './assets/Accueil';
import Ventes from './assets/Catalogue';
import Contact from './assets/Contact';
import Elagage from './assets/Elagage';
import Creation from './assets/Creation';
import Entretien from './assets/Entretien';
import MentionsLegales from './assets/MentionsLegales';

function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        
        <main className="flex-grow pt-[78px]">
          <Routes>
            <Route path="/" element={<Accueil />} />
            <Route path="/ventes" element={<Ventes />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/creation" element={<Creation />} />
            <Route path="/elagage" element={<Elagage />} />
            <Route path="/entretien" element={<Entretien />} />
            <Route path="/mentions-legales" element={<MentionsLegales />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}


export default App;
