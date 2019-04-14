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

}

class MobileGame extends ComputerGame {
    constructor(name, category, relase, payToWin, tags) {
        super(name, category, relase, payToWin, tags);
        this._is_mobile = true;
    }
}

class AndroidGame extends MobileGame {
    constructor(name, category, relase, payToWin, tags, is_mobile) {
        super(name, category, relase, payToWin, tags, is_mobile);
        this._is_android = true;
    }
}

let fifa_and = new AndroidGame("fifa19", "sport", 2018, false, ['ps4', 'xbox', 'esport'])
let fifa_mob = new MobileGame("fifa19", "sport", 2018, false, ['ps4', 'xbox', 'esport'])
let fifa = new ComputerGame("fifa19", "sport", 2018, false, ['ps4', 'xbox', 'esport'])
console.log(fifa)
console.log(fifa_and)
console.log(fifa_mob)