// src/components/layout/Footer.test.jsx
import { render, screen } from '@testing-library/react';
import Footer from './Footer';

describe('Footer Component', () => {
  beforeEach(() => {
    render(<Footer />);
  });

  test('renders logo and site name', () => {
    expect(screen.getByText('گیم‌هاب')).toBeInTheDocument();
  });

  test('renders newsletter input', () => {
    expect(
      screen.getByPlaceholderText('ایمیل خود را وارد کنید')
    ).toBeInTheDocument();
  });

  test('renders About section and its links', () => {
    expect(screen.getByText('درباره ما')).toBeInTheDocument();
    expect(screen.getByText('تماس با ما')).toBeInTheDocument();
    expect(screen.getByText('تیم ما')).toBeInTheDocument();
    expect(screen.getByText('فرصت‌های شغلی')).toBeInTheDocument();
  });

  test('renders Games section and its links', () => {
    expect(screen.getByText('بازی‌ها')).toBeInTheDocument();
    expect(screen.getByText('جدیدترین بازی‌ها')).toBeInTheDocument();
    expect(screen.getByText('برترین بازی‌ها')).toBeInTheDocument();
    expect(screen.getByText('دسته‌بندی ژانر')).toBeInTheDocument();
    expect(screen.getByText('پلتفرم‌ها')).toBeInTheDocument();
  });

  test('renders Content section and its links', () => {
    expect(screen.getByText('محتوا')).toBeInTheDocument();
    expect(screen.getByText('مقاله‌ها')).toBeInTheDocument();
    expect(screen.getByText('اخبار بازی')).toBeInTheDocument();
    expect(screen.getByText('راهنماها')).toBeInTheDocument();
    expect(screen.getByText('ویدیوها')).toBeInTheDocument();
  });

  test('renders Support section and its links', () => {
    expect(screen.getByText('پشتیبانی')).toBeInTheDocument();
    expect(screen.getByText('سوالات متداول')).toBeInTheDocument();
    expect(screen.getByText('قوانین و مقررات')).toBeInTheDocument();
    expect(screen.getByText('حریم خصوصی')).toBeInTheDocument();
    expect(screen.getByText('پشتیبانی')).toBeInTheDocument();
  });

  test('renders social media icons', () => {
    expect(screen.getByLabelText('Twitter')).toBeInTheDocument();
    expect(screen.getByLabelText('Instagram')).toBeInTheDocument();
    expect(screen.getByLabelText('Youtube')).toBeInTheDocument();
    expect(screen.getByLabelText('Github')).toBeInTheDocument();
  });

  test('renders copyright text', () => {
    expect(screen.getByText('© 2025 گیم‌هاب. تمامی حقوق محفوظ است.')).toBeInTheDocument();
  });
});
