import Utils from "./../Utils";

describe("convert milliseconds to time format", () => {
  it("should convert millis to minute:seconds format correctly", () => {
    const expectedTotal = "3:32";
    const actualTotal = Utils.convertToMin(212222);

    expect(actualTotal).toEqual(expectedTotal);
  });

  it("should append zero if secs is less than 10", () => {
    const expectedTotal = "2:03";
    const actualTotal = Utils.convertToMin(123000);

    expect(actualTotal).toEqual(expectedTotal);
  });

  it("should append zero time is less than 1 minute", () => {
    const expectedTotal = "0:12";
    const actualTotal = Utils.convertToMin(12000);

    expect(actualTotal).toEqual(expectedTotal);
  });
});
