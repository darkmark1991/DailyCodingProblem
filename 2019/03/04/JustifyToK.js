/* DailyCodingProblem #28 */

const JustifyToK = (words, k) => {
    const res = [];
    const lineArr = [];
    let index = 0;
    lineArr[index] = {
        words: [],
        count: 0,
        len: 0,
    };
    words.forEach((w) => {
        if (lineArr[index].len + lineArr[index].words.length + w.length <= k) {
            lineArr[index].words.push(w);
            lineArr[index].count++;
            lineArr[index].len += w.length;
        } else {
            index++;
            lineArr[index] = {
                words: [w],
                count: 1,
                len: w.length,
            };
        }
    });
    lineArr.forEach((line) => {
        const totalSpace = k - line.len;
        const space = Math.ceil(totalSpace / (line.count - 1));
        let spaceCount = 0;
        let currentLine = '';
        line.words.forEach((w, i) => {
            let currentSpace = 0;
            if (i !== 0) currentSpace = spaceCount + space < totalSpace ? space : totalSpace - spaceCount;
            currentLine = `${currentLine}${' '.repeat(currentSpace)}${w}`;
            spaceCount += currentSpace;
        });
        res.push(currentLine);
    });
    return res;
};

const words = ["the", "quick", "brown", "fox", "jumps", "over", "the", "lazy", "dog"];
console.log(JustifyToK(words, 16));
/* expected output:
 *  ["the  quick brown", # 1 extra space on the left
 *   "fox  jumps  over", # 2 extra spaces distributed evenly
 *   "the   lazy   dog"] # 4 extra spaces distributed evenly
 */