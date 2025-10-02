import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/0 backdrop-blur-md shadow-sm">
      <div className="max-w-[1200px] mx-auto flex items-center justify-between px-6 h-[78px]">
        {/* LOGO */}
        <NavLink to="/" onClick={() => setIsOpen(false)}>
          <img 
            src="/images/logo.png" 
            alt="logo" 
            className="h-[50px] sm:h-[60px] md:h-[70px] cursor-pointer" 
          />
        </NavLink>

        {/* MENU DESKTOP */}
        <ul className="hidden md:flex items-center space-x-8 font-light font-switzer text-black ml-auto">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `hover:underline ${isActive ? "text-[#315747] font-semibold underline" : ""}`
              }
            >
              Accueil
            </NavLink>
          </li>

          {/* Prestations avec Dropdown */}
          <li className="relative group pt-[78px] -mt-[78px]">
            <span className="cursor-pointer hover:underline">Prestations</span>
            <ul
              className="absolute left-1/2 top-full transform -translate-x-1/2 
                         bg-white/0 backdrop-blur-md shadow-sm py-4 w-48 rounded-md 
                         opacity-0 invisible group-hover:visible group-hover:opacity-100 
                         group-hover:translate-y-2 transition-all duration-200 font-light text-center z-40"
            >
              <li className="border-b border-gray-200 last:border-b-0">
                <NavLink
                  to="/creation"
                  className={({ isActive }) =>
                    `block px-4 py-3 hover:bg-gray-100 ${
                      isActive ? "text-[#315747] font-semibold underline" : "text-black"
                    }`
                  }
                >
                  Création
                </NavLink>
              </li>
              <li className="border-b border-gray-200 last:border-b-0">
                <NavLink
                  to="/entretien"
                  className={({ isActive }) =>
                    `block px-4 py-3 hover:bg-gray-100 ${
                      isActive ? "text-[#315747] font-semibold underline" : "text-black"
                    }`
                  }
                >
                  Entretien
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/elagage"
                  className={({ isActive }) =>
                    `block px-4 py-3 hover:bg-gray-100 ${
                      isActive ? "text-[#315747] font-semibold underline" : "text-black"
                    }`
                  }
                >
                  Élagage
                </NavLink>
              </li>
            </ul>
          </li>

          <li>
            <NavLink
              to="/ventes"
              className={({ isActive }) =>
                `hover:underline ${isActive ? "text-[#315747] font-semibold underline" : ""}`
              }
            >
              Ventes
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/contact"
              className="bg-[#29433A] text-white rounded-[3px] font-switzer font-regular flex items-center justify-center h-[46px] w-[90px]"
            >
              Contact
            </NavLink>
          </li>
        </ul>

        {/* BOUTON BURGER MOBILE */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-black focus:outline-none ml-auto"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* MENU MOBILE */}
      {isOpen && (
        <div className="md:hidden bg-white/80 backdrop-blur-md shadow-md">
          <ul className="flex flex-col items-center py-6 space-y-4 font-switzer text-black">
            <li>
              <NavLink
                to="/"
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `${isActive ? "text-[#315747] font-semibold underline" : ""}`
                }
              >
                Accueil
              </NavLink>
            </li>

            <li>
              <span className="font-semibold">Prestations</span>
            </li>
            <li className="ml-4">
              <NavLink
                to="/creation"
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `${isActive ? "text-[#315747] font-semibold underline" : ""}`
                }
              >
                └ Création
              </NavLink>
            </li>
            <li className="ml-4">
              <NavLink
                to="/entretien"
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `${isActive ? "text-[#315747] font-semibold underline" : ""}`
                }
              >
                └ Entretien
              </NavLink>
            </li>
            <li className="ml-4">
              <NavLink
                to="/elagage"
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `${isActive ? "text-[#315747] font-semibold underline" : ""}`
                }
              >
                └ Élagage
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/ventes"
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `${isActive ? "text-[#315747] font-semibold underline" : ""}`
                }
              >
                Ventes
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="bg-[#29433A] text-white px-6 py-2 rounded"
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
