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

let b = 3;
{
  var a;
  let b = 10;
  const c = 15;

  {
    // let b = 10;
    // const c = 20;
    console.log(b, "blok koda");
    console.log(c, "blok koda");
  }
}
console.log(b, "global scope");
console.log(c, "global scope");
