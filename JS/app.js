// "stirng",023983,true,false,

// {}, [],

// "3" == 3;
// "3" === 3;

// && ||

// console.log(3 || 4 || 5);
// console.log(4 && 5);

// var a = 10;
// var b;

// b = 15;
// let;
// const;

// console.log(a);

// let b = 1;
// if (b > 7) {
//   console.log("b je vece od 7");
// } else if (b > 3) {
//   console.log("b je vece od 3 ali ne i od 7");
// } else {

// }

// let a = 3;

// switch (a) {
//   case 3:
//     console.log("A je vece od 2");
//     break;
//   case 4:
//     console.log("A je 4");
//     break;
//   case 5:
//     console.log("A je 5");
//     break;
//   case 3:
//     console.log("A je 3");
//     break;
//   case 3:
//     console.log("A je 3");
//     break;
//   case 3:
//     console.log("A je 3");
//     break;
//   case 3:
//     console.log("A je 3");
//     break;
//   case 3:
//     console.log("A je 3");
//     break;

//   default:
//     console.log("A nije 3");
//     break;
// }

// let c = 10;

// c > 5 ? console.log("vece od 5") : console.log("manje od 5");

// let a = 15;
// console.log(a);
// a++;
// console.log(a);
// a--;
// console.log(a);
// a = a + 5;
// a += 5;
// console.log(a);

// let b = 10;

// for (let i = 0; i < 10; i++) {
//   //   console.log("OVO JE PETLJA", i);
//   console.log(b, "default");
//   b += 2;
//   console.log(b, "petlja");
//   console.log(i);
// }

// let a = prompt("Unesi nesto");
// console.log(+a);
// console.log(typeof +a);
// '3', 3
// alert("Unesi nesto!!!!");

// let brojOkretanja = prompt("Unesi broj okretanja petlje: ");

// let a = 0;
// for (let i = 0; i < 3; i++) {
//   //   console.log("nesto", i);
//   a += +prompt("Dodaj broj");
//   console.log(a, i);
// }

// +"3"
// console.log(a);
// "0" + +"5" + +"5" + +"5"
// 0+5+5+5
// let nekiBroj = "5" + "tri";
// console.log(nekiBroj);

////////////////////////////////////////////////////////////////////////////////////////////////////////

// let brojPonavljanja = prompt("Unesite broj brojeva");
// let proizvod = 1;

// for (let i = 0; i < brojPonavljanja; i++) {
//   proizvod *= +prompt("Unesite broj");
// }

// console.log(proizvod);

// let someNumber = 20;

// // someNumber / 2 ===0
// // console.log(someNumber % 2);
// someNumber % 2 !== 0
//   ? console.log("Broj je paran")
//   : console.log("Broj je neparan");

// if (someNumber % 2 === 0) {
//   console.log("paran");
// } else {
//   console.log("neparan");
// }

// let someString = "telefon";

// someNumber.length > 5 ? console.log("rec je duza") : console.log("rec je kraca")

// for (let i = 0; i < 10; i++) {
//   if (i % 2 === 0) {
//     console.log(i, "paran broj");
//   } else {
//     console.log(i, "neparan broj");
//   }
// }

// deljiv sa 3 - FIZZ
// deljiv sa 5 - buzz
// deljiv i sa 3 i sa 5 - fizzbuzz

// for (let i = 0; i < 100; i++) {
//   if (i % 15 === 0) {
//     console.log("fizzbuzz");
//   } else if (i % 3 === 0) {
//     console.log("fizz");
//   } else if (i % 5 === 0) {
//     console.log("buzz");
//   } else {
//     console.log(i);
//   }
// }

// let a = 10;
// while (a < 5) {
//   console.log("a je manje od 5", a);
//   a++;
// }

// do {
//   console.log("A je manje od 5", a);
//   a++;
// } while (a < 5);

// for (let i = 0; i < 10; i++) {
//   console.log(i);
// }

////////////////////////////////////////////////////////////////////////////////////////////////////////

// let a = 8;

// while (a < 10) {
//   console.log("nestooo");
//   break;
// }
// do {
//   console.log("do while");
//   break;
// } while (a < 10);

// let a = Math.floor(Math.random() * 100) + 1;
// let pokusaj;

// do {
//   pokusaj = prompt("Unesite broj");
//   if (+pokusaj > a) {
//     alert("Probaj manji broj");
//   } else if (+pokusaj < a) {
//     alert("Probaj veci broj");
//   } else {
//     alert("Pogodili ste tacan broj");
//   }
// } while (+pokusaj !== a);

// // guesing number game;

// FUNCTIONS ////////////////////////////////////////////////////

// function myFirstFunction() {
//   // console.log("Aldin");
//   let a = 5;
//   let b = 6;
//   let zbir = a + b;
//   return zbir;
// }

// // let nekiDrugiZbir = myFirstFunction();
// // console.log(nekiDrugiZbir + 20);
// console.log(myFirstFunction() + 20);

// function mySecondFunction(argument1, argument2) {
// let a = 13;
// console.log(argument1 + argument2);
// return a;
// }

// console.log(mySecondFunction());

// mySecondFunction(100, 30);
// mySecondFunction(10);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////

function sqrNum(number1) {
  // return number1 * number1

  let square = number1 * number1;
  return square;
}

// console.log(sqrNum(3));
// console.log(sqrNum(10));

