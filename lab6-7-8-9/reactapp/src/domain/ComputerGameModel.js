const uuidv4 = require('uuid/v4');

class ComputerGame {
    constructor(name, category, relase, payToWin, tags){
        this._id = uuidv4();
        this._name = name;
        this._category = category;
        this._relase = relase;
        this._payToWin = payToWin;
        this._tags = tags;
    }
    set name(value) {
        this._name = value;
    }
    set category(value) {
        this._category = value;
    }
    set relase(value) {
        this._relase = value;
    }
    get name() {
        return this._name;
    }
    get category() {
        return this._category;
    }
    get relase() {
        return this._relase;
    }
    runGame() {
        console.log(`Uruchamiam ${this.name}`)
    }
    runGameBase() {
        console.log(`UruchamiamBase ${this.name}`)
    }
}

class MobileGame extends ComputerGame {
    constructor(id, name, category, relase, payToWin, tags) {
        super(id, name, category, relase, payToWin, tags);
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

export default ComputerGame;