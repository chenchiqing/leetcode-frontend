const fn = function (s) {
    const map = {
        '(': ')',
        '{': '}',
        '[': ']'
    };
    const stack = [];
    for (let i of s) {
        if (map[i]) {
            stack.push(i);
        } else {
            if (map[stack[stack.length - 1]] == i) {
                // console.log(stack[stack.length - 1]);
                stack.pop();
                // console.log(stack);
            } else {
                return false;
            }
        }
    }
    return stack.length === 0;
};

console.log(fn('({[]})'))