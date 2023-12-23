var myVar;
myVar = 42;
if (typeof myVar === 'string') {
    // TypeScript narrows the type to string inside this block
    console.log(myVar.length);
}
else {
    // TypeScript knows that myVar is not a string here
}
myVar.variable();
// Using a type assertion to tell TypeScript the variable's type
var strLength = myVar.length;
