import { render, screen, fireEvent } from '@testing-library/react';
import BookingForm from '../components/BookingForm';
import ConfirmedBooking from '../components/ConfirmedBooking';
import { DataContextProvider } from '../components/DataContext';
import { initializeTimes } from '../components/DataContext';
import { MemoryRouter } from 'react-router-dom';
import 'jest-localstorage-mock';

function TestingWrapper({ children }) {
  return (
    <DataContextProvider>
      <MemoryRouter>{children}</MemoryRouter>
    </DataContextProvider>
  );
}

describe('Booking Form', () => {
  beforeEach(() => {
    localStorage.clear();
    localStorage.setItem.mockClear();
    jest.clearAllMocks();
  });

  it('renders the BookingForm heading', () => {
    render(
      <TestingWrapper>
        <BookingForm />
      </TestingWrapper>
    );
    const headingElement = screen.getByText('Reserve a table');
    expect(headingElement).toBeInTheDocument();
  });
  it('Updates the available times for each date', () => {
    render(
      <TestingWrapper>
        <BookingForm />
      </TestingWrapper>
    );

    const firstDateInput = screen.getByLabelText(/Choose Date/);
    fireEvent.change(firstDateInput, { target: { value: '2023-05-25' } });
    const firstTimeInput = screen.getByLabelText(/Choose Time/);
    const firstAvailableTimes = Array.from(firstTimeInput.options).map(
      (option) => option.value
    );

    const secondDateInput = screen.getByLabelText(/Choose Date/);
    fireEvent.change(secondDateInput, { target: { value: '2023-05-26' } });
    const secondTimeInput = screen.getByLabelText(/Choose Time/);
    const secondAvailableTimes = Array.from(secondTimeInput.options).map(
      (option) => option.value
    );

    expect(firstAvailableTimes).not.toEqual(secondAvailableTimes);
  });
  it('writes form data to localStorage', () => {
    render(
      <TestingWrapper>
        <BookingForm />
      </TestingWrapper>
    );

    const nameInput = screen.getByLabelText('Name');
    fireEvent.change(nameInput, { target: { value: 'Kevin Silva' } });

    const emailInput = screen.getByLabelText('Email Input');
    fireEvent.change(emailInput, { target: { value: 'kevin@gmail.com' } });

    const dateInput = screen.getByLabelText('Choose Date');
    fireEvent.change(dateInput, { target: { value: '2023-05-26' } });

    const timeInput = screen.getByLabelText('Choose Time');
    fireEvent.change(timeInput, { target: { value: '17:00' } });

    const guestsInput = screen.getByLabelText('Number of Guests Input');
    fireEvent.change(guestsInput, { target: { value: '1' } });

    const submitInput = screen.getByText('Make your reservation');
    fireEvent.click(submitInput);

    expect(localStorage.setItem).toHaveBeenCalledTimes(1);
  });

  it('reads form data from localStorage', () => {
    localStorage.setItem('formData', JSON.stringify({ name: 'Kevin' }));
    render(
      <TestingWrapper>
        <ConfirmedBooking />
      </TestingWrapper>
    );
    setTimeout(() => {
      const nameElement = screen.getByText('Kevin');
      expect(nameElement).toBeInTheDocument();
    }, 0);
  });

  describe('Form Validation', () => {
    it('has the correct attributes for each input field', () => {
      render(
        <TestingWrapper>
          <BookingForm />
        </TestingWrapper>
      );

      const nameInput = screen.getByLabelText('Name');
      expect(nameInput).toHaveAttribute('required');
      expect(nameInput).toHaveAttribute('type', 'text');

      const emailInput = screen.getByLabelText('Email Input');
      expect(emailInput).toHaveAttribute('required');
      expect(emailInput).toHaveAttribute('type', 'email');

      const dateInput = screen.getByLabelText('Choose Date');
      expect(dateInput).toHaveAttribute('required');
      expect(dateInput).toHaveAttribute('type', 'date');

      const timeInput = screen.getByLabelText('Choose Time');
      expect(timeInput).toHaveAttribute('required');

      const guestsInput = screen.getByLabelText('Number of Guests Input');
      expect(guestsInput).toHaveAttribute('required');
      expect(guestsInput).toHaveAttribute('min', '1');
      expect(guestsInput).toHaveAttribute('max', '10');
      expect(guestsInput).toHaveAttribute('type', 'number');
    });

    it('validates valid form submission data', () => {
      render(
        <TestingWrapper>
          <BookingForm />
        </TestingWrapper>
      );
      const nameInput = screen.getByLabelText('Name');
      fireEvent.change(nameInput, { target: { value: 'Kevin Silva' } });

      const emailInput = screen.getByLabelText('Email Input');
      fireEvent.change(emailInput, { target: { value: 'kevin@gmail.com' } });

      const dateInput = screen.getByLabelText('Choose Date');
      fireEvent.change(dateInput, { target: { value: '2023-05-26' } });

      const timeInput = screen.getByLabelText('Choose Time');
      fireEvent.change(timeInput, { target: { value: '17:00' } });

      const guestsInput = screen.getByLabelText('Number of Guests Input');
      fireEvent.change(guestsInput, { target: { value: '1' } });

      const submitInput = screen.getByText('Make your reservation');
      fireEvent.click(submitInput);

      render(
        <TestingWrapper>
          <ConfirmedBooking />
        </TestingWrapper>
      );

      const confirmedBooking = screen.getByText(
        'We have received your confirmation'
      );
      const confirmedEmail = screen.getByText('kevin@gmail.com');
      expect(confirmedBooking).toBeInTheDocument();
      expect(confirmedEmail).toBeInTheDocument();
    });
    it('invalidates invalid form submission data', () => {
      render(
        <TestingWrapper>
          <BookingForm />
        </TestingWrapper>
      );
      const nameInput = screen.getByLabelText('Name');
      fireEvent.change(nameInput, { target: { value: 'Kevin' } });

      const emailInput = screen.getByLabelText('Email Input');
      fireEvent.change(emailInput, { target: { value: 'kevin.email.com' } });

      const submitInput = screen.getByText('Make your reservation');
      fireEvent.click(submitInput);

      const errorMessage = screen.getByText('Please enter your details!');

      const confirmedBooking = screen.queryByText(
        'We have received your confirmation'
      );
      const confirmedEmail = screen.queryByText('kevin.email.com');

      expect(errorMessage).toBeInTheDocument();
      expect(confirmedBooking).not.toBeInTheDocument();
      expect(confirmedEmail).not.toBeInTheDocument();
    });
  });

  describe('Initialize Times Function', () => {
    it('returns an array with different times for today', () => {
      const arrayTimes = initializeTimes();
      const secondArrayTimes = initializeTimes();

      expect(Array.isArray(arrayTimes)).toBe(true);
      expect(arrayTimes).toEqual(secondArrayTimes);
    });
  });
});
