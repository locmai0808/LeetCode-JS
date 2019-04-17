class Book {
  constructor(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
  }
  getSumary() {
    return `${this.title} was written by ${this.author} in ${this.year}`;
  }

  getAge() {
    const age = new Date().getFullYear() - this.year;
    return `${this.title} is ${age} years old`;
  }

  revise(newYear) {
    this.year = newYear;
    this.revised = true;
  }

  static topBookStore() {
    return 'Loc & Uyen';
  }
}

// Instantiate Object
const book1 = new Book('Hello World', 'Loc Mai', '2015');
// console.log(book1);
// book1.revise('2018');
// console.log(book1);

console.log(book1.getSumary());
