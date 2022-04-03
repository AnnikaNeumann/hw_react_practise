const names = ["Fred", "Kate", "Cindy", "Ricky", "Keith"];
    console.log(names);


//  Assume that we need two new variables to store the strings `"Fred"` and `"Kate"`. 
//  Without destructuring syntax, assign them using their index:

    const fred = names[0];
    const kate = names[1];

        console.log(kate);

    // using the destructuring syntax,unpacking the first two items in the `names` array 
    // and storing them in two new variables called `fred` and `kate`.

    const [fred, kate] = names;
        console.log(kate);

    // can skip over any variables we are not interested in by ignoring them. 
    // For example, we might not require the element at position 2 from the `names` array:

    const [fred, kate, , ricky] = names;     
    console.log(ricky); 

    // We can combine this syntax with the spread operator `...` to assign the remaining values to a new array variable called `remainigNames`:


const [fred, kate, ...remainingNames] = names;       
console.log(remainingNames); 

// We can use this syntax as expected with an array that gets returned from a function. 
// We will be making use of this when we come to cover React Hooks next week.