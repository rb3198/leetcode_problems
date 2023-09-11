/**
 * @param {string[]} tokens
 * @return {number}
 */
const evalRPN = (tokens) => {
  const ops = ["+", "-", "*", "/"];
  const stack = [];
  for (let i = 0; i < tokens.length; i++) {
    const el = tokens[i];
    if (ops.includes(el)) {
      const p2 = stack.pop();
      const p1 = stack.pop();
      stack.push(operate(el, p1, p2));
    } else {
      stack.push(parseInt(el));
    }
  }
  return stack.pop();
};

/**
 * Function to perform the operation
 * @param {"*" | "+" | "-" | "/"} op operation to be performed
 * @param {number} param1
 * @param {number} param2
 */
const operate = (op, param1, param2) => {
  switch (op) {
    case "+":
      return param1 + param2;
    case "-":
      return param1 - param2;
    case "*":
      return param1 * param2;
    case "/":
      const res = param1 / param2;
      return res < 0 ? Math.ceil(res) : Math.floor(res);
    default:
      return 0;
  }
};

// console.log(evalRPN(["2", "1", "+", "3", "*"]));
// console.log(evalRPN(["4", "13", "5", "/", "+"]));
console.log(
  evalRPN(["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"])
);
