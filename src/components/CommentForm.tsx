import { useState, FormEvent } from 'react';
import { Send, User, MessageSquare, AlertCircle } from 'lucide-react';
import { supabase } from '../lib/supabase';

interface CommentFormProps {
  onCommentAdded: () => void;
}

export default function CommentForm({ onCommentAdded }: CommentFormProps) {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess(false);

    if (!name.trim() || !message.trim()) {
      setError('Veuillez remplir tous les champs');
      return;
    }

    setIsSubmitting(true);

    try {
      const { error: insertError } = await supabase
        .from('comments')
        .insert([{ 
          author_name: name.trim(), 
          message: message.trim() 
        }]);

      if (insertError) throw insertError;

      setName('');
      setMessage('');
      setSuccess(true);
      onCommentAdded();
      
      // Réinitialiser le message de succès après 3 secondes
      setTimeout(() => {
        setSuccess(false);
      }, 3000);
    } catch (err) {
      setError('Une erreur est survenue. Veuillez réessayer.');
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="relative group">
      {/* Effet de fond décoratif */}
      <div className="absolute -inset-3 bg-gradient-to-br from-amber-50 to-white rounded-2xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500"></div>
      
      <div className="relative bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
        {/* En-tête */}
        <div className="mb-8">
          <div className="flex items-center space-x-3 mb-3">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500 to-amber-600 flex items-center justify-center">
              <MessageSquare className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-800">Partagez votre avis</h3>
              <p className="text-sm text-gray-500 mt-1">Votre contribution compte pour notre communauté</p>
            </div>
          </div>
        </div>

        {/* Messages d'état */}
        {error && (
          <div className="mb-6 p-4 bg-red-50 border border-red-100 rounded-xl flex items-start space-x-3">
            <AlertCircle className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
            <span className="text-red-600 text-sm">{error}</span>
          </div>
        )}

        {success && (
          <div className="mb-6 p-4 bg-emerald-50 border border-emerald-100 rounded-xl">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center">
                <div className="w-3 h-3 bg-emerald-500 rounded-full"></div>
              </div>
              <div>
                <p className="font-medium text-emerald-700">Message envoyé avec succès !</p>
                <p className="text-sm text-emerald-600 mt-1">Merci pour votre contribution.</p>
              </div>
            </div>
          </div>
        )}

        {/* Champs du formulaire */}
        <div className="space-y-6">
          <div>
            <label htmlFor="name" className="flex items-center text-sm font-medium text-gray-700 mb-3">
              <User className="w-4 h-4 mr-2 text-gray-400" />
              Votre nom
            </label>
            <div className="relative">
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500/30 focus:border-amber-400 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                placeholder="Entrez votre nom"
                disabled={isSubmitting}
              />
              <div className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-amber-200/50 transition-all duration-300 pointer-events-none"></div>
            </div>
          </div>

          <div>
            <label htmlFor="message" className="flex items-center text-sm font-medium text-gray-700 mb-3">
              <MessageSquare className="w-4 h-4 mr-2 text-gray-400" />
              Votre message
            </label>
            <div className="relative">
              <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={5}
                className="w-full px-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500/30 focus:border-amber-400 transition-all duration-300 resize-none disabled:opacity-50 disabled:cursor-not-allowed"
                placeholder="Partagez votre expérience, vos suggestions ou vos questions..."
                disabled={isSubmitting}
              />
              <div className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-amber-200/50 transition-all duration-300 pointer-events-none"></div>
            </div>
          </div>
        </div>

        {/* Bouton de soumission */}
        <div className="mt-8 pt-6 border-t border-gray-100">
          <button
            type="submit"
            disabled={isSubmitting}
            className="group relative w-full flex items-center justify-center space-x-3 px-8 py-4 bg-gradient-to-r from-gray-800 to-gray-900 hover:from-amber-600 hover:to-amber-700 text-white rounded-xl font-bold transition-all duration-500 overflow-hidden disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {/* Effet de fond animé */}
            <div className="absolute inset-0 bg-gradient-to-r from-amber-600/0 to-amber-700/0 group-hover:from-amber-600/20 group-hover:to-amber-700/20 transition-all duration-500"></div>
            
            {/* Bordure glow */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-500 rounded-xl blur opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
            
            {/* Contenu */}
            <Send className={`w-5 h-5 relative ${isSubmitting ? 'animate-pulse' : ''}`} />
            <span className="relative">
              {isSubmitting ? 'Envoi en cours...' : 'Publier mon commentaire'}
            </span>
          </button>

          {/* Note informative */}
          <p className="text-center text-xs text-gray-500 mt-4">
            Votre message sera publié après modération
          </p>
        </div>
      </div>
    </form>
  );
}