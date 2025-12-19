import { useState } from 'react';
import { X, ZoomIn, Camera, Grid3x3, Filter, Clock, Calendar, ChevronLeft, ChevronRight } from 'lucide-react';

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
  const [filter, setFilter] = useState<string>('all');

  const images = [
    {
      url: 'https://images.pexels.com/photos/8612992/pexels-photo-8612992.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Sciences appliquées',
      category: 'académique',
      date: '2024',
      description: 'Expérimentation en laboratoire de physique'
    },
    {
      url: 'https://images.pexels.com/photos/8466807/pexels-photo-8466807.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Atelier créatif',
      category: 'artistique',
      date: '2024',
      description: 'Séance de peinture et techniques mixtes'
    },
    {
      url: 'https://images.pexels.com/photos/8926547/pexels-photo-8926547.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Pédagogie interactive',
      category: 'académique',
      date: '2024',
      description: 'Travail collaboratif en classe numérique'
    },
    {
      url: 'https://images.pexels.com/photos/8613089/pexels-photo-8613089.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Recherche scientifique',
      category: 'académique',
      date: '2024',
      description: 'Manipulations en laboratoire de chimie'
    },
    {
      url: 'https://images.pexels.com/photos/8466815/pexels-photo-8466815.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Espace lecture',
      category: 'culturel',
      date: '2024',
      description: 'Bibliothèque et centre de documentation'
    },
    {
      url: 'https://images.pexels.com/photos/8926551/pexels-photo-8926551.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Innovation numérique',
      category: 'technologique',
      date: '2024',
      description: 'Salle informatique et programmation'
    },
    {
      url: 'https://images.pexels.com/photos/8500607/pexels-photo-8500607.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Compétition sportive',
      category: 'sportif',
      date: '2024',
      description: 'Tournoi de basket interclasses'
    },
    {
      url: 'https://images.pexels.com/photos/8926540/pexels-photo-8926540.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Éducation musicale',
      category: 'artistique',
      date: '2024',
      description: 'Cours d\'initiation aux instruments'
    },
    {
      url: 'https://images.pexels.com/photos/8923175/pexels-photo-8923175.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Récréation éducative',
      category: 'social',
      date: '2024',
      description: 'Activités ludiques et développement social'
    },
  ];

  const categories = [
    { id: 'all', label: 'Toutes', color: 'from-gray-800 to-gray-900' },
    { id: 'académique', label: 'Académique', color: 'from-blue-500 to-indigo-500' },
    { id: 'artistique', label: 'Artistique', color: 'from-purple-500 to-pink-500' },
    { id: 'sportif', label: 'Sportif', color: 'from-orange-500 to-amber-500' },
    { id: 'technologique', label: 'Technologique', color: 'from-cyan-500 to-blue-500' },
    { id: 'culturel', label: 'Culturel', color: 'from-emerald-500 to-teal-500' },
  ];

  const filteredImages = filter === 'all' 
    ? images 
    : images.filter(img => img.category === filter);

  const handleImageClick = (url: string, index: number) => {
    setSelectedImage(url);
    setSelectedImageIndex(index);
  };

  const navigateImage = (direction: 'prev' | 'next') => {
    if (selectedImageIndex === null) return;
    
    const newIndex = direction === 'prev' 
      ? (selectedImageIndex - 1 + images.length) % images.length
      : (selectedImageIndex + 1) % images.length;
    
    setSelectedImage(images[newIndex].url);
    setSelectedImageIndex(newIndex);
  };

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
              <Camera className="w-4 h-4 text-amber-300" />
              <span className="text-sm font-semibold text-amber-200 tracking-wide">
                MÉMOIRES VISUELLES
              </span>
            </div>
            
            {/* Titre principal */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              <span className="block text-gray-100">Galerie</span>
              <span className="block mt-2 bg-gradient-to-r from-amber-300 via-amber-200 to-yellow-300 bg-clip-text text-transparent">
                Photographique
              </span>
            </h1>
            
            {/* Description */}
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Un aperçu visuel de la vie dynamique et éducative au sein de notre établissement.
            </p>
            
            {/* Stats rapides */}
            <div className="flex justify-center space-x-8 mt-10">
            
            </div>
          </div>
        </div>
      </section>

      {/* Filtres */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-800 mb-3">Explorez par thématique</h2>
            <p className="text-gray-600">Filtrer les photos par domaine d'activité</p>
          </div>

          {/* Filtres */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setFilter(category.id)}
                className={`group relative flex items-center space-x-2 px-5 py-2.5 rounded-xl font-medium transition-all duration-300 ${
                  filter === category.id
                    ? `bg-gradient-to-r ${category.color} text-white shadow-lg`
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:shadow-md'
                }`}
              >
                <Filter className="w-4 h-4" />
                <span>{category.label}</span>
                
                {/* Indicateur actif */}
                {filter === category.id && (
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-6 h-1 bg-gradient-to-r from-amber-400 to-yellow-400 rounded-full"></div>
                )}
              </button>
            ))}
          </div>

          {/* Grid des images */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredImages.map((image, index) => (
              <div
                key={index}
                className="relative group cursor-pointer"
                onClick={() => handleImageClick(image.url, index)}
              >
                {/* Effet de carte */}
                <div className="absolute -inset-3 bg-gradient-to-br from-gray-50 to-white rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 border border-gray-100">
                  {/* Image */}
                  <div className="relative h-72 overflow-hidden">
                    <img
                      src={image.url}
                      alt={image.title}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                    />
                    
                    {/* Overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 via-gray-900/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    {/* Badge de catégorie */}
                    <span className={`absolute top-4 left-4 px-3 py-1.5 rounded-lg text-sm font-bold shadow-lg bg-gradient-to-r ${
                      categories.find(c => c.id === image.category)?.color || 'from-gray-800 to-gray-900'
                    } text-white`}>
                      {image.category}
                    </span>
                    
                    {/* Bouton zoom */}
                    <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <ZoomIn className="w-5 h-5 text-gray-800" />
                    </div>
                    
                    {/* Info au survol */}
                    <div className="absolute bottom-0 left-0 right-0 p-5 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      <h3 className="text-white font-bold text-lg mb-1">{image.title}</h3>
                      <p className="text-gray-200 text-sm line-clamp-2">{image.description}</p>
                      <div className="flex items-center mt-2 text-gray-300 text-xs">
                        <Calendar className="w-3 h-3 mr-1" />
                        {image.date}
                      </div>
                    </div>
                  </div>

                  {/* Info visible par défaut */}
                  <div className="p-4">
                    <h3 className="font-bold text-gray-800 mb-1 truncate">{image.title}</h3>
                    <p className="text-gray-600 text-sm truncate">{image.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Message si pas de résultats */}
          {filteredImages.length === 0 && (
            <div className="text-center py-16">
              <div className="w-20 h-20 rounded-full bg-gray-100 flex items-center justify-center mx-auto mb-4">
                <Grid3x3 className="w-10 h-10 text-gray-400" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Aucune photo trouvée</h3>
              <p className="text-gray-600">Essayez une autre catégorie</p>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage && selectedImageIndex !== null && (
        <div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          {/* Bouton fermer */}
          <button
            className="absolute top-6 right-6 text-white hover:text-gray-300 transition-colors group"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative">
              <div className="absolute -inset-2 bg-white/10 rounded-full blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <X className="w-10 h-10 relative" />
            </div>
          </button>

          {/* Bouton précédent */}
          <button
            className="absolute left-6 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 transition-colors group"
            onClick={(e) => {
              e.stopPropagation();
              navigateImage('prev');
            }}
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-white/10 rounded-full blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <ChevronLeft className="w-12 h-12 relative" />
            </div>
          </button>

          {/* Bouton suivant */}
          <button
            className="absolute right-6 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 transition-colors group"
            onClick={(e) => {
              e.stopPropagation();
              navigateImage('next');
            }}
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-white/10 rounded-full blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <ChevronRight className="w-12 h-12 relative" />
            </div>
          </button>

          {/* Image agrandie */}
          <div className="relative max-w-5xl max-h-[80vh] w-full" onClick={(e) => e.stopPropagation()}>
            <img
              src={selectedImage}
              alt="Image agrandie"
              className="w-full h-full object-contain rounded-lg"
            />
            
            {/* Info de l'image */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-6 text-white rounded-b-lg">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-xl font-bold mb-1">{images[selectedImageIndex].title}</h3>
                  <p className="text-gray-200">{images[selectedImageIndex].description}</p>
                </div>
                <div className="text-right">
                  <div className="flex items-center space-x-2 text-sm text-gray-300">
                    <Clock className="w-4 h-4" />
                    <span>{selectedImageIndex + 1} / {images.length}</span>
                  </div>
                  <div className="mt-2 px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r bg-opacity-20 backdrop-blur-sm">
                    {images[selectedImageIndex].category}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Indicateurs de navigation */}
          <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex items-center space-x-2">
            {images.map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === selectedImageIndex 
                    ? 'bg-white w-8' 
                    : 'bg-gray-500 hover:bg-gray-400'
                }`}
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedImage(images[index].url);
                  setSelectedImageIndex(index);
                }}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}