'use client'

import { useState } from 'react';
import { Gamepad2, Sparkles, TrendingUp, Flame, Star, MessageSquare, Eye, Clock, Calendar } from 'lucide-react';

export default function Homepage() {
  const [activeTab, setActiveTab] = useState('popular');

  const featuredGames = [
    {
      id: 1,
      title: 'Cyberpunk 2077',
      image: 'https://images.unsplash.com/photo-1552820728-8b83bb6b773f?w=800',
      criticScore: 8.5,
      userScore: 7.8,
      reviews: 342,
      category: 'RPG',
      releaseDate: '2020',
      isNew: false
    },
    {
      id: 2,
      title: 'Red Dead Redemption 2',
      image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800',
      criticScore: 9.7,
      userScore: 9.2,
      reviews: 528,
      category: 'اکشن-ماجرایی',
      releaseDate: '2018',
      isNew: false
    },
    {
      id: 3,
      title: 'Elden Ring',
      image: 'https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=800',
      criticScore: 9.6,
      userScore: 8.9,
      reviews: 612,
      category: 'RPG',
      releaseDate: '2024',
      isNew: true
    }
  ];

  const games = [
    { id: 4, title: 'God of War Ragnarök', criticScore: 9.4, userScore: 9.1, reviews: 428, views: '1.2M', category: 'اکشن', releaseDate: '2024', isNew: true },
    { id: 5, title: 'Baldur\'s Gate 3', criticScore: 9.6, userScore: 9.3, reviews: 892, views: '2.1M', category: 'RPG', releaseDate: '2023', isNew: false },
    { id: 6, title: 'The Last of Us Part II', criticScore: 9.3, userScore: 8.5, reviews: 734, views: '1.8M', category: 'اکشن-ماجرایی', releaseDate: '2020', isNew: false },
    { id: 7, title: 'Spider-Man 2', criticScore: 9.0, userScore: 8.8, reviews: 456, views: '1.5M', category: 'اکشن', releaseDate: '2023', isNew: false },
    { id: 8, title: 'Hogwarts Legacy', criticScore: 8.4, userScore: 8.7, reviews: 621, views: '1.9M', category: 'RPG', releaseDate: '2023', isNew: false },
    { id: 9, title: 'Starfield', criticScore: 8.7, userScore: 7.9, reviews: 512, views: '1.4M', category: 'RPG', releaseDate: '2024', isNew: true }
  ];

  const getScoreColor = (score) => {
    if (score >= 9) return 'text-green-400';
    if (score >= 7.5) return 'text-yellow-400';
    return 'text-orange-400';
  };

  return (
    <div className="min-h-screen bg-black text-white" dir="rtl">
      
      {/* دکوراسیون پس‌زمینه */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-20 w-96 h-96 bg-green-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16">
        
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="w-6 h-6 text-green-400 animate-pulse" />
            <span className="text-green-400 font-bold text-sm tracking-widest">بهترین مرجع نقد و بررسی</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black mb-6 bg-gradient-to-l from-white via-green-100 to-white bg-clip-text text-transparent leading-tight">
            نقد حرفه‌ای بازی‌ها
          </h1>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-8">
            بررسی‌های تخصصی، امتیازات منتقدین و نظرات کاربران درباره جدیدترین بازی‌ها
          </p>
          
          {/* جستجو */}
          <div className="max-w-2xl mx-auto relative">
            <input
              type="text"
              placeholder="بازی مورد نظرت رو جستجو کن..."
              className="w-full bg-gray-900/50 backdrop-blur-sm text-white px-3 py-4 pr-7 rounded-2xl border border-gray-800 focus:outline-none focus:border-green-500/50 focus:shadow-[0_0_30px_rgba(74,222,128,0.2)] placeholder-gray-500 transition-all duration-300"
            />
            <div className="absolute left-4 top-1/2 -translate-y-1/2">
              <button className="bg-gradient-to-r from-green-500 to-emerald-500 text-black px-6 py-2 rounded-xl font-bold hover:from-green-400 hover:to-emerald-400 transition-all duration-300 shadow-[0_0_20px_rgba(74,222,128,0.3)]">
                جستجو
              </button>
            </div>
          </div>
        </div>

        {/* بازی‌های برگزیده */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <Flame className="w-7 h-7 text-green-400" />
            <h2 className="text-3xl font-black text-white">بازی‌های برگزیده</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredGames.map((game, index) => (
              <div
                key={game.id}
                className="group relative bg-gray-900/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-800 hover:border-green-500/50 transition-all duration-300 hover:shadow-[0_0_40px_rgba(74,222,128,0.2)] cursor-pointer"
              >
                {game.isNew && (
                  <div className="absolute top-4 left-4 z-10 bg-gradient-to-r from-green-500 to-emerald-500 text-black px-3 py-1 rounded-full text-xs font-black flex items-center gap-1 shadow-[0_0_20px_rgba(74,222,128,0.4)]">
                    <Sparkles className="w-3 h-3" />
                    جدید
                  </div>
                )}
                
                <div className="aspect-video overflow-hidden relative">
                  <img 
                    src={game.image} 
                    alt={game.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>
                </div>
                
                <div className="p-5">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-green-400 text-xs font-bold px-2 py-1 bg-green-500/10 rounded-lg border border-green-500/20">
                      {game.category}
                    </span>
                    <div className="flex items-center gap-1 text-gray-500 text-xs">
                      <Calendar className="w-3 h-3" />
                      <span>{game.releaseDate}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-black text-white mb-4 group-hover:text-green-400 transition-colors">
                    {game.title}
                  </h3>
                  
                  {/* امتیازات */}
                  <div className="grid grid-cols-2 gap-3 mb-4">
                    <div className="bg-gray-800/50 rounded-lg p-3 border border-gray-700">
                      <div className="text-gray-400 text-xs mb-1">امتیاز منتقدین</div>
                      <div className={`text-2xl font-black ${getScoreColor(game.criticScore)}`}>
                        {game.criticScore}
                      </div>
                    </div>
                    <div className="bg-gray-800/50 rounded-lg p-3 border border-gray-700">
                      <div className="text-gray-400 text-xs mb-1">امتیاز کاربران</div>
                      <div className={`text-2xl font-black ${getScoreColor(game.userScore)}`}>
                        {game.userScore}
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1 text-gray-400 text-sm">
                      <MessageSquare className="w-4 h-4" />
                      <span>{game.reviews} نقد</span>
                    </div>
                    <button className="bg-green-500/10 hover:bg-green-500/20 text-green-400 px-4 py-2 rounded-lg font-bold text-sm transition-all duration-300 border border-green-500/20 hover:border-green-500/40">
                      مشاهده بررسی
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* تب‌ها */}
        <div className="mb-8">
          <div className="flex items-center gap-3 border-b border-gray-800">
            <button
              onClick={() => setActiveTab('popular')}
              className={`flex items-center gap-2 px-6 py-3 font-bold transition-all duration-300 relative ${
                activeTab === 'popular' 
                  ? 'text-green-400' 
                  : 'text-gray-500 hover:text-gray-300'
              }`}
            >
              <TrendingUp className="w-5 h-5" />
              پربازدیدترین‌ها
              {activeTab === 'popular' && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-green-400 shadow-[0_0_10px_rgba(74,222,128,0.8)]"></div>
              )}
            </button>
            <button
              onClick={() => setActiveTab('latest')}
              className={`flex items-center gap-2 px-6 py-3 font-bold transition-all duration-300 relative ${
                activeTab === 'latest' 
                  ? 'text-green-400' 
                  : 'text-gray-500 hover:text-gray-300'
              }`}
            >
              <Clock className="w-5 h-5" />
              جدیدترین نقدها
              {activeTab === 'latest' && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-green-400 shadow-[0_0_10px_rgba(74,222,128,0.8)]"></div>
              )}
            </button>
          </div>
        </div>

        {/* لیست بازی‌ها */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {games.map((game, index) => (
            <div
              key={game.id}
              className="group bg-gray-900/30 backdrop-blur-sm rounded-xl p-5 border border-gray-800 hover:border-green-500/30 hover:bg-gray-900/50 transition-all duration-300 cursor-pointer"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <span className="text-green-400 text-xs font-bold px-2 py-1 bg-green-500/10 rounded border border-green-500/20">
                    {game.category}
                  </span>
                  {game.isNew && (
                    <span className="text-black text-xs font-black px-2 py-1 bg-gradient-to-r from-green-400 to-emerald-400 rounded">
                      NEW
                    </span>
                  )}
                </div>
                <div className="text-gray-500 text-xs">{game.releaseDate}</div>
              </div>
              
              <h3 className="text-lg font-black text-white mb-3 group-hover:text-green-400 transition-colors">
                {game.title}
              </h3>
              
              {/* امتیازات کوچک */}
              <div className="flex items-center gap-3 mb-3">
                <div className="flex items-center gap-1">
                  <span className="text-gray-400 text-xs">منتقدین:</span>
                  <span className={`font-black text-sm ${getScoreColor(game.criticScore)}`}>
                    {game.criticScore}
                  </span>
                </div>
                <div className="w-px h-4 bg-gray-700"></div>
                <div className="flex items-center gap-1">
                  <span className="text-gray-400 text-xs">کاربران:</span>
                  <span className={`font-black text-sm ${getScoreColor(game.userScore)}`}>
                    {game.userScore}
                  </span>
                </div>
              </div>
              
              <div className="flex items-center justify-between text-xs text-gray-500">
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-1">
                    <MessageSquare className="w-3 h-3" />
                    <span>{game.reviews}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Eye className="w-3 h-3" />
                    <span>{game.views}</span>
                  </div>
                </div>
                <button className="text-green-400 hover:text-green-300 font-bold transition-colors">
                  خواندن نقد →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}