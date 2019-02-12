// count ways in whic msg can be decoded
const CountDecodeWays = (msg) => {
    const len = msg.length;
    let ways = 1;
    for (let i = 0; i < len-2; i++) {
        if (isNaN(msg[i]) || msg[i] < 1 || msg[i] > 26) continue;
        if (msg[i] <= 2) {
            if (msg[i+1] <=2)
                ways *= 1.5;
            else ways *= 2;
        }
    }
    if (msg[len-2] < 2) ways *= 2;
    return ways;
};

// now let's actually implement the decoding part for the heck of it :D
const LetterRange = (start, stop) => {
    const end = stop.charCodeAt(0);
    const res = ['#'];
    for (let c = start.charCodeAt(0); c <= end; c++)
        res.push(String.fromCharCode(c));
    return res;
};
const letterMap = LetterRange('a', 'z');

const DecodeMessage = (msg) => {
    const len = msg.length;
    const decoded = [];
    let i;
    let str = '';

    for (i = 0; i < len; i++) {
        if (isNaN(msg[i]) || msg[i] < 1 || msg[i] > 26) continue;
        if (msg[i] > 2 || i === len-1) str = `${str}${letterMap[msg[i]]}`;
        else break;
    }

    if (i !== len) {
        let str1 = `${str}${letterMap[msg[i]]}`;
        DecodeMessage(msg.substring(i+1)).forEach(s => decoded.push(`${str1}${s}`));

        let str2 = `${str}${letterMap[msg[i] + msg[i]]}`;
        DecodeMessage(msg.substring(i+2)).forEach(s => decoded.push(`${str2}${s}`));
    } else decoded.push(str);

    return decoded;
};

const testMsgs = ['11', '11345612', '12345678', '3412311'];
console.log('Test encoded messages: ', testMsgs, '\n\n');

testMsgs.forEach(msg => {
    console.log(`Msg to decode: ${msg}`);
    console.log(`This message can be decoded in ${CountDecodeWays(msg)} ways.`);
    console.log('Possible decoded versions: ', DecodeMessage(msg), '\n\n')
});
