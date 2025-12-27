'use client';

import { useState } from 'react';
import './FAQPage.css';
import { HelpCircle, Plus, Minus, Gamepad2 } from 'lucide-react';

export default function FAQPage() {
  const [openFaq, setOpenFaq] = useState(null);

  const faqs = [
    {
      question: 'چطور می‌تونم ثبت‌نام کنم؟',
      answer:
        'برای ثبت‌نام، روی دکمه "ثبت‌نام" در بالای صفحه کلیک کن. فقط کافیه یه ایمیل، یوزرنیم و پسورد وارد کنی. می‌تونی با Google یا Discord هم وارد بشی که خیلی سریع‌تره!',
    },
    {
      question: 'پسوردم رو فراموش کردم، چیکار کنم؟',
      answer:
        'نگران نباش! روی صفحه ورود، لینک "فراموشی رمز عبور" رو کلیک کن. یه ایمیل برات می‌فرستیم که با اون می‌تونی پسورد جدید بسازی. حتماً ایمیل Spam رو هم چک کن!',
    },
    {
      question: 'می‌تونم اکانتم رو حذف کنم؟',
      answer:
        'بله، می‌تونی هر موقع خواستی اکانتت رو حذف کنی. برو به تنظیمات حساب کاربری، پایین صفحه گزینه "حذف حساب" رو پیدا می‌کنی. یادت باشه این کار برگشت نداره و تمام اطلاعاتت حذف میشه!',
    },
    {
      question: 'چطور می‌تونم نقد بنویسم؟',
      answer:
        'اول باید وارد حسابت بشی. بعد برو به صفحه بازی مورد نظرت، پایین صفحه بخش "نظرات و امتیازها" رو می‌بینی. روی "نوشتن نقد" کلیک کن و نظرت رو با امتیاز (از 1 تا 10) بنویس. فقط یادت باشه احترام رو رعایت کنی!',
    },
    {
      question: 'آیا نقدهام بررسی میشن؟',
      answer:
        'بله! تیم ما قبل از انتشار، نقدها رو بررسی می‌کنه تا مطمئن بشه توهین، اسپم یا محتوای نامناسب نداشته باشه. این کار معمولاً کمتر از 24 ساعت طول می‌کشه. هدف ما حفظ کیفیت و احترام توی کامیونیتی‌مونه!',
    },
    {
      question: 'می‌تونم نقدم رو ویرایش کنم؟',
      answer:
        'بله! برو به پروفایلت، بخش "نقدهای من" رو انتخاب کن. روی نقدی که می‌خوای کلیک کن و گزینه "ویرایش" رو می‌بینی. می‌تونی هر زمان که خواستی نقد یا امتیازت رو تغییر بدی.',
    },
    {
      question: 'چرا بعضی بازی‌ها رو ندارید؟',
      answer:
        'ما داریم مرتب بازی‌های جدید اضافه می‌کنیم! اگه بازی خاصی رو نمی‌بینی، می‌تونی از طریق فرم "درخواست بازی" بهمون بگی. اولویت‌بندی بر اساس درخواست کاربرا و محبوبیت بازیه.',
    },
    {
      question: 'اطلاعات بازی‌ها از کجا میاد؟',
      answer:
        'اطلاعات رو از منابع معتبر مثل سایت‌های رسمی بازی‌ها، ناشران و پایگاه‌های داده بین‌المللی جمع‌آوری می‌کنیم. همچنین تیم ما دستی این اطلاعات رو بررسی و به‌روز نگه می‌داره.',
    },
    {
      question: 'سایت برام کند لود میشه، چرا؟',
      answer:
        'این می‌تونه به خاطر اینترنت ضعیف، کش مرورگر یا افزونه‌ها باشه. سعی کن کش مرورگرت رو پاک کنی یا از مرورگر دیگه‌ای امتحان کن. اگه مشکل ادامه داشت، با پشتیبانی تماس بگیر تا بررسی کنیم.',
    },
    {
      question: 'در موبایل مشکل دارم، چیکار کنم؟',
      answer:
        'سایت ما کاملاً responsive هست و باید روی موبایل خوب کار کنه. اگه مشکلی داری، مرورگرت رو آپدیت کن، کش رو پاک کن یا از Chrome/Safari استفاده کن. اگه باز مشکل داری، حتماً بهمون اطلاع بده!',
    },
    {
      question: 'اطلاعات من ایمنه؟',
      answer:
        'بله! ما از رمزنگاری SSL/TLS استفاده می‌کنیم و پسوردها به صورت hash شده ذخیره میشن. هیچ‌وقت پسوردت رو به صورت متنی نگه نمی‌داریم. سرورهای ما هم محافظت شده‌ان و فقط تیم مجاز دسترسی داره.',
    },
    {
      question: 'اطلاعاتم رو می‌فروشید؟',
      answer:
        'قطعاً نه! ما هیچ‌وقت اطلاعات شخصیت رو نمی‌فروشیم. حریم خصوصیت برامون خیلی مهمه. برای اطلاعات بیشتر، صفحه "حریم خصوصی" رو بخون.',
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white" dir="rtl">
      {/* دکوراسیون پس‌زمینه */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-20 w-96 h-96 bg-green-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-20 left-20 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: '1s' }}
        ></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16">
        {/* هدر */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="flex items-center justify-center gap-2 mb-6">
            <HelpCircle className="w-8 h-8 text-green-400" />
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black mb-6 bg-gradient-to-l from-white via-green-100 to-white bg-clip-text text-transparent">
            سوالات متداول
          </h1>
          <p className="text-gray-400 text-lg sm:text-xl max-w-3xl mx-auto">
            جواب سوالات رایجت رو اینجا پیدا کن
          </p>
        </div>

        {/* سوالات */}
        <div>
          {faqs.map((faq, index) => {
            const isOpen = openFaq === index;

            return (
              <div
                key={index}
                // className={`bg-gray-900/30 backdrop-blur-sm border-2 mt-11 rounded-2xl transition-all duration-300 ${
                //   isOpen
                //     ? 'border-green-500/50'
                //     : 'border-gray-800 hover:border-gray-700'
                // }`}
                className=" mt-4 bg-gray-900/30 backdrop-blur-sm border-2 border-gray-800 hover:border-gray-700 rounded-2xl transition-all duration-300"
              >
                <button
                  onClick={() => setOpenFaq(isOpen ? null : index)}
                  className="flex w-full p-4"
                >
                  <h3
                    className={`text-xl font-black flex-1 transition-colors ${
                      isOpen ? 'text-green-400' : 'text-white'
                    }`}
                  >
                    {faq.question}
                  </h3>
                  <div
                    className={`flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center mr-4 transition-all ${
                      isOpen
                        ? 'bg-green-500/20 text-green-400'
                        : 'bg-gray-800 text-gray-400'
                    }`}
                  >
                    {isOpen ? (
                      <Minus className="w-5 h-5" />
                    ) : (
                      <Plus className="w-5 h-5" />
                    )}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 animate-fadeIn">
                    <div className="bg-gray-800/30 rounded-xl p-6 border border-gray-700">
                      <p className="text-gray-300 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* بخش تماس */}
        <div className=" bg-gradient-to-r from-gray-900/50 to-gray-800/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-10 text-center custom">
          <div className="max-w-3xl mx-auto">
            <Gamepad2 className="w-12 h-12 text-green-400 mx-auto mb-4" />
            <h3 className="text-3xl font-black text-white mb-4">
              سوالت اینجا نبود؟
            </h3>
            <p className="text-gray-400 text-lg mb-8">
              تیم پشتیبانی ما آماده کمکه! هر سوالی داری، ازمون بپرس
            </p>
            <a
              href="/support"
              className="inline-block bg-gradient-to-r from-green-500 to-emerald-500 text-black mb-4 px-8 py-4 rounded-xl font-black hover:from-green-400 hover:to-emerald-400 transition-all duration-300 shadow-[0_0_30px_rgba(74,222,128,0.3)] hover:scale-105"
            >
              تماس با پشتیبانی
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
