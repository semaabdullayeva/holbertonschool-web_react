import React from 'react';
import { render, screen } from '@testing-library/react';
import CourseList from './CourseList';

describe('CourseList Component', () => {
  it('renders 5 rows when courses array is provided', () => {
      const coursesList = [
      { id: 1, name: "ES6", credit: 60 },
      { id: 2, name: "Webpack", credit: 20 },
      { id: 3, name: "React", credit: 40 },
      ];
    const { container } = render(<CourseList courses={coursesList}/>);
    console.log(container.innerHTML);
    const rows = screen.getAllByRole('row');
    expect(rows).toHaveLength(5); // 2 headers + 3 courses
  });

  it('renders 1 row when courses array is empty', () => {
    render(<CourseList courses={[]} />);
    const rows = screen.getAllByRole('row');
    expect(rows).toHaveLength(3); // Only "No course available yet" row
  });
});
