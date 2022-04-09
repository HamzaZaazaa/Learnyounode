const fs =require('fs');
const read =fs.readFile(process.argv[2], 'utf-8', (err, data) => {
    if(err)  return console.error(err)
    const result = data.split('\n').length -1
    console.log(result)

});
