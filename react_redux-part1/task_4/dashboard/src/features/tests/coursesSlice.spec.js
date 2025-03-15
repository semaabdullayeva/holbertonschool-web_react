import coursesReducer, { fetchCourses } from '../courses/coursesSlice';
import { logout } from '../auth/authSlice';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

describe('coursesSlice', () => {
  const initialState = {
    courses: [],
  };

  const mockCourses = [
    { id: 1, name: 'ES6', credit: 60 },
    { id: 2, name: 'Webpack', credit: 20 },
    { id: 3, name: 'React', credit: 40 },
  ];

  let mock;

  beforeEach(() => {
    mock = new MockAdapter(axios);
  });

  afterEach(() => {
    mock.reset();
  });

  it('should return the initial state by default', () => {
    expect(coursesReducer(undefined, { type: 'unknown' })).toEqual(initialState);
  });

  it('should fetch courses correctly', async () => {
    mock.onGet('/courses.json').reply(200, mockCourses);

    const dispatch = jest.fn();
    const thunk = fetchCourses();
    await thunk(dispatch);

    const [_, fulfilledAction] = dispatch.mock.calls;
    expect(fulfilledAction[0].type).toBe('courses/fetchCourses/fulfilled');
    expect(fulfilledAction[0].payload).toEqual(mockCourses);
  });

  it('should reset courses when logout action is dispatched', () => {
    const stateWithCourses = {
      courses: mockCourses,
    };

    const newState = coursesReducer(stateWithCourses, logout());
    expect(newState.courses).toEqual([]);
  });
});