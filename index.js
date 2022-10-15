const fs = require('fs')
const moment = require('moment')
let addText = 
let fileText = fs.readFileSync('./README.md').toString().replace(/Today is [0-9][0-9][0-9][0-9] - [0-9][0-9] - [0-9][0-9]/gs, "")
let text = fileText + addText
fs.writeFileSync('./README.md', text)
