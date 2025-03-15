import { render, screen } from '@testing-library/react';
import CourseListRow from './CourseListRow';

test('renders Course List Row', () => {
  render(<CourseListRow course={{ title: 'Course 1' }} />);
  expect(screen.getByText(/Course 1/i)).toBeInTheDocument();
});