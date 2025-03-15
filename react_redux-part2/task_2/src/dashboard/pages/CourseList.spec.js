import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import CourseList from './CourseList';
import courseReducer from '../../features/courses/courseSlice';

const store = createStore(courseReducer);

describe('CourseList Component', () => {
  it('renders the courses list', () => {
    render(
      <Provider store={store}>
        <CourseList />
      </Provider>
    );
    expect(screen.getByText(/Course List/)).toBeInTheDocument();
  });
});