// arr = [2, 3, 4, 5];
// function example(arr) {
//     return arr.map (element =>
//         element % 2 !=0 ? element*2 : element)

// };
// console.log(example(arr));

arr = [2, 3, 4, 5];
function example(arr) {
    const result = arr.map (element =>
        element % 2 !=0 ? element*2 : element)
        return result;
};
console.log(example(arr));
