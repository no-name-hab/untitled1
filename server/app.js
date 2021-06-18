const express = require("express");
const bodyParser = require("body-parser");

const db = require("../utils/BaseUtils.js");    //err

db.setUpConnection();                           //err

const app = express();

app.use(bodyParser.json());

app.get('/notes', (req, res) => {
db.modeList().then(data => res.send(data))
});

app.post('/notes', (req, res) => {
db.creatModels(req.body).then(data => res.send(data))
});

app.delete('/notes/:id', (req, res) => {
    db.deleteModels(req.body).then(data => res.send(data))
});

const server = app.listen(3000, () => {
    console.log('server works on port: 3000')
});