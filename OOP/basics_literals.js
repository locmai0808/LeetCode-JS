const book1 = {
  title: 'Hello World',
  author: 'Loc Mai',
  year: '2018',
  getSummary: function() {
    return `${this.title} was written by ${this.author} in ${this.year}`;
  }
};

const book2 = {
  title: 'Bye Bye World',
  author: 'Loc Mai',
  year: '2018',
  getSummary: function() {
    return `${this.title} was written by ${this.author} in ${this.year}`;
  }
};

//console.log(book1);
console.log(book1.getSummary());
console.log(book2.getSummary());
//console.log(Object.values(book2));
//console.log(Object.keys(book2));
