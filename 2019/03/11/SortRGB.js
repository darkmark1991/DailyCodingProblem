const swap = (arr, i, j) => {
    const tmp = arr[i];
    arr[i] = arr[j];
    arr[j] = tmp;
}

const SortRGB = (arr) => {
    const len = arr.length;
    let i = 0;

    while (i < len-1) {
        console.log(i, arr[i], arr)
        if (arr[i] === 'G' && arr[i+1] === 'R')
            swap(arr, i, i+1);
        else if (arr[i] === 'B' && arr[i+1] === 'R')
            swap(arr, i, i+1);
        else if (arr[i] === 'G' && arr[i+1] === 'B')
            swap(arr, i, len-1);
        i++;
    }
    return arr;
}

const arr = ['G', 'B', 'R', 'R', 'B', 'R', 'G'];
SortRGB(arr)
console.log(arr)

//TODO wip