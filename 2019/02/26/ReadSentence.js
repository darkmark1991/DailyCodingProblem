/* DailyCodingProblem #22 */

const ReadSentence = (dict, str) => {
    const res = [];
    dict.forEach(word => {
        let index = str.search(word);
        if (res[index] === undefined) {
            res[index] = word;
            // this for loop makes sure that the space 'used up' by
            // selected word won't be overwritten
            for (let i = index+1; i < index + word.length; i++)
                res[i] = null;
        }
    });
    return res.filter(w => !!w);
};

// slower method
const ReadSentenceSlow = (dict, str) => {
    const res = [];
    const arr = [];
    let tmp = str;
    dict.forEach(word => {
        arr.push(str.search(word));
    });
    arr
        .filter((v,i) => arr.indexOf(v) === i)
        .sort((a, b) => b - a)
        .forEach(index => {
            res.unshift(tmp.slice(index));
            tmp = tmp.slice(0, index);
        });
    return res;
};


console.log(ReadSentence(['quick', 'brown', 'the', 'fox'], "thequickbrownfox"));
// expected output: ["the", "quick", "brown", "fox"]
console.log(ReadSentence(['bedbath', 'bed', 'bath', 'bedbath', 'and', 'beyond'], "bedbathandbeyond"));
// expected output: ["bedbath", "and", "beyond"]
