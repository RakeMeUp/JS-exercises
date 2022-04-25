const Stack = require("../stack")

describe('My Stack', () => {

    let stack;

    beforeEach(() => {
        stack = new Stack();
    })

    it('is created empty', () => {
        expect(stack.top).toBe(-1);
        expect(stack.items).toEqual({});
    });

    it('can push to the top', () => {
        stack.push_back('asd')
        expect(stack.top).toBe(0);
        expect(stack.items[stack.top]).toBe('asd');
    });

    it('can pop from it', ()=>{
        stack.push_back('asd')
        expect(stack.top).toBe(0);
        expect(stack.items[stack.top]).toBe('asd');
        stack.pop();
        expect(stack.top).toBe(-1);
        expect(stack.items).toEqual({})
        
    });
})