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

const celziusToFarenheit = function (cel) {
  return cel * 1.8 + 32;
};

const farenheitToCelzius = function (far) {
  return ((far - 32) * 5) / 9;
};

///////////////////////////////////////////NIZOVI////////////////////////////////////////////////

let nekiDrugiNiz = [3, 10, 16, "Nesto", true, false, undefined, NaN, "bilosta"];

// console.log(cars[0]);
// console.log(cars[1]);
// console.log(cars[2]);
// console.log(cars[3]);
// console.log(cars[4]);

// console.log(cars.length);
// console.log(nekiDrugiNiz.length);
let cars = ["BMW", "MERCEDES", "FIAT", "AUDI", "VW"];

// for (let i = 0; i < cars.length; i++) {
//   if (i % 2 === 0) {
//     console.log(cars[i], i);
//   }
// }

// let ime = "nekoime";
// ["n", "e", "k", "o", "i", "m", "e"];
// console.log(ime.length);
// console.log(ime[0]);

// 'ALDIN HALILOVIC'
// ['','','','']

for (let i = cars.length - 1; i >= 0; i--) {
  console.log(cars[i]);
}
