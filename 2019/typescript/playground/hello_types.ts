


class Greeter<T> {
    greeting: T;
    constructor(message: T) {
        this.greeting = message;
    }
    greet() {
        return this.greeting;
    }
}

const greeter = new Greeter<string>("Hello, world");

console.log(greeter.greet());

