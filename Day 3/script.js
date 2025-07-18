/* Constructor, operator "new"
 The regular {... } syntax allows us to create one object.But often we need to create many similar objects, like
        multiple users or menu items and so on.
        That can be done using constructor functions and the "new" operator. */

// Constructor function
/* Constructor functions technically are regular functions. There are two conventions though:
They are named with capital letter first.
They should be executed only with "new" operator. */

// For instance:
/* function User(name){
    this.name = name;
    this.isAdmin = false;
}

let user = new User("Jack");

alert(user.name);
alert(user.isAdmin); */

// When a function is executed with new, it does the following steps:
/* A new empty object is created and assigned to this.
The function body executes. Usually it modifies this, adds new properties to it.
The value of this is returned. */

// In other words, new User(...) does something like:

/* function User(name) {
  // this = {};  (implicitly)
  // add properties to this
  this.name = name;
  this.isAdmin = false;
  
  // return this;  (implicitly)
} */

// So let user = new User("Jack") gives the same result as:
/* let user = {
  name: "Jack",
  isAdmin: false
}; */

/* Now if we want to create other users, we can call new User("Ann"), new User("Alice")
and so on. Much shorter than using literals every time, and also easy to read.
That’s the main purpose of constructors – to implement reusable object creation code.
Let’s note once again – technically, any function (except arrow functions, as
they don’t have this) can be used as a constructor. It can be run with new, and it will execute the algorithm above.
The “capital letter first” is a common agreement, to make it clear that a function is to be run with new.
new function() { … } */

// If we have many lines of code all about creation of a single complex object, 
// we can wrap them in an immediately called constructor function, like this:

/* // create a function and immediately call it with new
let user = new function() {
  this.name = "John";
  this.isAdmin = false;

  // ...other code for user creation
  // maybe complex logic and statements
  // local variables etc
}; */
/* This constructor can’t be called again, because it is not saved anywhere, just created and called.
So this trick aims to encapsulate the code that constructs the single object, without future reuse. */

// Return from constructors

/* Usually, constructors do not have a return statement. Their task is to write all necessary stuff into
this, and it automatically becomes the result.
But if there is a return statement, then the rule is simple:
1. If return is called with an object, then the object is returned instead of this
2. If return is called with a primitive, it’s ignored.
In other words, return with an object returns that object, in all other cases this is returned.
*/

// For instance, here return overrides this by returning an object:
/* function BigUser(){
    this.name = "John";
    return {name: "Pete"};  // <-- returns this object
}
alert( new BigUser().name );  // Godzilla, got that object */

// And here’s an example with an empty return (or we could place a primitive after it, doesn’t matter):

/* function SmallUser() {

  this.name = "John";

  return; // <-- returns this
}

alert( new SmallUser().name );  // John */

/* Usually constructors don’t have a return statement. Here we mention the special behavior
with returning objects mainly for the sake of completeness. */

/* Omitting parentheses
By the way, we can omit parentheses after new: */
/* 
let user = new User; // <-- no parentheses
// same as
let user = new User(); */

/* Omitting parentheses here is not considered a “good style”, but the syntax is permitted by specification. */

// Methods in constructor

/* Using constructor functions to create objects gives a great deal of flexibility.
The constructor function may have parameters that define how to construct the object,
and what to put in it.
Of course, we can add to this not only properties, but methods as well.
For instance, new User(name) below creates an object with the given name and the method sayHi: */

/* function User(name) {
  this.name = name;
  this.sayHi = function(){
    alert(this.name);
  }
}
let user = new User('John');
user.sayHi(); */

// Task 1

// Is it possible to create functions A and B so that new A() == new B()?
/* let obj = {name: 'john'}
function A()
 { 
return obj;
 }
function B()
 {
return obj;
 }

let a = new A();
let b = new B();

alert( a == b ); // true */

// Task 2 

// Create a constructor function Calculator that creates objects with 3 methods:
// read() prompts for two values and saves them as object properties with names a and b respectively.
// sum() returns the sum of these properties.
// mul() returns the multiplication product of these properties.


/* function Calculator(){
  this.read = function(){
    this.a = +prompt('Enter a', '0');
    this.b = +prompt('Enter b', '0');
  }
  this.sum = function(){
    return this.a + this.b;
  }
  this.mul = function(){
    return this.a * this.b;
  }
}

let calculator = new Calculator();
calculator.read();
alert( "Sum=" + calculator.sum() );
alert( "Mul=" + calculator.mul() ); */

