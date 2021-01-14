class Item{

    static lastId = 0

    constructor(text) {
        this.text = text
        this.idItem = Item.lastId++
        this.done = false
    }
}

export default Item