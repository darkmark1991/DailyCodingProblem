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


console.log(ReadSentence(['quick', 'brown', 'the', 'fox'], "thequickbrownfox"));
// expected output: ["the", "quick", "brown", "fox"]
console.log(ReadSentence(['bedbath', 'bed', 'bath', 'bedbath', 'and', 'beyond'], "bedbathandbeyond"));
// expected output: ["bedbath", "and", "beyond"]
