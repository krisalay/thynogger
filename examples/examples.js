// eslint-disable-next-line @typescript-eslint/no-var-requires
const { Thynogger: thynogger } = require("../lib");

thynogger.info("User payload received");
thynogger.info("Invalid user payload", { data: { user_id: 1 } });

const e = new Error("Test error");

thynogger.error("Something went wrong", { error: e, data: { user_id: 1 } });
thynogger.error("Something went wrong", { error: e });
thynogger.error("Something went wrong", { data: { user_id: 1 } });
thynogger.error("Something went wrong", { error: e, data: { user_id: 1 } });

thynogger.warn("Warning message", { data: { message: "some warning" } });
thynogger.warn("Warning message");

thynogger.debug("Debug message", { data: { message: "some warning" } });
thynogger.debug("Debug message");
