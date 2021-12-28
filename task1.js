f = (s) => {
    if (s.length > 0)
        for (var i = s[0].length; i > 0; --i)
            for (var j = s[0].length - i; j >= 0; --j) {
                var x = s[0].slice(j, j + i);
                for (var k = 0; k < s.length; ++k) {
                    if (!s[k].includes(x))
                        break;
                    if (k == s.length - 1)
                        return x;
                }
            }
    return '';
}
console.log(f(process.argv.slice(2)));