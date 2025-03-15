import { render, screen } from '@testing-library/react';
import BodySectionWithMarginBottom from './BodySectionWithMarginBottom';

test('renders BodySectionWithMarginBottom component', () => {
  render(<BodySectionWithMarginBottom />);
  expect(screen.getByText(/Body Section With Margin Bottom/i)).toBeInTheDocument();
});