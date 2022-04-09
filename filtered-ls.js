const fs = require('fs');
const path = require('path');

const directory = process.argv[2];
const extension = `.${process.argv[3]}`;

fs.readdir(directory, (err, list)=> {
list.forEach(file => {
    if ( path.extname(file) === extension) {
        console.log(file);
    }
})
})
