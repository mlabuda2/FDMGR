var db = [];

createGame("FIFA 19", "Sport", 2018, true, true, ['multiplayer', 'esport', 'ics', 'ps4', 'xbox', 'pc'])
createGame("League of Legends", "MMO/RPG", 2009, false, false, ['strategy', 'esport', 'pc'])
createGame("Wiedźmin 3: Dziki Gon", "RPG", 2015, false, false, ['pc', 'gameoftheyear', ''])

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

console.log(db)