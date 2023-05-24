// Find the Kth largest and Kth smallest number in an array
function findKthLargestAndSmallest(arr, k) {
    const sortedArr = arr.slice().sort((a, b) => a - b);

    const kthLargest = sortedArr[arr.length - k];

    const kthSmallest = sortedArr[k - 1];

    return [kthLargest, kthSmallest];
}

const arr = [7, 2, 9, 1, 5, 6, 3, 8, 4];
const k = 3;

const [kthLargest, kthSmallest] = findKthLargestAndSmallest(arr, k);

console.log(`Kth largest number: ${kthLargest}`);
console.log(`Kth smallest number: ${kthSmallest}`);