function razlika(number1, number2) {
  // console.log(number1 - number2);
  // return number1 - number2;
  if (number1 > number2) {
    return number1 - number2;
  } else if (number2 > number1) {
    return number2 - number1;
  } else {
    return "Uneli ste pogresne brojeve,Molimo vas unesite 2 razlicita broja";
  }
}

// console.log(razlika(13, 23));

const nekaFunkcija = function () {
  console.log("Ovo je nameless function");
};

// nekaFunkcija();

// const celziusToFarenheit = function (cel) {
//   return cel * 1.8 + 32;
// };

// const farenheitToCelzius = function (far) {
//   return ((far - 32) * 5) / 9;
// };

///////////////////////////////////////////NIZOVI////////////////////////////////////////////////

// let nekiDrugiNiz = [3, 10, 16, "Nesto", true, false, undefined, NaN, "bilosta"];

// // console.log(cars[0]);
// // console.log(cars[1]);
// // console.log(cars[2]);
// // console.log(cars[3]);
// // console.log(cars[4]);

// // console.log(cars.length);
// // console.log(nekiDrugiNiz.length);
// let cars = ["BMW", "MERCEDES", "FIAT", "AUDI", "VW"];

// // for (let i = 0; i < cars.length; i++) {
// //   if (i % 2 === 0) {
// //     console.log(cars[i], i);
// //   }
// // }

// // let ime = "nekoime";
// // ["n", "e", "k", "o", "i", "m", "e"];
// // console.log(ime.length);
// // console.log(ime[0]);

// // 'ALDIN HALILOVIC'
// // ['','','','']

// for (let i = cars.length - 1; i >= 0; i--) {
//   console.log(cars[i]);
// }

////////////////////////////////////////////////////////////////////////////////////////////////

// let someArray = [3, 10, 6, 18, 23, 40, 31];
// let anotherArray = [23, 214, 2345, 3543, 65435, 344, 234, 232, 32];
// let anotherOne = [
//   23, 23, 4234, 324, 324, 12, 312, 3213, 21, 4234, 324, 213, 123, 213, 2132,
// ];

// function getMaxNumber(niz) {
//   const duzinaNiza = niz.length;
//   let number = 0;

//   for (let i = 0; i < duzinaNiza; i++) {
//     if (number < niz[i]) {
//       number = niz[i];
//     }
//   }
//   return number;
// }

// console.log(getMaxNumber(anotherOne));

// let matrica = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];

// // for (let i = 0; i < matrica.length; i++) {
// //   console.log(matrica[i]);
// // }

// // console.log(matrica[0][1]);
// // console.log(matrica[2][2]);

// for (let i = 0; i < matrica.length; i++) {
//   for (let j = 0; j < matrica[i].length; j++) {
//     console.log(matrica[i][j]);
//   }
// }

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// let cars = ["BMW", "MErcedes", "Audi"];

// for (let i in cars) {
//   console.log(cars[i]);
// }

let cars = ["BMW", "MErcedes", "Audi"];

// console.log(cars.length);

// cars.length = 2;

// console.log(cars);

// cars.length = 10;

// console.log(cars);

// cars[0] = "FIAT";
// cars[5] = 10;
// cars[2] = "ubaceni element";
// cars[3] = "nesto trece";

// console.log(cars);

// console.log(cars);

// cars.push("nebitno");

// console.log(cars, cars.length);
// cars.push("Bitno");
// console.log(cars, cars.length);

// let lastElement = cars.pop();

// console.log(cars, cars.length);
// console.log(lastElement);

// cars.unshift("Prvi Element");
// console.log(cars);
// let firstElement = cars.shift();
// console.log(cars);
// console.log(firstElement);
// cars.push("aldin", "halilovic", "treci", "cetvrti");
// console.log(cars);
// cars.pop();
// cars.pop();
// cars.pop();
// cars.pop();
// cars.pop();
// cars.pop();
// console.log(cars);

// cars.push();

// let firstThree = [1, 3, 5];
// let secondThree = [2, 4, 6];

// let combined = firstThree.concat(secondThree);

// console.log(combined);

// console.log(combined.reverse());

// let randomItems = ["telefon", "ranac", "ajfon", "laptop", "coach"];
// console.log(randomItems, randomItems.length);

// let a = randomItems.slice(3);
// console.log(a);
// console.log(randomItems);
// a.push("nesto");
// console.log(a);
// a.pop();
// console.log(a);

// let a = randomItems.splice(0, 3);
// console.log(a, "parce niza");
// console.log(randomItems, "originalni niz");

// let numbers = [1, 3, 5, 7, 9];

// //            [1,3,5,7,9,2,4,6,8]

// for (let i = 0; i < 10; i++) {
//   if (i % 2 === 0 && i !== 0) {
//     numbers.push(i);
//   }
// }

// console.log(numbers);
// console.log(numbers.reverse());

// console.log(nekaRec.length);
// console.log(nekaRec[0]);

// nekaRec[2] = "A";
// nekaRec[0] = "C";
// console.log(nekaRec);

// let nekaRec = "ALDIN";

// let al = nekaRec.slice(0, 2);
// let rest = nekaRec.slice(2);

// let letterA = nekaRec.slice(0, 1);

// console.log(al);
// console.log(letterA);
// console.log(rest);

// let prvaTri = al.concat(letterA);

// let fullName = prvaTri.concat(rest);

// console.log(fullName);

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// let ime = "aldin";
// ime[0] = "i";
// console.log(ime);

// let brojevi = [3, 5, 7, 88, 12];
// console.log(brojevi);
// brojevi[0] = 9;
// console.log(brojevi);

