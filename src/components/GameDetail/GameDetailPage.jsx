'use client';

import { useState, useCallback, useMemo } from 'react';
import {
  Star,
  Calendar,
  Users,
  Gamepad2,
  Monitor,
  Award,
  ChevronLeft,
  ChevronRight,
  MessageSquare,
  ThumbsUp,
  Flag,
} from 'lucide-react';

export default function GameDetailPage() {
  const [activeTab, setActiveTab] = useState('review');
  const [selectedImage, setSelectedImage] = useState(0);

  const game = useMemo(
    () => ({
      title: 'Cyberpunk 2077',
      cover: 'https://images.unsplash.com/photo-1552820728-8b83bb6b773f?w=1200',
      screenshots: [
        'https://images.unsplash.com/photo-1552820728-8b83bb6b773f?w=800',
        'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800',
        'https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=800',
        'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800',
      ],
      criticScore: 8.5,
      userScore: 7.8,
      genre: 'RPG - اکشن',
      developer: 'CD Projekt Red',
      publisher: 'CD Projekt',
      releaseDate: 'دسامبر 2020',
      platforms: [
        'PC',
        'PS5',
        'Xbox Series X',
        'PS4',
        'Xbox One ',
        ' Nintendo Switch',
      ],
      reviews: 342,
      summary:
        'Cyberpunk 2077 یه بازی نقش‌آفرینی اکشن در دنیای بازی است که در شهر Night City، یه شهر آینده‌نگر پر از قدرت، گلامور و تغییرات بدنی اتفاق می‌افته. شما نقش V رو بازی می‌کنید، یه مزدور خارج از قانون که به دنبال یه ایمپلنت منحصر به فرده که کلید جاودانگیه.',
      criticReview:
        'Cyberpunk 2077 یکی از جاه‌طلبانه‌ترین بازی‌های این نسله. با وجود مشکلات فنی در زمان عرضه، این بازی یک دنیای باز خیره‌کننده و داستانی قوی ارائه می‌ده. مکانیک‌های بازی متنوع و طراحی ماموریت‌ها فوق‌العاده است. آپدیت‌های بعدی بازی رو به سطح جدیدی رسوندن.',
      pros: [
        'دنیای باز خیره‌کننده و پر جزئیات',
        'داستان قوی و شخصیت‌پردازی عالی',
        'آزادی عمل بالا در انتخاب سبک بازی',
        'گرافیک و طراحی هنری استثنایی',
        'ماموریت‌های جانبی با کیفیت',
      ],
      cons: [
        'باگ‌های فنی در زمان عرضه (بیشتر رفع شده)',
        'عملکرد ضعیف روی کنسول‌های نسل قدیم',
        'برخی قول‌های تبلیغاتی محقق نشد',
        'سیستم پلیس و AI شهروندان ضعیف',
      ],
      finalVerdict:
        'پس از آپدیت‌های متعدد، Cyberpunk 2077 به بازی‌ای تبدیل شده که همیشه باید می‌بود. اگه دنبال یه تجربه RPG عمیق با دنیای باز خیره‌کننده هستی، این بازی رو از دست نده. فقط مطمئن شو سخت‌افزارت قوی باشه!',
    }),
    []
  );

  const userReviews = useMemo(
    () => [
      {
        id: 1,
        user: 'علی محمدی',
        avatar: '👤',
        score: 9,
        date: '2 هفته پیش',
        text: 'یکی از بهترین بازی‌هایی که تجربه کردم! داستانش فوق‌العاده‌ست و دنیای بازی خیلی جذابه. بعد از آپدیت 2.0 واقعاً عالی شده.',
        likes: 24,
      },
      {
        id: 2,
        user: 'سارا احمدی',
        avatar: '👤',
        score: 7,
        date: '1 ماه پیش',
        text: 'بازی خوبیه ولی هنوز چند تا باگ داره. گرافیکش عالیه ولی برای اجرای روون به سیستم قوی نیاز داره.',
        likes: 15,
      },
      {
        id: 3,
        user: 'رضا کریمی',
        avatar: '👤',
        score: 10,
        date: '3 روز پیش',
        text: 'شاهکار! بعد از 100 ساعت بازی هنوز هم چیزای جدید پیدا می‌کنم. ماموریت‌های جانبی به اندازه ماموریت اصلی جذابن.',
        likes: 42,
      },
    ],
    []
  );

  const getScoreColor = useCallback((score) => {
    if (score >= 9) return 'text-green-400';
    if (score >= 7.5) return 'text-yellow-400';
    return 'text-orange-400';
  }, []);

  const nextImage = useCallback(() => {
    setSelectedImage((prev) => (prev + 1) % game.screenshots.length);
  }, [game.screenshots.length]);

  const prevImage = useCallback(() => {
    setSelectedImage(
      (prev) => (prev - 1 + game.screenshots.length) % game.screenshots.length
    );
  }, [game.screenshots.length]);

  const handleImageSelect = useCallback((index) => {
    setSelectedImage(index);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white" dir="rtl">
      {/* دکوراسیون پس‌زمینه */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 right-10 sm:top-20 sm:right-20 w-64 h-64 sm:w-96 sm:h-96 bg-green-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-10 left-10 sm:bottom-20 sm:left-20 w-56 h-56 sm:w-80 sm:h-80 bg-emerald-500/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: '1s' }}
        ></div>
      </div>

      <div className="relative z-10 w-full px-4 sm:px-6 md:px-8 lg:px-10 pt-28 sm:pt-32 md:pt-36 lg:pt-40 pb-12 sm:pb-16 md:pb-20">
        {/* هدر بازی */}
        <div className="max-w-7xl mx-auto mb-8 sm:mb-10 md:mb-14 lg:mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-14">
            {/* عکس اصلی */}
            <div className="space-y-4 sm:space-y-5 md:space-y-6">
              {/* عکس بزرگ */}
              <div className="relative max-w-2xl h-23 mx-auto lg:max-w-none aspect-[16/10] rounded-xl sm:rounded-2xl overflow-hidden border-2 border-gray-800 group">
                <img
                  src={game.screenshots[selectedImage]}
                  alt={game.title}
                  className="w-full h-17 object-cover"
                  loading="lazy"
                />

                {/* دکمه‌های ناوبری */}
                <button
                  onClick={prevImage}
                  aria-label="تصویر قبلی"
                  className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-black/80 backdrop-blur-sm p-2 sm:p-3 rounded-full opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity hover:bg-black active:scale-95"
                >
                  <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </button>
                <button
                  onClick={nextImage}
                  aria-label="تصویر بعدی"
                  className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-black/80 backdrop-blur-sm p-2 sm:p-3 rounded-full opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity hover:bg-black active:scale-95"
                >
                  <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </button>
              </div>

              {/* تصاویر کوچک */}
              <div className="flex items-center justify-center gap-3 sm:gap-4 md:gap-5 overflow-x-auto pb-2 px-2 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] mt-4">
                {game.screenshots.map((img, index) => (
                  <button
                    key={index}
                    onClick={() => handleImageSelect(index)}
                    aria-label={`نمایش تصویر ${index + 1}`}
                    className={`flex-shrink-0 w-20 h-12 sm:w-24 sm:h-14 md:w-28 md:h-16 rounded-lg sm:rounded-xl overflow-hidden border-2 transition-all ${
                      selectedImage === index
                        ? 'border-green-500 shadow-[0_0_20px_rgba(74,222,128,0.4)] scale-105'
                        : 'border-gray-800 hover:border-gray-700 opacity-70 hover:opacity-100'
                    }`}
                  >
                    <img
                      src={img}
                      alt={`Screenshot ${index + 1}`}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* اطلاعات بازی */}
            <div className="space-y-6 sm:space-y-8">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-6 sm:mb-8 bg-gradient-to-l from-white via-green-100 to-white bg-clip-text text-transparent leading-tight">
                {game.title}
              </h1>

              {/* امتیازات */}
              <div>
                <div className="flex items-center justify-center gap-4 md:gap-6">
                  {/* امتیاز منتقدین */}
                  <div className="border p-4 px-7 text-center rounded-xl">
                    <div className="text-gray-400 text-xs sm:text-sm mb-2 sm:mb-3 font-medium">
                      منتقدین
                    </div>
                    <div
                      className={`text-2xl sm:text-3xl md:text-4xl font-black ${getScoreColor(
                        game.criticScore
                      )} mb-1`}
                    >
                      {game.criticScore}
                    </div>
                    <div className="flex items-center justify-center gap-1 mt-2">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-3 h-3 sm:w-3.5 sm:h-3.5 ${
                            i < Math.floor(game.criticScore / 2)
                              ? 'fill-green-400 text-green-400'
                              : 'text-gray-700'
                          }`}
                        />
                      ))}
                    </div>
                  </div>

                  {/* امتیاز کاربران */}
                  <div className="border p-4 px-7 text-center rounded-xl">
                    <div className="text-gray-400 text-xs sm:text-sm mb-2 sm:mb-3 font-medium">
                      کاربران
                    </div>
                    <div
                      className={`text-2xl sm:text-3xl md:text-4xl font-black ${getScoreColor(
                        game.userScore
                      )} mb-1`}
                    >
                      {game.userScore}
                    </div>
                    <div className="flex items-center justify-center gap-1 mt-2">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-3 h-3 sm:w-3.5 sm:h-3.5 ${
                            i < Math.floor(game.userScore / 2)
                              ? 'fill-blue-400 text-blue-400'
                              : 'text-gray-700'
                          }`}
                        />
                      ))}
                    </div>
                  </div>

                  {/* تعداد نقدها */}
                  <div className="border p-4 px-7 text-center rounded-xl">
                    <div className="text-gray-400 text-xs sm:text-sm mb-2 sm:mb-3 font-medium">
                      نقدها
                    </div>
                    <div className="text-2xl sm:text-3xl md:text-4xl font-black text-white mb-1">
                      {game.reviews}
                    </div>
                    <div className="text-gray-500 text-xs sm:text-sm mt-2">
                      نظر ثبت شده
                    </div>
                  </div>
                </div>
                <div className="border-b border-gray-800 mt-4"></div>
              </div>

              {/* مشخصات */}
              <div className="mt-4">
                <div className="flex items-center gap-3 sm:gap-4 flex-wrap p-3 sm:p-4 bg-gray-900/20 rounded-xl">
                  <Gamepad2 className="w-5 h-5 sm:w-6 sm:h-6 text-green-400 shrink-0" />
                  <span className="text-gray-400 text-sm sm:text-base">
                    ژانر:
                  </span>
                  <span className="text-white font-bold text-sm sm:text-base">
                    {game.genre}
                  </span>
                </div>
                <div className="flex items-center gap-3 sm:gap-4 flex-wrap p-3 sm:p-4 bg-gray-900/20 rounded-xl">
                  <Users className="w-5 h-5 sm:w-6 sm:h-6 text-green-400 shrink-0" />
                  <span className="text-gray-400 text-sm sm:text-base">
                    سازنده:
                  </span>
                  <span className="text-white font-bold text-sm sm:text-base">
                    {game.developer}
                  </span>
                </div>
                <div className="flex items-center gap-3 sm:gap-4 flex-wrap p-3 sm:p-4 bg-gray-900/20 rounded-xl">
                  <Award className="w-5 h-5 sm:w-6 sm:h-6 text-green-400 shrink-0" />
                  <span className="text-gray-400 text-sm sm:text-base">
                    ناشر:
                  </span>
                  <span className="text-white font-bold text-sm sm:text-base">
                    {game.publisher}
                  </span>
                </div>
                <div className="flex items-center gap-3 sm:gap-4 flex-wrap p-3 sm:p-4 bg-gray-900/20 rounded-xl">
                  <Calendar className="w-5 h-5 sm:w-6 sm:h-6 text-green-400 shrink-0" />
                  <span className="text-gray-400 text-sm sm:text-base">
                    تاریخ انتشار:
                  </span>
                  <span className="text-white font-bold text-sm sm:text-base">
                    {game.releaseDate}
                  </span>
                </div>
                <div className="flex items-start gap-3 p-3 sm:p-4 bg-gray-900/20 rounded-xl">
                  <Monitor className="w-5 h-5 sm:w-6 sm:h-6 text-green-400 mt-1 shrink-0" />

                  <div className="flex-1">
                    <span className="text-gray-400 text-sm sm:text-base block mb-2">
                      پلتفرم‌ها:
                    </span>

                    <div className="grid grid-cols-2 gap-2 sm:gap-2.5">
                      {game.platforms.map((platform, index) => (
                        <span
                          key={index}
                          className="bg-green-500/10 text-green-400 px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg text-xs sm:text-sm font-bold border border-green-500/30 text-center"
                        >
                          {platform}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* خلاصه */}
              <div className="bg-gray-900/30 backdrop-blur-sm border border-gray-800 rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-7">
                <h3 className="text-lg sm:text-xl md:text-2xl font-black text-white mb-4 sm:mb-5 flex items-center gap-2 sm:gap-3">
                  <Star className="w-5 h-5 sm:w-6 sm:h-6 text-green-400" />
                  خلاصه داستان
                </h3>
                <p className="text-gray-300 leading-relaxed text-sm sm:text-base md:text-lg">
                  {game.summary}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* تب‌ها */}
        <div className="max-w-7xl mx-auto mb-6 sm:mb-8 md:mb-10">
          <div className="flex items-center gap-3 sm:gap-4 border-b border-gray-800 overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] pb-1">
            <button
              onClick={() => setActiveTab('review')}
              aria-label="نقد حرفه‌ای"
              className={`px-5 sm:px-7 md:px-8 py-3 sm:py-4 font-black transition-all relative text-sm sm:text-base md:text-lg whitespace-nowrap ${
                activeTab === 'review'
                  ? 'text-green-400'
                  : 'text-gray-500 hover:text-gray-300'
              }`}
            >
              نقد حرفه‌ای
              {activeTab === 'review' && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-green-400 shadow-[0_0_10px_rgba(74,222,128,0.8)]"></div>
              )}
            </button>
            <button
              onClick={() => setActiveTab('user-reviews')}
              aria-label="نظرات کاربران"
              className={`flex items-center gap-2 sm:gap-2.5 px-5 sm:px-7 md:px-8 py-3 sm:py-4 font-black transition-all relative text-sm sm:text-base md:text-lg whitespace-nowrap ${
                activeTab === 'user-reviews'
                  ? 'text-green-400'
                  : 'text-gray-500 hover:text-gray-300'
              }`}
            >
              <MessageSquare className="w-4 h-4 sm:w-5 sm:h-5" />
              <span className="hidden sm:inline">نظرات کاربران</span>
              <span className="sm:hidden">نظرات</span>
              {activeTab === 'user-reviews' && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-green-400 shadow-[0_0_10px_rgba(74,222,128,0.8)]"></div>
              )}
            </button>
          </div>
        </div>

        {/* محتوای تب‌ها */}
        <div className="max-w-7xl mx-auto mb-3">
          {/* نقد حرفه‌ای */}
          {activeTab === 'review' && (
            <div>
              {/* متن نقد */}
              <div className="border mb-6 p-4 rounded-2xl border-gray-900">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-white mb-5 sm:mb-6 md:mb-7">
                  نقد کامل
                </h2>
                <p className="text-gray-300 leading-relaxed text-base sm:text-lg md:text-xl">
                  {game.criticReview}
                </p>
              </div>

              {/* نکات مثبت و منفی */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 md:gap-8">
                {/* نکات مثبت */}
                <div className="bg-green-500/5 backdrop-blur-sm border border-green-500/30 rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-7">
                  <h3 className="text-lg sm:text-xl md:text-2xl font-black text-green-400 mb-4 sm:mb-5 md:mb-6">
                    ✓ نکات مثبت
                  </h3>
                  <ul className="space-y-3 sm:space-y-4">
                    {game.pros.map((pro, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-3 sm:gap-4 text-gray-300 text-sm sm:text-base md:text-lg"
                      >
                        <span className="text-green-400 mt-1 shrink-0 text-lg">
                          •
                        </span>
                        <span>{pro}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* نکات منفی */}
                <div className="bg-red-500/20 backdrop-blur-sm border border-red-500/30 rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-7">
                  <h3 className="text-lg sm:text-xl md:text-2xl font-black text-red-400 mb-4 sm:mb-5 md:mb-6">
                    ✗ نکات منفی
                  </h3>
                  <ul className="space-y-3 sm:space-y-4">
                    {game.cons.map((con, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-3 sm:gap-4 text-gray-300 text-sm sm:text-base md:text-lg"
                      >
                        <span className="text-red-400 mt-1 shrink-0 text-lg">
                          •
                        </span>
                        <span>{con}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* نتیجه نهایی */}
              <div className="border mt-4 mb-4 p-4 rounded-2xl border-green-500/30 bg-green-500/5">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-white mb-4 sm:mb-5 md:mb-6">
                  نتیجه نهایی
                </h3>
                <p className="text-gray-300 leading-relaxed text-base sm:text-lg md:text-xl">
                  {game.finalVerdict}
                </p>
              </div>
            </div>
          )}

          {/* نظرات کاربران */}
          {activeTab === 'user-reviews' && (
            <div className="space-y-5 sm:space-y-6 md:space-y-8">
              {/* فرم نظر جدید */}
              <div className="bg-gray-900/30 backdrop-blur-sm border border-gray-800 rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-7">
                <h3 className="text-lg sm:text-xl md:text-2xl font-black text-white mb-4 sm:mb-5 md:mb-6">
                  نظر خودت رو بنویس
                </h3>
                <textarea
                  placeholder="تجربه‌ت از این بازی چطور بود؟"
                  rows="5"
                  className="w-full bg-gray-900/50 text-white px-4 sm:px-5 py-3 sm:py-4 rounded-lg sm:rounded-xl border border-gray-800 focus:outline-none focus:border-green-500/50 placeholder-gray-500 resize-none mb-4 sm:mb-5 md:mb-6 text-sm sm:text-base md:text-lg"
                ></textarea>
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 sm:gap-5">
                  <div className="flex items-center gap-2 sm:gap-3 flex-wrap">
                    <span className="text-gray-400 text-sm sm:text-base">
                      امتیازت:
                    </span>
                    <div className="flex items-center gap-1 sm:gap-1.5">
                      {[...Array(10)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-gray-700 hover:text-green-400 cursor-pointer transition-colors"
                        />
                      ))}
                    </div>
                  </div>
                  <button className="bg-gradient-to-r from-green-500 to-emerald-500 text-black px-5 sm:px-7 md:px-8 py-2.5 sm:py-3 rounded-lg sm:rounded-xl font-bold hover:from-green-400 hover:to-emerald-400 transition-all text-sm sm:text-base md:text-lg active:scale-95">
                    ارسال نظر
                  </button>
                </div>
              </div>

              {/* لیست نظرات */}
              {userReviews.map((review) => (
                <div
                  key={review.id}
                  className="bg-gray-900/30 backdrop-blur-sm border border-gray-800 rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-7 hover:border-gray-700 transition-all mt-4"
                >
                  <div className="flex items-start justify-between mb-4 sm:mb-5 gap-4">
                    <div className="flex items-center gap-3 sm:gap-4 flex-1 min-w-0">
                      <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gray-800 rounded-full flex items-center justify-center text-2xl sm:text-3xl shrink-0">
                        {review.avatar}
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="font-bold text-white text-base sm:text-lg md:text-xl truncate mb-1">
                          {review.user}
                        </div>
                        <div className="text-gray-500 text-xs sm:text-sm md:text-base">
                          {review.date}
                        </div>
                      </div>
                    </div>
                    <div
                      className={`text-2xl sm:text-3xl md:text-4xl font-black ${getScoreColor(
                        review.score
                      )} shrink-0`}
                    >
                      {review.score}
                    </div>
                  </div>
                  <p className="text-gray-300 leading-relaxed mb-4 sm:mb-5 text-sm sm:text-base md:text-lg">
                    {review.text}
                  </p>
                  <div className="flex items-center gap-4 sm:gap-5 md:gap-6 text-sm sm:text-base">
                    <button className="flex items-center gap-2 sm:gap-2.5 text-gray-400 hover:text-green-400 transition-colors active:scale-95">
                      <ThumbsUp className="w-4 h-4 sm:w-5 sm:h-5" />
                      <span>{review.likes}</span>
                    </button>
                    <button className="flex items-center gap-2 sm:gap-2.5 text-gray-400 hover:text-red-400 transition-colors active:scale-95">
                      <Flag className="w-4 h-4 sm:w-5 sm:h-5" />
                      <span>گزارش</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
