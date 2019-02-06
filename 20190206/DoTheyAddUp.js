const DoTheyAddUp = (arr, k) => {
    // filter out members of array that are
    // greater than k by themselves
    const ltk = arr.filter(x => x <= k);
    const len = ltk.length;
    for (let i = 0; i < len; i++) {
        for (let j = i + 1; j < len; j++) {
            if (ltk[i] + ltk[j] === k) return true;
        }
    }
    return false;
}

console.log(DoTheyAddUp([10, 15, 3, 7], 17));
