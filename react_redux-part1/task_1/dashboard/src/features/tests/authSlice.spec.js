import authReducer, { login, logout } from '../auth/authSlice';

describe('authSlice', () => {
  const initialState = { user: null, status: 'idle' };

  it('should handle login', () => {
    const nextState = authReducer(initialState, {
      type: login.fulfilled.type,
      payload: { id: 1, name: 'John Doe' },
    });
    expect(nextState.user).toEqual({ id: 1, name: 'John Doe' });
    expect(nextState.status).toBe('succeeded');
  });

  it('should handle logout', () => {
    const nextState = authReducer(
      { user: { id: 1, name: 'John Doe' }, status: 'succeeded' },
      logout()
    );
    expect(nextState.user).toBeNull();
    expect(nextState.status).toBe('idle');
  });
});