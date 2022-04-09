const fs = require('fs')
const data = fs.readFileSync(process.argv[2]);
const read = data.toString().split("\n").length -1
console.log(read)