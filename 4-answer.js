// In an array, Count Pairs with given sum
function countPairsWithSum(arr, targetSum) {
    const frequency = {};

    let count = 0;

    for (let i = 0; i < arr.length; i++) {
        const difference = targetSum - arr[i];

        if (frequency[difference]) {
            count += frequency[difference];
        }

        frequency[arr[i]] = frequency[arr[i]] ? frequency[arr[i]] + 1 : 1;
    }

    return count;
}

const arr = [1, 5, 7, -1, 5];
const targetSum = 6;

const pairCount = countPairsWithSum(arr, targetSum);
console.log(`Number of pairs with sum ${targetSum}: ${pairCount}`);  