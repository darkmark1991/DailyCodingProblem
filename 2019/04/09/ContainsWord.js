/* DailyCodingProblem #63 */

const ContainsWord = (matrix, word) => {
    const height = matrix.length;
    const width = matrix[0].length;

    for (let i = 0; i < height; i++) {
        for (let j = 0; j < width; j++) {
            if (matrix[i][j] === word[0]) {
                if (matrix[i].join('').includes(word)) return true;
                    let tmp = word[0];
                    for (let k = i+1; k < height; k++) {
                    tmp = `${tmp}${matrix[k][j]}`;
                        if (tmp === word) return true;
                }
            }
        }
    }
    return false;
}

const matrix = [['F', 'A', 'C', 'I'],
              ['O', 'B', 'Q', 'P'],
              ['A', 'N', 'O', 'B'],
              ['M', 'A', 'S', 'S']];

const testWord = "FOAM";

if (ContainsWord(matrix, testWord))
    console.log(`The given matrix contains the test word: ${testWord}`);
else
    console.log(`The given matrix does not contain the test word: ${testWord}`);
