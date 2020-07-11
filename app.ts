type Combinable = string | number;
type ConversionDescriptor = "as_number" | "as_text"

function add(
  input1: string | number,
  input2: Combinable,
  resultConversion: ConversionDescriptor
) {
  let result;
  if (typeof input1 === "number" && typeof input2 === "number") {
    result = input1 + input2;
  } else {
    result = input1.toString() + input2.toString();
  }
  if ( resultConversion === "as_number") {
    result = +result
  } else {
    result = result.toString()
  }
    return result;
}

const combinedNames = add("2", 2, "as_number");
console.log(typeof combinedNames)