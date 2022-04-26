const items = [1,"dev", false, 1.34]

class Iterator{
    constructor(items){
        this.items = items
        this.index = 0
    }

    hasNext = ()=>{
        return this.index < this.items.length
    }
    next = ()=>{
        return this.items[this.index++] //return index 1, then set index +1
    }
}

class BackwardsIterator{
    constructor(items){
        this.items = items
        this.index = items.length - 1
    }

    hasNext = ()=>{
        return this.index >= this.items.length
    }
    next = ()=>{
        return this.items[this.index--] //return index 1, then set index +1
    }
}

const iter = new Iterator(items)
console.log(iter.next())
console.log(iter.next())
console.log(iter.next())
console.log(iter.next())
console.log(iter.hasNext())

const iter2 = new BackwardsIterator(items)
console.log(iter2.next())
console.log(iter2.next())
console.log(iter2.next())
console.log(iter2.next())
console.log(iter2.hasNext())

console.log(items)
