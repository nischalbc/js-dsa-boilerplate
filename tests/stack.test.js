const Stack = require('../algorithms/stack');

describe('When stack is called', () => {

    it('should have elements', function () {
        const stack1 = new Stack(2);
        stack1.push('2');
        stack1.push('3');
        expect(stack1.data.length).toBe(2);
    });

    it('should be able to push', function () {
        const stack2 = new Stack(2);
        stack2.push('2');
        stack2.push('8');
        stack2.push('10');
        stack2.push('3');
        expect(stack2.data.length).toBe(2);
    });

    it('should be able to pop', function () {
        const stack3 = new Stack(2);
        stack3.push('2');
        stack3.push('3');
        stack3.pop();
        stack3.pop();
        expect(stack3.data.length).toBe(0);
    });

});