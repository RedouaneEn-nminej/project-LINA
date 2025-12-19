import { Mail, Phone, MapPin, GraduationCap, Send, Clock, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { path: '/', label: 'Accueil' },
    { path: '/activities', label: 'Activités' },
    { path: '/gallery', label: 'Galerie' },
    { path: '/news', label: 'Actualités' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-gray-950 text-white relative overflow-hidden">
      {/* Barre ambrée en haut */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-10 mb-12">
          {/* Logo et description */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3 group">
              <div className="relative">
                {/* Effet de lumière */}
                <div className="absolute -inset-2 bg-gradient-to-br from-amber-500/20 to-amber-600/20 rounded-2xl blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Cadre inspiré de la navbar */}
                <div className="relative w-14 h-14 bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-2.5 border border-amber-500/20 flex items-center justify-center group-hover:border-amber-400/40 transition-all duration-300">
                  <GraduationCap className="w-8 h-8 text-amber-400 group-hover:text-amber-300 transition-colors" />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold text-gray-100">Lycée Collégial</span>
                <span className="text-sm font-semibold bg-gradient-to-r from-amber-300 via-amber-200 to-yellow-300 bg-clip-text text-transparent">
                  Abi-Al-Alaa-Al-Maari
                </span>
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed text-sm">
              Établissement public d'enseignement secondaire collégial. 
              Perpétuant l'héritage intellectuel de notre éponyme, nous cultivons 
              l'excellence académique et le développement humain.
            </p>
            
            {/* Newsletter inspirée de la navbar */}
            <div className="pt-4">
              <h4 className="text-sm font-semibold text-amber-100 mb-3 flex items-center">
                <span>Infolettre</span>
                <div className="ml-2 w-2 h-2 bg-amber-400 rounded-full animate-pulse"></div>
              </h4>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Votre email"
                  className="flex-1 bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-lg px-3 py-2 text-sm text-white placeholder-gray-400 focus:outline-none focus:border-amber-500 transition-colors"
                />
                <button className="bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-500 hover:to-amber-600 rounded-lg p-2 transition-all duration-300 hover:shadow-lg hover:shadow-amber-500/25 group">
                  <Send className="w-5 h-5 text-amber-100 group-hover:text-white transition-colors" />
                </button>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6 pb-2 border-b border-amber-500/20">
              Navigation
            </h3>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link 
                    to={link.path}
                    className="group flex items-center text-gray-400 hover:text-amber-300 transition-all duration-300"
                  >
                    <div className="w-2 h-2 rounded-full bg-gradient-to-r from-amber-500 to-yellow-500 opacity-0 group-hover:opacity-100 mr-3 transition-opacity duration-300"></div>
                    <span className="group-hover:translate-x-2 transition-transform duration-300 font-medium">
                      {link.label}
                    </span>
                    <ChevronRight className="w-3 h-3 ml-auto opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all duration-300" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6 pb-2 border-b border-amber-500/20">
              Contact
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-4 group">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-amber-600/20 to-amber-700/20 flex items-center justify-center group-hover:bg-gradient-to-br group-hover:from-amber-600/30 group-hover:to-amber-700/30 transition-all duration-300">
                  <MapPin className="w-5 h-5 text-amber-400" />
                </div>
                <div>
                  <p className="text-sm font-medium text-white">Adresse</p>
                  <p className="text-sm text-gray-400 group-hover:text-amber-200 transition-colors">
                    Avenue de l'Éducation<br />
                    Centre-ville, Maroc
                  </p>
                </div>
              </li>
              
              <li className="flex items-start space-x-4 group">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-amber-600/20 to-amber-700/20 flex items-center justify-center group-hover:bg-gradient-to-br group-hover:from-amber-600/30 group-hover:to-amber-700/30 transition-all duration-300">
                  <Phone className="w-5 h-5 text-amber-400" />
                </div>
                <div>
                  <p className="text-sm font-medium text-white">Téléphone</p>
                  <p className="text-sm text-gray-400 group-hover:text-amber-200 transition-colors">
                    +212 5XX XX XX XX
                  </p>
                </div>
              </li>
              
              <li className="flex items-start space-x-4 group">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-amber-600/20 to-amber-700/20 flex items-center justify-center group-hover:bg-gradient-to-br group-hover:from-amber-600/30 group-hover:to-amber-700/30 transition-all duration-300">
                  <Mail className="w-5 h-5 text-amber-400" />
                </div>
                <div>
                  <p className="text-sm font-medium text-white">Email</p>
                  <p className="text-sm text-gray-400 group-hover:text-amber-200 transition-colors">
                    contact@lycee-abi-al-alaa-maari.ma
                  </p>
                </div>
              </li>
            </ul>
          </div>

          {/* Horaires */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6 pb-2 border-b border-amber-500/20 flex items-center">
              <Clock className="w-5 h-5 mr-2 text-amber-400" />
              Horaires
            </h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center pb-3 border-b border-gray-800">
                <span className="text-sm text-gray-400">Lundi - Vendredi</span>
                <span className="text-sm font-medium text-amber-200">8h00 - 18h00</span>
              </div>
              <div className="flex justify-between items-center pb-3 border-b border-gray-800">
                <span className="text-sm text-gray-400">Samedi</span>
                <span className="text-sm font-medium text-amber-200">8h00 - 12h00</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-400">Dimanche</span>
                <span className="text-sm font-medium text-amber-200">Fermé</span>
              </div>
            </div>
            
            {/* Bouton contact */}
            <div className="mt-6">
              <Link 
                to="/contact"
                className="group relative block w-full text-center bg-gradient-to-r from-gray-800 to-gray-900 hover:from-amber-600 hover:to-amber-700 text-white py-3 rounded-lg font-medium transition-all duration-300 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-amber-600/0 to-amber-700/0 group-hover:from-amber-600/20 group-hover:to-amber-700/20 transition-all duration-300"></div>
                <span className="relative">Nous contacter</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Ligne de séparation et copyright */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-500 text-sm">
              &copy; {currentYear} Lycée Collégial Abi-Al-Alaa-Al-Maari. Tous droits réservés.
            </p>
            
            <div className="flex items-center space-x-6 text-sm">
              <Link 
                to="/privacy" 
                className="text-gray-500 hover:text-amber-300 transition-colors duration-300 group flex items-center"
              >
                <span>Confidentialité</span>
                <div className="w-1 h-1 rounded-full bg-amber-500 opacity-0 group-hover:opacity-100 ml-2 transition-opacity duration-300"></div>
              </Link>
              <Link 
                to="/terms" 
                className="text-gray-500 hover:text-amber-300 transition-colors duration-300 group flex items-center"
              >
                <span>Mentions légales</span>
                <div className="w-1 h-1 rounded-full bg-amber-500 opacity-0 group-hover:opacity-100 ml-2 transition-opacity duration-300"></div>
              </Link>
              <Link 
                to="/sitemap" 
                className="text-gray-500 hover:text-amber-300 transition-colors duration-300 group flex items-center"
              >
                <span>Plan du site</span>
                <div className="w-1 h-1 rounded-full bg-amber-500 opacity-0 group-hover:opacity-100 ml-2 transition-opacity duration-300"></div>
              </Link>
            </div>
          </div>
          
          {/* Ligne décorative */}
          <div className="mt-6 pt-6 border-t border-gray-800">
            <p className="text-xs text-gray-600 text-center">
              Inspiré par l'héritage intellectuel d'Abou al-Alaa al-Maari
            </p>
          </div>
        </div>
      </div>

      {/* Effets décoratifs inspirés de la navbar */}
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-gradient-to-br from-amber-500/5 to-yellow-500/5 rounded-full blur-3xl"></div>
      <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-gray-800/10 to-gray-900/10 rounded-full blur-3xl"></div>
    </footer>
  );
}