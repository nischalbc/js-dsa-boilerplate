const BinarySearch = require('../algorithms/binary-search');


describe('Binary Search', () => {

    it('should find ele, if present', function () {
        const integers = [2, 9 , 13, 1, 3];
        const binSearch = new BinarySearch();
        const found = binSearch.search(integers, 9);
        expect(found).toBe(3);
    });

    it('should not find the element, if not present', function () {
        const integers = [2, 9 , 13, 1, 3];
        const binSearch = new BinarySearch();
        const found = binSearch.search(integers, 19);
        expect(found).toBe(-1);
    });
});