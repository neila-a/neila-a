import * as fs from "fs";
import * as ejs from "ejs";
fs.writeFileSync('./README.md', ejs.render(fs.readFileSync('./README.ejs').toString()));