// const fs = require('fs');

exports.get = (req, res) => {
    try {
        //stream bad good
        // const file = fs.readFileSync('css.mp4');
        // res.writeHead(200, { 'Content-Type': 'video/mp4' });
        // return res.end(file) 

        // const redableStream = fs.createReadStream('./uploads/assets/css.mp4');
        // res.writeHead(200, { 'Content-Type': 'video/mp4' });
        // console.log("redableStream");
        // redableStream.pipe(res);

        //copy file bad good
        // const file = fs.readFileSync('sample.txt');
        // fs.writeFileSync('sample1.txt', file);
        // res.end();

        // const redableStream= fs.createReadStream('sample.txt');
        // const writableStream = fs.createWriteStream('sample1.txt');
        // redableStream.on('data', (chunk) => {
        //     console.log("chunk",chunk);
        //     writableStream.write(chunk);
        // })
        // res.end();

        res.send("this is Response from server")
        console.log("api called");
    } catch (error) {
        console.log(error);
    }
}