// let ime = "aldin";

// function changeLetter(letter) {
//   ime[0] = a;
//   return ime;
// }

// let a = "i";

// console.log(ime);

// function imeneko() {
//   console.log("aslkdjsaljdlaksj");
// }

// imeneko();

// const nestpoarjsaodk = function () {
//   console.log("asad");
// };

// nestpoarjsaodk();

// const prvaArrowFunction = () => {
//   console.log("prvi");
//   console.log("drugi");
// };

// prvaArrowFunction();

// const squareNum = (el) => el * el;

// console.log(squareNum(10));

// const istiNiz = [1, 3, 5, 7, 9];

// const sumNumbers = (nekiNiz) => {
//   let start = 1;

//   for (let i = 0; i < nekiNiz.length; i++) {
//     start *= nekiNiz[i];
//   }

//   return start;
// };

// console.log(sumNumbers(istiNiz));

/////////////////////////////////////////////////////////////////////////////////

// let myName;
// console.log(myName)

// if (myName) {
//   console.log("imam ime")
// } else {
//   console.log("Sacekaj")
// }

// myName = "ALdin"

// if (myName) {
//   console.log("imam ime")
// } else {
//   console.log("Sacekaj")
// }
// console.log(myName)

// if (!!myName) {
//   console.log("Tacno")
// }

// undefined || true
// null || true
// 0 || true
// -0 || true
// '' || true
// false || true
// 0n || true
// NaN || true

// let myLastName;

// for (let i = 0; i < 5; i++) {
//   // console.log(myLastName, i)
//   if (i === 3) {
//     myLastName = "Aldin";
//   }
//   if (myLastName) {
//     console.log("Imam ime", i);
//   } else {
//     console.log("Sacekaj redzi", i);
//   }
// }

// let b = 3;
// {
//   var a;
//   let b = 10;
//   const c = 15;

//   {
//     // let b = 10;
//     // const c = 20;
//     console.log(b, "blok koda");
//     console.log(c, "blok koda");
//   }
// }
// console.log(b, "global scope");
// console.log(c, "global scope");

//////////////////////////////////////////////////////////////////////////////////////

function sayHello() {
  console.log("Hello Aldin");
}

function helloSomeone() {
  console.log("Cao Mehmed");
}

function anotherFunction(nekaFunkcija1, nekaFunkcija2) {
  console.log("Cao Dzenis");
  console.log("Cao Redzi");
  console.log("prekid");
  nekaFunkcija1();
  nekaFunkcija2();
  console.log("prekid");
  console.log("Cao Tajra");
}

// anotherFunction(sayHello);
// anotherFunction(helloSomeone, sayHello);

// function addTwoNumbers(a, b) {
//   return a + b;
// }

// function biggerFunction(someFunction) {
//   let a = 3;
//   let b = 10;

//   return someFunction(a, b);
// }

// console.log(biggerFunction(addTwoNumbers));

let someArray = [3, 5, 123, 54, 213, 54, 23, 123, 435, 123, 8];
let secondArray = [1, 23, 531, 412, 321345, 34513, 4213, 12];
let helperFunction = (a) => a + 10;

function customFunction(aldin, callbackFunkciju) {
  let pomocniNiz = [];
  for (let i = 0; i < aldin.length; i++) {
    console.log(callbackFunkciju(aldin[i]));
    pomocniNiz.push(callbackFunkciju(aldin[i]));
  }

  return pomocniNiz;
}

someArray.map((el) => el + 10);

// console.log(someArray);
// console.log(customFunction(someArray, helperFunction));
// console.log(secondArray);
// console.log(customFunction(secondArray, helperFunction));
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const nekiNiz = [5, 6, 2, 17, 11, 115, 69];

const prvaMap = nekiNiz.map((el) => el * 2);

// console.log(prvaMap);

const treciNiz = prvaMap.slice(0, 3);

const squareOfNum = nekiNiz.map((el) => el * el);

const someAges = [2, 8, 7, 5, 1, 15, 10, 9, 13];
// * 7

const someKms = [20, 12, 22, 25, 33, 33, 99, 50, 70];
// * 1.6

const nekeBrojeve = [36, 17, 22, 6, 1, 10, 19, 33, 52];

const proizvodMapFn = nekeBrojeve.map((el) => (el % 2 === 0 ? el * 2 : el * 3));

// console.log(nekeBrojeve);
// console.log(proizvodMapFn);

let name = "aldin";

const matrica = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

let mapMatrice = matrica.map((manjiNiz) =>
  manjiNiz.map((el) => {
    if (el % 2 === 0) {
      return el * 2;
    } else {
      return el * 3;
    }
  })
);

// console.log(mapMatrice);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const brojevi = [6, 5, 27, 28, 29, 31, 33, 15];

const neparniBrojevi = brojevi.filter((el) => el % 2 === 0);

// console.log(brojevi);
// console.log(neparniBrojevi);

// const neparniMapBrojevi = brojevi.map((el) => el % 2 !== 0);

// console.log(neparniMapBrojevi);

const biggerNums = brojevi.filter((el) => el > 16);

// console.log(biggerNums);

const ourCustomFilter = (niz, callbackFn) => {
  const noviFilterNiz = [];
  for (let i = 0; i < niz.length; i++) {
    if (callbackFn(niz[i])) {
      noviFilterNiz.push(niz[i]);
    }
  }
  return noviFilterNiz;
};

