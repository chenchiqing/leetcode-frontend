var fn = function () {
    this.stack = [];
    // 辅助栈 获取最小值
    this.minstack = [];
}
// 入栈
fn.prototype.push = function (x) {
    this.stack.push(x);
    if (this.minstack.length == 0 || x < this.minstack[this.minstack.lenth - 1]) {
        this.minstack.push(x);
    } else {
        this.minstack.push(this.minstack[this.minstack.length - 1]);
    }
};
// 出栈
fn.prototype.pop = function () {
    this.stack.pop();
    this.minstack.pop();

};
// 取栈顶
fn.prototype.top = function () {
    return this.stack[this.stack.length - 1];
};
// 取栈中元素最小值
fn.prototype.getMin = function () {
    return this.minstack[this.stack.length - 1];
}
