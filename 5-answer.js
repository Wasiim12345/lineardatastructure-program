// Find duplicates in an array
function findDuplicates(arr) {
    const duplicates = [];
    const frequency = {};

    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];

        frequency[element] = frequency[element] ? frequency[element] + 1 : 1;

        if (frequency[element] > 1 && !duplicates.includes(element)) {
            duplicates.push(element);
        }
    }

    return duplicates;
}

const arr = [1, 2, 3, 4, 2, 5, 6, 3, 4, 7, 8, 7, 9];
const duplicateElements = findDuplicates(arr);

console.log("Duplicate elements:", duplicateElements);