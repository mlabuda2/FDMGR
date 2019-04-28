class ComputerGame {
    constructor(id, name, category, relase, payToWin, tags){
        this._id = id;
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
    set payToWin(value) {
        this._payToWin = value;
    }
    set tags(value) {
        this._tags = value;
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
    get payToWin() {
        return this._payToWin
    }
    get tags() {
        return this._tags
    }
}
export default ComputerGame;