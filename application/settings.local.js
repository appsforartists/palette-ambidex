var Lazy = require("lazy.js");

var commonSettings = require("./settings.common.js");

module.exports = Lazy(commonSettings).merge(
  {
    HOST:"bikeindex.local",
    PORT: "8080",

    ENABLE_HOT_MODULE_REPLACEMENT: true,
    WEBPACK_PORT: "8081",

    CUSTOM_SETTINGS: {
      API_BASE_URL: "http://localhost:7070/api/v1/",
    }
  }
).toObject();
