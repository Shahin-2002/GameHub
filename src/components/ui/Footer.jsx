'use client';

import {
  Gamepad2,
  Mail,
  Send,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Github,
} from 'lucide-react';

export default function Footer() {
  const footerLinks = {
    about: [
      { name: 'درباره ما', href: '/about' },
      { name: 'تماس با ما', href: '/contact' },
      { name: 'تیم ما', href: '/team' },
      { name: 'فرصت‌های شغلی', href: '/careers' },
    ],
    games: [
      { name: 'جدیدترین بازی‌ها', href: '/games/latest' },
      { name: 'برترین بازی‌ها', href: '/games/top' },
      { name: 'دسته‌بندی ژانر', href: '/games/genres' },
      { name: 'پلتفرم‌ها', href: '/games/platforms' },
    ],
    content: [
      { name: 'مقاله‌ها', href: '/articles' },
      { name: 'اخبار بازی', href: '/news' },
      { name: 'راهنماها', href: '/guides' },
      { name: 'ویدیوها', href: '/videos' },
    ],
    support: [
      { name: 'سوالات متداول', href: '/faq' },
      { name: 'قوانین و مقررات', href: '/rules' },
      { name: 'حریم خصوصی', href: '/privacy' },
      { name: 'پشتیبانی', href: '/support' },
    ],
  };

  const socialLinks = [
    { icon: Twitter, href: '#', name: 'Twitter' },
    { icon: Instagram, href: '#', name: 'Instagram' },
    { icon: Youtube, href: '#', name: 'Youtube' },
    { icon: Github, href: '#', name: 'Github' },
  ];

  return (
    <footer
      className="relative bg-black text-white border-t border-green-500/20"
      dir="rtl"
    >
      {/* دکوراسیون پس‌زمینه */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-green-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-emerald-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* بخش بالا */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          {/* لوگو و توضیحات */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="relative">
                <div className="absolute inset-0 bg-green-400/30 blur-xl rounded-full animate-pulse"></div>
                <Gamepad2 className="w-10 h-10 text-green-400 relative z-10" />
              </div>
              <span className="text-3xl font-black text-white">گیم‌هاب</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              بهترین مرجع فارسی نقد و بررسی بازی‌های ویدیویی. جدیدترین اخبار،
              نقدهای تخصصی و نظرات کاربران را دنبال کنید.
            </p>

            {/* خبرنامه */}
            <div className="relative">
              <input
                type="email"
                placeholder="ایمیل خود را وارد کنید"
                className="w-full bg-gray-900/50 text-white px-4 py-3 pr-12 rounded-xl border border-gray-800 focus:outline-none focus:border-green-500/50 placeholder-gray-500 transition-all duration-300 text-sm"
              />
              <button className="absolute left-2 top-1/2 -translate-y-1/2 bg-gradient-to-r from-green-500 to-emerald-500 text-black p-2 rounded-lg hover:from-green-400 hover:to-emerald-400 transition-all duration-300 cursor-pointer">
                <Send className="w-4 h-4" />
              </button>
            </div>
            <p className="text-gray-600 text-xs mt-2">
              عضویت در خبرنامه برای دریافت آخرین اخبار
            </p>
          </div>

          {/* ستون درباره ما */}
          <div>
            <h3 className="text-white font-black text-lg mb-4 relative inline-block">
              درباره ما
              <div className="absolute bottom-0 right-0 w-1/2 h-0.5 bg-green-400"></div>
            </h3>
            <ul className="space-y-3">
              {footerLinks.about.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-green-400 transition-colors text-sm flex items-center gap-2 group"
                  >
                    <span className="w-0 h-px bg-green-400 group-hover:w-3 transition-all duration-300"></span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* ستون بازی‌ها */}
          <div>
            <h3 className="text-white font-black text-lg mb-4 relative inline-block">
              بازی‌ها
              <div className="absolute bottom-0 right-0 w-1/2 h-0.5 bg-green-400"></div>
            </h3>
            <ul className="space-y-3">
              {footerLinks.games.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-green-400 transition-colors text-sm flex items-center gap-2 group"
                  >
                    <span className="w-0 h-px bg-green-400 group-hover:w-3 transition-all duration-300"></span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* ستون محتوا */}
          <div>
            <h3 className="text-white font-black text-lg mb-4 relative inline-block">
              محتوا
              <div className="absolute bottom-0 right-0 w-1/2 h-0.5 bg-green-400"></div>
            </h3>
            <ul className="space-y-3">
              {footerLinks.content.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-green-400 transition-colors text-sm flex items-center gap-2 group"
                  >
                    <span className="w-0 h-px bg-green-400 group-hover:w-3 transition-all duration-300"></span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* ستون پشتیبانی */}
          <div>
            <h3 className="text-white font-black text-lg mb-4 relative inline-block">
              پشتیبانی
              <div className="absolute bottom-0 right-0 w-1/2 h-0.5 bg-green-400"></div>
            </h3>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-green-400 transition-colors text-sm flex items-center gap-2 group"
                  >
                    <span className="w-0 h-px bg-green-400 group-hover:w-3 transition-all duration-300"></span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* خط جداکننده */}
        <div className="h-px bg-gradient-to-l from-transparent via-green-500/30 to-transparent mb-8"></div>

        {/* بخش پایین */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* کپی‌رایت */}
          <div className="text-gray-500 text-sm text-center md:text-right">
            © 2025 گیم‌هاب. تمامی حقوق محفوظ است.
          </div>

          {/* شبکه‌های اجتماعی */}
          <div className="flex items-center gap-3">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 flex items-center justify-center bg-gray-900/50 border border-gray-800 rounded-lg text-gray-400 hover:text-green-400 hover:border-green-500/50 hover:bg-green-500/10 transition-all duration-300 group"
                  aria-label={social.name}
                >
                  <Icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                </a>
              );
            })}
          </div>
        </div>

        {/* متن اضافی */}
        <div className="text-center mt-8 pt-8 border-t border-gray-900">
          <p className="text-gray-600 text-xs">
            ساخته شده با 💚 توسط تیم گیم‌هاب
          </p>
        </div>
      </div>
    </footer>
  );
}
