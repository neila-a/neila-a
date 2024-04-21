"use strict";
exports.__esModule = true;
var moment = require("moment");
var fs = require("fs");
var ejs = require("ejs");
fs.writeFileSync('./README.md', ejs.render(fs.readFileSync('./README.ejs').toString(), {
    date: moment().format("GGGG - MM - DD")
}, {
    async: false
}));
console.log("[" + moment().format("HH:mm:ss") + "] README process done.");
