var db = [];

createGame("FIFA 19", "Sport", 2018, true, true, ['multiplayer', 'esport', 'ics', 'ps4', 'xbox', 'pc'])
createGame("League of Legends", "MMO/RPG", 2009, false, false, ['strategy', 'esport', 'pc'])
createGame("Wiedźmin 3: Dziki Gon", "RPG", 2015, false, false, ['pc', 'gameoftheyear', ''])

console.log(readGame(0))
console.log(deleteGame(1))
console.log(db)

function createGame(name, category, relase, mobileVersion, payToWin, tags){
    var computer_game = {
        name: name,
        category: category,
        relase: relase,
        mobileVersion: mobileVersion,
        payToWin: payToWin,
        tags: tags
    };
    db.push(computer_game)
};
function readGame(index){
    return db[index]
}
function updateGame(index){

}
function deleteGame(index){
    db.foreach(function(el) {
        if (el == index) {
            delete db[index]
            return true
        }
        console.log("Item not exist.")
        return false
    })
}
function findBy(){}

console.log(db)