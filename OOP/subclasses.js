class Book {
    constructor(title, author, year){
        this.title = title;
        this.author = author;
        this.year = year;
    }

    getSumary(){
        return `${this.title} was written by ${this.author} in ${this.year}`;
    }
}

// Magazine Sublcass
class Magazine extends Book {
    constructor(title, author, year, month) {
        super(title, author, year);
        this.month = month;
    }
}

// Instantiate Magainze
const mag1 = new Magazine('Mag One', 'Loc Mai', '2018', 'Aug');
console.log(mag1);
console.log(mag1.getSumary());