import React from "react";
import { shallow } from "enzyme";
import CourseList from "./CourseList";
import CourseListRow from "./CourseListRow";
import { StyleSheetTestUtils } from "aphrodite";

describe("<CourseList />", () => {
  let wrapper;

  beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection(); // Prevent style injection
    wrapper = shallow(<CourseList />);
  });

  afterAll(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection(); // Resume style injection after tests
  });

  describe("With default props", () => {
    it("renders without crashing", () => {
      expect(wrapper.exists()).toEqual(true);
    });

    it("renders the correct number of rows (empty listCourses)", () => {
      expect(wrapper.find(CourseListRow)).toHaveLength(2); // 1 header row + 1 'No course available' row
    });
  });

  describe("With listCourses prop", () => {
    beforeEach(() => {
      const listCourses = [
        { id: 1, name: "ES6", credit: 60 },
        { id: 2, name: "Webpack", credit: 20 },
        { id: 3, name: "React", credit: 40 },
      ];
      wrapper = shallow(<CourseList listCourses={listCourses} />);
    });

    it("renders the correct number of rows", () => {
      expect(wrapper.find(CourseListRow)).toHaveLength(4); // 1 header row + 3 course rows
    });

    it("renders the correct course details", () => {
      expect(wrapper.find(CourseListRow).at(1).prop("textFirstCell")).toBe(
        "ES6"
      );
      expect(wrapper.find(CourseListRow).at(1).prop("textSecondCell")).toBe(60);
      expect(wrapper.find(CourseListRow).at(2).prop("textFirstCell")).toBe(
        "Webpack"
      );
      expect(wrapper.find(CourseListRow).at(2).prop("textSecondCell")).toBe(20);
      expect(wrapper.find(CourseListRow).at(3).prop("textFirstCell")).toBe(
        "React"
      );
      expect(wrapper.find(CourseListRow).at(3).prop("textSecondCell")).toBe(40);
    });
  });
});
