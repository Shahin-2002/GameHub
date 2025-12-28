'use client';

import { useState } from 'react';
import { Search, Grid, List, Star, Eye, MessageSquare, Calendar, Sparkles, TrendingUp, Flame, ChevronDown } from 'lucide-react';
import './Games.css';
export default function AllGamesPage() {
  const [viewMode, setViewMode] = useState('grid'); // 'grid' or 'list'
  const [selectedGenre, setSelectedGenre] = useState('all');
  const [selectedSort, setSelectedSort] = useState('popular');
  const [searchTerm, setSearchTerm] = useState('');

  const genres = [
    { id: 'all', name: 'همه', icon: Sparkles },
    { id: 'action', name: 'اکشن', icon: Flame },
    { id: 'rpg', name: 'RPG', icon: Star },
    { id: 'adventure', name: 'ماجرایی', icon: TrendingUp }
  ];

  const sortOptions = [
    { id: 'popular', name: 'محبوب‌ترین' },
    { id: 'newest', name: 'جدیدترین' },
    { id: 'highest', name: 'بالاترین امتیاز' },
    { id: 'most-reviewed', name: 'بیشترین نقد' }
  ];

  const games = [
    {
      id: 1,
      title: 'Cyberpunk 2077',
      image: 'https://images.unsplash.com/photo-1552820728-8b83bb6b773f?w=800',
      criticScore: 8.5,
      userScore: 7.8,
      reviews: 342,
      views: '2.5M',
      genre: 'RPG',
      year: '2020',
      isNew: false,
      isTrending: true
    },
    {
      id: 2,
      title: 'Red Dead Redemption 2',
      image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800',
      criticScore: 9.7,
      userScore: 9.2,
      reviews: 528,
      views: '3.2M',
      genre: 'اکشن-ماجرایی',
      year: '2018',
      isNew: false,
      isTrending: false
    },
    {
      id: 3,
      title: 'Elden Ring',
      image: 'https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=800',
      criticScore: 9.6,
      userScore: 8.9,
      reviews: 612,
      views: '4.1M',
      genre: 'RPG',
      year: '2024',
      isNew: true,
      isTrending: true
    },
    {
      id: 4,
      title: 'God of War Ragnarök',
      image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800',
      criticScore: 9.4,
      userScore: 9.1,
      reviews: 428,
      views: '1.8M',
      genre: 'اکشن',
      year: '2024',
      isNew: true,
      isTrending: true
    },
    {
      id: 5,
      title: 'The Last of Us Part II',
      image: 'https://images.unsplash.com/photo-1552820728-8b83bb6b773f?w=800',
      criticScore: 9.3,
      userScore: 8.5,
      reviews: 734,
      views: '2.8M',
      genre: 'اکشن-ماجرایی',
      year: '2020',
      isNew: false,
      isTrending: false
    },
    {
      id: 6,
      title: 'Spider-Man 2',
      image: 'https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?w=800',
      criticScore: 9.0,
      userScore: 8.8,
      reviews: 456,
      views: '2.1M',
      genre: 'اکشن',
      year: '2023',
      isNew: false,
      isTrending: true
    },
    {
      id: 7,
      title: 'Baldur\'s Gate 3',
      image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800',
      criticScore: 9.6,
      userScore: 9.3,
      reviews: 892,
      views: '3.5M',
      genre: 'RPG',
      year: '2023',
      isNew: false,
      isTrending: true
    },
    {
      id: 8,
      title: 'Hogwarts Legacy',
      image: 'https://images.unsplash.com/photo-1614732414444-096e5f1122d5?w=800',
      criticScore: 8.4,
      userScore: 8.7,
      reviews: 621,
      views: '2.9M',
      genre: 'RPG',
      year: '2023',
      isNew: false,
      isTrending: false
    },
    {
      id: 9,
      title: 'Starfield',
      image: 'https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=800',
      criticScore: 8.7,
      userScore: 7.9,
      reviews: 512,
      views: '2.2M',
      genre: 'RPG',
      year: '2024',
      isNew: true,
      isTrending: true
    }
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
        <div className="absolute top-20 right-4 sm:right-20 w-72 sm:w-96 h-72 sm:h-96 bg-green-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-4 sm:left-20 w-64 sm:w-80 h-64 sm:h-80 bg-emerald-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 pt-28 pb-12 sm:pb-16">
        
        {/* هدر */}
        <div className="max-w-7xl mx-auto mb-8 sm:mb-12">
          <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
            <div className="bg-green-500/10 p-2 sm:p-3 rounded-xl border border-green-500/20">
              <Search className="w-5 h-5 sm:w-6 sm:h-6 text-green-400" />
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black bg-gradient-to-l from-white via-green-100 to-white bg-clip-text text-transparent">
              همه بازی‌ها
            </h1>
          </div>
          <p className="text-gray-400 text-sm sm:text-base md:text-lg">
            {games.length} بازی برای کاوش و بررسی
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          
          {/* فیلترها و جستجو */}
          <div className="mb-8 space-y-4">
            
            {/* جستجو */}
            <div className="relative">
              <Search className="absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-gray-500" />
              <input
                type="text"
                placeholder="دنبال چه بازی‌ای می‌گردی؟"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-gray-900/50 backdrop-blur-sm text-white px-10 sm:px-12 py-3 sm:py-4 rounded-xl sm:rounded-2xl border border-gray-800 focus:outline-none focus:border-green-500/50 focus:shadow-[0_0_30px_rgba(74,222,128,0.2)] placeholder-gray-500 transition-all duration-300 text-sm sm:text-base"
              />
            </div>

            {/* فیلترها */}
            <div className="flex flex-col gap-4">
              
              {/* ژانرها */}
              <div className="flex flex-wrap gap-2">
                {genres.map((genre) => {
                  const Icon = genre.icon;
                  const isActive = selectedGenre === genre.id;
                  return (
                    <button
                      key={genre.id}
                      onClick={() => setSelectedGenre(genre.id)}
                      className={`flex items-center gap-2 px-3 sm:px-4 py-2 sm:py-2.5 rounded-xl font-bold transition-all duration-300 text-sm sm:text-base ${
                        isActive
                          ? 'bg-green-500/20 text-green-400 border-2 border-green-500/50 shadow-[0_0_20px_rgba(74,222,128,0.2)]'
                          : 'bg-gray-900/30 text-gray-400 border-2 border-gray-800 hover:border-gray-700'
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                      <span>{genre.name}</span>
                    </button>
                  );
                })}
              </div>

              {/* مرتب‌سازی و نمایش */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:justify-between">
                {/* Sort */}
                <div className="relative flex-1 sm:flex-initial">
                  <select
                    value={selectedSort}
                    onChange={(e) => setSelectedSort(e.target.value)}
                    className="w-full bg-gray-900/50 backdrop-blur-sm text-white pl-10 pr-4 py-2.5 rounded-xl border-2 border-gray-800 focus:outline-none focus:border-green-500/50 focus:shadow-[0_0_20px_rgba(74,222,128,0.2)] transition-all font-bold text-sm appearance-none cursor-pointer hover:border-gray-700"
                  >
                    {sortOptions.map((option) => (
                      <option key={option.id} value={option.id} className="bg-gray-900">
                        {option.name}
                      </option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                </div>

                {/* View Toggle */}
                <div className="flex items-center gap-1 bg-gray-900/50 p-1 rounded-xl border-2 border-gray-800 self-start sm:self-auto">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`p-2 rounded-lg transition-all ${
                      viewMode === 'grid'
                        ? 'bg-green-500/20 text-green-400'
                        : 'text-gray-400 hover:text-gray-300'
                    }`}
                    aria-label="نمایش شبکه‌ای"
                  >
                    <Grid className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`p-2 rounded-lg transition-all ${
                      viewMode === 'list'
                        ? 'bg-green-500/20 text-green-400'
                        : 'text-gray-400 hover:text-gray-300'
                    }`}
                    aria-label="نمایش لیستی"
                  >
                    <List className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Grid View */}
          {viewMode === 'grid' && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {games.map((game) => (
                <div
                  key={game.id}
                  className="group relative bg-gray-900/40 backdrop-blur-sm rounded-2xl overflow-hidden border-2 border-gray-800 hover:border-green-500/50 transition-all duration-300 hover:shadow-[0_0_40px_rgba(74,222,128,0.2)] cursor-pointer"
                >
                  {/* بج‌ها */}
                  <div className="absolute top-3 left-3 sm:top-4 sm:left-4 z-10 flex flex-col gap-2">
                    {game.isNew && (
                      <span className="bg-gradient-to-r from-green-500 to-emerald-500 text-black px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-xs font-black flex items-center gap-1 shadow-[0_0_20px_rgba(74,222,128,0.4)]">
                        <Sparkles className="w-3 h-3" />
                        جدید
                      </span>
                    )}
                    {game.isTrending && (
                      <span className="bg-orange-500/90 text-white px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-xs font-black flex items-center gap-1">
                        <Flame className="w-3 h-3" />
                        ترند
                      </span>
                    )}
                  </div>

                  {/* عکس */}
                  <div className="aspect-video overflow-hidden relative">
                    <img 
                      src={game.image} 
                      alt={game.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>
                  </div>

                  {/* محتوا */}
                  <div className="p-4 sm:p-5">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-green-400 text-xs font-bold px-2 py-1 bg-green-500/10 rounded-lg border border-green-500/20">
                        {game.genre}
                      </span>
                      <div className="flex items-center gap-1 text-gray-500 text-xs">
                        <Calendar className="w-3 h-3" />
                        <span>{game.year}</span>
                      </div>
                    </div>

                    <h3 className="text-lg sm:text-xl font-black text-white mb-3 sm:mb-4 group-hover:text-green-400 transition-colors line-clamp-2">
                      {game.title}
                    </h3>

                    {/* امتیازات */}
                    <div className="grid grid-cols-2 gap-2 sm:gap-3 mb-3 sm:mb-4">
                      <div className="bg-gray-800/50 rounded-lg p-2 sm:p-3 border border-gray-700">
                        <div className="text-gray-400 text-xs mb-1">منتقدین</div>
                        <div className={`text-xl sm:text-2xl font-black ${getScoreColor(game.criticScore)}`}>
                          {game.criticScore}
                        </div>
                      </div>
                      <div className="bg-gray-800/50 rounded-lg p-2 sm:p-3 border border-gray-700">
                        <div className="text-gray-400 text-xs mb-1">کاربران</div>
                        <div className={`text-xl sm:text-2xl font-black ${getScoreColor(game.userScore)}`}>
                          {game.userScore}
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 sm:gap-0 text-xs text-gray-500">
                      <div className="flex items-center gap-2 sm:gap-3">
                        <div className="flex items-center gap-1">
                          <MessageSquare className="w-3 h-3" />
                          <span>{game.reviews}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Eye className="w-3 h-3" />
                          <span>{game.views}</span>
                        </div>
                      </div>
                      <button className="text-green-400 hover:text-green-300 font-bold transition-colors text-sm sm:text-xs">
                        مشاهده →
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* List View */}
          {viewMode === 'list' && (
            <div className="space-y-3 sm:space-y-4 max-w-5xl mx-auto lg:mx-0">
              {games.map((game) => (
                <div
                  key={game.id}
                  className="group bg-gray-900/40 backdrop-blur-sm rounded-xl sm:rounded-2xl overflow-hidden border-2 border-gray-800 hover:border-green-500/50 transition-all duration-300 hover:shadow-[0_0_40px_rgba(74,222,128,0.2)] cursor-pointer"
                >
                  <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 p-3 sm:p-4">
                    {/* عکس */}
                    <div className="shrink-0 w-full sm:w-24 md:w-28 h-40 sm:h-24 md:h-28 rounded-lg sm:rounded-xl overflow-hidden relative">
                      <img 
                        src={game.image} 
                        alt={game.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                      
                      {/* بج‌ها روی عکس */}
                      <div className="absolute top-1.5 left-1.5 flex flex-col gap-1">
                        {game.isNew && (
                          <span className="bg-gradient-to-r from-green-500 to-emerald-500 text-black px-1.5 py-0.5 rounded-full text-[10px] sm:text-xs font-black">
                            جدید
                          </span>
                        )}
                        {game.isTrending && (
                          <span className="bg-orange-500/90 text-white px-1.5 py-0.5 rounded-full text-[10px] sm:text-xs font-black">
                            ترند
                          </span>
                        )}
                      </div>
                    </div>

                    {/* محتوا */}
                    <div className="flex-1 min-w-0 flex flex-col justify-between gap-2 sm:gap-0">
                      <div>
                        <div className="flex flex-wrap items-center gap-2 mb-1.5 sm:mb-2">
                          <span className="text-green-400 text-[10px] sm:text-xs font-bold px-1.5 sm:px-2 py-0.5 sm:py-1 bg-green-500/10 rounded border border-green-500/20">
                            {game.genre}
                          </span>
                          <span className="text-gray-500 text-[10px] sm:text-xs">{game.year}</span>
                        </div>

                        <h3 className="text-base sm:text-lg md:text-xl font-black text-white mb-1.5 sm:mb-2 group-hover:text-green-400 transition-colors line-clamp-2">
                          {game.title}
                        </h3>

                        <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs sm:text-sm mb-2">
                          <div className="flex items-center gap-1">
                            <span className="text-gray-400">منتقدین:</span>
                            <span className={`font-black ${getScoreColor(game.criticScore)}`}>
                              {game.criticScore}
                            </span>
                          </div>
                          <div className="hidden sm:block w-px h-3 sm:h-4 bg-gray-700"></div>
                          <div className="flex items-center gap-1">
                            <span className="text-gray-400">کاربران:</span>
                            <span className={`font-black ${getScoreColor(game.userScore)}`}>
                              {game.userScore}
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 sm:gap-0">
                        <div className="flex items-center gap-2 sm:gap-3 text-[10px] sm:text-xs text-gray-500">
                          <div className="flex items-center gap-1">
                            <MessageSquare className="w-3 h-3" />
                            <span>{game.reviews} نقد</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Eye className="w-3 h-3" />
                            <span>{game.views} بازدید</span>
                          </div>
                        </div>
                        <button className="w-full sm:w-auto bg-green-500/10 hover:bg-green-500/20 text-green-400 px-3 sm:px-5 py-1.5 sm:py-2 rounded-lg font-bold text-xs sm:text-sm transition-all duration-300 border border-green-500/20 hover:border-green-500/40 text-center">
                          مشاهده بررسی
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* دکمه بیشتر */}
          <div className="mt-8 sm:mt-12 text-center">
            <button className="bg-gray-900/50 border-2 border-gray-800 hover:border-green-500/50 text-white px-6 sm:px-10 py-3 sm:py-4 rounded-xl font-black text-base sm:text-lg transition-all duration-300 hover:shadow-[0_0_30px_rgba(74,222,128,0.2)]">
              نمایش بیشتر
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}