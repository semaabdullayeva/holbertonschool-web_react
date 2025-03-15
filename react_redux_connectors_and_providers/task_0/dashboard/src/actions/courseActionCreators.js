import { SELECT_COURSE, UNSELECT_COURSE } from "./courseActionTypes";
import { bindActionCreators } from "redux";

export function selectCourse(index) {
  return {
    type: SELECT_COURSE,
    payload: { index },
  };
}

export function unSelectCourse(index) {
  return {
    type: UNSELECT_COURSE,
    payload: { index },
  };
}
export const boundSelectCourse = (index) => (dispatch) =>
  bindActionCreators(selectCourse, dispatch)(index);

export const boundUnSelectCourse = (index) => (dispatch) =>
  bindActionCreators(unSelectCourse, dispatch)(index);
