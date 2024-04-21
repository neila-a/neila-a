import * as moment from "moment";
import * as fs from "fs";
import * as ejs from "ejs";
fs.writeFileSync('./README.md', ejs.render(fs.readFileSync('./README.ejs').toString(), {
    date: moment().format("GGGG - MM - DD")
}, {
    async: false
}));
console.log(`[${moment().format("HH:mm:ss")}] README process done.`);
