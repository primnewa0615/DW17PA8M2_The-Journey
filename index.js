const express = require("express");
var cors = require('cors');
var app = express();
const bodyParser = require("body-parser");
const port = 5001;


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

const routerv1 = require('./routes/routerv1.js');
app.use('/api/v1', routerv1);

app.listen(port , () => {
    console.log(`Example app listening at http://localhost:${port}`)
})