function customCallback(el) {
  return el > 10;
}

// console.log(ourCustomFilter(brojevi, customCallback));

const nekiBrojevi = [7, 12, 1, 8, 19, 20, 15, 22, 25, 30, 2, 10, 63];

const pomnozenibrojevi = nekiBrojevi.map((el) => el * 3);
// console.log(pomnozenibrojevi);

const parnibrojevi = pomnozenibrojevi.filter((el) => el % 2 === 0);
// console.log(parnibrojevi);

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// [
//   [12, 8],
//   [10],
//   [16]
// ]

const nekaMatrica = [
  [12, 5, 8],
  [3, 5, 10],
  [16, 3, 7],
];

// const novaKakoSeZoveNesto = nekaMatrica.filter((el) => el % 2 === 0);
const dveMape = nekaMatrica.map((niz) => niz.filter((el) => el % 2 === 0));

// console.log(dveMape);

const nizZaReduce = [2, 8, 14, 17, 10, 50, 60, 30, 43, 3, 9, 68];

const zbirElemenata = nizZaReduce.reduce(
  (previousValue, currentValue) => previousValue + currentValue
);

const averageNum = zbirElemenata / nizZaReduce.length;

// console.log(averageNum);

// console.log(zbirElemenata);

//////////////////////////////////////OBJEKTI///////////////////////////////////////////////////////

const ourFirstObject = {
  car: "Alfa romeo",
  vozac: "Dzenis Bronja",
  suvozac: "Redzi (pod kaznom)",
  godina: 23,
  prijatelji: ["Mitar iz Dubica", "petrojka", "bilo sta"],
  skills: {
    html: "good",
    css: "average",
    lying: "bad",
    josJedan: {
      nekiProperti: "bilo koji",
      josJedanObjekat: {
        ja: "aldin",
      },
    },
  },
};

[{}, {}];

// console.log(ourFirstObject.skills.josJedan.josJedanObjekat.ja);

// console.log(ourFirstObject);
// console.log(ourFirstObject.skills.html);

// console.log(ourFirstObject.prijatelji);
// console.log(ourFirstObject.prijatelji[2]);

// console.log(ourFirstObject.vozac);

// console.log(ourFirstObject["suvozac"]);

// const aldin = ['nasdindas', 'asldkjasd'smadkasd'asd]

// const user = {
//   name: "aldin",
//   lastname: "bla bla bla",
//   pol: "musko",
//   age: 20,
// };

const ime = "Aldin";

const user = {
  ime,
  prezime: "Halilovic",
  skills: ["html", "css", "js", "react"],
};

const myLastName = user.prezime;

const skillsArray = user.skills;

// console.log("Ja se prezivam " + myLastName);

// skillsArray.pop();

// console.log(user);

// classroom.sayHello();

// const nasNiz = classroom.ucenici;
// const imanNiz = nasNiz.map((el) => el.name);
// const imanNiz = nasNiz.map((el) => {
//   return {
//     name: el.name,
//   };
// });

// console.log(imanNiz);

// const nekiObjekat = [{1}, {2}, {3}, {4}];

const ourClassroom = [
  { name: "Tajra", id: 1, age: 17 },
  { name: "Iman", id: 2, age: 17 },
  { name: "Dzenis", id: 3, age: 23 },
  { name: "Tarik", id: 4, age: 25 },
  { name: "Imad", id: 5, age: 17 },
  { name: "Haris", id: 6, age: 18 },
  { name: "Mehmed", id: 7, age: 16 },
  { name: "Redzep", id: 8, age: 18 },
];

const filteredClassroom = ourClassroom.filter((clas) => clas.age >= 18);

// console.log(ourClassroom);
// console.log(filteredClassroom);

const evenIds = ourClassroom.filter((el) => el.id % 2 === 0);
// console.log(evenIds);

const onlyIds = evenIds.map((el) => {
  return {
    id: el.id,
  };
});

const numberIds = ourClassroom.map((el) => el.id);

// console.log(numberIds);

const classroom = {
  brojUcenika: 10,
  vremeCasa: 10.0,
  ciklus: "2 ciklus",
  profesor: "aldin",
  ucenici: [
    // [prvi objekat, drugi objekat, treci objekat]
    {
      name: "redzi",
      proffesion: "basketball player",
    },
    {
      name: "bronja",
      proffesion: "auto limar",
    },
    {
      name: "neki lik",
      proffesion: " peti sesti ",
    },
  ],
  sayHello() {
    console.log("hello " + this.profesor);
  },
  helloRedzi() {
    console.log("hello" + this.ucenici[0].name);
  },
  thisKeyword() {
    console.log(this.profesor, "ovo je this keyword");
  },
};

// classroom.thisKeyword();
// classroom.helloRedzi();
// classroom.sayHello();

// console.log(this);

// const nekaVarijabla = "nesto";
// const neka_druga_varijabla = "nesto drugo";

// const BASE_URL = "https://www.google.com/blablabal";

// const prvoIme = "aldin";
// const drugoIme = "redzi";

// console.log(prvoIme + " i " + drugoIme);

// console.log(`${prvoIme} i ${drugoIme}`);

// `https://jsonplaceholder.typicode.com/todos/${nekaVarijablaZaurl}`;

// const nebitnoNesto = {
//   televizor: "sharp",
//   laptop: "acer",
//   telefon: "apple",
// };

// nebitnoNesto.punjac = "za laptop";

// console.log(nebitnoNesto);

// delete nebitnoNesto.televizor;
// console.log(nebitnoNesto);

