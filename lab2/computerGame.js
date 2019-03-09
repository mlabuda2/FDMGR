var db = [];

createGame(0, "FIFA 19", "Sport", 2018, true, true, ['multiplayer', 'esport', 'ics', 'ps4', 'xbox', 'pc'])
createGame(1, "League of Legends", "MMO/RPG", 2009, false, false, ['strategy', 'esport', 'pc'])
createGame(2, "Wiedźmin 3: Dziki Gon", "RPG", 2015, false, false, ['pc', 'gameoftheyear', ''])

// console.log(readGame(0))
console.log(deleteGameByKey(0, "id"))
console.log(deleteGameByKey("League of Legends", "name"))
// console.log(db)
game = readGameByKey("Wiedźmin 3: Dziki Gon", "name")
game.category = "MMO/RPG"
console.log(updateGame(readGameByKey("Wiedźmin 3: Dziki Gon", "name"), game))
console.log(db)

function createGame(id, name, category, relase, mobileVersion, payToWin, tags){
    var computer_game = {
        id: id,
        name: name,
        category: category,
        relase: relase,
        mobileVersion: mobileVersion,
        payToWin: payToWin,
        tags: tags
    };
    db.push(computer_game)
};
function readGameByKey(idx, searchBy){
    var searchedItem = db.map(function(item) { 
        dispatcher = {
            "id": item.id,
            "name": item.name,
            "category": item.category,
            "relase": item.relase,
            "mobileVersion": item.mobileVersion,
            "payToWin": item.payToWin,
            "tags": item.tags
        }
        key = dispatcher[searchBy]
        return key; 
    }).indexOf(idx);
    if (searchedItem >= 0){
        return db[searchedItem]
    }
    console.log("Item doesn't exist.")
    return null
};
function updateGame(updatedGame, newObject){
    if (updatedGame){
        var updatedItem = db.map(function(item) { return item.id; }).indexOf(updatedGame.id);
    }
    else {
        console.log("Updated game not provided.")
        return false
    }
    if (updatedItem >= 0){
        db[updatedItem] = newObject
        return true
    }
    console.log("Updated item doesn't exist.")
    return false
};
function deleteGameByKey(idx, searchBy){
    var removeIndex = db.map(function(item) { 
        dispatcher = {
            "id": item.id,
            "name": item.name,
            "category": item.category,
            "relase": item.relase,
            "mobileVersion": item.mobileVersion,
            "payToWin": item.payToWin,
            "tags": item.tags
        }
        key = dispatcher[searchBy]
        return key; 
    }).indexOf(idx);
    if (removeIndex >= 0 && db.splice(removeIndex, 1)){
        return true
    }
    console.log("Item doesn't exist.")
    return false
};
function findBy(){};