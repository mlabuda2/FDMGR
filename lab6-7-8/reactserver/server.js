const ComputerGame = require('../../lab5/src/es6_computerGame');
const lib = require('../../lab4/module_inheritance');

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 4000;

app.use(bodyParser.json());
const cgames = [];

app.get('/api', (req, res) => res.send('Hello World!'))
app.get('/api/cgames/all', (req, res) => {
    console.log("GET /api/cgames/all")
    res.send(cgames)
});
app.post('/api/cgames/add', (req, res) => {
    console.log("POST /api/cgames/add")
    const game = req.body.cgame;
    const cgame = new ComputerGame(game.name, game.category, game.relase, game.payToWin, game.tags)
    cgames.push(cgame)
    console.log(cgame)
    res.send({"message": "Added"})
});
app.delete('/api/cgames/:id', (req, res) => {
    console.log("DELETE /api/cgames/:id")
    const id = req.params.id;
    let deleted = false
    cgames.forEach(function  (element) {
        console.log(element)
        if (element._id == id){
            const idx = cgames.indexOf(element)
            if (cgames.indexOf(element) !== -1) {
                if (cgames.splice(idx, 1)) {
                    console.log("Item deleted.")
                    res.send({"message": "Item deleted."})
                    deleted = true
                }
            }
        }
    });
    if (!deleted) {
        console.log("Item doesn't exist.")
        return res.send({"message": "Item doesn't exist."})
    }
});



app.listen(port, () => console.log(`Example app listening on port ${port}!`))