const watchList = [
  {
    Title: "Inception",
    Year: "2010",
    Rated: "PG-13",
    Released: "16 Jul 2010",
    Runtime: "148 min",
    Genre: "Action, Adventure, Crime",
    Director: "Christopher Nolan",
    Writer: "Christopher Nolan",
    Actors: "Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page, Tom Hardy",
    Plot: "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
    Language: "English, Japanese, French",
    Country: "USA, UK",
    Awards: "Won 4 Oscars. Another 143 wins & 198 nominations.",
    Poster:
      "http://ia.media-imdb.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
    Metascore: "74",
    imdbRating: "8.8",
    imdbVotes: "1,446,708",
    imdbID: "tt1375666",
    Type: "movie",
    Response: "True",
  },
  {
    Title: "Interstellar",
    Year: "2014",
    Rated: "PG-13",
    Released: "07 Nov 2014",
    Runtime: "169 min",
    Genre: "Adventure, Drama, Sci-Fi",
    Director: "Christopher Nolan",
    Writer: "Jonathan Nolan, Christopher Nolan",
    Actors: "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
    Plot: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
    Language: "English",
    Country: "USA, UK",
    Awards: "Won 1 Oscar. Another 39 wins & 132 nominations.",
    Poster:
      "http://ia.media-imdb.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_SX300.jpg",
    Metascore: "74",
    imdbRating: "8.6",
    imdbVotes: "910,366",
    imdbID: "tt0816692",
    Type: "movie",
    Response: "True",
  },
  {
    Title: "The Dark Knight",
    Year: "2008",
    Rated: "PG-13",
    Released: "18 Jul 2008",
    Runtime: "152 min",
    Genre: "Action, Adventure, Crime",
    Director: "Christopher Nolan",
    Writer:
      "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
    Actors: "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
    Plot: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
    Language: "English, Mandarin",
    Country: "USA, UK",
    Awards: "Won 2 Oscars. Another 146 wins & 142 nominations.",
    Poster:
      "http://ia.media-imdb.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
    Metascore: "82",
    imdbRating: "9.0",
    imdbVotes: "1,652,832",
    imdbID: "tt0468569",
    Type: "movie",
    Response: "True",
  },
  {
    Title: "Batman Begins",
    Year: "2005",
    Rated: "PG-13",
    Released: "15 Jun 2005",
    Runtime: "140 min",
    Genre: "Action, Adventure",
    Director: "Christopher Nolan",
    Writer:
      "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
    Actors: "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
    Plot: "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.",
    Language: "English, Urdu, Mandarin",
    Country: "USA, UK",
    Awards: "Nominated for 1 Oscar. Another 15 wins & 66 nominations.",
    Poster:
      "http://ia.media-imdb.com/images/M/MV5BNTM3OTc0MzM2OV5BMl5BanBnXkFtZTYwNzUwMTI3._V1_SX300.jpg",
    Metascore: "70",
    imdbRating: "8.3",
    imdbVotes: "972,584",
    imdbID: "tt0372784",
    Type: "movie",
    Response: "True",
  },
  {
    Title: "Avatar",
    Year: "2009",
    Rated: "PG-13",
    Released: "18 Dec 2009",
    Runtime: "162 min",
    Genre: "Action, Adventure, Fantasy",
    Director: "James Cameron",
    Writer: "James Cameron",
    Actors: "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
    Plot: "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
    Language: "English, Spanish",
    Country: "USA, UK",
    Awards: "Won 3 Oscars. Another 80 wins & 121 nominations.",
    Poster:
      "http://ia.media-imdb.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg",
    Metascore: "83",
    imdbRating: "7.9",
    imdbVotes: "876,575",
    imdbID: "tt0499549",
    Type: "movie",
    Response: "True",
  },
];

// const mapArray = watchList.map((el) => {
//   return {
//     // title: el.Title,
//     rating: el.imdbRating,
//   };
// });

// console.log(mapArray);
// const filteredArray = mapArray.filter((el) => el.rating >= 8);

// console.log(filteredArray);

const filteredArrayMovies = watchList.filter((el) => {
  if (+el.imdbRating >= 8.0) {
    return {
      title: el.Title,
      rating: el.imdbRating,
    };
  }
});

// console.log(filteredArrayMovies);
////////////////////////////////////////////////////////////////////////////////////////////////////////
// let nekaVrednost = "imad";

// console.log(`${nekaVrednost} je primer za template strings`);

// console.log(nekaVrednost + " nesto trece");

// console.log(this, "ovo je this");

// const nasCustomObjekat = {
//   odeljenje: "3-10",
//   dukserica: "zelena",
//   ja: "ne znam",
//   godine: 30,
//   brojLaptopova: 9,
// };
// const nasCustomObjekat2 = {
//   odeljenje: "3-10",
//   dukserica: "zelena",
//   ja: "ne znam",
//   godine: 40,
//   brojLaptopova: 9,
// };

// function ourFirstCallFunction(argumentFirst, argumentSecond) {
//   console.log(
//     `${argumentFirst} ima ${this.godine} godina i ${argumentSecond} mu je ${this.dukserica} `
//   );
// }

// ourFirstCallFunction.call(nasCustomObjekat, "Aldin", "kapa");

// ourFirstCallFunction.apply(nasCustomObjekat2, ["aldin", "kapa"]);

// const bindFunkcija = ourFirstCallFunction.bind(nasCustomObjekat2, "kapa");

