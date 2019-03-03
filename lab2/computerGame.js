var db = [];

function createGame(name, category, relase, mobileVersion, payToWin, tags){
    var computer_games = {
        name: name,
        category: category,
        relase: relase,
        mobileVersion: mobileVersion,
        payToWin: payToWin,
        tags: tags
    };
    db.push(computer_games)
};
function readGame(){}
function updateGame(){}
function deleteGame(){}
function findBy(){}

// console.log(db)