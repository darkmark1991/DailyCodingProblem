/* DailyCodingProblem #30 */
// TODO improve to work for cases like [3, 1, 2, 0, 1, 5]

const CalcTrappedWater = (arr) => {
    const len = arr.length;
    let totalWater = 0;
    let negativeWater = 0;
    let runningCount = 0;
    let peaks = [];
    for (let i = 0; i < len; i++) {
        if (! arr[i+1] || arr[i] > arr[i+1]) {
            peaks.push(arr[i]);
        } else if (peaks.length === 1){
            runningCount++;
            negativeWater += arr[i];
        }
        if (peaks.length === 2) {
            totalWater += Math.min(peaks[0], peaks[1]) * (runningCount) - negativeWater;
            negativeWater = 0;
            runningCount = 0;
            peaks.shift();
        }
    }
    return totalWater;
};

console.log(CalcTrappedWater([2, 1, 2]));
console.log(CalcTrappedWater([3, 0, 1, 3, 0, 5]));
