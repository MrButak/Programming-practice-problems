// I understand now. cpy is only referencing og. So if og changes,
    // and I print cpy. cpy is just printing a reference of og
let og = 
{
    "a": 1,
    "b": 2
};
const cyp = og;
og["a"] = 99;
console.table(cyp)