// Task 3 

// Create new Accumulator

// Create a constructor function Accumulator(startingValue)
// Object that it creates should:
// Store the “current value” in the property value. 
// The starting value is set to the argument of the constructor startingValue.

// The read() method should use prompt to read a new number and add it to value.
// In other words, the value property is the sum of all user-entered values with the initial value startingValue

/* function Accumulator(startingValue)
{

return {
  value: startingValue,
  read(){
let a = +prompt('How much add?', '0');
this.value += a;
}
};

};
let accumulator = new Accumulator(1); // initial value 1

accumulator.read(); // adds the user-entered value
accumulator.read(); // adds the user-entered value

alert(accumulator.value); // shows the sum of these values */

// Mini Project 

// Mini Project: Create a simple constructor-based Contact List

// Use a constructor function Contact to create contact objects

const contactName = document.getElementById('contact-name');
const phoneNumber = document.getElementById('phoneNumber');
const addContactBtn = document.getElementById('addContact');
const clearAllContactBtn = document.getElementById('clearAllContacts');
const showContactList = document.querySelector('#contact-list tbody');

let contactList = JSON.parse(localStorage.getItem('ContactList')) || [];

function Contact() { // constructor
  this.name = contactName.value.trim();
  this.phone = phoneNumber.value.trim();
  this.id = 'clearBtn' + Date.now() + Math.floor(Math.random() * 1000);
}

addContactBtn.addEventListener('click', () => {
  addContactinUI();
  updateClearButtonVisibilty();

});

const updateClearButtonVisibilty = () => {
  if (contactList.length < 3) {
    clearAllContactBtn.style.display = 'none';
  } else {
    clearAllContactBtn.style.display = 'block';
  }
}

clearAllContactBtn.addEventListener('click', () => {
  localStorage.removeItem('ContactList');
  contactList = [];
  showContactList.innerHTML = '';
  updateClearButtonVisibilty();
})

const showContactLists = () => {
  contactList.forEach((el) => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
<td>${el.name}</td>
<td>${el.phone}</td>
<td><button data-id=${el.id} class="clearContact">Clear</button></td>
`;
    showContactList.appendChild(tr);
  });
  updateClearButtonVisibilty();
}
const addContactinUI = () => {
  if (!contactName.value.trim() || !phoneNumber.value.trim()) {
    alert('Please fill input filds');
    return;
  }
  let contact = new Contact();
  contactList.push(contact);
  localStorage.setItem('ContactList', JSON.stringify(contactList));
  const latestItemAdded = contactList[contactList.length - 1];
  const tr = document.createElement('tr');
  tr.innerHTML = `
<td>${latestItemAdded.name}</td>
<td>${latestItemAdded.phone}</td>
<td><button data-id=${latestItemAdded.id} class="clearContact">Clear</button></td>
`;
  showContactList.appendChild(tr);
contactName.focus();
  contactName.value = '';
  phoneNumber.value = '';
}

window.onload = () => {
  showContactLists();
  updateClearButtonVisibilty();
};

showContactList.addEventListener('click', (event) => {
  if (event.target.dataset.id) {
    const row = event.target.closest('tr');
    const id = event.target.dataset.id;

    contactList = contactList.filter((contact) => {
      return contact.id !== id;
    });
    localStorage.setItem('ContactList', JSON.stringify(contactList));
    row.remove();
    updateClearButtonVisibilty();
  }
});

phoneNumber.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    addContactinUI();
  }
})





/* showContactList.addEventListener('click', (event) => {
if(event.target.classList.contains('clearContact')){
  const row = event.target.closest('tr');
  const name = row.children[0].textContent;
  const phone = row.children[1].textContent;

  contactList = contactList.filter((contact) => {
return !(contact.name === name && contact.phone === phone);
  });
  localStorage.setItem('ContactList', JSON.stringify(contactList));
  row.remove();
    updateClearButtonVisibilty();
}
}); */


/* showContactBtn.addEventListener('click', () => {
  if(contactList.length === 0) {
    alert('no contacts found');
    return;
  }
showContactList.innerHTML = '';
showContactLists();
});

if(contactList.length === 0){
  clearContactBtn.style.display = 'none';
} */