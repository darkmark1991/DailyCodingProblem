const str = "dir\n\tsubdir1\n\t\tfile1.ext\n\t\tsubsubdir1\n\tsubdir2\n\t\tsubsubdir2\n\t\t\tfile2.ext";
const arr = str.split("\n").map(s => new Object({
    level: (s.match(/\t/g) || []).length,
    name: s.replace(/\t/g, ''),
    type: s.match(/\./) ? 'file' : 'dir'
}));
console.log(arr);