// bindFunkcija();

// const user1 = {
//   id: 1,
//   godine: 12,
//   ime: "prvo Ime",
//   profesija: "HTML",
//   vozila: ["mclaren", "ladu"],
// };

// const user2 = {
//   id: 2,
//   godine: 13,
//   ime: "drugo Ime",
//   profesija: "css",
//   vozila: ["golf", "tesla", "passat", "touran"],
// };

// const user3 = {
//   id: 3,
//   godine: 25,
//   ime: "trece Ime",
//   profesija: "javascript",
//   vozila: ["audi", "toyota", "michubishi"],
// };

// const user4 = {
//   id: 4,
//   godine: 33,
//   ime: "cetvrto Ime",
//   profesija: "typescript",
//   vozila: ["volkswagen", "punto"],
// };

const allUsers = [
  {
    id: 1,
    godine: 12,
    ime: "prvo Ime",
    profesija: "HTML",
    vozila: ["mclaren", "ladu"],
  },
  {
    id: 2,
    godine: 13,
    ime: "drugo Ime",
    profesija: "css",
    vozila: ["golf", "tesla", "passat", "touran"],
  },
  {
    id: 3,
    godine: 25,
    ime: "trece Ime",
    profesija: "javascript",
    vozila: ["audi", "toyota", "michubishi"],
  },
  {
    id: 4,
    godine: 33,
    ime: "cetvrto Ime",
    profesija: "typescript",
    vozila: ["volkswagen"],
  },
];

function checkingUserAge() {
  if (this.godine >= 18) {
    console.log("svaka cast");
  } else {
    console.log(`dodji za ${18 - this.godine} godina`);
  }
}

// checkingUserAge.call(user4);
// checkingUserAge.call(user3);0
// checkingUserAge.call(user2);
// checkingUserAge.call(user1);

// allUsers.map((user) => checkingUserAge.call(user));

const ourDeleteFunction = (id, id2) =>
  allUsers.filter((user) => user.id !== id && user.id !== id2);

// console.log(ourDeleteFunction(2, 3));
// console.log(ourDeleteFunction(3));

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const obnovaObjekta = {
  name: "Aldin",
  course: "js",
};

const noviObjekat = {
  name: "Medina",
  course: "Medicinska ",
};

obnovaObjekta.name;
obnovaObjekta["course"];

obnovaObjekta.prezime = "halilovic";

function callFunkcija(argumentNeki) {
  console.log(this.name, argumentNeki, "ovo je call funkcija");
}

// callFunkcija.call(obnovaObjekta, ["isto neki argument"]);
// callFunkcija.call(noviObjekat, "drugi argument");

// callFunkcija.apply(obnovaObjekta, [
//   "asndjlsakdj",
//   "alskdjklsjdklsa",
//   "a;skdjslkdjs",
// ]);

const bindFunkcijaObnavljanje = callFunkcija.bind(obnovaObjekta, "nesto");

// bindFunkcijaObnavljanje();

const objectPractice = {
  voda: "Maxi",
  laptop: "Acer",
  telefon: "iphone",
};

const kljucevi = Object.keys(objectPractice);

// console.log(kljucevi);

const vrednosit = Object.values(objectPractice);
// console.log(vrednosit);

// Object.freeze(objectPractice);
Object.seal(objectPractice);

// console.log(objectPractice);

objectPractice.voda = "rosa";

// console.log(objectPractice);

// const functionInObject = {
//   name: "aldin",
//   voda: "Maxi",
//   laptop: "Acer",
//   telefon: "iphone",
//   // sayHello() {
//   //   console.log("Hello world");
//   // },
//   helloName() {
//     console.log(`Hello ${this.name}`);
//   },
// };

// functionInObject.sayHello();
// functionInObject.helloName();

// console.log(this);

///////////////////////////////////CLOSURE////////////////////////////////////////////////////////////////

// let a = 10;

// function firstA() {
//   let b = 5;
//   console.log(b);
// }

// function secondA() {
//   let b = 3;
//   console.log(b);
// }

// function lastA() {
//   console.log(a);
// }

// firstA();
// secondA();
// lastA();

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

let a = 5;

function prva() {
  console.log(a);
}

function druga() {
  let a = 7;
  console.log(a);
}

function treca() {
  let a = 3;
  console.log(a);
}

// prva();
// druga();
// treca();

function createUser(userName, userLastname) {
  return {
    name: userName,
    lastName: userLastname,
  };
}

const userAldin = createUser("aldin", "halilovic");

// console.log(userAldin);

class User {
  // ime;
  // prezime;
  // posao;
  // pribivaliste = "Novi Pazar";
  // kredit;
  constructor(name, lastname, job, credit, hobi) {
    this.ime = name;
    this.prezime = lastname;
    this.posao = job;
    this.kredit = credit;
    this.hobi = hobi;
  }
}

const jaAldin = new User("aldin", "halilovic", "coach", 0);

// console.log(jaAldin);

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// const mojeImeObjekat = {
//   ime: "Aldin",
//   prezime: "blabas;ldkasl;djsalk",
// };

// class NewClass {
//   ime = "ALdin";
//   prezime = "Halilovic;";
// }

// const mojeIme = new NewClass();

// console.log(mojeIme);

// class Bus {
//   seats;
//   color;

//   constructor(sedista, boja) {
//     this.color = boja;
//     this.seats = sedista;
//   }

//   helloBus() {
//     console.log("caoooooooo");
//   }

