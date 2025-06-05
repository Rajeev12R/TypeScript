let arr = [1, 2, 3, 4, "Rajeev"];  // This is a mixed-type array (number + string)

// ❌ Error example (won't compile):
// let arr2: number[] = [1, 2, 3, 5, "wkdhkj"]; // ❌ "wkdhkj" is not a number

// ✅ Correct tuple (fixed size and types: [number, string]):
let arr2: [number, string] = [12, "Rajeev"];

// ✅ Loop through first 4 elements (all numbers)
for (let i = 0; i < 4; i++) {
    console.log(arr[i]);
}

// ✅ Output the tuple
console.log(arr2);
