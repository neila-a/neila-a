const fs = require('fs');
const moment = require('moment');
let addText = `Today is ${moment().format("GGGG - MM - DD")}.`;
fs.writeFileSync(
    './README.md', 
    fs.readFileSync('./README.md')
    .toString()
    .replace(/Today is [0-9][0-9][0-9][0-9] - [0-9][0-9] - [0-9][0-9]./gs, addText));