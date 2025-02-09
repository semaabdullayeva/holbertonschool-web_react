import authReducer, { login, logout } from '../auth/authSlice';

describe('authSlice', () => {
  const initialState = {
    user: {
      email: '',
      password: '',
    },
    isLoggedIn: false,
  };

  it('should return the initial state by default', () => {
    expect(authReducer(undefined, { type: 'unknown' })).toEqual(initialState);
  });

  it('should handle login', () => {
    const loginPayload = {
      email: 'test@example.com',
      password: 'password123',
    };

    const expectedState = {
      user: {
        email: 'test@example.com',
        password: 'password123',
      },
      isLoggedIn: true,
    };

    expect(authReducer(initialState, login(loginPayload))).toEqual(expectedState);
  });

  it('should handle logout', () => {
    const loggedInState = {
      user: {
        email: 'test@example.com',
        password: 'password123',
      },
      isLoggedIn: true,
    };

    expect(authReducer(loggedInState, logout())).toEqual(initialState);
  });
});