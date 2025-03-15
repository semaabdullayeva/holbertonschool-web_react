import { getFullYear, getLatestNotification, getFooterCopy } from "./utils";

describe("getFullYear", function () {
  it("should return the current year", function () {
    const year = new Date().getFullYear();
    expect(getFullYear()).toBe(year);
  });
});

describe("getFooterCopy", function () {
  it('should return "Holberton School" if the argument is true', function () {
    expect(getFooterCopy(true)).toBe("Holberton School");
  });

  it('should return "Holberton School main dashboard" if the argument is false', function () {
    expect(getFooterCopy(false)).toBe("Holberton School main dashboard");
  });
});

it("should return <strong>Urgent requirement</strong> - complete by EOD", () => {
  expect(getLatestNotification()).toBe(
    "<strong>Urgent requirement</strong> - complete by EOD"
  );
});
