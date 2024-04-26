import {
    render
} from "ejs";
import {
    readFileSync,
    writeFileSync
} from "fs";
writeFileSync('./README.md', render(readFileSync('./README.ejs').toString()));
