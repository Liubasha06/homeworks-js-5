let userName = "Anna";
let age = 22;
let gender = "woman";
let country = "Germany";
let result;

if (age > 18 && (userName !== "" || gender !== "man") && country === "Germany") {
    result = true;
} else {
    result = false;
}

console.log(result);

