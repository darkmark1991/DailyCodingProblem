/* DailyCodingProblem #37*/
// The sorting is optional, I've only included it for readability's sake
// w/o the sorting calls non-recursive function is faster.

const RecursivePowerSet = (arr) => {
    const RecPWS = (arr) => {
        const cur = arr[0];
        if (arr.length === 1) return [[cur]];
        let rest = RecPWS(arr.splice(1));
        rest.forEach(x => rest.push([cur, ...x]));
        rest.unshift([cur]);
        return rest;
    };
    return [[], ...RecPWS(arr)].sort((x, y) => x.length - y.length);
};

console.log(RecursivePowerSet([1,2,3]));


const PowerSet = (arr) => {
    const len = arr.length;
    const res = [[]];
    for (let i = 0; i < len; i++) {
        res.forEach(x => {
            res.push([arr[i], ...x]);
            res[res.length - 1].sort();
        });
    }
    res.sort((x, y) => x.length - y.length);
    return res;
};

console.log(PowerSet([1,2,3]));
