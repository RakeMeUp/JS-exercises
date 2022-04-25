const fetchData = require("../async")
describe('first', () => { 
    it('WITH PROMISE - should return correct todo', () => {
        fetchData(1).then((todo) => {
            expect(todo.id).toBe(1);
        });
    });
 })
describe('first', () => { 
    it('WITH ASYNC - should return correct todo', async () => {
        const todo = await fetchData(3);
        expect(todo.data.id).toBe(3);
    }) 
 })