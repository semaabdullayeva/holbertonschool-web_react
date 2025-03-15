// src/Footer/Footer.spec.js
import React from 'react';
import { render } from '@testing-library/react';
import Footer from './Footer';
import { getCurrentYear, getFooterCopy } from '../../utils/utils';

  it('should render the copyright text', () => {
    const { getByText } = render(<Footer />);
    
    // Check if the copyright text is rendered
    expect(getByText(/Copyright/i)).toBeInTheDocument();
  });


  it('should render the footer message based on isIndex argument in getFooterCopy', () => {
    const isIndex = true;
    const footerMessage = getFooterCopy(isIndex); // Test the utility function directly

    expect(footerMessage).toBe('Holberton School'); // Replace with expected value based on your implementation
  });

