var fs = require('fs');


// here I convert the csv file to an array of objects
let csvDataToObjectArray = () => {

    let data = fs.readFileSync('nba_finals.csv')
    .toString() // convert Buffer to string
    .split('\n') // split string to lines
    .map(e => e.trim()) // remove white spaces for each line
    .map(e => e.split(',').map(e => e.trim())); // split each line to array

    let csvObjArry = [];
    let csvObj = {};
    let keys = data[0]; // use csv columns as keys for object
    
    // iterate through all csv data after the column row
    for(let i = 1; i < data.length; i++) {
        
        for(let j = 0; j < data[i].length; j++) { // iterate through each row
            
            csvObj[`${keys[j]}`] = data[i][j]; // assign each value to keys
        };
        csvObjArry.push(csvObj); // push object into array
        csvObj = {};
    };

    return csvObjArry;
};


// 1.) Write a function that takes as an argument a year and returns the winner of the NBA finals that year.
let finalsWinnerFromYear = (year) => {

    let csvData = csvDataToObjectArray();

    for(let i = 0; i < csvData.length; i++) {
        if(csvData[i]['Year'] === year) {
            return(csvData[i]['Winner'])
        };
    };
    return ('No finals winner for that year');
};



// 2.) Write a function that takes as an argument a team name and returns an array of all of the years the team has won the NBA finals.
let winningYearsFromTeam = (team) => {
    
    let csvData = csvDataToObjectArray();
    
    let yearArray = [];


    for(let i = 0; i < csvData.length; i++) {
        if(csvData[i]['Winner'].toLowerCase() == team.toLowerCase()) {
            yearArray.push(csvData[i]['Year']);
        };
    };
    if(yearArray.length < 1) {return('No finals won for that team');};
    return yearArray;
};



// 3.) Which teams have made it to the NBA finals but have never won?
let teamsWhoHaveNeverWonFinals = () => {

    let csvData = csvDataToObjectArray();
    let losingTeamArray = [];

    csvData.forEach((row) => { // iterate though each row

        // push all losing teams into array, if not in there already       
        if(!losingTeamArray.includes(row['Loser'])) {
            losingTeamArray.push(row['Loser']);
        };
       
        // check if losing teams eventually won, and remove them from losingTeamArray
        if(losingTeamArray.includes(row['Winner'])) { 
            
            losingTeamArray.splice(row['Winner'], 1);
        };
    });

    return losingTeamArray
};


// 4.) Print out a ranking of who has won the MVP more than once, by times one, e.g. this output:
//     - 6 times: Michael Jordan
//     - 3 times: Shaquille O'Neal, LeBron James
//     - 2 times: <etc></etc>
let mvpRanking = () => {

    let csvData = csvDataToObjectArray();
    let mvpObject = {};
    let mvpArray = [];
    let mvpString = '';

    // put all MVPs into an object. Player name is the key and value is the amount of times they won MVP
    csvData.forEach((row) => {

        // only get data that is not an empty string
        if(row['MVP'] !== '') {
            
            // if mvp not yet in object, add to object
            if(!mvpObject[row['MVP']]) {
                mvpObject[row['MVP']] = 1;
            }
            // if mvp already in object, increase value
            else {
                mvpObject[row['MVP']]++;
            };
        };
        
    });
    // make an array of key:value pairs
    let entries = Object.entries(mvpObject);

    // sort values of objects from highest to lowest
    let sorted = entries.sort((a, b) => a[1] - b[1]);
    
    // loop through sorted array and create string, push string to array
    for(let i = 0; i < sorted.length; i++) {

        // only use data where value is greater than 1
        if(sorted[i][1] > 1) {
            mvpString = sorted[i][1] + ' times: ' + sorted[i][0];
            mvpArray.unshift(mvpString)
        }
    };

    return mvpArray;
};

let main = () => {

    // 1.) Write a function that takes as an argument a year and returns the winner of the NBA finals that year.
    console.log(finalsWinnerFromYear('1998'));

    // 2.) Write a function that takes as an argument a team name and returns an array of all of the years the team has won the NBA finals.
    console.log(winningYearsFromTeam('Los Angeles Lakers'));

    // 3.) Which teams have made it to the NBA finals but have never won?
    console.log(teamsWhoHaveNeverWonFinals())

    // 4.) Print out a ranking of who has won the MVP more than once, by times one, e.g. this output:
    //     - 6 times: Michael Jordan
    //     - 3 times: Shaquille O'Neal, LeBron James
    //     - 2 times: <etc></etc>
    console.log(mvpRanking())
};


main();