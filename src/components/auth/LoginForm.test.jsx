import { render, screen, fireEvent } from '@testing-library/react';
import LoginForm from './LoginForm';

describe('LoginForm Component', () => {
  test('renders all input fields and button', () => {
    render(<LoginForm />);

    expect(screen.getByPlaceholderText('ایمیل')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('رمز عبور')).toBeInTheDocument();
    expect(screen.getByRole('checkbox')).toBeInTheDocument();
    expect(screen.getByText('وارد شو')).toBeInTheDocument();
  });

  test('updates state when inputs change', () => {
    render(<LoginForm />);
    
    const emailInput = screen.getByPlaceholderText('ایمیل');
    const passwordInput = screen.getByPlaceholderText('رمز عبور');
    const rememberCheckbox = screen.getByRole('checkbox');

    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    fireEvent.change(passwordInput, { target: { value: '123456' } });
    fireEvent.click(rememberCheckbox);

    expect(emailInput.value).toBe('test@example.com');
    expect(passwordInput.value).toBe('123456');
    expect(rememberCheckbox.checked).toBe(true);
  });

  test('calls console.log with form data on submit', () => {
    render(<LoginForm />);
    const emailInput = screen.getByPlaceholderText('ایمیل');
    const passwordInput = screen.getByPlaceholderText('رمز عبور');
    const rememberCheckbox = screen.getByRole('checkbox');
    const submitButton = screen.getByText('وارد شو');

    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    fireEvent.change(passwordInput, { target: { value: '123456' } });
    fireEvent.click(rememberCheckbox);

    // mock console.log
    const consoleSpy = jest.spyOn(console, 'log').mockImplementation();

    fireEvent.click(submitButton);

    expect(consoleSpy).toHaveBeenCalledWith({
      email: 'test@example.com',
      password: '123456',
      remember: true,
    });

    consoleSpy.mockRestore();
  });
});
