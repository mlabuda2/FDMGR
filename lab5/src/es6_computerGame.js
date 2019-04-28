class ComputerGame {
    constructor(name, category, relase, payToWin, tags){
        this._name = name,
        this._category = category,
        this._relase = relase,
        this._payToWin = payToWin,
        this._tags = tags
    }
    set name(value) {
        this._name = value
    }
    set category(value) {
        this._category = value
    }
    set relase(value) {
        this._relase = value
    }
    get name() {
        return this._name
    }
    get category() {
        return this._category
    }
    get relase() {
        return this._relase 
    }
    runGame() {
        console.log(`Uruchamiam ${this.name}`)
    }
    runGameBase() {
        console.log(`UruchamiamBase ${this.name}`)
    }
}

class MobileGame extends ComputerGame {
    constructor(name, category, relase, payToWin, tags) {
        super(name, category, relase, payToWin, tags);
        this._screen_horizontally = false;
        this._is_mobile = true;
    }
    runGame() {
        console.log(`Uruchamiam ${this.name} (mobile)`)
    }
    rotateScreen() {
        if (this._screen_horizontally){
            this._screen_horizontally = false;
            console.log(`Obracam ekran pionowo ${this.name} (mobile)`)
        } else {
            this._screen_horizontally = true;
            console.log(`Obracam ekran poziomo ${this.name} (mobile)`)
        }
        
    }
}

// class AndroidGame extends MobileGame {
//     constructor(name, category, relase, payToWin, tags, is_mobile) {
//         super(name, category, relase, payToWin, tags, is_mobile);
//         this._is_android = true;
//     }
// }

let fifa_mob = new MobileGame("fifa19", "sport", 2018, false, ['ps4', 'xbox', 'esport'])
let fifa = new ComputerGame("fifa19", "sport", 2018, false, ['ps4', 'xbox', 'esport'])
console.log(fifa)
fifa.name = "fifa19 pc"
console.log(fifa)
console.log(fifa_mob)
fifa.runGame()
// fifa.rotateScreen() // nie ma prawa działać
fifa_mob.runGame()
fifa_mob.runGameBase() // test dziedzienia funkcji z klasy bazowej
fifa_mob.rotateScreen()
fifa_mob.rotateScreen()