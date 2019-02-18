/* I implemented a recursive function that counts a string
 * satisfying the conditions from the start
 * then calls itself on substring of s with the first distinct character removed
 * i.e. "aaabc.." will be shortened to "bc.."
 * and finally returns the longest generated string
 */

const LngSubstrKDist = (s, k) => {
    const len = s.length;
    let distinct = {};
    let subStr = "";
    let count = 0;
    let changeIndex = null;
    const firstLetter = s[0];

    for (let i = 0; i < len; i++) {
        if (s[i] in distinct) {
            subStr += s[i];
        } else if (count < k) {
            subStr += s[i];
            distinct[s[i]] = true;
            count++;
            if (changeIndex === null && s[i] !== firstLetter)
                changeIndex = i;
        } else break;
    }

    if (changeIndex === len-1) return subStr;
    const subStrFromFuture = LngSubstrKDist(s.slice(changeIndex), k);
    return subStr.length > subStrFromFuture.length ? subStr : subStrFromFuture;
};

console.log(LngSubstrKDist("abcba", 2));
