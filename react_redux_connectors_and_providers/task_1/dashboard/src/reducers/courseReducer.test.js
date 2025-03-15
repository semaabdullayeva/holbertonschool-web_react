import courseReducer from "./courseReducer";
import {
  FETCH_COURSE_SUCCESS,
  SELECT_COURSE,
  UNSELECT_COURSE,
} from "../actions/courseActionTypes";
import { fromJS } from "immutable";

describe("courseReducer", () => {
  it("should return the default state (an empty Map) when no action is passed", () => {
    const result = courseReducer(undefined, {});
    expect(result).toEqual(fromJS({}));
  });

  it("should handle FETCH_COURSE_SUCCESS and set isSelected to false for all courses", () => {
    const action = {
      type: FETCH_COURSE_SUCCESS,
      data: [
        { id: 1, name: "ES6", credit: 60 },
        { id: 2, name: "Webpack", credit: 20 },
        { id: 3, name: "React", credit: 40 },
      ],
    };
    const expectedState = fromJS({
      1: { id: 1, name: "ES6", credit: 60, isSelected: false },
      2: { id: 2, name: "Webpack", credit: 20, isSelected: false },
      3: { id: 3, name: "React", credit: 40, isSelected: false },
    });
    const result = courseReducer(undefined, action);
    expect(result).toEqual(expectedState);
  });

  it("should handle SELECT_COURSE by setting isSelected to true for the specified course", () => {
    const initialState = fromJS({
      1: { id: 1, name: "ES6", credit: 60, isSelected: false },
      2: { id: 2, name: "Webpack", credit: 20, isSelected: false },
      3: { id: 3, name: "React", credit: 40, isSelected: false },
    });
    const action = { type: SELECT_COURSE, index: 2 };
    const expectedState = initialState.setIn([2, "isSelected"], true);
    const result = courseReducer(initialState, action);
    expect(result).toEqual(expectedState);
  });

  it("should handle UNSELECT_COURSE by setting isSelected to false for the specified course", () => {
    const initialState = fromJS({
      1: { id: 1, name: "ES6", credit: 60, isSelected: false },
      2: { id: 2, name: "Webpack", credit: 20, isSelected: true },
      3: { id: 3, name: "React", credit: 40, isSelected: false },
    });
    const action = { type: UNSELECT_COURSE, index: 2 };
    const expectedState = initialState.setIn([2, "isSelected"], false);
    const result = courseReducer(initialState, action);
    expect(result).toEqual(expectedState);
  });
});
