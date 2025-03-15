import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import fetchMock from "fetch-mock";
import { loginRequest, loginSuccess, loginFailure } from "./uiActionCreators";
import { LOGIN, LOGIN_SUCCESS, LOGIN_FAILURE } from "./uiActionTypes";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe("loginRequest action", () => {
  let store;

  beforeEach(() => {
    store = mockStore({});
    fetchMock.restore();
  });

  afterEach(() => {
    fetchMock.restore();
    store.clearActions();
  });

  it("should dispatch LOGIN and LOGIN_SUCCESS when API call is successful", async () => {
    fetchMock.postOnce("http://localhost:9000/login-success.json", {
      body: { user: { name: "John Doe" } },
      headers: { "content-type": "application/json" },
    });

    const expectedActions = [
      {
        type: LOGIN,
        payload: {
          user: { email: "test@example.com", password: "password123" },
        },
      },
      { type: LOGIN_SUCCESS, payload: { user: { name: "John Doe" } } },
    ];

    await store.dispatch(loginRequest("test@example.com", "password123"));
    expect(store.getActions()).toEqual(expectedActions);
  });

  it("should dispatch LOGIN and LOGIN_FAILURE when API call fails", async () => {
    fetchMock.postOnce("http://localhost:9000/login-success.json", 500);

    const expectedActions = [
      {
        type: LOGIN,
        payload: {
          user: { email: "test@example.com", password: "password123" },
        },
      },
      { type: LOGIN_FAILURE, payload: "Network response was not ok" },
    ];

    await store.dispatch(loginRequest("test@example.com", "password123"));
    expect(store.getActions()).toEqual(expectedActions);
  });
});
