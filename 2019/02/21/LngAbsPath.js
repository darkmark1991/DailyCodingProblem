/* DailyCodingProblem #17 */

const LngAbsPath = (str) => {
    // break the string into an array of objects
    // that contains each dir/file name
    // along with its 'depth' level
    // and file type
    const arr = str.split("\n").map(s => new Object({
        level: (s.match(/\t/g) || []).length,
        name: s.replace(/\t/g, ''),
        type: s.match(/\./) ? 'file' : 'dir'
    }));

    const pathsTo = {};
    let longestAbsPath = '';
    // iterate over the resulting array
    // and on each stem accumulate paths
    // in pathsTo objectin order to build upon it to the end
    arr.forEach(file => {
        let tmpPath = file.name;
        if (file.level !== 0) {
            const len = pathsTo[file.level-1].length;
            tmpPath = `${pathsTo[file.level-1][len-1]}/${file.name}`;
        }
        if (!(file.level in pathsTo)) pathsTo[file.level] = [];
        pathsTo[file.level].push(tmpPath);
        // if type is file check if current path is longer than saved longest path
        // and if it is - overwrite.
        if (file.type === 'file') {
            longestAbsPath = longestAbsPath.length < tmpPath.length ? tmpPath : longestAbsPath;
        }
    });

    return longestAbsPath.length;
};

console.log(LngAbsPath("dir\n\tsubdir1\n\t\tfile1.ext\n\t\tsubsubdir1\n\tsubdir2\n\t\tsubsubdir2\n\t\t\tfile2.ext"));
// expected output: 32

console.log(LngAbsPath("dir\n\tsubdir1\n\t\tsubsubdir1\n\tsubdir2\n\t\tsubsubdir2"));
// expected output: 0
