'use client';

import { Shield, Scale, Users, MessageSquare, Lock, AlertTriangle, Eye, Sparkles, Gamepad2 } from 'lucide-react';

export default function TermsPage() {
  const sections = [
    {
      icon: Gamepad2,
      title: 'خوش اومدی گیمر!',
      content: 'قبل از اینکه تو دنیای گیم‌هاب غرق بشی، باید با قوانین بازی آشنا بشی! اینجا یه جامعه‌ی گیمرهاست و همه باید احترام متقابل داشته باشیم. با کلیک روی "ثبت‌نام" یا استفاده از سایت، این قوانین رو قبول کردی. نگران نباش، سخت نیست! فقط با احترام رفتار کن و از بازی لذت ببر!'
    },
    {
      icon: Users,
      title: 'حساب کاربری',
      content: 'حساب کاربریت مثل شخصیت بازیته! یوزرنیم و پسوردت رو مثل لوت‌های Legendary نگه دار. اگه کسی بدون اجازه وارد حسابت شد، فوری بهمون بگو. یادت باشه: هر کاری که با حسابت انجام بشه، مسئولیتش با خودته. پس مثل یه Pro Gamer محافظتش کن!'
    },
    {
      icon: MessageSquare,
      title: 'نقد بنویس، احترام کن',
      content: 'اینجا جایی‌ه که میتونی درباره بازی‌ها حرف بزنی، نقد بنویسی و امتیاز بدی. ولی یه خط قرمز داریم: احترام! نظرت منفی باشه اشکال نداره، ولی توهین، فحش، اسپم یا تبلیغات مزخرف = بن فوری. منتقد باش، نه Toxic! بیا با هم یه کامیونیتی سالم بسازیم.'
    },
    {
      icon: Shield,
      title: 'محتوای ما متعلق به ماست',
      content: 'هر چیزی که تو گیم‌هاب می‌بینی - از طراحی سایت تا نقدها و مقالات - متعلق به ماست. نمیتونی بدون اجازه کپی کنی یا توی جای دیگه استفاده کنی. این مثل چیت زدنه، فیر نیست! اگه میخوای محتوای ما رو به اشتراک بذاری، فقط لینک بده.'
    },
    {
      icon: Lock,
      title: 'حریم خصوصی',
      content: 'اطلاعات شخصیت نزد ما امانته. ایمیل، اسم، IP و هر چیز دیگه‌ای که بهمون میدی رو فقط برای بهتر شدن سایت استفاده می‌کنیم. هرگز نمی‌فروشیم، نمی‌دیم به غریبه‌ها! اگه میخوای بیشتر بدونی، سیاست حریم خصوصی رو بخون. توی این دنیای دیجیتال، ما محافظت می‌کنیم.'
    },
    {
      icon: AlertTriangle,
      title: 'خط قرمزها',
      content: 'بات، اسکریپت، هک؟ نه بابا! سعی نکن سیستم رو دور بزنی یا سایت رو خراب کنی. اسپم ندی، چند تا اکانت فیک نساز، محتوای غیرقانونی پست نکن. اینجا یه محیط دوستانه‌ست، بیا مثل یه گیمر واقعی رفتار کن. اگه این قوانین رو بشکنی = بن دائمی + احتمال پیگرد قانونی.'
    },
    {
      icon: Eye,
      title: 'مسئولیت محدود',
      content: 'سعی می‌کنیم بهترین و دقیق‌ترین اطلاعات رو بدیم، ولی گاهی ممکنه یه چیزایی اشتباه باشه. تاریخ‌های انتشار عوض میشن، بازی‌ها آپدیت میشن. استفاده از سایت به عهده‌ی خودته. ما مسئول خسارت احتمالی نیستیم. مثل بازی‌های Early Access فکر کن - همیشه در حال بهبوده!'
    },
    {
      icon: Sparkles,
      title: 'تغییرات قوانین',
      content: 'مثل بازی‌های آنلاین که patch و آپدیت میخورن، قوانین ما هم ممکنه تغییر کنه. گاهی یه چیز جدید اضافه می‌کنیم، گاهی یه چیزی رو اصلاح می‌کنیم. اگه ادامه بدی به استفاده از سایت = قوانین جدید رو قبول کردی. پس هر از گاهی یه سر به این صفحه بزن.'
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white px-4 sm:px-6 lg:px-8" dir="rtl">
      {/* دکوراسیون پس‌زمینه */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-4 sm:right-20 w-72 sm:w-96 h-72 sm:h-96 bg-green-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-4 sm:left-20 w-64 sm:w-80 h-64 sm:h-80 bg-emerald-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto pt-28 pb-16">
        {/* هدر */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="flex items-center justify-center gap-2 mb-4 sm:mb-6 ">
            <Scale className="w-7 h-7 sm:w-8 sm:h-8 text-green-400" />
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black mb-4 sm:mb-6 bg-gradient-to-l from-white via-green-100 to-white bg-clip-text text-transparent">
            قوانین و مقررات
          </h1>
          <p className="text-gray-400 text-base sm:text-lg md:text-xl max-w-3xl mx-auto">
            قبل از استفاده از گیم‌هاب، لطفاً این موارد رو با دقت بخون
          </p>
          <div className="mt-4 sm:mt-6 text-sm text-gray-500">
            آخرین به‌روزرسانی: <span className="text-green-400 font-bold">دسامبر 2024</span>
          </div>
        </div>

        {/* محتوای اصلی */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {sections.map((section, index) => {
            const Icon = section.icon;
            return (
              <div
                key={index}
                className="group bg-gray-900/30 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 sm:p-8 hover:border-green-500/30 hover:bg-gray-900/40 transition-all duration-300"
              >
                <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-5">
                  <div className="bg-green-500/10 p-3 sm:p-4 rounded-xl border border-green-500/20 flex-shrink-0 group-hover:bg-green-500/15 transition-colors w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center">
                    <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-green-400" />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-xl sm:text-2xl font-black text-white mb-2 sm:mb-4 group-hover:text-green-400 transition-colors">
                      {section.title}
                    </h2>
                    <p className="text-gray-400 leading-relaxed text-sm sm:text-base">
                      {section.content}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* بخش پایینی */}
        <div className="mt-12 sm:mt-16 bg-gradient-to-r from-gray-900/50 to-gray-800/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 sm:p-10 text-center">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-2xl sm:text-3xl font-black text-white mb-3 sm:mb-4">سوالی داری؟</h3>
            <p className="text-gray-400 text-base sm:text-lg mb-6 sm:mb-8">
              اگه درباره قوانین سوال یا ابهامی داری، می‌تونی با تیم پشتیبانی ما تماس بگیری
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
              <a
                href="/contact"
                className="w-full sm:w-auto bg-gradient-to-r from-green-500 to-emerald-500 text-black px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-black hover:from-green-400 hover:to-emerald-400 transition-all duration-300 shadow-[0_0_20px_rgba(74,222,128,0.3)] hover:scale-105 text-center"
              >
                تماس با پشتیبانی
              </a>
              <a
                href="/faq"
                className="w-full sm:w-auto bg-gray-800/50 border border-gray-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-bold hover:border-green-500/50 transition-all duration-300 text-center"
              >
                سوالات متداول
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
