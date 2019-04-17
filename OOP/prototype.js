// Constructor
function Book(title, author, year) {
  this.title = title;
  this.author = author;
  this.year = year;
}

// getSummary
Book.prototype.getSummary = function() {
  return `${this.title} was written by ${this.author} in ${this.year}`;
};

// getAge
Book.prototype.getAge = function() {
  const age = new Date().getFullYear() - this.year;
  return `${this.title} is ${age} years old`;
};

// revise
Book.prototype.revise = function(newYear) {
  this.year = newYear;
  this.revised = true;
};

// Instatiate an Object
const book1 = new Book('Hello World', 'Loc Mai', '2014');
const book2 = new Book('Bye Bye World', 'Loc Mai', '2015');

//console.log(book1);
console.log(book1.getSummary());
console.log(book1.getAge());
book1.revise('2018');
console.log(book1);
