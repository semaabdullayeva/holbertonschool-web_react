import React from 'react';

const CourseListRow = ({ course }) => {
  return (
    <tr>
      <td>{course.name}</td>
      <td>{course.duration}</td>
    </tr>
  );
};

export default CourseListRow;