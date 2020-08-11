function doSomething() {
    console.log("to do something");
}

console.log(2222);
console.log(3333);
setTimeout(doSomething);
console.log(4444);

//setTimeOut function
setTimeout(function toDo() {
    console.log("Second Function");
}, 4000)

setTimeout(() => {
    console.log("set time out with arrow function");
}, 10000)