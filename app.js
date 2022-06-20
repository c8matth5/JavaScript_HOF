console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

function plus (num) {
    return function (plusNumber) {
        return num + plusNumber;
    }
};

const plus15 = plus(15); // this syntax allows for endless const of number pairings that can be passed through the function 

console.log(plus15(10)) // = 25


// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

let users = [
    {
      name: "Frodo",
      age: 50,
      score: 85,
      isActive: false,
    },
    {
      name: "Sam",
      age: 38,
      score: 94,
      isActive: true,
    },
    {
      name: "Merry",
      age: 36,
      score: 82,
      isActive: true,
    },
    {
      name: "Pippin",
      age: 26,
      score: 77,
      isActive: false,
    },
  ];

users.forEach(users => console.log (users.name)) // lists just the names of the users within the array

// Exercise 3 Section 

console.log("EXERCISE 3:\n==========\n");

let newArr = users.map((user) => { // creating new array with just names and scores of each user
    return {name: user.name, score: user.score};
})

console.log(newArr)

// Exercise 4 Section

console.log("EXERCISE 4:\n==========\n");

let actStatus = users.filter((users) => // creating new array based on isActive = true within users
    users.isActive)

console.log(actStatus); 

// Exercise 5 Section

console.log("EXERCISE 5:\n==========\n");

users.sort ((a, b) => b.score - a.score); // b.score > a.score returns 1/swaps the order; 0 or negative, don't swap

console.log(users);

// Exercise 6 Section

console.log("EXERCISE 6:\n==========\n");


let average = users.reduce ((sum, user) => 
    sum + user.score, 0) / users.length; // used to find the sum and average of number values in an array

console.log(average)