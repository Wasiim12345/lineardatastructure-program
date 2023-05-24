// Move all the negative elements to one side of the array
function moveNegativeElements(arr) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        if (arr[left] < 0 && arr[right] < 0) {
            left++;
        } else if (arr[left] >= 0 && arr[right] < 0) {
            [arr[left], arr[right]] = [arr[right], arr[left]];
            left++;
            right--;
        } else if (arr[left] >= 0 && arr[right] >= 0) {
            right--;
        } else {
            left++;
            right--;
        }
    }

    return arr;
}

const arr = [1, -2, 3, -4, 5, -6, -7, 8, -9];
const result = moveNegativeElements(arr);

console.log("Array with negative elements moved to one side:");
console.log(result);  