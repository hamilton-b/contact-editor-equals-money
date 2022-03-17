import { validators } from "./validators";

describe("validators", () => {
  describe("validators.name", () => {
    it("returns false when empty string entered", () => {
      expect(validators.name.isValidSync("")).toEqual(false);
    });

    it("returns true when string entered", () => {
      expect(validators.name.isValidSync("My Name")).toEqual(true);
    });
  });

  describe("validators.phone", () => {
    it("returns false when empty string entered", () => {
      expect(validators.phone.isValidSync("")).toEqual(false);
    });

    it("returns false when empty string entered", () => {
      expect(validators.phone.isValidSync("01234 67890")).toEqual(true);
    });
  });

  describe("validators.birthday", () => {
    const DAY_MILLIS = 864000000;

    it("returns false when future date is entered", () => {
      const tomorrow = new Date(new Date().getTime() + DAY_MILLIS);
      expect(validators.birthday.isValidSync(tomorrow)).toEqual(false);
    });

    it("returns false when empty string entered", () => {
      const yesterday = new Date(new Date().getTime() - DAY_MILLIS);
      expect(validators.birthday.isValidSync(yesterday)).toEqual(true);
    });
  });

  describe("validators.avatar", () => {
    it("returns true when empty string entered", () => {
      expect(validators.avatar.isValidSync("")).toEqual(true);
    });

    it("returns false invalid string is entered", () => {
      expect(validators.avatar.isValidSync("http://somewhere")).toEqual(false);
    });

    it("returns true when valid string is entered", () => {
      expect(validators.avatar.isValidSync("http://somewhere.valid")).toEqual(
        true
      );
    });
  });

  describe("validators.email", () => {
    it("returns false when empty string entered", () => {
      expect(validators.email.isValidSync("")).toEqual(false);
    });

    it("returns false when invalid email entered", () => {
      expect(validators.email.isValidSync("invalid@email")).toEqual(false);
    });

    it("returns true when valid email entered", () => {
      expect(validators.email.isValidSync("invalid@email.com")).toEqual(true);
    });
  });
});
