// 需要一个变量carry来记录进位
// 需要一个每次迭代都重置和的变量sum算是否进位，以及进位后的数字

const fn = function (digits) {
    let carry = 1;//在各位进位1 即+1
    for (let i = digits.length - 1; i >= 0; i--) {
        let sum = 0;//判断是否大于10 来判断进位
        sum = digits[i] + carry;
        digits[i] = sum % 10;//将当前最后一位存下来
        carry = sum > 9 ? 1 : 0;//判断是否进位
    }
    if (digits[0] === 0) {
        digits.unshift(carry);
    }
    return digits;
};