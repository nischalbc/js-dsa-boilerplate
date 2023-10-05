class BinarySearch {

    search(arr, target) {
        arr = arr.sort((a, b) => parseInt(a) > parseInt(b) ? 1 : -1);
        let left = 0;
        let right = arr.length - 1;

        while (left <= right) {
            const mid = Math.floor((left + right) / 2);

            if (arr[mid] === target) {
                return mid; // Element found, return its index
            } else if (arr[mid] < target) {
                left = mid + 1; // Adjust the search range to the right half
            } else {
                right = mid - 1; // Adjust the search range to the left half
            }
        }

        return -1; // Element not found
    }

}


module.exports = BinarySearch;

/**
 * Demonstration of how to execute above class
 *
 */
const searchContext = new BinarySearch();
const integers = [2, 9 , 13, 1, 3];
const found = searchContext.search(integers, 9);
if(found < 0) {
    console.log('Element not found')
} else {
    console.log('Element found' , integers[found]);
}
