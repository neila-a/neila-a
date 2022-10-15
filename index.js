const fs = require('fs')
let fileText = fs.readFileSync('./README.md').toString()

let fileText = `${fileText}Today is a nice day!`

fs.writeFileSync('./README.md', fileText)
