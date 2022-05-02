let isOperator = (string) => {
    return Number.isNaN(parseInt(string)) ? true : false;
}

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
    let operator = '';
    let operandOne = 0;
    let operandTwo = 0;

    equation.forEach((item) => {

        // Is an operator
        if(isOperator(item)) {
            
            if(numberCount > 2) {

                operator = equation[3];
                operandOne = parseInt(equation[1]);
                operandTwo = parseInt(equation[2]);

                // do math on the 2 previous numbers(indexes) from the operator
                partialSolution = doMath(operator, operandOne, operandTwo);

                // remove operator and 2 previous numbers
                equation.splice(1, 3);

                // add the solution from the above math to the beginning of copy
                equation.unshift(partialSolution);
                calculatePostFix(equation);
            }

            else {

                operator = equation[2];
                operandOne = parseInt(equation[0]);
                operandTwo = parseInt(equation[1]);

                // do math on the 2 previous numbers(indexes) from the operator
                partialSolution = doMath(operator, operandOne, operandTwo);
                // remove operator and 2 previous numbers

                // equation.splice([0], 3);
                equation.splice(0, 3);

                // add the solution from the above math to the beginning of copy
                equation.unshift(partialSolution);
                calculatePostFix(equation);
            }; 
        }
        // Not an operator
        else {numberCount++;};
    });

    if(equation.length < 2) {return equation[0]};
};

let main = () => {

    let infixArry = [
        {equation: '1 3 4 * + 2 -', solution: 11},              // ((4*3)+1)-2
        {equation: '2 3 4 * +', solution: 14},                  //  2+3*4
        {equation: '3 4 * 2 5 * +', solution: 22},              // 3*4+2*5
        {equation: '2 3 + 4 5 + *', solution: 45},              // 2+3*4+5
        {equation: '10 22 1008 - * 2 / 4409 +', solution: -521} // 10*(22-1008)/2+4409
    ]
    for(let i = 0; i < infixArry.length; i++) {
        console.assert(calculatePostFix(infixArry[i].equation.split(' ')) === infixArry[i].solution);
    };
    
};

main();
