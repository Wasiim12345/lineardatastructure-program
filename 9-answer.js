// Evaluate a postfix expression using stack
class Stack {
    constructor() {
        this.items = [];
    }

    push(element) {
        this.items.push(element);
    }

    pop() {
        if (this.isEmpty()) {
            return null;
        }
        return this.items.pop();
    }

    isEmpty() {
        return this.items.length === 0;
    }

    peek() {
        if (this.isEmpty()) {
            return null;
        }
        return this.items[this.items.length - 1];
    }

    size() {
        return this.items.length;
    }
}

function evaluatePostfix(expression) {
    const stack = new Stack();

    for (let i = 0; i < expression.length; i++) {
        const currentChar = expression[i];

        if (!isNaN(currentChar)) {
            stack.push(parseInt(currentChar));
        } else {

            const operand2 = stack.pop();
            const operand1 = stack.pop();

            let result;
            switch (currentChar) {
                case '+':
                    result = operand1 + operand2;
                    break;
                case '-':
                    result = operand1 - operand2;
                    break;
                case '*':
                    result = operand1 * operand2;
                    break;
                case '/':
                    result = operand1 / operand2;
                    break;
            }

            stack.push(result);
        }
    }

    return stack.peek();
}

const postfixExpression = "62+5*8-4/";
const result = evaluatePostfix(postfixExpression);

console.log("Postfix Expression:", postfixExpression);
console.log("Result:", result);  