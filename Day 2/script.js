// Object methods, "this"

// Objects are usually created to represent entities of the real world, like users, orders and so on:

/* let user = {
  name: "John",
  age: 30
}; */

// And, in the real world, a user can act: select something from the shopping cart, login, logout etc.
// Actions are represented in JavaScript by functions in properties.

// Method examples
// For a start, let’s teach the user to say hello:

/* let user = {
    name: 'john',
    age: 30
}

user['sayHi'] = function() {
    alert("Hello");
};
console.log(user);

user.sayHi(); */

// Here we’ve just used a Function Expression to create a function 
// and assign it to the property user.sayHi of the object.

// Then we can call it as user.sayHi(). The user can now speak!
// A function that is a property of an object is called its method.
// So, here we’ve got a method sayHi of the object user.
// Of course, we could use a pre-declared function as a method, like this:

/* let user = {
    
};

// first, declare
function sayHi() {
  alert("Hello!");
}

// then add as a method
user.sayHi = sayHi;

user.sayHi(); // Hello! */

// Object-oriented programming

/* When we write our code using objects to represent entities, 
that’s called object-oriented programming, in short: “OOP”. */

// Method shorthand
// There exists a shorter syntax for methods in an object literal:
/* user = {
sayHi: () => {
    alert("Hello");
}
} */

// method shorthand looks better, right?
/* user = {
    sayHi() {
        alert("Hello")
    }
} */

/* As demonstrated, we can omit "function" and just write sayHi().
To tell the truth, the notations are not fully identical. There are subtle differences related
to object inheritance (to be covered later), but for now they do not matter. In almost all cases, the shorter syntax is preferred. */

// “this” in methods
// It’s common that an object method needs to access the information stored in the object to do its job.
// For instance, the code inside user.sayHi() may need the name of the user.
// To access the object, a method can use the this keyword.
// The value of this is the object “before dot”, the one used to call the method.
/* let user = {
    name: 'John',
    age: 30,
    sayHi(){
        alert(this.name);
    },
    Grade: 'A+'
};
console.log(user.Grade);
user.sayHi(); */

/* Here during the execution of user.sayHi(), the value of this will be user.
Technically, it’s also possible to access the object without this, by referencing it via the outer variable: */

/* let user = {
  name: "John",
  age: 30,

  sayHi() {
    alert(user.name); // "user" instead of "this"
  }

}; */

/* …But such code is unreliable. If we decide to copy user to another variable, e.g. admin = user and overwrite user with something else, then it will access the wrong object.

That’s demonstrated below: */

/* let user = {
    name: 'john',
    age: 28,
    sayHi(){
        console.log(user.name);
    }
}
let admin = user;
user = null;
admin.sayHi(); */

// If we used this.name instead of user.name inside the alert, then the code would work.

// “this” is not bound

/* In JavaScript, keyword this behaves unlike most other programming languages.
It can be used in any function, even if it’s not a method of an object.

There’s no syntax error in the following example: */

/* function sayHi(){
    alert(this.name);
} */
// The value of this is evaluated during the run-time, depending on the context.
// For instance, here the same function is assigned to two different objects and 
// has different “this” in the calls:

/* let user = {name: 'john'};
let admin = {name: 'Admin'};

function sayHi(){
    console.log(name);
}
user.fun = sayHi;
user.fun();
admin.adminFun = sayHi;
admin.adminFun(); */

//  If there’s this inside a function, it expects to be called in an object context.

// The consequences of unbound this
/* If you come from another programming language, then you are probably used to the idea of a
“bound this”, where methods defined in an object always have this referencing that object.
n JavaScript this is “free”, its value is evaluated at call-time and does not depend on where
the method was declared, but rather on what object is “before the dot”.

*/

// Arrow functions have no “this”

/* Arrow functions are special: they don’t have their “own” this. If we reference this from such
a function, it’s taken from the outer “normal” function.
 */

// For instance, here arrow() uses this from the outer user.sayHi() method:

/* let user = {
  firstName: "Ilya",
  sayHi:() => {
    alert(this.firstName);
  }
};

user.sayHi(); // Ilya
That’s a special feature of arrow functions, it’s useful when we actually
do not want to have a separate this, but rather to take it from the outer context.  */


// Task 
// 1.
/* function makeUser(){
    return {
    name: "John",
    ref: this
  };
}

let user = makeUser();
alert( user.ref.name );  */

// 2.
// Create a calculator
/* Create an object calculator with three methods:

read() prompts for two values and saves them as object properties with names a and b respectively.
sum() returns the sum of saved values.
mul() multiplies saved values and returns the result. */

/* let calculator = {
   read() {
    this.a = +prompt('a?', 0);
    this.b = +prompt('b?', 0);
  },
  sum(){
return (this.a) + (this.b);
  },
   mul(){
return this.a * this.b;
  }
};

calculator.read();
alert( calculator.sum() );
alert( calculator.mul() ); */

// Task 3 
const incBtn = document.getElementById('increment');
const decBtn = document.getElementById('decrement');
const resultDiv = document.getElementById('result');

let ladder = {
    step: 0,
    up() {
        this.step++;
        this.showStep();
    },
    down(){
        this.step > 0 ? this.step-- : null;
        this.showStep();
    },
    showStep: function() {
       resultDiv.textContent = this.step;
    }
};

incBtn.addEventListener('click', () => {
    ladder.up();
});
decBtn.addEventListener('click', () => {
    ladder.down();
});




// shows 1 and then 0 