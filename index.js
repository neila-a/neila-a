const fs = require('fs')
let fileText = fs.readFileSync('./README.md').toString()
let addText = fs.readFileSync('./addText.md').toString() 
fs.writeFileSync('./README.md', fileText + addText)
