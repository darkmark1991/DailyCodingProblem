// GetMax iterates once over the array, so it's linear
const GetMax = (arr) => {
    let max = arr[0];
    arr.forEach(a => max = a > max ? a : max );
    return max;
}

const CountSort = (arr, len, exp) => {
    // initialize zero-filled array of 10 length
    const count = new Array(10).fill(0);
    const addUp = new Array(10).fill(0);
    let i, count_pos, arr_pos = 0;

    // increment the count array at indexes that correspond
    // to the digit of a at the given exponent level
    arr.forEach(a => count[Math.abs(Math.floor(a/exp)%10)]++);
    console.log(count)
    // add up counts to get positions
    addUp[0] = count[0];
    for (i = 1; i < 10; i++)
        addUp[i] = addUp[i-1] + count[i];

    // do the actual sorting
    // but we'll mutate the original array to keep the space complexity in check
    // so instead of populating new array we'll just switch the elements w/ one another
    // and if an element moved right
    // (i.e. has moved an unevaluated element to the current position)
    // we don't increment i and run iteration on this element
    for (i = 0; i < len; i = (arr_pos > i ? i : i+1)) {
        count_pos = Math.abs(Math.floor(arr[i]/exp)%10);
        // if all 'movements' of this number have been exhausted
        // skip the iteration
        if (count[count_pos] === 0) continue;
        arr_pos = addUp[count_pos]-1;
        // if element is already in place no need to swap
        if (i !== arr_pos) {
            arr[arr_pos] += arr[i];
            arr[i] = arr[arr_pos] - arr[i];
            arr[arr_pos] -= arr[i];
        }
        count[count_pos]--;
        addUp[count_pos]--;
    }
}

const RadixSort = (arr) => {
    const len = arr.length;
    const max = GetMax(arr);

    // basically we iterate exp = 1, 10, ...
    for (let exp = 1; max/exp >= 1; exp *= 10) {
        console.log(exp)
        CountSort(arr, len, exp)
    }

    // now we perform reverse iteration on the array
    // to move the negative numbers left

    console.log(arr);
}

const FindLPI = (arr) => {
    RadixSort(arr);
}


test = [3, 4, -1, 1]
FindLPI(test);
console.log();