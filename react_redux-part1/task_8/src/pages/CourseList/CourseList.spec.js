import { render, screen } from '@testing-library/react';
import CourseList from '../CourseList';

test('renders Course List', () => {
  render(<CourseList />);
  expect(screen.getByText(/Course List/i)).toBeInTheDocument();
});