// ========== Zadanie 1 ===========  //
var lib = {};
lib.module = (function () {

  var private_db = [];
  // var isInDatabase = function () {
  //   sprawdz czy jest w bazie
  // };

  return {
    publicProperty: 1,
    createGame: function (id, name, category = null, relase = null, mobileVersion = null, payToWin = null, tags = []) {
      if ((!name) || (!id && id != 0) || (!Number.isInteger(id))) { console.log("Bad data."); return false }
      // isInDatabase()
      var computer_game = {
          id: id,
          name: name,
          category: category,
          relase: relase,
          mobileVersion: mobileVersion,
          payToWin: payToWin,
          tags: tags
      };
      console.log("Item created.")
      private_db.push(computer_game)
      return true
    },
    readGameBy: function (idx, searchBy) {
      var searchedItem = private_db.map(function (item) {
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
      if (searchedItem >= 0) {
          return private_db[searchedItem]
      }
      console.log("Item doesn't exist.")
      return null
    },
    updateGame: function (updatedGame, newObject) {
      if (updatedGame) {
          var updatedItem = private_db.map(function (item) { return item.id; }).indexOf(updatedGame.id);
      }
      else {
          console.log("Updated game not provided.")
          return false
      }
      if (updatedItem >= 0) {
          private_db[updatedItem] = newObject;
          console.log("Game updated.")
          return true
      }
      console.log("Updated item doesn't exist.")
      return false
    },
    deleteGameBy: function (idx, searchBy) {
      var removeIndex = private_db.map(function (item) {
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
      if (removeIndex >= 0 && private_db.splice(removeIndex, 1)) {
          console.log("Item deleted.")
          return true
      }
      console.log("Item doesn't exist.")
      return false
    },
    filterBy: function (searchBy, value) {
        var filtered = private_db.filter(function (element, index, array) {
          dispatcher = {
              "id": element.id,
              "name": element.name,
              "category": element.category,
              "relase": element.relase,
              "mobileVersion": element.mobileVersion,
              "payToWin": element.payToWin,
              "tags": element.tags
          }
          key = dispatcher[searchBy]
          if (searchBy != "tags") {
              return (key == value)
          } else {
              var exists = false
              key.forEach(element => {
                  // console.log(element == value)
                  if (element == value){
                      exists = true
                  }
              });
              return exists
          }
        });
        return filtered
    },
    readAllDb: function () {
      return private_db
    }
  };
})();

lib.module.createGame(0, "FIFA 19", "Sport", 2018, true, true, ['multiplayer', 'esport', 'ics', 'ps4', 'xbox', 'pc'])
lib.module.createGame(1, "League of Legends", "RPG", 2009, false, false, ['strategy', 'esport', 'pc'])
lib.module.createGame(2, "Wiedźmin 3: Dziki Gon", "RPG", 2015, false, false, ['pc', 'gameoftheyear', 'ps4'])

game = lib.module.readGameBy("Wiedźmin 3: Dziki Gon", "name")
game.category = "MMO/RPG"
console.log(lib.module.updateGame(lib.module.readGameBy("Wiedźmin 3: Dziki Gon", "name"), game))

console.log(lib.module.filterBy("category", "RPG"))
console.log(lib.module.filterBy("tags", "ps4"))

lib.module.deleteGameBy("League of Legends", "name")

console.log(lib.module.readAllDb())

// ========== Zadanie 2 ===========  //
