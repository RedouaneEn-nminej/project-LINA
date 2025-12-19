import { Calendar, Clock, ArrowRight, Newspaper, Trophy, TrendingUp, Eye, BookOpen } from 'lucide-react';

export default function News() {
  const news = [
    {
      id: 1,
      title: 'Rentrée scolaire 2024 : Nouveautés et projets ambitieux',
      date: '15 janvier 2024',
      readTime: '5 min',
      image: 'https://images.pexels.com/photos/8500607/pexels-photo-8500607.jpeg?auto=compress&cs=tinysrgb&w=800',
      excerpt:
        'Introduction du nouveau laboratoire de sciences, lancement des cours de robotique avancée et développement du programme d\'échange international.',
      category: 'Institutionnel',
      views: 245,
      featured: true
    },
    {
      id: 2,
      title: 'Succès exceptionnel du spectacle artistique de fin d\'année',
      date: '10 janvier 2024',
      readTime: '3 min',
      image: 'https://images.pexels.com/photos/1751731/pexels-photo-1751731.jpeg?auto=compress&cs=tinysrgb&w=800',
      excerpt:
        'Plus de 200 spectateurs ont assisté à notre spectacle musical annuel. Reconnaissance des talents artistiques de nos élèves.',
      category: 'Culturel',
      views: 189,
      featured: true
    },
    {
      id: 3,
      title: 'Triomphe au concours national de mathématiques',
      date: '5 janvier 2024',
      readTime: '4 min',
      image: 'https://images.pexels.com/photos/8926547/pexels-photo-8926547.jpeg?auto=compress&cs=tinysrgb&w=800',
      excerpt:
        'Trois élèves médaillés au concours régional de mathématiques. Excellence académique reconnue au niveau national.',
      category: 'Académique',
      views: 312,
      featured: false
    },
    {
      id: 4,
      title: 'Journée portes ouvertes : Affluence record et retours positifs',
      date: '28 décembre 2023',
      readTime: '3 min',
      image: 'https://images.pexels.com/photos/8612992/pexels-photo-8612992.jpeg?auto=compress&cs=tinysrgb&w=800',
      excerpt:
        'Rencontres enrichissantes avec les familles, présentation des projets pédagogiques et découverte des installations modernisées.',
      category: 'Événementiel',
      views: 176,
      featured: false
    },
    {
      id: 5,
      title: 'Lancement officiel du club avancé de robotique et IA',
      date: '20 décembre 2023',
      readTime: '4 min',
      image: 'https://images.pexels.com/photos/2102416/pexels-photo-2102416.jpeg?auto=compress&cs=tinysrgb&w=800',
      excerpt:
        'Nouveau programme d\'initiation à l\'intelligence artificielle, construction de robots autonomes et préparation aux compétitions nationales.',
      category: 'Innovation',
      views: 221,
      featured: true
    },
    {
      id: 6,
      title: 'Sortie pédagogique au musée des sciences et technologies',
      date: '15 décembre 2023',
      readTime: '3 min',
      image: 'https://images.pexels.com/photos/8466807/pexels-photo-8466807.jpeg?auto=compress&cs=tinysrgb&w=800',
      excerpt:
        'Expérience immersive pour les élèves autour des thèmes de l\'astronomie, de la physique quantique et des technologies futures.',
      category: 'Pédagogique',
      views: 154,
      featured: false
    },
    {
      id: 7,
      title: 'Projet écologique : Verdissement des espaces éducatifs',
      date: '10 décembre 2023',
      readTime: '4 min',
      image: 'https://images.pexels.com/photos/8923175/pexels-photo-8923175.jpeg?auto=compress&cs=tinysrgb&w=800',
      excerpt:
        'Initiative étudiante pour la création d\'un jardin pédagogique et installation de panneaux solaires sur les bâtiments.',
      category: 'Environnement',
      views: 198,
      featured: false
    },
    {
      id: 8,
      title: 'Atelier d\'orientation professionnelle pour les terminales',
      date: '5 décembre 2023',
      readTime: '5 min',
      image: 'https://images.pexels.com/photos/8613089/pexels-photo-8613089.jpeg?auto=compress&cs=tinysrgb&w=800',
      excerpt:
        'Rencontres avec des professionnels, simulations d\'entretiens et découverte des métiers d\'avenir pour une orientation réussie.',
      category: 'Orientation',
      views: 267,
      featured: false
    },
  ];

  const categories = [
    { id: 'all', label: 'Toutes', icon: Newspaper, count: news.length },
    { id: 'Académique', label: 'Académique', icon: BookOpen, count: news.filter(n => n.category === 'Académique').length },
    { id: 'Culturel', label: 'Culturel', icon: Trophy, count: news.filter(n => n.category === 'Culturel').length },
    { id: 'Innovation', label: 'Innovation', icon: TrendingUp, count: news.filter(n => n.category === 'Innovation').length },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-20 md:py-24 overflow-hidden">
        {/* Effets décoratifs */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-amber-500/10 to-yellow-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-gray-800/20 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 px-5 py-2.5 bg-gradient-to-r from-amber-600/20 to-amber-700/20 backdrop-blur-sm rounded-xl border border-amber-500/20 mb-6">
              <Newspaper className="w-4 h-4 text-amber-300" />
              <span className="text-sm font-semibold text-amber-200 tracking-wide">
                VIE DE L'ÉTABLISSEMENT
              </span>
            </div>
            
            {/* Titre principal */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              <span className="block text-gray-100">Actualités</span>
              <span className="block mt-2 bg-gradient-to-r from-amber-300 via-amber-200 to-yellow-300 bg-clip-text text-transparent">
                & Événements
              </span>
            </h1>
            
            {/* Description */}
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Suivez l'actualité dynamique de notre établissement, les réussites de nos élèves 
              et les événements qui façonnent notre communauté éducative.
            </p>
            
            {/* Stats rapides */}
            <div className="flex justify-center space-x-8 mt-10">
              
            </div>
          </div>
        </div>
      </section>

      {/* Contenu principal */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filtres */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Filtrer par catégorie</h2>
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <button
                  key={category.id}
                  className={`group relative flex items-center space-x-2 px-5 py-3 rounded-xl font-medium transition-all duration-300 ${
                    category.id === 'all'
                      ? 'bg-gradient-to-r from-gray-800 to-gray-900 text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:shadow-md'
                  }`}
                >
                  <category.icon className="w-5 h-5" />
                  <span>{category.label}</span>
                  <span className={`px-2 py-0.5 rounded-full text-xs ${
                    category.id === 'all' 
                      ? 'bg-white/20 text-white' 
                      : 'bg-gray-200 text-gray-700'
                  }`}>
                    {category.count}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Articles mis en avant */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
              <Trophy className="w-6 h-6 mr-2 text-amber-500" />
              Articles mis en avant
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {news.filter(article => article.featured).slice(0, 2).map((article) => (
                <article
                  key={article.id}
                  className="relative group"
                >
                  {/* Effet de carte */}
                  <div className="absolute -inset-3 bg-gradient-to-br from-amber-50 to-white rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <div className="relative bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 border border-gray-100">
                    {/* Image */}
                    <div className="relative h-64 overflow-hidden">
                      <img
                        src={article.image}
                        alt={article.title}
                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                      />
                      {/* Overlay gradient */}
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-gray-900/20 to-transparent"></div>
                      
                      {/* Badge mis en avant */}
                      <div className="absolute top-4 left-4 flex items-center space-x-2">
                        <span className="bg-gradient-to-r from-amber-500 to-amber-600 text-white px-3 py-1.5 rounded-lg text-sm font-bold shadow-lg">
                          À la une
                        </span>
                        <span className="bg-white/90 backdrop-blur-sm text-gray-800 px-3 py-1.5 rounded-lg text-sm font-medium">
                          {article.category}
                        </span>
                      </div>
                    </div>

                    <div className="p-6">
                      {/* Métadonnées */}
                      <div className="flex flex-wrap items-center text-sm text-gray-500 mb-4 space-x-4">
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 mr-2 text-gray-400" />
                          {article.date}
                        </div>
                        <div className="flex items-center">
                          <Clock className="w-4 h-4 mr-2 text-gray-400" />
                          {article.readTime} de lecture
                        </div>
                        <div className="flex items-center">
                          <Eye className="w-4 h-4 mr-2 text-gray-400" />
                          {article.views} vues
                        </div>
                      </div>

                      {/* Titre */}
                      <h3 className="text-xl font-bold text-gray-800 mb-3 line-clamp-2">
                        {article.title}
                      </h3>
                      
                      {/* Extrait */}
                      <p className="text-gray-600 mb-6 line-clamp-3 leading-relaxed">
                        {article.excerpt}
                      </p>

                      {/* Bouton lire la suite */}
                      <button className="flex items-center text-gray-800 font-medium group/link hover:text-amber-600 transition-colors">
                        <span>Lire l'article complet</span>
                        <ArrowRight className="w-4 h-4 ml-2 group-hover/link:translate-x-1 transition-transform duration-300" />
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Tous les articles */}
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Toutes les actualités</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {news.map((article) => (
                <article
                  key={article.id}
                  className="relative group"
                >
                  {/* Effet de carte */}
                  <div className="absolute -inset-2 bg-gradient-to-br from-gray-50 to-white rounded-2xl blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <div className="relative bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 border border-gray-100">
                    {/* Image */}
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={article.image}
                        alt={article.title}
                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                      />
                      {/* Badge de catégorie */}
                      <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-gray-800 px-2.5 py-1 rounded-lg text-xs font-medium">
                        {article.category}
                      </span>
                    </div>

                    <div className="p-4">
                      {/* Métadonnées */}
                      <div className="flex items-center text-xs text-gray-500 mb-3 space-x-3">
                        <div className="flex items-center">
                          <Calendar className="w-3 h-3 mr-1" />
                          {article.date}
                        </div>
                        <div className="flex items-center">
                          <Eye className="w-3 h-3 mr-1" />
                          {article.views}
                        </div>
                      </div>

                      {/* Titre */}
                      <h3 className="text-base font-bold text-gray-800 mb-2 line-clamp-2">
                        {article.title}
                      </h3>
                      
                      {/* Extrait */}
                      <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                        {article.excerpt}
                      </p>

                      {/* Temps de lecture */}
                      <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                        <div className="flex items-center text-xs text-gray-500">
                          <Clock className="w-3 h-3 mr-1" />
                          {article.readTime}
                        </div>
                        <button className="flex items-center text-sm text-gray-700 font-medium hover:text-amber-600 transition-colors group/link">
                          <span className="text-xs">Lire</span>
                          <ArrowRight className="w-3 h-3 ml-1 group-hover/link:translate-x-0.5 transition-transform duration-300" />
                        </button>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Newsletter */}
          <div className="mt-16 pt-12 border-t border-gray-200">
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 text-center">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center mx-auto mb-4">
                <Newspaper className="w-8 h-8 text-gray-300" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Restez informé</h3>
              <p className="text-gray-600 mb-6 max-w-md mx-auto">
                Recevez nos dernières actualités directement dans votre boîte email
              </p>
              <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Votre adresse email"
                  className="flex-1 px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-800/30 focus:border-gray-800"
                />
                <button className="px-6 py-3 bg-gradient-to-r from-gray-800 to-gray-900 text-white rounded-lg font-medium hover:shadow-lg transition-all duration-300">
                  S'abonner
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}