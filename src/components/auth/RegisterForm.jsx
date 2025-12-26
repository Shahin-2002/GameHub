'use client';

import { useState } from 'react';
import { User, Mail, Lock, Check, Gamepad2, Sparkles } from 'lucide-react';
import Link from 'next/link';
export default function RegisterForm() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert('رمز عبور و تکرار آن مطابقت ندارند!');
      return;
    }
    console.log({ username, email, password });
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-black p-4 relative overflow-hidden"
      dir="rtl"
    >
      {/* دکوراسیون پس‌زمینه */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-96 h-96 bg-green-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-20 left-20 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: '1s' }}
        ></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-green-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 w-full max-w-md mt-22">
        {/* لوگو */}
        <div className="flex items-center justify-center gap-3 mb-8">
          <div className="relative">
            <div className="absolute inset-0 bg-green-400/30 blur-xl rounded-full animate-pulse"></div>
            <Gamepad2 className="w-12 h-12 text-green-400 relative z-10" />
          </div>
          <span className="text-4xl font-black text-white">گیم‌هاب</span>
        </div>

        <div className="bg-black/60 backdrop-blur-xl border border-green-500/20 rounded-2xl shadow-[0_0_50px_rgba(74,222,128,0.15)] p-8 flex flex-col gap-5">
          <div className="text-center mb-4">
            <h2 className="text-3xl font-black text-white mb-2">ثبت‌نام</h2>
            <p className="text-gray-400 text-sm">به جمع گیمرها بپیوند</p>
          </div>

          {/* نام کاربری */}
          <div className="relative group">
            <div className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-green-400 transition-colors">
              <User className="w-5 h-5" />
            </div>
            <input
              type="text"
              placeholder="نام کاربری"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full bg-gray-900/50 text-white px-12 py-3.5 rounded-xl border border-gray-800 focus:outline-none focus:border-green-500/50 focus:shadow-[0_0_20px_rgba(74,222,128,0.2)] placeholder-gray-500 transition-all duration-300"
              required
            />
          </div>

          {/* ایمیل */}
          <div className="relative group">
            <div className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-green-400 transition-colors">
              <Mail className="w-5 h-5" />
            </div>
            <input
              type="email"
              placeholder="ایمیل"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-gray-900/50 text-white px-12 py-3.5 rounded-xl border border-gray-800 focus:outline-none focus:border-green-500/50 focus:shadow-[0_0_20px_rgba(74,222,128,0.2)] placeholder-gray-500 transition-all duration-300"
              required
            />
          </div>

          {/* رمز عبور */}
          <div className="relative group">
            <div className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-green-400 transition-colors">
              <Lock className="w-5 h-5" />
            </div>
            <input
              type="password"
              placeholder="رمز عبور"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-gray-900/50 text-white px-12 py-3.5 rounded-xl border border-gray-800 focus:outline-none focus:border-green-500/50 focus:shadow-[0_0_20px_rgba(74,222,128,0.2)] placeholder-gray-500 transition-all duration-300"
              required
            />
          </div>

          {/* تکرار رمز عبور */}
          <div className="relative group">
            <div className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-green-400 transition-colors">
              <Check className="w-5 h-5" />
            </div>
            <input
              type="password"
              placeholder="تکرار رمز عبور"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full bg-gray-900/50 text-white px-12 py-3.5 rounded-xl border border-gray-800 focus:outline-none focus:border-green-500/50 focus:shadow-[0_0_20px_rgba(74,222,128,0.2)] placeholder-gray-500 transition-all duration-300"
              required
            />
          </div>

          {/* دکمه ثبت‌نام */}
          <button
            onClick={submitHandler}
            className="relative mt-4 w-full bg-gradient-to-r cursor-pointer from-green-500 to-emerald-500 text-black py-4 rounded-xl font-black text-lg hover:from-green-400 hover:to-emerald-400 transition-all duration-300 shadow-[0_0_30px_rgba(74,222,128,0.4)] hover:shadow-[0_0_40px_rgba(74,222,128,0.6)] hover:scale-[1.02] overflow-hidden group"
          >
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
            <div className="relative flex items-center justify-center gap-2">
              <Sparkles className="w-5 h-5" />
              <span>ثبت‌نام کن</span>
            </div>
          </button>

          {/* لینک ورود */}
          <p className="text-gray-400 text-center text-sm mt-2">
            حساب داری؟{' '}
            <Link
              href="/login"
              className="text-green-400 hover:text-green-300 font-bold hover:underline transition-colors"
            >
              وارد شو
            </Link>
          </p>

          {/* خط جداکننده */}
          <div className="flex items-center gap-4 my-2">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent to-gray-800"></div>
            <span className="text-gray-600 text-xs">یا</span>
            <div className="flex-1 h-px bg-gradient-to-l from-transparent to-gray-800"></div>
          </div>

          {/* دکمه‌های ورود سریع */}
          <div className="grid grid-cols-2 gap-3">
            <button
              type="button"
              className="px-4 py-3 bg-gray-900/50 border cursor-pointer border-gray-800 rounded-xl text-gray-400 text-sm font-bold hover:border-green-500/30 hover:text-green-400 transition-all duration-300"
            >
              Google
            </button>
            <button
              type="button"
              className="px-4 py-3 bg-gray-900/50 border cursor-pointer border-gray-800 rounded-xl text-gray-400 text-sm font-bold hover:border-green-500/30 hover:text-green-400 transition-all duration-300"
            >
              Discord
            </button>
          </div>
        </div>

        {/* متن کوچک پایین */}
        <p className="text-center text-gray-600 text-xs mt-6">
          با ثبت‌نام، شما{' '}
          <span className="text-green-400">قوانین و مقررات</span> را می‌پذیرید
        </p>
      </div>

      <style jsx>{`
        input:-webkit-autofill,
        input:-webkit-autofill:hover,
        input:-webkit-autofill:focus {
          -webkit-box-shadow: 0 0 0 1000px rgba(17, 24, 31, 1) inset !important;
          -webkit-text-fill-color: white !important;
          border: 1px solid rgb(31, 41, 55) !important;
        }
      `}</style>
    </div>
  );
}
