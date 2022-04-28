let doMath = (operator, num1, num2) => {
    switch(operator) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            return num1 / num2;
    };
};

let calculatePostFix = (equation) => {

    let partialSolution = 0;
    let numberCount = 0;
    equation.forEach((item) => {

        // if operator
        if(Number.isNaN(parseInt(item))) {
            
            if(numberCount > 2) {
                // do math on the 2 previous numbers(indexes) from the operator
                partialSolution = doMath(equation[3], parseInt(equation[1]), parseInt(equation[2]));
                // remove operator and 2 previous numbers
                equation.splice([1], 3);
                // add the solution from the above math to the beginning of copy
                equation.unshift(partialSolution);
                calculatePostFix(equation);
            }

            else {
                // do math on the 2 previous numbers(indexes) from the operator
                partialSolution = doMath(equation[2], parseInt(equation[0]), parseInt(equation[1]));
                // remove operator and 2 previous numbers
                equation.splice([0], 3);
                // add the solution from the above math to the beginning of copy
                equation.unshift(partialSolution);
                calculatePostFix(equation);
            }; 
        };
        numberCount++;
    });

    if(equation.length < 2) {return equation[0]};
};

let main = () => {

    // infix notation  ((4*3)+1)-2,     2+3*4,        3*4+2*5,         2+3*4+5,          10*(22-1008)/2+4409
    let equations = ['1 3 4 * + 2 -',  '2 3 4 * +', '3 4 * 2 5 * +', '2 3 + 4 5 + *', '10 22 1008 - * 2 / 4409 +'];
    let solutions = [11, 14, 22, 45, -521, 0];

    for(let i = 0; i < equations.length; i++) {
        console.assert(calculatePostFix(equations[i].split(' ')) === solutions[i]);
    };
};

main();
