describe('Animal array', () => { 

    beforeEach(()=>{
        testArray = ["cat", "dog", "landrover"];
    })

    it("should add one to end", ()=>{
        testArray.push("asd");
        console.log(testArray)
        expect(testArray[testArray.length-1]).toBe("asd")
    })
    it("should add one to begin", ()=>{
        testArray.unshift("lmao");
        console.log(testArray)
        expect(testArray[0]).toBe("lmao")
    })
 })