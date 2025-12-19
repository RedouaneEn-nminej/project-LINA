import { Link } from 'react-router-dom';
import { Users, Trophy, Calendar, Sparkles, BookOpen, Heart, Quote, Award, Brain, PenTool, Eye, Target, Shield } from 'lucide-react';
import CommentForm from '../components/CommentForm';
import CommentList from '../components/CommentList';
import { useState } from 'react';

export default function Home() {
  const [refreshKey, setRefreshKey] = useState(0);

  const stats = [
    { icon: Users, label: 'Élèves', value: '450+', color: 'from-orange-500 to-amber-500' },
    { icon: Trophy, label: 'Clubs', value: '12', color: 'from-amber-500 to-yellow-500' },
    { icon: Calendar, label: 'Événements', value: '25+', color: 'from-yellow-500 to-amber-400' },
  ];

  const values = [
    {
      icon: BookOpen,
      title: 'Excellence académique',
      description: 'Un enseignement de qualité qui développe le potentiel de chaque élève.',
      color: 'from-blue-500 to-indigo-500'
    },
    {
      icon: Heart,
      title: 'Bien-être',
      description: 'Un environnement bienveillant où chacun se sent valorisé et écouté.',
      color: 'from-emerald-500 to-teal-500'
    },
    {
      icon: Sparkles,
      title: 'Innovation',
      description: 'Des méthodes pédagogiques modernes adaptées aux défis de demain.',
      color: 'from-purple-500 to-pink-500'
    },
  ];

  const maariQualities = [
    {
      icon: Brain,
      title: 'Intellect Brillant',
      description: 'Connu pour sa mémoire prodigieuse et sa capacité d\'analyse exceptionnelle',
      color: 'from-blue-500 to-indigo-500'
    },
    {
      icon: PenTool,
      title: 'Poète Visionnaire',
      description: 'Auteur d\'œuvres littéraires qui ont traversé les siècles',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Eye,
      title: 'Philosophe Libre',
      description: 'Penseur indépendant aux réflexions profondes sur la condition humaine',
      color: 'from-emerald-500 to-teal-500'
    }
  ];

  return (
    <div>
      {/* Section Héro - Design sombre et élégant */}
      <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-blue-900/20 to-purple-900/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-900/10 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Section gauche : Hommage à Abou al-Alaa al-Maari */}
            <div className="relative group">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-br from-amber-500/10 via-transparent to-purple-500/10 rounded-3xl blur-xl opacity-50 group-hover:opacity-70 transition-all duration-700"></div>
                
                <div className="relative bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm rounded-2xl border border-amber-500/20 p-8 shadow-2xl overflow-hidden">
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent"></div>
                  
                  <div className="mb-8 relative">
                    <div className="absolute -inset-2 bg-gradient-to-br from-amber-600/30 to-purple-600/30 rounded-2xl blur-md opacity-60"></div>
                    <div className="relative overflow-hidden rounded-xl border-2 border-amber-500/30">
                      <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCOXOZJgwLFX7taigBYV479qu4nd9KAxD1TKuLtJM-z8bDg8A-BxCzb8zRSYTL9p09vxN7vBsxrzPD-ncQveJmAVtL94ysK2poODQ_Jw&s=10"
                        alt="Abou al-Alaa al-Maari"
                        className="w-full h-72 object-cover transform group-hover:scale-105 transition-transform duration-700 grayscale group-hover:grayscale-0"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent"></div>
                    </div>
                  </div>
                  
                  <div className="text-center mb-6">
                    <div className="inline-block px-6 py-2 bg-gradient-to-r from-amber-600/20 to-purple-600/20 rounded-full border border-amber-500/30 mb-4">
                      <span className="text-amber-300 font-semibold tracking-wider">NOTRE INSPIRATION</span>
                    </div>
                    <h2 className="text-3xl font-bold bg-gradient-to-r from-amber-300 via-amber-200 to-amber-300 bg-clip-text text-transparent">
                      Abou al-Alaa al-Maari
                    </h2>
                    <p className="text-gray-300 mt-2">973–1057 • Poète et philosophe arabe</p>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-amber-600 to-amber-700 flex items-center justify-center flex-shrink-0 mt-1">
                        <Quote className="w-5 h-5 text-amber-100" />
                      </div>
                      <div>
                        <p className="text-gray-200 leading-relaxed italic">
                          "Figure majeure de la littérature arabe classique, Abou al-Alaa al-Maari était un penseur libre, 
                          un poète visionnaire et un philosophe profond dont l'héritage intellectuel continue d'inspirer."
                        </p>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 gap-3 pt-4">
                      {maariQualities.map((quality, index) => (
                        <div 
                          key={index}
                          className="flex items-center space-x-3 p-3 rounded-lg bg-gradient-to-r from-gray-800/50 to-gray-900/50 border border-gray-700/50 hover:border-amber-500/30 transition-colors duration-300"
                        >
                          <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${quality.color} flex items-center justify-center flex-shrink-0`}>
                            <quality.icon className="w-4 h-4 text-white" />
                          </div>
                          <div>
                            <div className="font-semibold text-amber-100 text-sm">{quality.title}</div>
                            <div className="text-xs text-gray-400">{quality.description}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                    
                    <div className="pt-6 mt-6 border-t border-gray-700/50">
                      <p className="text-center text-gray-300 text-sm italic">
                        "Aveugle dès son enfance, il voyait plus clair que ceux qui avaient la vue. 
                        Sa cécité physique n'était qu'un voile sur la lumière de son esprit."
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-10">
              <div>
                <div className="inline-flex items-center space-x-2 px-5 py-2.5 bg-gradient-to-r from-amber-600/20 to-purple-600/20 backdrop-blur-sm rounded-xl border border-amber-500/20 mb-8">
                  <div className="w-2 h-2 bg-amber-400 rounded-full animate-pulse"></div>
                  <span className="text-sm font-semibold text-amber-200 tracking-wide">
                    PORTEUR D'HÉRITAGE INTELLECTUEL
                  </span>
                </div>
                
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight">
                  <span className="block text-gray-100">Lycée Collégial</span>
                  <span className="block mt-2 bg-gradient-to-r from-amber-300 via-amber-200 to-yellow-300 bg-clip-text text-transparent">
                    Abi-Al-Alaa-Al-Maari
                  </span>
                </h1>
                
                <div className="space-y-4">
                  <p className="text-xl text-gray-300 leading-relaxed">
                    Fondé sur les principes de sagesse, de connaissance et de liberté intellectuelle 
                    qui caractérisaient notre illustre éponyme, notre établissement incarne l'excellence 
                    académique au service du développement humain.
                  </p>
                  <p className="text-lg text-gray-400 leading-relaxed">
                    Comme Abou al-Alaa al-Maari qui transcenda sa cécité pour illuminer le monde par sa pensée, 
                    nous croyons que chaque élève peut dépasser ses limites et briller par son intelligence.
                  </p>
                </div>
              </div>
              
              <div>
                <Link
                  to="/activities"
                  className="group relative inline-flex items-center justify-center w-full max-w-md px-8 py-4 bg-gradient-to-r from-amber-600 to-amber-700 text-white rounded-xl font-bold text-lg overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-amber-500/25"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-amber-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <div className="absolute -top-2 -left-2 w-4 h-4 bg-yellow-300 rounded-full blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute -bottom-2 -right-2 w-4 h-4 bg-yellow-300 rounded-full blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <span className="relative flex items-center justify-center space-x-3">
                    <span className="text-lg font-bold tracking-wide">EXPLORER NOTRE ACTIVITÉS</span>
                    <div className="transform group-hover:translate-x-2 group-hover:rotate-90 transition-all duration-500">
                      <Award className="w-5 h-5" />
                    </div>
                  </span>
                </Link>
                
                <p className="text-center text-gray-400 text-sm mt-4 max-w-md mx-auto">
                  Inspirés par un génie du XIᵉ siècle, nous formons les penseurs du XXIᵉ siècle
                </p>
              </div>
              
              <div className="pt-6 flex justify-center">
                <div className="w-16 h-16 rounded-full border-2 border-amber-500/30 flex items-center justify-center">
                  <div className="w-10 h-10 rounded-full border border-amber-500/50 flex items-center justify-center">
                    <div className="w-4 h-4 rounded-full bg-amber-500/70"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Stats - Rupture visuelle avec couleurs vives */}
      <section className="relative py-20 bg-gradient-to-br from-white via-amber-50 to-white overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-orange-400 via-amber-400 to-orange-400"></div>
        
        <div className="absolute top-10 left-10 w-64 h-64 bg-gradient-to-br from-orange-200/60 to-amber-200/40 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-gradient-to-br from-amber-200/40 to-yellow-200/30 rounded-full blur-3xl"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center space-x-2 px-6 py-3 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full shadow-lg mb-6">
              <Target className="w-5 h-5 text-white" />
              <span className="text-white font-bold text-sm tracking-wider">CHIFFRES CLÉS</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-orange-600 via-amber-600 to-yellow-600 bg-clip-text text-transparent">
                Notre communauté éducative
              </span>
            </h2>
            
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed font-medium">
              Des indicateurs qui témoignent de notre dynamisme et de notre impact
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="relative group">
                <div className="absolute -inset-3 bg-gradient-to-br from-white to-amber-100 rounded-3xl blur-lg opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                
                <div className="relative bg-white rounded-2xl shadow-xl p-8 text-center transform transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl border-2 border-transparent group-hover:border-amber-200">
                  <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-8 h-1 bg-gradient-to-r from-orange-400 to-amber-400 rounded-full"></div>
                  
                  <div className="relative mb-6">
                    <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} rounded-2xl blur-md opacity-40 group-hover:opacity-60 transition-opacity duration-500`}></div>
                    <div className={`relative w-20 h-20 bg-gradient-to-br ${stat.color} rounded-2xl flex items-center justify-center mx-auto shadow-lg transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                      <stat.icon className="w-10 h-10 text-white" />
                    </div>
                  </div>
                  
                  <div className="text-5xl font-bold mb-3">
                    <span className="bg-gradient-to-br from-gray-800 to-gray-900 bg-clip-text text-transparent group-hover:from-orange-700 group-hover:to-amber-700 transition-all duration-500">
                      {stat.value}
                    </span>
                  </div>
                  
                  <div className="text-lg font-bold text-gray-800 group-hover:text-orange-600 transition-colors duration-300">
                    {stat.label}
                  </div>
                  
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-transparent via-amber-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-amber-400 rounded-full blur-sm opacity-0 group-hover:opacity-70 transition-opacity duration-500"></div>
                <div className="absolute -bottom-1 -left-1 w-3 h-3 bg-orange-400 rounded-full blur-sm opacity-0 group-hover:opacity-70 transition-opacity duration-500"></div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12 pt-8 border-t border-amber-100">
            <p className="text-gray-600 italic font-medium">
              Chaque chiffre représente une histoire d'apprentissage et de réussite
            </p>
          </div>
        </div>
      </section>

      {/* Section Valeurs - Design élégant et moderne */}
      <section className="relative py-20 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
        
        <div className="absolute top-20 left-20 w-48 h-48 bg-gradient-to-br from-blue-100/40 to-indigo-100/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-gradient-to-br from-emerald-100/40 to-teal-100/30 rounded-full blur-3xl"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center space-x-2 px-6 py-3 bg-gradient-to-r from-gray-800 to-gray-900 rounded-full shadow-lg mb-6">
              <Shield className="w-5 h-5 text-white" />
              <span className="text-white font-bold text-sm tracking-wider">NOS ENGAGEMENTS</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-gray-800 via-gray-700 to-gray-900 bg-clip-text text-transparent">
                Les piliers de notre excellence
              </span>
            </h2>
            
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-medium">
              Trois valeurs fondamentales qui guident chaque aspect de notre mission éducative
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="relative group">
                <div className="absolute -inset-3 bg-gradient-to-br from-white to-gray-50 rounded-3xl blur-lg opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                
                <div className="relative bg-white rounded-2xl shadow-lg p-8 transform transition-all duration-500 hover:-translate-y-2 hover:shadow-xl border border-gray-100">
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-8 h-2 bg-gradient-to-r from-gray-300 to-gray-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <div className="mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-br ${value.color} rounded-2xl flex items-center justify-center mx-auto shadow-md transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}>
                      <value.icon className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">
                    {value.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed text-center">
                    {value.description}
                  </p>
                  
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-gradient-to-r from-gray-300 to-gray-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                
                <div className="absolute -top-2 -right-2 w-4 h-4 bg-gradient-to-br from-gray-400 to-gray-500 rounded-full blur-sm opacity-0 group-hover:opacity-50 transition-opacity duration-500"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Commentaires - Design amélioré */}
      <section id="comments" className="relative py-20 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
        {/* Effets décoratifs subtils */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
        
        <div className="absolute top-20 right-10 w-64 h-64 bg-gradient-to-br from-amber-100/20 to-yellow-100/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-64 h-64 bg-gradient-to-br from-blue-100/20 to-indigo-100/10 rounded-full blur-3xl"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* En-tête élégant */}
          <div className="text-center mb-16">
            {/* Badge harmonieux */}
            <div className="inline-flex items-center space-x-2 px-5 py-2.5 bg-gradient-to-r from-gray-800/10 to-gray-900/10 backdrop-blur-sm rounded-xl border border-gray-300/20 mb-6">
              <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
              <span className="text-sm font-semibold text-gray-700 tracking-wide">
                ESPACE D'ÉCHANGE
              </span>
            </div>
            
            {/* Titre principal */}
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-gray-800 to-gray-900">
                Votre voix compte
              </span>
            </h2>
            
            {/* Description */}
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Partagez votre expérience, posez vos questions et contribuez à l'enrichissement 
              de notre communauté éducative par un dialogue constructif.
            </p>
          </div>

          {/* Grille équilibrée */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Colonne gauche - Formulaire */}
            <div className="lg:pr-8">
              <div className="relative group">
                {/* Effet de carte */}
                <div className="absolute -inset-3 bg-gradient-to-br from-gray-50 to-white rounded-2xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500"></div>
                
                <div className="relative bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
                  {/* En-tête du formulaire */}
                  <div className="mb-8">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                        <div className="text-white font-bold text-sm">✍️</div>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-800">Partagez votre avis</h3>
                        <p className="text-sm text-gray-500">Votre témoignage aide notre communauté à progresser</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Formulaire */}
                  <CommentForm onCommentAdded={() => setRefreshKey((prev) => prev + 1)} />
                </div>
              </div>
            </div>

            {/* Colonne droite - Témoignages */}
            <div className="lg:pl-8">
              <div className="bg-white rounded-2xl shadow-lg border border-gray-100 h-full">
                {/* En-tête */}
                <div className="p-6 border-b border-gray-100">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 rounded-full bg-gray-800"></div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-800">Retours de la communauté</h3>
                      <p className="text-sm text-gray-500">Expériences partagées par nos membres</p>
                    </div>
                  </div>
                </div>
                
                {/* Zone de commentaires */}
                <div className="p-4">
                  <div className="max-h-[500px] overflow-y-auto pr-2">
                    <CommentList key={refreshKey} />
                  </div>
                </div>
                
                {/* Note informative */}
                <div className="p-4 border-t border-gray-100 bg-gray-50/50">
                  <p className="text-sm text-gray-600 text-center">
                    Chaque témoignage nous aide à améliorer notre accompagnement
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Citation finale */}
          <div className="max-w-3xl mx-auto mt-12 pt-8 border-t border-gray-200">
            <div className="text-center">
              <div className="text-4xl text-gray-300 mb-4">"</div>
              <blockquote className="text-lg text-gray-600 italic mb-4 leading-relaxed">
                Comme Abou al-Alaa al-Maari qui dialoguait avec les siècles par ses écrits, 
                nous croyons que l'échange d'idées est au cœur de tout apprentissage authentique.
              </blockquote>
            
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}