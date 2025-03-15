import { render, screen } from '@testing-library/react';
import BodySection from './BodySection';

test('renders BodySection component', () => {
  render(<BodySection />);
  expect(screen.getByText(/Body Section/i)).toBeInTheDocument();
});