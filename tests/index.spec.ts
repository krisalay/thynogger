import { Thynogger } from "../src/index";

const data = {
  json: { user_id: 1 },
  string: "user_id:1",
  number: 1,
  null: null,
  undefined: undefined
};

describe("#info()", () => {
  describe("'obj' argument not provided", () => {
    test("should pass", () => {
      Thynogger.info("Info message");
    });
  });
  describe("'obj->data' argument provided as json object", () => {
    test("should pass", () => {
      Thynogger.info("Info message", { data: data.json });
    });
  });
  describe("'obj->data' argument provided as string", () => {
    test("should pass", () => {
      Thynogger.info("Info message", { data: data.string });
    });
  });
  describe("'obj->data' argument provided as number", () => {
    test("should pass", () => {
      Thynogger.info("Info message", { data: data.number });
    });
  });
  describe("'obj->data' argument provided as null", () => {
    test("should pass", () => {
      Thynogger.info("Info message", { data: data.null });
    });
  });
  describe("'obj->data' argument provided as undefined", () => {
    test("should pass", () => {
      Thynogger.info("Info message", { data: data.undefined });
    });
  });
});

describe("#warn()", () => {
  describe("'obj' argument not provided", () => {
    test("should pass", () => {
      Thynogger.warn("warn message");
    });
  });
  describe("'obj->data' argument provided as json object", () => {
    test("should pass", () => {
      Thynogger.warn("warn message", { data: data.json });
    });
  });
  describe("'obj->data' argument provided as string", () => {
    test("should pass", () => {
      Thynogger.warn("warn message", { data: data.string });
    });
  });
  describe("'obj->data' argument provided as number", () => {
    test("should pass", () => {
      Thynogger.warn("warn message", { data: data.number });
    });
  });
  describe("'obj->data' argument provided as null", () => {
    test("should pass", () => {
      Thynogger.warn("warn message", { data: data.null });
    });
  });
  describe("'obj->data' argument provided as undefined", () => {
    test("should pass", () => {
      Thynogger.warn("warn message", { data: data.undefined });
    });
  });
});

describe("#debug()", () => {
  describe("'obj' argument not provided", () => {
    test("should pass", () => {
      Thynogger.debug("debug message");
    });
  });
  describe("'obj->data' argument provided as json object", () => {
    test("should pass", () => {
      Thynogger.debug("debug message", { data: data.json });
    });
  });
  describe("'obj->data' argument provided as string", () => {
    test("should pass", () => {
      Thynogger.debug("debug message", { data: data.string });
    });
  });
  describe("'obj->data' argument provided as number", () => {
    test("should pass", () => {
      Thynogger.debug("debug message", { data: data.number });
    });
  });
  describe("'obj->data' argument provided as null", () => {
    test("should pass", () => {
      Thynogger.debug("debug message", { data: data.null });
    });
  });
  describe("'obj->data' argument provided as undefined", () => {
    test("should pass", () => {
      Thynogger.debug("debug message", { data: data.undefined });
    });
  });
});

describe("#error()", () => {
  describe("'obj' argument not provided", () => {
    test("should pass", () => {
      Thynogger.error("error message");
    });
  });
  describe("'obj->error' argument provided as json object", () => {
    test("should pass", () => {
      Thynogger.error("error message", { error: data.json });
    });
  });
  describe("'obj->error' argument provided as string", () => {
    test("should pass", () => {
      Thynogger.error("error message", { error: data.string });
    });
  });
  describe("'obj->error' argument provided as number", () => {
    test("should pass", () => {
      Thynogger.error("error message", { error: data.number });
    });
  });
  describe("'obj->error' argument provided as null", () => {
    test("should pass", () => {
      Thynogger.error("error message", { error: data.null });
    });
  });
  describe("'obj->error' argument provided as undefined", () => {
    test("should pass", () => {
      Thynogger.error("error message", { error: data.undefined });
    });
  });
  describe("'obj->error' argument provided as error instance", () => {
    test("should pass", () => {
      Thynogger.error("error message", { error: new Error("Test Error") });
    });
  });
  describe("'obj->error=ErrorInstance and obj->data' argument provided as json", () => {
    test("should pass", () => {
      Thynogger.error("error message", { error: data.json, data: data.json });
    });
  });
  describe("'obj->error=ErrorInstance and obj->data' argument provided as string", () => {
    test("should pass", () => {
      Thynogger.error("error message", { error: data.string, data: data.string });
    });
  });
  describe("'obj->error=ErrorInstance and obj->data' argument provided as number", () => {
    test("should pass", () => {
      Thynogger.error("error message", { error: data.number, data: data.number });
    });
  });
  describe("'obj->error=ErrorInstance and obj->data' argument provided as null", () => {
    test("should pass", () => {
      Thynogger.error("error message", { error: data.null, data: data.null });
    });
  });
  describe("'obj->error=ErrorInstance and obj->data' argument provided as undefined", () => {
    test("should pass", () => {
      Thynogger.error("error message", { error: data.undefined, data: data.undefined });
    });
  });
});