//   changeColor(newColor) {
//     this.color = newColor;
//   }

//   getColor() {
//     return this.color;
//   }
// }

// const lasta = new Bus(55, "zelena");

// console.log(lasta);

// lasta.helloBus();

// lasta.changeColor("zuta");
// console.log(lasta);

// const bojaAutaobusa = lasta.getColor();
// console.log(bojaAutaobusa);

// class Pet {
//   legNum;
//   tail;

//   constructor(noge, rep) {
//     this.legNum = noge;
//     this.tail = rep;
//   }
// }

// class Cat extends Pet {
//   name;
//   color;

//   constructor(noge, rep, ime, boja) {
//     super(noge, rep);
//     this.name = ime;
//     this.color = boja;
//   }
// }

// class Dog extends Cat {
//   constructor(noge, rep, ime, boja) {
//     super(noge, rep, ime, boja);
//   }

//   bark() {
//     console.log("arrrr!!!");
//   }

//   getTail() {
//     return this.tail;
//   }
// }

// const ourCat = new Cat(4, "yes", "Sladjan", "Bela");

// const ourDog = new Dog(4, "yes", "Sladjana", "grey");

// console.log(ourCat);

// console.log(ourDog);

// ourDog.bark();

////////////////////////////////////////ENKAPSULACIJA////////////////////////////////////////////////////

// class Shop {
//   #ime;
//   lokacija;
//   logo;

//   static brojKasa = 10;

//   constructor(name, location, logo) {
//     this.#ime = name;
//     this.lokacija = location;
//     this.logo = logo;
//   }

//   get ourName() {
//     return this.#ime;
//   }

//   setOurName(nekoIme) {
//     this.#ime = nekoIme;
//   }
// }

// const brojKasaUMaxiju = Shop.brojKasa;

// const maxi = new Shop("maxi", "1. maj", "MaXi");

// console.log(maxi);
// // console.log(maxi.ime);

// const imeProdavnice = maxi.ourName;
// console.log(imeProdavnice);

// maxi.setOurName("idea");

// console.log(maxi);

// class Shop {
//   #ime;
//   lokacija;
//   logo;

//   static brojKasa = 10;

//   constructor(name, location, logo) {
//     this.#ime = name;
//     this.lokacija = location;
//     this.logo = logo;
//   }

//   ourName() {
//     return this.#ime;
//   }

//   setOurName(nekoIme) {
//     this.#ime = nekoIme;
//   }
// }

// const nekaProdavnica = new Shop("IDEA", "jedinstvo", "iDEA");

// console.log(nekaProdavnica);
// // console.log(nekaProdavnica.#ime);

// const imeProdavnice = nekaProdavnica.ourName();

// console.log(imeProdavnice);

// nekaProdavnica.setOurName("RODA");

// console.log(nekaProdavnica);

//////////////////////////////////////////////////////////////////

// abstrakcija

// class User {
//   name;
//   height;
//   width;
//   age;

//   constructor(ime, visina, sirina, godine) {
//     this.name = ime;
//     this.height = visina;
//     this.width = sirina;
//     this.age = godine;
//   }

//   checkUserAge() {
//     if (this.age < 16) {
//       console.log("You can pass!");
//     } else {
//       console.log("Sorry, you are too old!");
//     }
//   }

//   checkUserHeight() {
//     if (this.height < 160) {
//       console.log("You can pass!");
//     } else {
//       console.log("Sorry, you can not pass!");
//     }
//   }
// }

// const aldin = new User("Aldin", 170, 100, 20);

// const redzi = new User("Redzi", 182, 3, 18);

// // aldin.checkUserAge();
// // aldin.checkUserHeight();

// const ucenik1 = "Redzi";
// const ucenik2 = "Haris";
// const ucenik3 = "Tarik";

// const ucenik1godine = 33;
// const ucenik2godine = 18;
// const ucenik3godine = 25;

// poredjati ucenike po starosti

// if (ucenik1godine > ucenik2godine && ucenik1godine > ucenik3godine) {
//   if (ucenik2godine > ucenik3godine) {
//     console.log(
//       `${ucenik1} je stariji od ${ucenik2}, a ${ucenik2} je stariji od ${ucenik3}`
//     );
//   } else {
//     console.log(
//       `${ucenik1} je stariji od ${ucenik3}a, a ${ucenik3} je stariji od ${ucenik2}a`
//     );
//   }
// }

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// const randomNumbers = [2, 5, 30, 32, 45, 50];
// let reversedArray = [];

// for (let i = randomNumbers.length - 1; i >= 0; i--) {
//   reversedArray.push(randomNumbers[i]);
// }

// console.log(randomNumbers);
// console.log(reversedArray);

// const randomNumbers = [528, 23, 229, 99, 22, 100, 703];
// let maxNum = 0;

// for (let i = 0; i < randomNumbers.length; i++) {
//   if (randomNumbers[i] > maxNum) {
//     maxNum = randomNumbers[i];
//   }
// }

// console.log(maxNum);

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// const profesor = {
//   name: "Aldin",
//   course: "Js",
// };

// const noviProfesor = {
//   ...profesor,
//   age: 20,
// };

// console.log(profesor);
// console.log(noviProfesor);

// const spredingArray = [512, 23, 54, 33, 115, 222];

// const newSprededArray = [...spredingArray, 408, 15, 32];

// console.log(spredingArray);
// console.log(newSprededArray);

