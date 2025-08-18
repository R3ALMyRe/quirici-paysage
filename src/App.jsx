import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './assets/Navbar';
import Accueil from './assets/Accueil';
import Prestations from './assets/Prestations';
import Ventes from './assets/Catalogue';
import Contact from './assets/Contact';

function App() {
  return (
    <BrowserRouter>
      <Navbar /> {/* Toujours affichée */}
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/prestations/*" element={<Prestations />} />
        <Route path="/ventes" element={<Ventes />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
