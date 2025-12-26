'use client';

import { useState, useEffect } from 'react';
import {
  Menu,
  X,
  Gamepad2,
  Home,
  Library,
  LogIn,
  UserPlus,
  Sparkles,
  FileText,
} from 'lucide-react';
import Link from 'next/link';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  const navLinks = [
    { name: 'خانه', href: '/', icon: Home },
    { name: 'بازی‌ها', href: '/games', icon: Library },
    { name: 'مقاله‌ها', href: '/articles', icon: FileText },
    { name: 'بازی‌های کرک شده', href: '/cracked-games', icon: Gamepad2 },
  ];

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; // تا زمان mount چیزی رندر نشه

  return (
    <>
      <nav className="fixed w-full z-50 bg-black/90 backdrop-blur-md" dir="rtl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            {/* لوگو */}
            <Link
              href="/"
              className="flex items-center gap-3 group cursor-pointer"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-green-400/30 blur-xl rounded-full animate-pulse"></div>
                <Gamepad2 className="w-11 h-11 text-green-400 relative z-10 group-hover:rotate-12 transition-transform duration-300" />
              </div>
              <div>
                <span className="text-3xl font-black text-white block leading-none">
                  گیم‌هاب
                </span>
                <span className="text-xs text-green-400 font-semibold tracking-widest">
                  GAME HUB
                </span>
              </div>
            </Link>

            {/* منو دسکتاپ */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="relative px-5 py-2.5 text-gray-400 font-bold hover:text-white transition-all duration-300 group"
                  >
                    <div className="flex items-center gap-2">
                      <Icon className="w-4 h-4 group-hover:text-green-400 transition-colors" />
                      <span>{link.name}</span>
                    </div>
                    <div className="absolute bottom-0 right-0 w-0 h-1 bg-green-400 group-hover:w-full transition-all duration-300 shadow-[0_0_10px_rgba(74,222,128,0.8)]"></div>
                  </Link>
                );
              })}

              {/* دکمه‌های ورود و ثبت‌نام */}
              <div className="mr-4 flex items-center gap-2">
                <Link
                  href="/login"
                  className="px-5 py-2.5 text-gray-300 font-bold hover:text-white transition-all duration-300 flex items-center gap-2"
                >
                  <LogIn className="w-4 h-4" />
                  <span>ورود</span>
                </Link>
                <Link
                  href="/register"
                  className="px-6 py-2.5 bg-gradient-to-r from-green-500 to-emerald-500 text-black font-black rounded-lg hover:from-green-400 hover:to-emerald-400 transition-all duration-300 shadow-[0_0_20px_rgba(74,222,128,0.4)] hover:shadow-[0_0_30px_rgba(74,222,128,0.6)] hover:scale-105"
                >
                  <div className="flex items-center gap-2">
                    <UserPlus className="w-4 h-4" />
                    <span>ثبت‌نام</span>
                  </div>
                </Link>
              </div>
            </div>

            {/* دکمه منو موبایل */}
            <button
              onClick={() => setOpen(!open)}
              className="md:hidden relative w-12 h-12 flex items-center justify-center text-gray-300 hover:text-green-400 focus:outline-none transition-colors"
            >
              {open ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>
        </div>

        {/* خط سبز درخشان زیر نوار */}
        <div className="h-[1px] bg-gradient-to-l from-transparent via-green-500 to-transparent shadow-[0_0_10px_rgba(74,222,128,0.5)]"></div>
      </nav>

      {/* منو موبایل - از راست باز میشه */}
      <div
        className={`md:hidden fixed top-0 right-0 w-80 h-full bg-black z-50 shadow-[-10px_0_50px_rgba(0,0,0,0.8)] transform transition-transform duration-500 ease-out ${
          open ? 'translate-x-0' : 'translate-x-full'
        }`}
        dir="rtl"
      >
        {/* هدر منو */}
        <div className="flex items-center justify-between p-6 border-b border-green-500/20">
          <div className="flex items-center gap-3">
            <Gamepad2 className="w-8 h-8 text-green-400" />
            <span className="text-xl font-black text-white">منو</span>
          </div>
        </div>

        {/* لینک‌های منو */}
        <div className="flex flex-col gap-2 p-4 mt-4">
          {navLinks.map((link, index) => {
            const Icon = link.icon;
            return (
              <Link
                key={link.name}
                href={link.href}
                className="group relative px-5 py-4 text-gray-300 font-bold text-lg hover:text-white transition-all duration-300 rounded-xl overflow-hidden"
                onClick={() => setOpen(false)}
                style={{
                  animation: open
                    ? `slideIn 0.4s ease-out ${index * 0.1}s both`
                    : 'none',
                }}
              >
                <div className="relative flex items-center gap-4">
                  <div className="w-11 h-11 flex items-center justify-center bg-green-500/10 group-hover:bg-green-500/20 rounded-lg transition-all duration-300 border border-green-500/20 group-hover:border-green-400/50">
                    <Icon className="w-5 h-5 text-green-400" />
                  </div>
                  <span>{link.name}</span>
                </div>
              </Link>
            );
          })}

          {/* دکمه‌های ورود و ثبت‌نام در منو موبایل */}
          <div className="flex flex-col gap-2 mx-2 mt-4">
            <Link
              href="/login"
              className="px-6 py-3 bg-green-500/10 text-green-400 font-bold rounded-xl hover:bg-green-500/20 transition-all duration-300 text-center border border-green-500/30"
              onClick={() => setOpen(false)}
            >
              <div className="flex items-center justify-center gap-2">
                <LogIn className="w-5 h-5" />
                <span>ورود به حساب</span>
              </div>
            </Link>
            <Link
              href="/register"
              className="px-6 py-4 bg-gradient-to-r from-green-500 to-emerald-500 text-black font-black rounded-xl hover:from-green-400 hover:to-emerald-400 transition-all duration-300 shadow-[0_0_25px_rgba(74,222,128,0.4)] text-center"
              onClick={() => setOpen(false)}
            >
              <div className="flex items-center justify-center gap-2">
                <UserPlus className="w-5 h-5" />
                <span>ثبت‌نام رایگان</span>
              </div>
            </Link>
          </div>
        </div>

        {/* لوگو پایین */}
        <div className="absolute bottom-8 right-6 flex items-center gap-2 opacity-30">
          <Gamepad2 className="w-6 h-6 text-green-400" />
          <span className="text-sm text-gray-500 font-bold">گیم‌هاب</span>
        </div>
      </div>

      {/* اورلی تاریک */}
      {open && (
        <div
          className="md:hidden fixed inset-0 bg-black/70 backdrop-blur-sm z-40"
          onClick={() => setOpen(false)}
        ></div>
      )}

      <style jsx>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </>
  );
}
