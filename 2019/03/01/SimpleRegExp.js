/* DailyCodingProblem #25 */

const SimpleRegExp = (str, rxStr) => {
    let rxi = 0;
    let rxCur = rxStr[rxi];
    let rxLen = rxStr.length;
    let rxSuspend = false;

    const len = str.length;

    for (let i = 0; i < len; i++) {
        if (rxSuspend) {
            if (rxCur === '.') {
                if (str[i] !== rxStr[rxi])
                    continue;
                else rxSuspend = false;
            } else if (rxCur !== str[i]) rxSuspend = false;
        }
        if (rxStr[rxi] === '.') {
            if (rxi < rxLen - 1 && rxStr[rxi+1] === '*') {
                rxCur = rxStr[rxi];
                rxSuspend = true;
                if (rxi + 2 === rxLen) return true;
                rxi += 2;
            } else {
                i++;
            }
        } else if (rxStr[rxi] === '*') {
            rxCur = rxStr[rxi-1];
            rxSuspend = true;
        } else {
            if (str[i] !== rxStr[rxi]) return false;
            rxi++;
        }
    }
    return !rxSuspend || rxCur === str[len-1];
};

console.log("'ray'", "'ra.'", SimpleRegExp("ray", "ra.")); //true
console.log("'raymond'", "'ra.'", SimpleRegExp("raymond", "ra.")); //false
console.log("'raymond'", "'ra.*'", SimpleRegExp("raymond", "ra.*")); //true
console.log("'chat'", "'.*at'", SimpleRegExp("chat", ".*at")); //true
console.log("'chats'", "'.*at'", SimpleRegExp("chats", ".*at")); //false
console.log("'chatsssss'", "'.*ats*'", SimpleRegExp("chats", ".*ats*")); //true
