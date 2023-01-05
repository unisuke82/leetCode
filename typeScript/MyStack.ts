import {statSync} from "fs";

class MyStack {
    stack: number[]

    constructor() {
        this.stack = [];
    }

    push(x: number): void {
        this.stack.push(x)
    }

    pop(): number {
        return this.stack.pop() ?? -1;
    }

    top(): number {
        return this.stack[this.stack.length - 1];
    }

    empty(): boolean {
        return this.stack.length === 0;
    }
}

let stack = new MyStack();
stack.push(2);
console.log(stack)


