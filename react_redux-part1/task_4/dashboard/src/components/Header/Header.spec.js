import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from './Header';

  it('should render the logo and title', () => {
    const { getByAltText, getByText } = render(<Header />);
    
    expect(getByAltText(/holberton logo/i)).toBeInTheDocument();
    expect(getByText(/School dashboard/i)).toBeInTheDocument();
  });
  it('should render the Holberton logo', () => {
    render(<Header />);
    const logo = screen.getByAltText(/holberton logo/i);
    expect(logo).toBeInTheDocument();
  });

  it('should render a heading with the text "School Dashboard"', () => {
    render(<Header />);
    const heading = screen.getByRole('heading', { level: 1, name: /school dashboard/i });
    expect(heading).toBeInTheDocument();
  });

  