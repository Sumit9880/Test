const express = require('express');
const app = express();
// const https = require('https');
const helmet = require('helmet');
exports.dotenv = require('dotenv').config();
exports.applicationkey = process.env.APPLICATION_KEY;
const port = process.env.PORT;
const hostname = process.env.HOST_NAME;
const dbname =process.env.MYSQL_DATABASE;
const path = require('path');
const cors = require('cors');

const http = require('http')

const server = http.createServer(app);



//routes
const globalRoutes = require('./Routes/global');

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
app.use(bodyParser.json({ limit: '50mb', extended: true }));
app.use('/static', express.static(path.join(__dirname, './uploads')));


app.use(cors());


app.use('/', globalRoutes);

app.use(helmet());
app.disable('x-powered-by');


server.listen(port,hostname , () => {
  console.log('Server running : ', hostname,':',port);
  console.log("Database:",dbname);
});

