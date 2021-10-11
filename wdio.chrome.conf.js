const {
    config
} = require("./wdio.conf");
const path = require("path");

const chromeConfig = {
    ...config,
    services: ["chromedriver"],
    capabilities: [{
        maxInstances: 10, 
        browserName: "chrome",
    }, ],

    // path: "/wd/hub",

};

exports.config = chromeConfig;