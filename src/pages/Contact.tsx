import { useState, FormEvent } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, Clock, Users, Building, MessageSquare, AlertCircle, Calendar } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setError('');
    setIsSubmitting(true);

    // Validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.subject.trim() || !formData.message.trim()) {
      setError('Veuillez remplir tous les champs obligatoires');
      setIsSubmitting(false);
      return;
    }

    // Simuler l'envoi
    setTimeout(() => {
      setIsSubmitted(true);
      setIsSubmitting(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Réinitialiser le message de succès après 5 secondes
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Adresse',
      content: 'Avenue de l\'Éducation, Centre-ville, Maroc',
      description: 'Accès facile depuis le centre-ville, parking disponible',
      color: 'from-gray-800 to-gray-900',
      action: 'Voir sur la carte'
    },
    {
      icon: Phone,
      title: 'Téléphone',
      content: '+212 5XX XX XX XX',
      description: 'Service d\'accueil téléphonique du lundi au vendredi',
      color: 'from-amber-500 to-amber-600',
      action: 'Appeler maintenant'
    },
    {
      icon: Mail,
      title: 'Email',
      content: 'contact@lycee-abi-al-alaa-maari.ma',
      description: 'Réponse sous 48 heures ouvrées',
      color: 'from-blue-500 to-indigo-500',
      action: 'Envoyer un email'
    },
  ];

  const schedules = [
    {
      title: 'Secrétariat administratif',
      hours: 'Lundi - Vendredi : 8h00 - 18h00',
      icon: Building,
      color: 'border-gray-300'
    },
    {
      title: 'Accueil téléphonique',
      hours: 'Lundi - Vendredi : 8h30 - 17h30',
      icon: Phone,
      color: 'border-amber-300'
    },
    {
      title: 'Période de cours',
      hours: 'Lundi - Vendredi : 8h30 - 16h30',
      icon: Clock,
      color: 'border-blue-300'
    },
    {
      title: 'Rencontres parents',
      hours: 'Sur rendez-vous uniquement',
      icon: Users,
      color: 'border-emerald-300'
    },
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
              <MessageSquare className="w-4 h-4 text-amber-300" />
              <span className="text-sm font-semibold text-amber-200 tracking-wide">
                ÉCHANGE & COMMUNICATION
              </span>
            </div>
            
            {/* Titre principal */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              <span className="block text-gray-100">Contactez</span>
              <span className="block mt-2 bg-gradient-to-r from-amber-300 via-amber-200 to-yellow-300 bg-clip-text text-transparent">
                Notre Équipe
              </span>
            </h1>
            
            {/* Description */}
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Une question ? Un projet ? Notre équipe est à votre écoute pour vous accompagner 
              et répondre à toutes vos interrogations concernant notre établissement.
            </p>
          </div>
        </div>
      </section>

      {/* Infos de contact */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="relative group"
              >
                {/* Effet de carte */}
                <div className="absolute -inset-2 bg-gradient-to-br from-gray-50 to-white rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 border border-gray-100">
                  <div className="flex items-start space-x-4">
                    <div className={`w-12 h-12 bg-gradient-to-br ${info.color} rounded-xl flex items-center justify-center flex-shrink-0`}>
                      <info.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-gray-800 mb-1">{info.title}</h3>
                      <p className="text-gray-600 font-medium mb-1">{info.content}</p>
                      <p className="text-sm text-gray-500 mb-3">{info.description}</p>
                      <button className="text-sm font-medium text-gray-700 hover:text-amber-600 transition-colors group/link flex items-center">
                        {info.action}
                        <Send className="w-3 h-3 ml-1 group-hover/link:translate-x-1 transition-transform duration-300" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Formulaire et informations */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Formulaire */}
            <div className="relative">
              <div className="absolute -inset-3 bg-gradient-to-br from-gray-50 to-white rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-800 mb-2">Envoyez-nous un message</h2>
                  <p className="text-gray-600">Tous les champs marqués d'un * sont obligatoires</p>
                </div>

                {error && (
                  <div className="mb-6 p-4 bg-red-50 border border-red-100 rounded-xl flex items-start space-x-3">
                    <AlertCircle className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                    <span className="text-red-600">{error}</span>
                  </div>
                )}

                {isSubmitted && (
                  <div className="mb-6 p-4 bg-emerald-50 border border-emerald-100 rounded-xl">
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-6 h-6 text-emerald-500 flex-shrink-0" />
                      <div>
                        <p className="font-bold text-emerald-700">Message envoyé avec succès !</p>
                        <p className="text-sm text-emerald-600 mt-1">Nous vous répondrons dans les plus brefs délais.</p>
                      </div>
                    </div>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Nom complet *
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500/30 focus:border-amber-400 transition-all duration-300"
                      placeholder="Votre nom et prénom"
                      disabled={isSubmitting}
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Adresse email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500/30 focus:border-amber-400 transition-all duration-300"
                      placeholder="exemple@email.com"
                      disabled={isSubmitting}
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                      Sujet du message *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      required
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500/30 focus:border-amber-400 transition-all duration-300"
                      placeholder="Objet de votre demande"
                      disabled={isSubmitting}
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Votre message *
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500/30 focus:border-amber-400 transition-all duration-300 resize-none"
                      placeholder="Décrivez-nous votre demande en détail..."
                      disabled={isSubmitting}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center space-x-3 px-8 py-4 bg-gradient-to-r from-gray-800 to-gray-900 hover:from-amber-600 hover:to-amber-700 text-white rounded-xl font-bold transition-all duration-500 overflow-hidden disabled:opacity-50 disabled:cursor-not-allowed group"
                  >
                    {/* Effet de fond animé */}
                    <div className="absolute inset-0 bg-gradient-to-r from-amber-600/0 to-amber-700/0 group-hover:from-amber-600/20 group-hover:to-amber-700/20 transition-all duration-500"></div>
                    
                    <Send className={`w-5 h-5 relative ${isSubmitting ? 'animate-pulse' : ''}`} />
                    <span className="relative">
                      {isSubmitting ? 'Envoi en cours...' : 'Envoyer mon message'}
                    </span>
                  </button>
                </form>
              </div>
            </div>

            {/* Informations pratiques */}
            <div className="space-y-8">
              {/* Horaires */}
              <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                    <Calendar className="w-5 h-5 text-gray-300" />
                  </div>
                  <h2 className="text-xl font-bold text-gray-800">Horaires et disponibilités</h2>
                </div>

                <div className="space-y-4">
                  {schedules.map((schedule, index) => (
                    <div key={index} className={`border-l-4 ${schedule.color} pl-4 py-2`}>
                      <div className="flex items-start space-x-3">
                        <schedule.icon className="w-5 h-5 text-gray-500 mt-0.5" />
                        <div>
                          <h3 className="font-semibold text-gray-800">{schedule.title}</h3>
                          <p className="text-gray-600">{schedule.hours}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 pt-6 border-t border-gray-100">
                  <p className="text-sm text-gray-500">
                    Pour les urgences en dehors des heures d'ouverture, contactez le service de garde.
                  </p>
                </div>
              </div>

              {/* Informations complémentaires */}
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 border border-gray-200">
                <h3 className="text-lg font-bold text-gray-800 mb-4">Informations importantes</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="w-6 h-6 rounded-full bg-amber-100 flex items-center justify-center mr-3 flex-shrink-0">
                      <div className="w-2 h-2 rounded-full bg-amber-500"></div>
                    </div>
                    <p className="text-gray-600">Les inscriptions sont ouvertes toute l'année sous réserve de places disponibles</p>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 rounded-full bg-amber-100 flex items-center justify-center mr-3 flex-shrink-0">
                      <div className="w-2 h-2 rounded-full bg-amber-500"></div>
                    </div>
                    <p className="text-gray-600">Journées portes ouvertes programmées chaque trimestre</p>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 rounded-full bg-amber-100 flex items-center justify-center mr-3 flex-shrink-0">
                      <div className="w-2 h-2 rounded-full bg-amber-500"></div>
                    </div>
                    <p className="text-gray-600">Rendez-vous avec la direction sur demande et selon disponibilités</p>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 rounded-full bg-amber-100 flex items-center justify-center mr-3 flex-shrink-0">
                      <div className="w-2 h-2 rounded-full bg-amber-500"></div>
                    </div>
                    <p className="text-gray-600">Réponse garantie sous 48 heures ouvrées pour toute demande par email</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}