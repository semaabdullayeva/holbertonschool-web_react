import React from 'react';
import { render, screen } from '@testing-library/react';
import CourseListRow from './CourseListRow';

describe('CourseListRow Component', () => {
  it('renders course row correctly', () => {
    const course = { id: '1', name: 'React', duration: '3 months' };
    render(<CourseListRow course={course} />);
    expect(screen.getByText(/React/)).toBeInTheDocument();
    expect(screen.getByText(/3 months/)).toBeInTheDocument();
  });
});