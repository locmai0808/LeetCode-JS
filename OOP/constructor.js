// Constructor
function Book(title, author, year) {
  this.title = title;
  this.author = author;
  this.year = year;

  this.getSummary = function() {
    return `${this.title} was written by ${this.author} in ${this.year}`;
  };
}

// Instatiate an Object
const book1 = new Book('Hello World', 'Loc Mai', '2018');
const book2 = new Book('Bye Bye World', 'Loc Mai', '2018');

//console.log(book1);
console.log(book1.getSummary());
