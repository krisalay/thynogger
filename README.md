# thynogger

A simple and easy to use logging package for better readability in the consoles or terminals. The terminal/console logs can be piped into the file and converted into the CSV file by changing the delimiter to pipe ( | ) symbol.

## Motivation
`thynogger` is designed to be simple logging library with better readability in the terminals. Each   `thynogger` logger can be configured at different levels using the `LOG_LEVEL` environment variable.

`thynogger` aims to provide the simple and uni-directional solution to the logging in servers. The logging format is fixed but it provides the flexibility in choosing the levels of the log.

## Quick Start

Check out the quick start example in `./examples/`. Don't see an example you think should be there? Submit a pull request to add it.

## Usage

```
const { Thynogger: thynogger } = require("thynogger");

thynogger.info("User payload received");
thynogger.info("Invalid user payload", { data: { user_id: 1 } });

const  e  =  new  Error("Test error");
thynogger.error("Something went wrong", { error: e, data: {  user_id: 1 } });
thynogger.error("Something went wrong", {  error:  e });
thynogger.error("Something went wrong", { data: { user_id: 1 } });
thynogger.error("Something went wrong", { error: e, data: { user_id:  1 } });

thynogger.warn("Warning message", { data: { message: "some warning" } });
thynogger.warn("Warning message");

thynogger.debug("Debug message", { data: { message: "some warning" } });
thynogger.debug("Debug message");
```

![output](https://github.com/krisalay/thynogger/blob/develop/examples/output.png)
