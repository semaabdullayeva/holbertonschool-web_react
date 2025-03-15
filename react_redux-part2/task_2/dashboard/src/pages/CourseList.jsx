import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCourses } from '../../features/courses/coursesSlice';
import CourseListRow from './CourseListRow';

const CourseList = () => {
  const dispatch = useDispatch();
  const courses = useSelector((state) => state.courses.items);

  useEffect(() => {
    dispatch(fetchCourses());
  }, [dispatch]);

  return (
    <div>
      <h1>Course List</h1>
      <table>
        <thead>
          <tr>
            <th>Course</th>
            <th>Duration</th>
          </tr>
        </thead>
        <tbody>
          {courses.map(course => (
            <CourseListRow key={course.id} course={course} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CourseList;