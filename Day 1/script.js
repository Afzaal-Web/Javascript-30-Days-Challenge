let user = new Object();

// We can immediately put some properties into {...} as “key: value” pairs:
user = {
    name: "John",
    age: 30,
    "likes birds": 'Yes'  // multiword property name must be quoted
};


// To remove a property, we can use the delete operator:
delete user.age;

// console.log(user['likes birds']);

// For multiword properties, the dot access doesn’t work:
// user.likes birds = true
/* JavaScript doesn’t understand that.It thinks that we address user.likes, 
and then gives a syntax error when comes across unexpected birds.
The dot requires the key to be a valid variable identifier.
That implies: contains no spaces, doesn’t start with a digit and doesn’t 
include special characters ($ and _ are allowed).
*/

// There’s an alternative “square bracket notation” that works with any string:
user = {};
// set
user["likes birds"] = true;
// get
// alert(user["likes birds"]);  true

// delete
delete user["likes birds"];

/* Computed properties
We can use square brackets in an object literal, when creating an object. That’s called computed properties.

For instance: */

// let fruit = prompt("Which fruit to buy?", "apple");

// let bag = {
//   [fruit]: 5, // the name of the property is taken from the variable fruit
// };

//  alert( bag.apple ); 5 if fruit="apple"

// For instance, a number 0 becomes a string "0" when used as a property key:
// let obj = {
//   0: "test" // same as "0": "test"
// };

// both alerts access the same property (the number 0 is converted to string "0")
// alert( obj["0"] ); // test
// alert( obj[0] ); // test (same property)

// Task 
/* let Insan = {
    
};
Insan['name'] = 'John';
Insan['surname'] = 'Smith';
Insan['surname'] = 'Pete';
delete Insan['name'];
console.log(Insan); */

/*  Write the function isEmpty(obj) which returns true if the object has no properties, false otherwise.

let schedule = {};
 const isEmpty = (dch) => {
    for(let key in dch){
    }
    
         return true;
   }

 alert( isEmpty(schedule) ); // true

 schedule["8:30"] = "get up";

alert( isEmpty(schedule) ); // false */

/* We have an object storing salaries of our team:
 let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}
let sum = 0;
for(let key in salaries){
    if(salaries === undefined){
        sum = 0;
    }else{
sum += salaries[key];
    }
   
}
alert(sum) */

// Multiply numeric property values by 2

// before the call
let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};

const multiplyNumeric = (menu) => {
    for(let prop in menu){
        console.log(typeof(menu[prop]));
        if(typeof menu[prop] === 'number'){
           menu[prop] =  menu[prop] * 2;
        }
        console.log(menu[prop]);
    }
    console.log(menu);
}


multiplyNumeric(menu);

// after the call
menu = {
  width: 400,
  height: 600,
  title: "My menu"
};