// const objectPracticeNew = {
//   mozak: "IMA",
//   ruke: 2,
//   noge: 2,
//   bojaKose: "smedja",
//   bojaOciju: "zelena",
//   age: 25,
// };

// function checkUserAgept2(ime, prezime) {
//   if (this.age > 18) {
//     console.log("punoletan ", ime, prezime);
//   } else {
//     console.log("nisi ", ime, prezime);
//   }
// }

// checkUserAgept2.call(objectPracticeNew, "Aldin", "Halilovic");
// checkUserAgept2.apply(objectPracticeNew, ["Aldin", "Halilovic"]);
// const nekaSestaFunckija = checkUserAgept2.bind(objectPracticeNew);
// nekaSestaFunckija("dzelal");

// Object.keys(objectPracticeNew);
// Object.values(objectPracticeNew);

// const squaerNumbers = [5, 10, 9, 653, 84];
// const noviNiz = squaerNumbers.map((el) => el * el);
// // console.log(noviNiz);

// const tajra = noviNiz.filter((el) => el % 2 === 0);
// // console.log(tajra);

// squaerNumbers.map((el, i) => console.log(i, el));

// const randomWords = [
//   "macka",
//   "imam",
//   "hodza",
//   "nemam",
//   "pecat",
//   "efendija",
//   "televizor",
// ];

// const cassa = "aldin";

// console.log(cassa[3]);

// const wordD = randomWords.filter((name) => name[1] === "e");
// console.log(wordD);

// const nekiRandomBrojevi = [
//   7, 10, 18, 22, 30, 3, 15, 19, 35, 82, 10, 50, 21, 19,
// ];

//  broj veci od 18 >>>>>> * 4
// broj veci od 18 a manji od 30 >>>>> * 8 onda podeljeno sa 4
// ostale ne dirati

// const maloTeziZadatak = nekiRandomBrojevi.map((broj) => {
//   if (broj > 18 && broj < 30) {
//     return (broj * 8) / 4;
//   } else if (broj > 18) {
//     return broj * 4;
//   } else {
//     return broj;
//   }
// });

// console.log(maloTeziZadatak);
////////////////////////////////////////////////////////////////////////////////

// const pocetniNiz = [3, 10, "neka rec"];

// let unos = prompt("Unesi nesto");

// if (+unos / 1 === +unos) {
//   pocetniNiz.unshift(unos);
// } else {
//   pocetniNiz.push(unos);
// }

// console.log(pocetniNiz);

// const prvaMatrica = [
//   [20, 12, 25, 12323, 1231232, 222, 3455234123],
//   [10, 222, 7, 333],
//   [
//     99, 33, 46, 99, 33, 46, 99, 33, 46, 99, 33, 46, 99, 33, 46, 99, 33, 46, 99,
//     33, 46, 99, 33, 46,
//   ],
// ];

// for (let i = 0; i < prvaMatrica.length; i++) {
//   console.log(prvaMatrica[i]);
//   for (let j = 0; j < prvaMatrica[i].length; j++) {
//     prvaMatrica[i][j] % 2 === 0
//       ? console.log("Paran broj")
//       : console.log("Neparan broj");
//   }
// }

// const classAges = [17, 17, 16, 21, 23, 16, 25, 20];

// const sumAges = classAges.reduce((prev, curr) => prev + curr);

// // console.log(sumAges / classAges.length);

// const miles = [502.8, 120.5, 350.6, 205.2, 100, 98, 115, 9000, 53];

// const kms = miles.map((el) => el * 1.6);

// const sum = kms.reduce((prev, cur) => prev + cur);

// // console.log(sum / kms.length);

// const recenica = "MAMA ima Momu";

// let brojMova = 0;

// for (let i = 0; i < recenica.length; i++) {
//   console.log(recenica[i]);
//   if (recenica[i].toUpperCase() === "M") {
//     brojMova++;
//   }
// }

// // console.log(brojMova);

// const randomNiz = [123, 423123, "nesto", "parno"];

// let unosNeki = "string";

// if (typeof unosNeki === "string") {
//   // randomNiz.length = 0;

//   for (let i = 0; i <= randomNiz.length; i++) {
//     randomNiz.pop();
//     // console.log(randomNiz, i);
//   }
// } else {
//   randomNiz.push(unosNeki);
// }

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// var mojeIme = "ALdin";

// var mojeIme;

// console.log(mojeIme);

// console.log(mojeIme);
// mojeIme = 10;

// console.log(mojeIme);

// var mojeIme;

// mojeIme = 10;

// console.log(hdmi);
// let hdmi;

// hdmi = 10;
// console.log(hdmi);

// nekeaFunkcija();

// const nekeaFunkcija = () => {
//   console.log("John Doe");
// };

// greetings(hisName);

// function greetings(nekoIme) {
//   console.log(nekoIme, "gde koci ?");
// }

// var hisName = "Muzafer1234%^&*";
// let brojac = 0;

// for (let i = 0; i < hisName.length; i++) {
//   if (+hisName[i] / 1 === +hisName[i]) {
//     console.log("ima");
//   } else {
//     brojac++;
//   }
// }

const automobili = {
  ja: ["vw", "audi", "cayenne", "targa"],
  tajra: ["golf", "audi", "bmw"],
  iman: ["peugeot", "fiat", "citroen", "x5"],
  bronja: ["pagani", "mclaren", "rollce roys"],
};

const allCars = Object.values(automobili);

// console.log(allCars);

const drugiAutomobili = allCars.map((car) => [...car, car.length]);
console.log(drugiAutomobili);
