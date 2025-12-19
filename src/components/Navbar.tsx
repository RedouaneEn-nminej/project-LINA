import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, MessageSquare, BookOpen, GraduationCap, Home, Images, Newspaper, Phone } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const navLinks = [
    { path: '/', label: 'Accueil', icon: <Home className="w-4 h-4" /> },
    { path: '/activities', label: 'Activités', icon: <BookOpen className="w-4 h-4" /> },
    { path: '/gallery', label: 'Galerie', icon: <Images className="w-4 h-4" /> },
    { path: '/news', label: 'Actualités', icon: <Newspaper className="w-4 h-4" /> },
    { path: '/contact', label: 'Contact', icon: <Phone className="w-4 h-4" /> },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className={`sticky top-0 z-50 transition-all duration-500 ${
      scrolled 
        ? 'bg-gradient-to-b from-gray-900/95 to-gray-800/95 backdrop-blur-lg shadow-2xl py-2 border-b border-amber-500/20' 
        : 'bg-gradient-to-b from-gray-900 to-gray-800 py-3'
    }`}>
      {/* Barre dorée en haut */}
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-amber-500 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo avec design inspiré de la page d'accueil */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="relative">
              {/* Effet de lumière */}
              <div className="absolute -inset-2 bg-gradient-to-br from-amber-500/30 to-purple-500/30 rounded-2xl blur-md opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>
              
              {/* Cadre oriental */}
              <div className="relative w-12 h-12 bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-2 shadow-xl border border-amber-500/20 flex items-center justify-center group-hover:border-amber-400/40 transition-all duration-300">
                <img
                  src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTQOsolFXdRApqN7kjnNEj40sRHjXZ2BbbHWrEqJqRQH0be9J0f"
                  alt="Logo Lycée Collégial Abi-Al-Alaa-Al-Maari"
                  className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
                />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-base font-bold text-gray-100 leading-tight tracking-tight">
                Lycée Collégial
              </span>
              <span className="text-xs font-semibold tracking-wide bg-gradient-to-r from-amber-300 via-amber-200 to-yellow-300 bg-clip-text text-transparent">
                Abi-Al-Alaa-Al-Maari
              </span>
            </div>
          </Link>

          {/* Navigation Desktop - Design inspiré de la page d'accueil */}
          <div className="hidden lg:flex items-center space-x-1 bg-gradient-to-r from-gray-800/60 to-gray-900/60 backdrop-blur-sm rounded-2xl p-1.5 border border-amber-500/10">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`relative flex items-center space-x-2 px-5 py-2.5 rounded-xl font-medium transition-all duration-300 group ${
                  isActive(link.path)
                    ? 'bg-gradient-to-r from-amber-600/30 to-amber-700/30 text-amber-300 border border-amber-500/30 shadow-lg'
                    : 'text-gray-300 hover:text-amber-300 hover:bg-gradient-to-r hover:from-amber-600/10 hover:to-amber-700/10'
                }`}
              >
                <span className={`transition-colors duration-300 ${isActive(link.path) ? 'text-amber-300' : 'text-gray-400 group-hover:text-amber-300'}`}>
                  {link.icon}
                </span>
                <span className="font-semibold tracking-wide">{link.label}</span>
                {isActive(link.path) && (
                  <>
                    <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-8 h-0.5 bg-gradient-to-r from-amber-500 to-yellow-500 rounded-full"></div>
                    <div className="absolute -top-1 -right-1 w-2 h-2 bg-amber-400 rounded-full blur-sm opacity-70"></div>
                  </>
                )}
                {/* Effet de survol */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-amber-500/0 via-amber-500/5 to-amber-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
              </Link>
            ))}
          </div>

          {/* Bouton CTA avec style ambré */}
          <div className="hidden lg:flex items-center">
            <a
              href="#comments"
              className="group relative px-5 py-2.5 rounded-xl font-medium overflow-hidden transition-all duration-500"
            >
              {/* Effet de fond */}
              <div className="absolute inset-0 bg-gradient-to-r from-amber-600/20 to-amber-700/20 rounded-xl group-hover:bg-gradient-to-r group-hover:from-amber-600/30 group-hover:to-amber-700/30 transition-all duration-500"></div>
              
              {/* Bordure animée */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-500 rounded-xl blur opacity-0 group-hover:opacity-50 transition-opacity duration-500"></div>
              
              <div className="relative flex items-center space-x-2">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-600 to-amber-700 flex items-center justify-center group-hover:from-amber-500 group-hover:to-amber-600 transition-all duration-300 group-hover:rotate-12">
                  <MessageSquare className="w-4 h-4 text-amber-100" />
                </div>
                <span className="text-sm font-bold tracking-wide text-amber-100 group-hover:text-white transition-colors">
                  Commenter
                </span>
              </div>
              
              {/* Effet de particules */}
              <div className="absolute -top-1 -left-1 w-2 h-2 bg-yellow-300 rounded-full blur-sm opacity-0 group-hover:opacity-70 transition-opacity duration-500"></div>
              <div className="absolute -bottom-1 -right-1 w-2 h-2 bg-yellow-300 rounded-full blur-sm opacity-0 group-hover:opacity-70 transition-opacity duration-500"></div>
            </a>
          </div>

          {/* Menu Mobile Button avec style ambré */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2.5 rounded-xl bg-gradient-to-br from-gray-800 to-gray-900 border border-amber-500/20 shadow-lg hover:shadow-amber-500/20 hover:border-amber-400/40 transition-all duration-300 group"
            aria-label="Menu"
          >
            <div className="relative w-6 h-6">
              {isOpen ? (
                <X className="w-6 h-6 text-amber-300 group-hover:text-amber-200 transition-all duration-300" />
              ) : (
                <Menu className="w-6 h-6 text-amber-300 group-hover:text-amber-200 transition-all duration-300" />
              )}
              {/* Point lumineux */}
              <div className="absolute -top-0.5 -right-0.5 w-1.5 h-1.5 bg-amber-400 rounded-full blur-sm opacity-60"></div>
            </div>
          </button>
        </div>
      </div>

      {/* Menu Mobile avec design ambré */}
      {isOpen && (
        <div className="lg:hidden bg-gradient-to-b from-gray-900/98 to-gray-800/98 backdrop-blur-xl border-t border-amber-500/20 shadow-2xl animate-slideIn">
          <div className="px-4 py-6 space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`flex items-center space-x-3 px-4 py-3.5 rounded-xl font-medium transition-all duration-300 group ${
                  isActive(link.path)
                    ? 'bg-gradient-to-r from-amber-600/30 to-amber-700/30 text-amber-300 border border-amber-500/30'
                    : 'text-gray-300 hover:bg-gradient-to-r hover:from-amber-600/10 hover:to-amber-700/10'
                }`}
              >
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 ${
                  isActive(link.path) 
                    ? 'bg-gradient-to-br from-amber-600 to-amber-700 text-amber-100 shadow-lg' 
                    : 'bg-gray-800/60 text-gray-400 group-hover:text-amber-300 group-hover:bg-gradient-to-br group-hover:from-amber-600/20 group-hover:to-amber-700/20'
                }`}>
                  {link.icon}
                </div>
                <span className="flex-1 font-semibold tracking-wide">{link.label}</span>
                {isActive(link.path) && (
                  <div className="w-2 h-2 rounded-full bg-gradient-to-r from-amber-500 to-yellow-500"></div>
                )}
                {/* Flèche de survol */}
                <div className={`transform transition-transform duration-300 ${isActive(link.path) ? 'translate-x-0' : 'translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100'}`}>
                  <div className="w-1.5 h-1.5 border-r-2 border-b-2 border-amber-400 rotate-45"></div>
                </div>
              </Link>
            ))}
            
            {/* Bouton Commenter mobile */}
            <div className="pt-4">
              <a
                href="#comments"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-center space-x-2 px-4 py-3.5 bg-gradient-to-r from-amber-600 to-amber-700 text-amber-50 rounded-xl font-bold tracking-wide hover:shadow-lg hover:shadow-amber-500/25 transition-all duration-300 group"
              >
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-500/30 to-amber-600/30 flex items-center justify-center group-hover:bg-gradient-to-br group-hover:from-amber-500/40 group-hover:to-amber-600/40 transition-colors">
                  <MessageSquare className="w-4 h-4" />
                </div>
                <span>Laisser un commentaire</span>
              </a>
            </div>
          </div>
          
          {/* Barre décorative en bas du menu */}
          <div className="px-4 pb-4">
            <div className="h-px bg-gradient-to-r from-transparent via-amber-500/30 to-transparent"></div>
          </div>
        </div>
      )}
    </nav>
  );
}