// const { verify } = require('jsonwebtoken');
const express = require('express');
const router = express.Router();

// const formidable = require('formidable');
const path = require('path');
// const fs = require('fs');

// exports.checkAuth = (req, res, next) => {
//     try {
//         var apikey = req.headers['apikey'];

//         if (apikey == process.env.APIKEY) {
//             next();
//         }
//         else {
//             console.log(process.env.APIKEY);
//             res.send({
//                 "code": 300,
//                 "message": "Access Denied...!"
//             });
//         }
//     } catch (error) {
//         console.log(error)
//         res.send({
//             "code": 400,
//             "message": "Server not found..."
//         });
//     }
// }

// exports.checkToken = (req, res, next) => {
//     let bearerHeader = req.headers['token'];
//     if (typeof bearerHeader !== 'undefined') {

//         verify(bearerHeader, process.env.SECRET, (err, decode) => {
//             if (err) {
//                 res.send({
//                     'code': 400,
//                     'message': 'Invalid token'
//                 });
//             }
//             else {
//                 next();
//             }
//         });
//     }
//     else {
//         res.send({
//             'code': 400,
//             'message': 'Access Denied...!'
//         });
//     }
// }

// exports.bannerImage = function (req, res) {
//     try {
//         const form = new formidable.IncomingForm();
//         form.parse(req, function (err, fields, files) {
//             var oldPath = files.Image.filepath;
//             var newPath = path.join(__dirname, '../Uploads/BannerImages/') + files.Image.originalFilename;
//             var rawData = fs.readFileSync(oldPath)
//             fs.writeFile(newPath, rawData, function (err) {
//                 if (!err) {
//                     console.log('uploaded successfully..');
//                     res.send({
//                         "code": 200,
//                         "message": "success",
//                     });
//                 }
//                 else {
//                     res.send({
//                         "code": 400,
//                         "message": "failed to upload.."
//                     });
//                 }
//             })
//         })
//     }
//     catch (err) {
//         console.log(err);
//     }
// }

