import { render, screen, fireEvent } from '@testing-library/react';
import RegisterForm from './RegisterForm';

// mock next/link
jest.mock('next/link', () => {
  return ({ children }) => children;
});

describe('RegisterForm Component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('renders all input fields and button', () => {
    render(<RegisterForm />);

    expect(screen.getByPlaceholderText('نام کاربری')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('ایمیل')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('رمز عبور')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('تکرار رمز عبور')).toBeInTheDocument();
    expect(screen.getByText('ثبت‌نام کن')).toBeInTheDocument();
  });

  test('shows alert if passwords do not match', () => {
    window.alert = jest.fn();

    render(<RegisterForm />);

    fireEvent.change(screen.getByPlaceholderText('نام کاربری'), {
      target: { value: 'shahin' },
    });

    fireEvent.change(screen.getByPlaceholderText('ایمیل'), {
      target: { value: 'test@test.com' },
    });

    fireEvent.change(screen.getByPlaceholderText('رمز عبور'), {
      target: { value: '123456' },
    });

    fireEvent.change(screen.getByPlaceholderText('تکرار رمز عبور'), {
      target: { value: '654321' },
    });

    fireEvent.click(screen.getByText('ثبت‌نام کن'));

    expect(window.alert).toHaveBeenCalledWith(
      'رمز عبور و تکرار آن مطابقت ندارند!'
    );
  });

  test('logs user data if passwords match', () => {
    const consoleSpy = jest.spyOn(console, 'log').mockImplementation(() => {});

    render(<RegisterForm />);

    fireEvent.change(screen.getByPlaceholderText('نام کاربری'), {
      target: { value: 'shahin' },
    });

    fireEvent.change(screen.getByPlaceholderText('ایمیل'), {
      target: { value: 'test@test.com' },
    });

    fireEvent.change(screen.getByPlaceholderText('رمز عبور'), {
      target: { value: '123456' },
    });

    fireEvent.change(screen.getByPlaceholderText('تکرار رمز عبور'), {
      target: { value: '123456' },
    });

    fireEvent.click(screen.getByText('ثبت‌نام کن'));

    expect(consoleSpy).toHaveBeenCalledWith({
      username: 'shahin',
      email: 'test@test.com',
      password: '123456',
    });

    consoleSpy.mockRestore();
  });
});
