'use client';

import { useState } from 'react';
import { Mail, MessageSquare, Send, Clock, Gamepad2, CheckCircle } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('پیام شما با موفقیت ارسال شد! به زودی پاسخ میدیم 💚');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-black text-white" dir="rtl">
      
      {/* دکوراسیون پس‌زمینه */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-20 w-96 h-96 bg-green-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 pt-24 sm:pt-28 pb-16">
        
        {/* هدر */}
        <div className="max-w-4xl mx-auto text-center mb-12 sm:mb-16">
          <div className="flex items-center justify-center gap-2 mb-4 sm:mb-6">
            <MessageSquare className="w-6 h-6 sm:w-8 sm:h-8 text-green-400" />
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black mb-4 sm:mb-6 bg-gradient-to-l from-white via-green-100 to-white bg-clip-text text-transparent leading-tight">
            تماس با ما
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-400 px-4">
            سوال، پیشنهاد یا مشکلی داری؟ خوشحال می‌شیم کمکت کنیم
          </p>
        </div>

        {/* محتوای اصلی */}
        <div className="max-w-6xl mx-auto">
          
          {/* فرم اصلی */}
          <div className="max-w-3xl mx-auto mb-8 sm:mb-12">
            <div className="bg-gray-900/40 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 sm:p-8 md:p-10">
              
              <div className="space-y-5 sm:space-y-6">
                
                {/* Grid دو ستونی برای نام و ایمیل در دسکتاپ */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
                  {/* نام */}
                  <div>
                    <label className="block text-gray-400 text-sm font-bold mb-2">
                      نام و نام خانوادگی
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="نامت رو وارد کن"
                      className="w-full bg-gray-900/50 text-white px-4 py-3 sm:py-3.5 rounded-xl border border-gray-800 focus:outline-none focus:border-green-500/50 focus:shadow-[0_0_20px_rgba(74,222,128,0.2)] placeholder-gray-500 transition-all duration-300 text-sm sm:text-base"
                      required
                    />
                  </div>

                  {/* ایمیل */}
                  <div>
                    <label className="block text-gray-400 text-sm font-bold mb-2">
                      ایمیل
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="ایمیلت رو وارد کن"
                      className="w-full bg-gray-900/50 text-white px-4 py-3 sm:py-3.5 rounded-xl border border-gray-800 focus:outline-none focus:border-green-500/50 focus:shadow-[0_0_20px_rgba(74,222,128,0.2)] placeholder-gray-500 transition-all duration-300 text-sm sm:text-base"
                      required
                    />
                  </div>
                </div>

                {/* موضوع */}
                <div>
                  <label className="block text-gray-400 text-sm font-bold mb-2">
                    موضوع
                  </label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full bg-gray-900 text-white px-4 py-3 sm:py-3.5 rounded-xl border border-gray-800 focus:outline-none focus:border-green-500/50 focus:shadow-[0_0_20px_rgba(74,222,128,0.2)] transition-all duration-300 text-sm sm:text-base"
                    required
                  >
                    <option value="">موضوع رو انتخاب کن</option>
                    <option value="support">پشتیبانی فنی</option>
                    <option value="suggestion">پیشنهاد</option>
                    <option value="bug">گزارش باگ</option>
                    <option value="game-request">درخواست بازی</option>
                    <option value="other">سایر موارد</option>
                  </select>
                </div>

                {/* پیام */}
                <div>
                  <label className="block text-gray-400 text-sm font-bold mb-2">
                    پیام
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="پیامت رو اینجا بنویس..."
                    rows="6"
                    className="w-full bg-gray-900/50 text-white px-4 py-3 sm:py-3.5 rounded-xl border border-gray-800 focus:outline-none focus:border-green-500/50 focus:shadow-[0_0_20px_rgba(74,222,128,0.2)] placeholder-gray-500 transition-all duration-300 resize-none text-sm sm:text-base"
                    required
                  ></textarea>
                </div>

                {/* دکمه ارسال */}
                <button
                  onClick={handleSubmit}
                  className="w-full bg-gradient-to-r from-green-500 to-emerald-500 text-black py-3.5 sm:py-4 rounded-xl font-black hover:from-green-400 hover:to-emerald-400 transition-all duration-300 shadow-[0_0_30px_rgba(74,222,128,0.3)] hover:scale-[1.02] flex items-center justify-center gap-2 text-base sm:text-lg"
                >
                  <Send className="w-5 h-5" />
                  ارسال پیام
                </button>
              </div>
            </div>
          </div>

          {/* کارت‌های اطلاعات */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12">
            
            {/* ایمیل */}
            <div className="bg-gray-900/30 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 hover:border-green-500/30 transition-all duration-300 text-center">
              <div className="bg-green-500/10   w-12 h-12 sm:w-13 sm:h-16 rounded-xl flex items-center justify-center mx-auto mb-4 border border-green-500/20">
                <Mail className="w-7 h-7 sm:w-8 sm:h-8 text-green-400" />
              </div>
              <h3 className="text-lg sm:text-xl font-black text-white mb-2">ایمیل</h3>
              <p className="text-green-400 font-bold mb-1 text-sm sm:text-base">support@gamehub.ir</p>
              <p className="text-gray-500 text-xs sm:text-sm">پاسخ در کمتر از 24 ساعت</p>
            </div>

            {/* پشتیبانی آنلاین */}
            <div className="bg-gray-900/30 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 hover:border-green-500/30 transition-all duration-300 text-center">
              <div className="bg-green-500/10   w-12 h-12 sm:w-13 sm:h-16 rounded-xl flex items-center justify-center mx-auto mb-4 border border-green-500/20">
                <MessageSquare className="w-7 h-7 sm:w-8 sm:h-8 text-green-400" />
              </div>
              <h3 className="text-lg sm:text-xl font-black text-white mb-2">پشتیبانی آنلاین</h3>
              <p className="text-green-400 font-bold mb-1 text-sm sm:text-base">چت مستقیم</p>
              <p className="text-gray-500 text-xs sm:text-sm">همه روزه 9 صبح تا 12 شب</p>
            </div>

            {/* ساعات کاری */}
            <div className="bg-gray-900/30 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 hover:border-green-500/30 transition-all duration-300 text-center sm:col-span-2 lg:col-span-1">
              <div className="bg-green-500/10   w-12 h-12 sm:w-13 sm:h-16 rounded-xl flex items-center justify-center mx-auto mb-4 border border-green-500/20">
                <Clock className="w-7 h-7 sm:w-8 sm:h-8 text-green-400" />
              </div>
              <h3 className="text-lg sm:text-xl font-black text-white mb-2">ساعات کاری</h3>
              <p className="text-green-400 font-bold mb-1 text-sm sm:text-base">9 صبح - 12 شب</p>
              <p className="text-gray-500 text-xs sm:text-sm">شنبه تا پنجشنبه</p>
            </div>
          </div>

          {/* باکس راهنما */}
          <div className="max-w-3xl mx-auto">
            <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/30 rounded-2xl p-6 sm:p-8 backdrop-blur-sm">
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-6">
                <Gamepad2 className="w-10 h-10 sm:w-12 sm:h-12 text-green-400 flex-shrink-0" />
                <div className="flex-1">
                  <h3 className="text-xl sm:text-2xl font-black text-white mb-2">قبل از ارسال پیام</h3>
                  <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                    شاید جواب سوالت توی <strong className="text-green-400">سوالات متداول</strong> باشه! یه نگاه بنداز، سریع‌تر جواب می‌گیری
                  </p>
                </div>
              </div>
              <a
                href="/faq"
                className="inline-block bg-gray-900/50 border border-gray-700 text-white px-6 sm:px-8 py-3 rounded-xl font-bold hover:border-green-500/50 transition-all duration-300 text-sm sm:text-base"
              >
                سوالات متداول
              </a>
            </div>
          </div>

        </div>

      </div>

      <style jsx>{`
        input:-webkit-autofill,
        input:-webkit-autofill:hover,
        input:-webkit-autofill:focus,
        textarea:-webkit-autofill,
        textarea:-webkit-autofill:hover,
        textarea:-webkit-autofill:focus,
        select:-webkit-autofill,
        select:-webkit-autofill:hover,
        select:-webkit-autofill:focus {
          -webkit-box-shadow: 0 0 0 1000px rgba(17, 24, 39, 0.5) inset !important;
          -webkit-text-fill-color: white !important;
          border: 1px solid rgb(31, 41, 55) !important;
        }
      `}</style>
    </div>
  );
}