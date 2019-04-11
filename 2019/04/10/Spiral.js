/* DailyCodingProblem #65 */

const Spiral = (matrix, dir = 'R') => {
    let newDir;
    if (dir === 'R') {
        matrix[0].forEach(n => console.log(n));
        matrix.shift();
        newDir = 'D';
    } else if (dir === 'D') {
        matrix.forEach(line => {
            console.log(line[line.length - 1]);
            line.pop();
        });
        newDir = 'L';
    } else if (dir === 'L') {
        matrix[matrix.length - 1].reverse().forEach(n => console.log(n));
        matrix.pop();
        newDir = 'U';
    } else if (dir === 'U') {
        matrix.reverse().forEach(line => {
            console.log(line[0]);
            line.shift();
        });
        matrix.reverse();
        newDir = 'R';
    }
    if (matrix.length > 0) Spiral(matrix, newDir);
}

Spiral([[1,  2,  3,  4,  5],
        [6,  7,  8,  9,  10],
        [11, 12, 13, 14, 15],
        [16, 17, 18, 19, 20]])