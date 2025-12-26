'use client';

import {
  Shield,
  Lock,
  Eye,
  Database,
  UserCheck,
  Bell,
  Trash2,
  FileText,
  Cookie,
  Globe,
} from 'lucide-react';

export default function PrivacyPage() {
  const sections = [
    {
      icon: Database,
      title: 'چه اطلاعاتی جمع می‌کنیم؟',
      content:
        'وقتی تو گیم‌هاب ثبت‌نام می‌کنی، ما چند تا اطلاعات پایه می‌خوایم: ایمیل، نام کاربری و پسورد (که رمزنگاری شده ذخیره میشه). همچنین وقتی از سایت استفاده می‌کنی، اطلاعاتی مثل IP، نوع مرورگر، سیستم عامل و صفحاتی که بازدید می‌کنی رو جمع‌آوری می‌کنیم. این اطلاعات به ما کمک میکنه تا سایت رو بهتر کنیم و امنیت رو حفظ کنیم.',
    },
    {
      icon: Eye,
      title: 'چطور ازشون استفاده می‌کنیم؟',
      content:
        'اطلاعاتت رو فقط برای بهبود تجربه‌ی گیمینگت استفاده می‌کنیم! مثلاً برای شخصی‌سازی پیشنهادات بازی، نمایش نقدهای مرتبط، ارسال اطلاعیه‌های مهم (اگه خودت خواستی) و تحلیل رفتار کاربرا برای بهتر کردن سایت. همچنین برای جلوگیری از اسپم و فعالیت‌های مشکوک ازشون استفاده می‌کنیم. اطلاعاتت رو هرگز نمی‌فروشیم!',
    },
    {
      icon: Cookie,
      title: 'کوکی‌ها چی هستن؟',
      content:
        'کوکی‌ها فایل‌های کوچیکی هستن که روی مرورگرت ذخیره میشن تا سایت بتونه تو رو بشناسه. ما از کوکی‌ها برای نگه‌داشتن session ورودت، یادآوری تنظیماتت و تحلیل ترافیک سایت استفاده می‌کنیم. می‌تونی تو تنظیمات مرورگرت کوکی‌ها رو مدیریت یا حذف کنی، ولی ممکنه بعضی از قابلیت‌های سایت کار نکنن.',
    },
    {
      icon: Shield,
      title: 'اطلاعاتت ایمنه',
      content:
        'امنیت اطلاعاتت برامون خیلی مهمه! ما از رمزنگاری SSL/TLS برای محافظت از انتقال داده استفاده می‌کنیم. پسوردها با الگوریتم‌های قوی hash میشن و هیچ‌وقت به صورت متنی ذخیره نمیشن. سرورهای ما محافظت شده‌ان و فقط پرسنل مجاز دسترسی دارن. با این حال، هیچ سیستمی 100% امن نیست، پس حتماً از پسورد قوی استفاده کن!',
    },
    {
      icon: UserCheck,
      title: 'اشتراک‌گذاری با شخص ثالث',
      content:
        'ما اطلاعات شخصیت رو به شخص ثالث نمی‌فروشیم! ولی ممکنه با سرویس‌دهندگان قابل اعتماد (مثل سرویس‌های هاستینگ، تحلیل آمار، ایمیل) به اشتراک بذاریم که همگی تحت قرارداد محرمانگی هستن. در صورت درخواست قانونی (مثل دستور دادگاه) ممکنه مجبور بشیم اطلاعات رو ارائه بدیم.',
    },
    {
      icon: Bell,
      title: 'اطلاعیه‌ها و ایمیل‌ها',
      content:
        'اگه عضو خبرنامه بشی یا اطلاعیه‌ها رو فعال کنی، ممکنه براتون ایمیل بفرستیم درباره بازی‌های جدید، نقدهای تازه یا اخبار مهم. نگران نباش! همیشه می‌تونی از خبرنامه خارج بشی یا تو تنظیمات حسابت اطلاعیه‌ها رو غیرفعال کنی. ایمیل‌های مزاحم نمی‌فرستیم، قول میدیم!',
    },
    {
      icon: Trash2,
      title: 'حذف اطلاعات',
      content:
        'تو هر زمان می‌تونی حسابت رو حذف کنی. برای این کار میتونی از طریق تنظیمات حساب کاربری اقدام کنی یا با پشتیبانی تماس بگیری. بعد از حذف حساب، تمام اطلاعات شخصیت از سرورهای ما پاک میشه. ولی نظراتی که به صورت عمومی گذاشتی ممکنه برای حفظ یکپارچگی بحث‌ها باقی بمونن (البته بدون نام کاربری).',
    },
    {
      icon: Globe,
      title: 'حقوق کاربران اروپایی (GDPR)',
      content:
        'اگه از اتحادیه اروپا هستی، تحت قانون GDPR حق داری اطلاعاتت رو مشاهده، تصحیح، حذف یا محدود کنی. همچنین حق داری به پردازش اطلاعاتت اعتراض کنی یا درخواست انتقال داده بدی. برای اعمال این حقوق، می‌تونی با تیم پشتیبانی ما تماس بگیری و ما ظرف 30 روز پاسخ میدیم.',
    },
    {
      icon: FileText,
      title: 'تغییرات سیاست حریم خصوصی',
      content:
        'ممکنه گاهی این سیاست حریم خصوصی رو به‌روز کنیم. اگه تغییر مهمی پیش بیاد، از طریق ایمیل یا اطلاعیه‌ی سایت بهت اطلاع میدیم. ادامه استفاده از سایت بعد از تغییرات، یعنی سیاست جدید رو قبول داری. پس بهتره هر از گاهی یه سر به این صفحه بزنی تا از آخرین تغییرات با خبر بشی.',
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white px-4 sm:px-6 lg:px-8" dir="rtl">
      {/* دکوراسیون پس‌زمینه */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-4 sm:right-20 w-72 sm:w-96 h-72 sm:h-96 bg-green-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-20 left-4 sm:left-20 w-64 sm:w-80 h-64 sm:h-80 bg-emerald-500/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: '1s' }}
        ></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto pt-28 pb-16">
        {/* هدر */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="flex items-center justify-center gap-2 mb-4 sm:mb-6">
            <Lock className="w-7 h-7 sm:w-8 sm:h-8 text-green-400" />
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black mb-4 sm:mb-6 bg-gradient-to-l from-white via-green-100 to-white bg-clip-text text-transparent">
            حریم خصوصی
          </h1>
          <p className="text-gray-400 text-base sm:text-lg md:text-xl max-w-3xl mx-auto">
            ما به حریم خصوصیت احترام می‌ذاریم. اینجا می‌تونی ببینی اطلاعاتت چطور
            جمع‌آوری و استفاده میشه
          </p>
          <div className="mt-4 sm:mt-6 text-sm text-gray-500">
            آخرین به‌روزرسانی:{' '}
            <span className="text-green-400 font-bold">دسامبر 2024</span>
          </div>
        </div>

        {/* باکس هایلایت */}
        <div className="mb-12 bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/30 rounded-2xl p-6 sm:p-8 backdrop-blur-sm">
          <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
            <div className="bg-green-500/20 p-3 sm:p-4 rounded-xl border border-green-500/30 flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center">
              <Shield className="w-6 h-6 sm:w-7 sm:h-7 text-green-400" />
            </div>
            <div>
              <h3 className="text-white font-black text-xl sm:text-2xl mb-2 sm:mb-3">
                تعهد ما به امنیت
              </h3>
              <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                حفظ حریم خصوصی و امنیت اطلاعاتت یکی از اولویت‌های اصلی ماست. ما
                از جدیدترین تکنولوژی‌های امنیتی برای محافظت از داده‌هات استفاده
                می‌کنیم و هیچ‌وقت اطلاعاتت رو بدون رضایتت به اشخاص ثالث
                نمی‌فروشیم.
              </p>
            </div>
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
            <h3 className="text-2xl sm:text-3xl font-black text-white mb-3 sm:mb-4">
              سوالی درباره حریم خصوصی داری؟
            </h3>
            <p className="text-gray-400 text-base sm:text-lg mb-6 sm:mb-8">
              اگه درباره نحوه استفاده از اطلاعاتت سوال یا نگرانی داری، خوشحال
              می‌شیم کمکت کنیم
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
              <a
                href="/contact"
                className="w-full sm:w-auto bg-gradient-to-r from-green-500 to-emerald-500 text-black px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-black hover:from-green-400 hover:to-emerald-400 transition-all duration-300 shadow-[0_0_20px_rgba(74,222,128,0.3)] hover:scale-105 text-center"
              >
                تماس با ما
              </a>
              <a
                href="/rules"
                className="w-full sm:w-auto bg-gray-800/50 border border-gray-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-bold hover:border-green-500/50 transition-all duration-300 text-center"
              >
                قوانین و مقررات
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
