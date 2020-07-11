function add(input1, input2, resultConversion) {
    var result;
    if (typeof input1 === "number" && typeof input2 === "number") {
        result = input1 + input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    if (resultConversion === "as_number") {
        result = +result;
    }
    else {
        result = result.toString();
    }
    return result;
}
var combinedNames = add("2", 2, "as_number");
console.log(typeof combinedNames);
