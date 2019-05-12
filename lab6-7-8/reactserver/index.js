const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 4000;

app.use(bodyParser.json());
const cgames = [];

app.get('/api', (req, res) => res.send('Hello World!'))
app.get('/api/cgames/all', (req, res) => res.send(cgames))

app.post('/api/cgames/add', (req, res) => {
    const cgame = req.body.cgame;
    
    cgames.push(cgame)
    res.send("Added")
    console.log(cgames)
});


app.listen(port, () => console.log(`Example app listening on port ${port}!`))