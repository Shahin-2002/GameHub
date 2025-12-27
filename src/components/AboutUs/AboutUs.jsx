'use client';
import './AboutUs.css'

import { Gamepad2, Target, Users, Heart, Zap, Shield, Star, TrendingUp } from 'lucide-react';

export default function AboutPage() {
  const stats = [
    { icon: Users, number: '50K+', label: 'کاربر فعال' },
    { icon: Gamepad2, number: '1000+', label: 'بازی بررسی شده' },
    { icon: Star, number: '25K+', label: 'نقد و نظر' },
    { icon: TrendingUp, number: '100K+', label: 'بازدید ماهانه' }
  ];

  const values = [
    {
      icon: Heart,
      title: 'عشق به گیمینگ',
      description: 'ما عاشق بازی‌ها هستیم و این عشق رو با شما به اشتراک می‌ذاریم. هر نقد و بررسی‌ای که می‌نویسیم، با دقت و علاقه انجام میشه.'
    },
    {
      icon: Shield,
      title: 'صداقت و شفافیت',
      description: 'نظرات ما صادقانه و بی‌طرفانه هست. هیچ‌وقت برای پول یا تبلیغ، نقد مثبت نمی‌نویسیم. اعتماد شما برامون مهم‌تر از هر چیزیه.'
    },
    {
      icon: Zap,
      title: 'سرعت و به‌روز بودن',
      description: 'جدیدترین بازی‌ها رو سریع بررسی می‌کنیم تا شما بتونید قبل از خرید، تصمیم درستی بگیرید. همیشه به‌روزیم!'
    },
    {
      icon: Users,
      title: 'جامعه‌ای قوی',
      description: 'اینجا فقط یه سایته نیست، یه جامعه از گیمرهاست. نظرات شما، نقدهای شما و تجربه‌هاتون برامون ارزشمنده.'
    }
  ];

  const team = [
    {
      name: 'علی محمدی',
      role: 'بنیان‌گذار و نویسنده ارشد',
      bio: '10 سال تجربه در نقد بازی‌های ویدیویی'
    },
    {
      name: 'سارا احمدی',
      role: 'سردبیر',
      bio: 'متخصص در بازی‌های RPG و اکشن-ماجرایی'
    },
    {
      name: 'رضا کریمی',
      role: 'نویسنده فنی',
      bio: 'تحلیل‌گر گرافیک و عملکرد بازی‌ها'
    },
    {
      name: 'مریم رضایی',
      role: 'مدیر اجتماعی',
      bio: 'مدیریت کامیونیتی و ارتباط با کاربران'
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white" dir="rtl">
      
      {/* دکوراسیون پس‌زمینه */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-20 w-96 h-96 bg-green-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 pt-24 sm:pt-28 pb-16 ">
        
        {/* هدر */}
        <div className="max-w-4xl mx-auto text-center mb-16 sm:mb-20 ">
          <div className="flex items-center justify-center gap-2 mb-6">
            <Gamepad2 className="w-8 h-8 text-green-400" />
          </div>
          <h1 className="custom text-4xl sm:text-5xl md:text-6xl font-black mb-6 bg-gradient-to-l from-white via-green-100 to-white bg-clip-text text-transparent leading-tight">
            درباره گیم‌هاب
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            ما یه تیم از گیمرهای حرفه‌ای هستیم که عاشق بازی‌های ویدیویی و به اشتراک‌گذاری تجربیاتمونیم
          </p>
        </div>

        {/* داستان ما */}
        <div className="max-w-5xl mx-auto mb-16 sm:mb-20">
          <div className="bg-gray-900/40 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 sm:p-8 md:p-10">
            <div className="flex items-center gap-3 mb-6">
              <Target className="w-7 h-7 text-green-400" />
              <h2 className="text-2xl sm:text-3xl font-black text-white">داستان ما</h2>
            </div>
            <div className="space-y-4 text-gray-300 leading-relaxed text-sm sm:text-base">
              <p>
                گیم‌هاب در سال 2020 با یه هدف ساده شروع شد: کمک به گیمرها برای پیدا کردن بهترین بازی‌ها. ما متوجه شدیم که بازار پر از تبلیغات و نقدهای غیرصادقانه است، جایی که شرکت‌ها برای امتیاز بالا پول می‌دن.
              </p>
              <p>
                ما تصمیم گرفتیم یه پلتفرم بسازیم که فقط به صداقت، کیفیت و تجربه واقعی بازی اهمیت بده. امروز، هزاران گیمر از سراسر دنیا به ما اعتماد می‌کنن تا قبل از خرید یه بازی جدید، نظرات صادقانه رو بخونن.
              </p>
              <p>
                ما فقط یه سایت نیستیم - ما یه جامعه‌ایم. جامعه‌ای که عاشق بازی‌ها، داستان‌ها، و تجربیات دیجیتاله. و این فقط شروعه!
              </p>
            </div>
          </div>
        </div>

        {/* آمار */}
        <div className="max-w-6xl mx-auto mb-16 sm:mb-20">
          <h2 className="text-2xl sm:text-3xl font-black text-center text-white mb-8 sm:mb-12">گیم‌هاب در یک نگاه</h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div
                  key={index}
                  className="bg-gray-900/30 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 sm:p-8 hover:border-green-500/30 transition-all duration-300 text-center"
                >
                  <div className="bg-green-500/10 w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4 border border-green-500/20">
                    <Icon className="w-12 h-12 sm:w-13 sm:h-8 text-green-400" />
                  </div>
                  <div className="text-3xl sm:text-4xl font-black text-green-400 mb-2">{stat.number}</div>
                  <div className="text-gray-400 text-sm sm:text-base font-bold">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ارزش‌های ما */}
        <div className="max-w-6xl mx-auto mb-16 sm:mb-20">
          <h2 className="text-2xl sm:text-3xl font-black text-center text-white mb-8 sm:mb-12">ارزش‌های ما</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className="bg-gray-900/30 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 sm:p-8 hover:border-green-500/30 hover:bg-gray-900/40 transition-all duration-300"
                >
                  <div className="flex items-start gap-4 sm:gap-5">
                    <div className="bg-green-500/10 w-12 h-12 flex items-center justify-center p-2 sm:p-2 rounded-xl border border-green-500/20 flex-shrink-0">
                      <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-green-400" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg sm:text-xl font-black text-white mb-2 sm:mb-3">{value.title}</h3>
                      <p className="text-gray-400 leading-relaxed text-sm sm:text-base">{value.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* تیم ما */}
        <div className="max-w-6xl mx-auto mb-16 sm:mb-20">
          <h2 className="text-2xl sm:text-3xl font-black text-center text-white mb-8 sm:mb-12">تیم ما</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, index) => (
              <div
                key={index}
                className="bg-gray-900/30 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 hover:border-green-500/30 transition-all duration-300 text-center"
              >
                <div className="w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-full mx-auto mb-4 flex items-center justify-center border-2 border-green-500/30">
                  <Users className="w-10 h-10 sm:w-12 sm:h-12 text-green-400" />
                </div>
                <h3 className="text-lg sm:text-xl font-black text-white mb-1">{member.name}</h3>
                <p className="text-green-400 text-xs sm:text-sm font-bold mb-3">{member.role}</p>
                <p className="text-gray-400 text-xs sm:text-sm">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="max-w-4xl mx-auto">
          <div className="relative overflow-hidden bg-gradient-to-r from-green-500/10 via-emerald-500/10 to-green-500/10 border border-green-500/30 rounded-3xl p-8 sm:p-12">
            <div className="absolute top-0 right-0 w-48 h-48 sm:w-64 sm:h-64 bg-green-500/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 sm:w-64 sm:h-64 bg-emerald-500/20 rounded-full blur-3xl"></div>
            
            <div className="relative z-10 text-center">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-white mb-4">
                بخشی از جامعه ما باش!
              </h3>
              <p className="text-gray-300 text-base sm:text-lg mb-8 max-w-2xl mx-auto">
                همین الان ثبت‌نام کن و شروع کن به نوشتن نقدهات، امتیاز دادن به بازی‌ها و تبادل نظر با هزاران گیمر دیگه
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="/register"
                  className="w-full sm:w-auto inline-block bg-gradient-to-r from-green-500 to-emerald-500 text-black px-8 py-4 rounded-xl font-black hover:from-green-400 hover:to-emerald-400 transition-all duration-300 shadow-[0_0_30px_rgba(74,222,128,0.4)] hover:scale-105 text-center"
                >
                  ثبت‌نام رایگان
                </a>
                <a
                  href="/support"
                  className="w-full sm:w-auto inline-block bg-gray-800/50 border border-gray-700 text-white px-8 py-4 rounded-xl font-bold hover:border-green-500/50 transition-all duration-300 text-center"
                >
                  تماس با ما
                </a>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}