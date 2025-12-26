// src/components/layout/Navbar.test.jsx
import { render, screen } from '@testing-library/react';
import Navbar from './Navbar';
import '@testing-library/jest-dom';

describe('Navbar Component', () => {
  beforeEach(() => {
    render(<Navbar />);
  });

  test('renders logo and site name', () => {
    expect(screen.getByText('گیم‌هاب')).toBeInTheDocument();
    expect(screen.getByText('GAME HUB')).toBeInTheDocument();
  });

  test('renders desktop nav links', () => {
    const links = ['خانه', 'بازی‌ها', 'مقاله‌ها', 'بازی‌های کرک شده'];
    links.forEach((text) => {
      expect(screen.getAllByText(text)[0]).toBeInTheDocument();
    });
  });

  test('renders login and register buttons', () => {
    expect(screen.getAllByText('ورود')[0]).toBeInTheDocument();
    expect(screen.getAllByText('ثبت‌نام')[0]).toBeInTheDocument();
  });

  test('renders mobile menu button', () => {
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
  });
});
