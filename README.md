# thynogger

A simple and easy to use logging package for better readability in the consoles or terminals. The terminal/console logs can be piped into the file and converted into the CSV file by changing the delimiter to pipe ( | ) symbol.

## Motivation
`thynogger` is designed to be simple logging library with better readability in the terminals. Each   `thynogger` logger can be configured at different levels using the `LOG_LEVEL` environment variable.

`thynogger` aims to provide the simple and uni-directional solution to the logging in servers. The logging format is fixed but it provides the flexibility in choosing the levels of the log.

## Quick Start

Check out the quick start example in `./examples/`. Don't see an example you think should be there? Submit a pull request to add it.

## Usage

```js
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
output:

![output](https://github.com/krisalay/thynogger/blob/develop/examples/output.png)

## Envionment variables and defaults
**LOG_LEVEL**

Logging levels in `thynogger` conform to the severity ordering specified by
[RFC5424]: _severity of all levels is assumed to be numerically **ascending**
from most important to least important._ The default log level is set to **info**.

``` js
const levels = { 
  error: 0,
  warn: 1,
  info: 2,
  http: 3,
  verbose: 4,
  debug: 5,
  silly: 6
};
```

**NODE_ENV**

The default value for the environment set in `thynogger` is **development**.

## Installation

```
npm install thynogger
```
```
yarn add thynogger
```

## Run Tests

All of the winston tests are written with [`jest`](https://jestjs.io/).
They can be run with `npm`.
```
npm test
```

#### Author:  [krisalay](https://github.com/krisalay)
