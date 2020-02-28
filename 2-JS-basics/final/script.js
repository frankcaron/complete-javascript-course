/*****************************
* CODING CHALLENGE 1
*/

/*
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height^2 = mass / (height * height). (mass in kg and height in meter).

1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs
3. Create a boolean variable containing information about whether Mark has a higher BMI than John.
4. Print a string to the console containing the variable from step 3. (Something like "Is Mark's BMI higher than John's? true"). 

GOOD LUCK 😀


let john = {
    weight: 10,
    height: 20,
    bmi: 0
}

let mark = {
    weight: 10,
    height: 30,
    bmi: 0
}

function calcBMI(weight, height) {
    return weight / (height*height);
}

mark.bmi = calcBMI(mark.weight, mark.height);
john.bmi = calcBMI(john.weight, john.height);

let markBMIhigher = mark.bmi > john.bmi;

console.log("Is Mark a fat POS? " + markBMIhigher);

*/



/*****************************
* CODING CHALLENGE 2
*/

/*
John and Mike both play basketball in different teams. In the latest 3 games, John's team scored 89, 120 and 103 points, while Mike's team scored 116, 94 and 123 points.

1. Calculate the average score for each team
2. Decide which teams wins in average (highest average score), and print the winner to the console. Also include the average score in the output.
3. Then change the scores to show different winners. Don't forget to take into account there might be a draw (the same average score)

4. EXTRA: Mary also plays basketball, and her team scored 97, 134 and 105 points. Like before, log the average winner to the console. HINT: you will need the && operator to take the decision. If you can't solve this one, just watch the solution, it's no problem :)
5. Like before, change the scores to generate different winners, keeping in mind there might be draws.

GOOD LUCK 😀


let johnTeamScores = [116, 94, 121];
let mikeTeamScores = [116, 94, 123];
let maryTeamScores = [97, 134, 10];

function calculateScores(teamScores) {
    return teamScores.reduce((a, b) => a + b, 0) / teamScores.length
}

let johnAverage = calculateScores(johnTeamScores);
let mikeAverage = calculateScores(mikeTeamScores);
let maryAverage = calculateScores(maryTeamScores);

console.log(johnAverage);
console.log(mikeAverage);
console.log(maryAverage);

if (johnAverage === mikeAverage && mikeAverage === maryAverage) { 
    console.log("We've got a draw!" );
} else {
    let winner = Math.max(johnAverage, mikeAverage, maryAverage);
    console.log("Winner is... " + (winner == johnAverage ? "John" : (winner == mikeAverage ? "Mike" : "Mary")));
}


class person {

    #firstName;
    #lastName;

    constructor(fName = '', lName ='') {
        this.#firstName = fName;
        this.#lastName = lName;
    }

    get firstName() {
        return this.#firstName;
    }

    set firstName(fName) {
        this.#firstName = fName;
    }

    get lastName() {
        return this.#lastName;
    }

    set lastName(lName) {
        this.#lastName = lName;
    }

}

let frank = new person("Frank");
console.log(frank);
console.log(frank.firstName);
console.log(frank.lastName);

*/




/*
John and his family went on a holiday and went to 3 different restaurants. The bills were $124, $48 and $268.

To tip the waiter a fair amount, John created a simple tip calculator (as a function). He likes to tip 20% of the bill when the bill is less than $50, 15% when the bill is between $50 and $200, and 10% if the bill is more than $200.

In the end, John would like to have 2 arrays:
1) Containing all three tips (one for each bill)
2) Containing all three final paid amounts (bill + tip).

(NOTE: To calculate 20% of a value, simply multiply it with 20/100 = 0.2)

GOOD LUCK 😀
*/


/* 
var tipCalculator = function(bills) {

    let finals = new Array();

    bills.forEach(bill => {
        let tipAmount = ( bill < 50 ? 0.2 : ( bill < 100 ? 0.1 : 0.15) );
        finals.push((tipAmount * bill) + bill);
    });

    return finals;
}

let bills = [49, 66, 234];
let finals = tipCalculator(bills);
console.log(finals);
*/