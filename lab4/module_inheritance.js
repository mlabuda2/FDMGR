// ========== Zadanie 1 ===========  //
var lib = {};
lib.module = (function () {

  var private_db = [];
  var isInDatabase = function (name) {
    var exists = false;
    private_db.forEach(element => {
        if (element.name == name){
            exists = true;
        }
    })
    return exists;
  };
  var validated = function (game) {
    if ((!game.name) || (!game.id && game.id != 0) || (!Number.isInteger(game.id))) {
      console.log("Bad data.");
      return false; 
    }
    return true;
  };

  return {
    createGame: function (game) {
      if (isInDatabase(game.name)){
        console.log("Item already exist: " + game.name)
        return false;
      }
      if (!validated(game)){
        return false;
      }
      console.log("Item created: " + game.name)
      private_db.push(game)
      return true;      
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
      return private_db;
    }
  };
})();

/* Tworzenie bazy */
// lib.module.createGame({id: 10, name: "Need for Speed U2", category: "Racing", relase: 2004, mobileVersion: true, payToWin: false, tags: ['game of all time', 'best game', 'pc']});
// lib.module.createGame({id: 0, name: "FIFA 19", category: "Sport", relase: 2018, mobileVersion: true, payToWin: true, tags: ['multiplayer', 'esport', 'ics', 'ps4', 'xbox', 'pc']})
// // walidacja nie przepuści tej samej nazwy ponownie
// lib.module.createGame({id: 3, name: "FIFA 19", category: "Sport", relase: 2018, mobileVersion: true, payToWin: true, tags: ['multiplayer', 'esport', 'ics', 'ps4', 'xbox', 'pc']})
// lib.module.createGame({id: 1, name: "League of Legends", category: "RPG", relase: 2009, mobileVersion: false, payToWin: false, tags: ['strategy', 'esport', 'pc']})
// lib.module.createGame({id: 2, name: "Wiedźmin 3: Dziki Gon", category: "RPG", relase: 2015, mobileVersion: false, payToWin: false, tags: ['pc', 'gameoftheyear', 'ps4']})


// /* Aktualizacja właściwości wybranego obiektu */
// game = lib.module.readGameBy("Wiedźmin 3: Dziki Gon", "name")
// game.category = "MMO/RPG"
// console.log(lib.module.updateGame(lib.module.readGameBy("Wiedźmin 3: Dziki Gon", "name"), game))


// /* Filtrowanie bazy danych po wybranej właściwości */
// console.log(lib.module.filterBy("category", "RPG"))
// console.log(lib.module.filterBy("tags", "ps4"))


// /* Usuwanie obiektu z bazy */
// lib.module.deleteGameBy("League of Legends", "name")


// /* Zczytanie całej bazy */
// console.log(lib.module.readAllDb())



// ========== Zadanie 2 ===========  //

function ComputerGame(id, name, category, relase, payToWin, tags){
    this.id = id,
    this.name = name,
    this.category = category,
    this.relase = relase,
    this.payToWin = payToWin,
    this.tags = tags
}

ComputerGame.prototype = {
    getName:  function(){
        return this.name;
    },
    getCategory: function(){
        return this.category;
    },
    getRelase: function(){
        return this.relase;
    },
    getPayToWin: function(){
        return this.payToWin;
    },
    getTags: function(){
        return this.tags;
    },
    setName: function(name){
      this.name = name;
    },
    setCategory: function(category){
        this.category = category;
    },
    setRelase: function(relase){
        this.relase = relase;
    },
    setPayToWin: function(payToWin){
        this.payToWin = payToWin;
    },
    setTags: function(){
        this.tags = tags;
    }
}

ComputerGame.prototype.getDescription = function(){
    console.log("ComputerGame");
}
ComputerGame.prototype.runGame = function() {
      console.log("Uruchamiam: " + this.name)
}

function MobileComputerGame(name, category, relase, payToWin, tags, is_android, is_ios){
    ComputerGame.call(this, name, category, relase, payToWin, tags, is_android, is_ios);
    this.is_android = is_android;
    this.is_ios = is_ios;
    this.screen_horizontally = false;
}

MobileComputerGame.prototype = Object.create(ComputerGame.prototype);
MobileComputerGame.prototype.constructor = MobileComputerGame;

MobileComputerGame.prototype.is_android = function(){
  return this.is_android;
}
MobileComputerGame.prototype.is_ios = function (){
        return this.is_ios;
}
MobileComputerGame.prototype.is_multiplatform = function (){
  if (this.is_android && this.is_ios) {
    return true;
  }
  else {
      return false;
  }
}
MobileComputerGame.prototype.runGame = function() {
  console.log("Uruchamiam: " + this.name + " (mobile)")
}
MobileComputerGame.prototype.rotateScreen = function() {
  if (this.screen_horizontally){
    this.screen_horizontally = false;
    console.log(`Obracam ekran pionowo ${this.name} (mobile)`)
  } else {
      this.screen_horizontally = true;
      console.log(`Obracam ekran poziomo ${this.name} (mobile)`)
  }  
}

// let fifa = new ComputerGame(11, "fifa20", "sport", 2019, false, ['ps4', 'xbox', 'esport'])
// let fifa_multiplatform = new MobileComputerGame(12, "fifa20.2", "sport", 2019, false, ['ps4', 'xbox', 'esport'], true, true)

// lib.module.createGame(fifa)
// lib.module.createGame(fifa_multiplatform)

// console.log(fifa)
// console.log(fifa_multiplatform)

// console.log(fifa.getName())
// fifa.setName("fifa20.pc")
// console.log(fifa.getName())
// fifa.runGame()
// // fifa.rotateScreen()


// console.log(fifa_multiplatform.getName())
// fifa_multiplatform.setName("fifa20.mobile")
// console.log(fifa_multiplatform.getName())
// fifa_multiplatform.runGame()
// fifa_multiplatform.rotateScreen()

module.exports = lib.module;