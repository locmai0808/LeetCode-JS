// Object Of Protos
const bookProtos = {
  getSummary: function() {
    return `${this.title} was written by ${this.author} in ${this.year}`;
  },

  getAge: function() {
    const age = new Date().getFullYear() - this.year;
    return `${this.title} is ${age} years old`;
  }
};

// Create object
// const book1 = Object.create(bookProtos);
// book1.title = 'Hello World';
// book1.author = 'Loc Mai';
// book1.year = '2015';

const book1 = Object.create(bookProtos, {
  title: { value: 'Hello World' },
  author: { value: 'Loc Mai' },
  year: { value: '2012' }
});
console.log(book1.title);
console.log(book1.getSummary());
