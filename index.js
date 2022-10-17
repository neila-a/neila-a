const fs = require('fs');
const moment = require('moment');
let addText = moment().format("GGGG - MM - DD");
fs.writeFileSync(
    './README.md', 
    fs.readFileSync('./README.md')
    .toString()
    .replace(/[0-9][0-9][0-9][0-9] - [0-9][0-9] - [0-9][0-9]/gs, addText));
