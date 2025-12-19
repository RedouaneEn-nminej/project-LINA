import { useEffect, useState } from 'react';
import { MessageCircle, User, Calendar, Clock, Loader2, Star } from 'lucide-react';
import { supabase, Comment } from '../lib/supabase';

export default function CommentList() {
  const [comments, setComments] = useState<Comment[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchComments = async () => {
    try {
      const { data, error } = await supabase
        .from('comments')
        .select('*')
        .order('created_at', { ascending: false })
        .limit(10); // Limite à 10 derniers commentaires

      if (error) throw error;
      setComments(data || []);
      setError(null);
    } catch (err) {
      console.error('Error fetching comments:', err);
      setError('Impossible de charger les commentaires');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchComments();

    const channel = supabase
      .channel('comments-channel')
      .on('postgres_changes', { 
        event: 'INSERT', 
        schema: 'public', 
        table: 'comments' 
      }, () => {
        fetchComments();
      })
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffMs = now.getTime() - date.getTime();
    const diffMins = Math.floor(diffMs / (1000 * 60));
    const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
    const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

    if (diffMins < 60) {
      return `Il y a ${diffMins} minute${diffMins > 1 ? 's' : ''}`;
    } else if (diffHours < 24) {
      return `Il y a ${diffHours} heure${diffHours > 1 ? 's' : ''}`;
    } else if (diffDays === 1) {
      return 'Hier';
    } else if (diffDays < 7) {
      return `Il y a ${diffDays} jour${diffDays > 1 ? 's' : ''}`;
    } else {
      return date.toLocaleDateString('fr-FR', {
        day: 'numeric',
        month: 'short',
        year: 'numeric'
      });
    }
  };

  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center py-12">
        <div className="relative">
          <div className="w-16 h-16 rounded-full border-4 border-gray-200"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <Loader2 className="w-8 h-8 text-amber-500 animate-spin" />
          </div>
        </div>
        <p className="mt-4 text-gray-600 font-medium">Chargement des témoignages...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-12 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8">
        <div className="w-16 h-16 rounded-full bg-red-100 flex items-center justify-center mx-auto mb-4">
          <div className="w-8 h-8 text-red-500">!</div>
        </div>
        <p className="text-gray-800 font-medium mb-2">{error}</p>
        <p className="text-gray-600 text-sm">Veuillez rafraîchir la page</p>
      </div>
    );
  }

  if (comments.length === 0) {
    return (
      <div className="text-center py-12 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8">
        <div className="w-20 h-20 rounded-full bg-gradient-to-br from-amber-100 to-yellow-100 flex items-center justify-center mx-auto mb-4">
          <MessageCircle className="w-10 h-10 text-amber-600" />
        </div>
        <h4 className="text-lg font-bold text-gray-800 mb-2">Pas encore de témoignages</h4>
        <p className="text-gray-600 mb-4">Soyez le premier à partager votre expérience !</p>
        <div className="inline-flex items-center space-x-1">
          <Star className="w-4 h-4 text-amber-400" />
          <Star className="w-4 h-4 text-amber-400" />
          <Star className="w-4 h-4 text-amber-400" />
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* En-tête */}
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500 to-amber-600 flex items-center justify-center">
            <MessageCircle className="w-5 h-5 text-white" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-gray-800">Témoignages</h3>
            <p className="text-sm text-gray-500">{comments.length} contribution{comments.length > 1 ? 's' : ''}</p>
          </div>
        </div>
        <div className="px-3 py-1.5 bg-gray-100 rounded-lg">
          <span className="text-sm font-medium text-gray-700">Derniers</span>
        </div>
      </div>

      {/* Liste des commentaires */}
      <div className="space-y-4">
        {comments.map((comment, index) => (
          <div
            key={comment.id}
            className={`relative group transition-all duration-300 ${
              index === 0 ? 'transform hover:-translate-y-1' : ''
            }`}
          >
            {/* Effet de fond pour le premier commentaire */}
            {index === 0 && (
              <div className="absolute -inset-2 bg-gradient-to-br from-amber-50 to-white rounded-2xl blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            )}
            
            <div className={`relative bg-white rounded-xl border border-gray-100 p-5 ${
              index === 0 ? 'shadow-lg' : 'shadow-sm'
            } group-hover:shadow-md transition-all duration-300`}>
              
              {/* En-tête du commentaire */}
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center space-x-3">
                  <div className="relative">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                      <User className="w-5 h-5 text-gray-300" />
                    </div>
                    {index === 0 && (
                      <div className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-gradient-to-br from-amber-400 to-yellow-400 flex items-center justify-center">
                        <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                      </div>
                    )}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">{comment.author_name}</h4>
                    <div className="flex items-center space-x-2 mt-1">
                      <div className="flex items-center text-xs text-gray-500">
                        <Clock className="w-3 h-3 mr-1" />
                        <span>{formatDate(comment.created_at)}</span>
                      </div>
                      {index < 3 && (
                        <div className="px-2 py-0.5 bg-amber-100 text-amber-700 rounded-full text-xs font-medium">
                          Récent
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                
                {/* Indicateur visuel */}
                <div className="w-2 h-2 rounded-full bg-gradient-to-br from-amber-400 to-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              {/* Message */}
              <div className="pl-13"> {/* 13 = 40px (avatar) + 12px (space) */}
                <p className="text-gray-700 leading-relaxed whitespace-pre-wrap">
                  {comment.message}
                </p>
                
                {/* Séparateur */}
                <div className="mt-4 pt-3 border-t border-gray-100">
                  <div className="flex items-center space-x-2">
                    <div className="w-6 h-px bg-gradient-to-r from-gray-200 to-transparent"></div>
                    <div className="text-xs text-gray-400">Expérience partagée</div>
                    <div className="w-6 h-px bg-gradient-to-r from-transparent to-gray-200"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pied de liste */}
      <div className="pt-4 border-t border-gray-100">
        <div className="flex items-center justify-center space-x-4 text-sm text-gray-500">
          <div className="flex items-center space-x-1">
            <div className="w-2 h-2 rounded-full bg-amber-400"></div>
            <span>Nouveau</span>
          </div>
          <div className="flex items-center space-x-1">
            <div className="w-2 h-2 rounded-full bg-gray-300"></div>
            <span>Récent</span>
          </div>
        </div>
        <p className="text-center text-xs text-gray-400 mt-2">
          Les témoignages sont modérés pour maintenir un espace respectueux
        </p>
      </div>
    </div>
  );
}