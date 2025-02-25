"use strict";
// let name = "Nick";
// let age = 21;
// let color = "green";

// console.log(name, age, color);
/* 
console.log(2 ** 7);
console.log(20 % 7);
let firstName = "Николай";
let lastName = "Сульженко";
let age = 21  ;
console.log(`Привет, меня зовут ${firstName} ${lastName}, мне ${age} год`) */

/* function passRandom(a) {
	const password = 'siuehruwauefh89u431234567890-=#%^&*(A*&^2qeq2847q23'
	let pass = ''
	for (let i = 0; i <= a; i++) {
		const passIndex = Math.round(Math.random() * password.length)
		pass = pass + password[passIndex]
	}
	return pass
}
console.log(passRandom(50)) */

/* const fn1 = (a) => (a % 2 === 0 ? `Число ${a} является четным` : `Число ${a} является нечетным`);
console.log(fn1(12394)); */

/* const calculateArea = (a, b) => console.log(a * b)
calculateArea(10, 30)

const fn1 = a => a.length
console.log(fn1('Hellosdfadsf'))

const fn2 = a =>
	a % 2 === 0 ? `Число ${a} является четным` : `Число ${a} является нечетным`
console.log(fn2(53))

const obj = {
	name: 'Nick',
	age: 21,
	city: 'London',
}
console.log('--------------------------')

console.log(`возраст ${obj.age}`)
delete obj.age
console.log(`возраст ${obj.age}`)
obj.age = 25
console.log(`возраст ${obj.age}`)
obj.age = 73
console.log(`возраст ${obj.age}`)
console.log('--------------------------')
console.log(obj['city'])
console.log('--------------------------')
delete obj.age
obj.num = 7
console.log(`num ${obj.num}`)

console.log(obj)

for (let key in obj) {
	console.log(`${key}  --  ${obj[key]}`)
}
 */

/* const student = {
	name: 'Nick',
	university: 'KKEP',
	major: 3
}

function fn1 (a) {
const {name, university, major} = a
console.log(`Студент ${name} обучается в университете ${university} на ${major} курсе `)
} 

fn1(student) */

/* const car = {
	brand: "Toyota",
	model: "Camry",
	year: 2020
}

console.log(Object.values(car)) */

const arr = [1, 2, 3, 4, 5, 6, 7];
let num = 0;
arr.forEach((item) => console.log(`${item * item}`));
console.log(num);
console.log("-------------------------------");
const arr1 = arr.map((index) => index * index);
console.log(arr1);

console.log("-------------------------------");
const users = [
  { id: 1, name: "Alice", isActive: true },
  { id: 2, name: "Bob", isActive: false },
  { id: 3, name: "Charlie", isActive: true },
  { id: 4, name: "David", isActive: false },
  { id: 5, name: "Eve", isActive: true },
];

const isActive = users.filter((i) => i.isActive == true);

console.log(isActive);

console.log("-------------------------------");

const students = [
  { name: "Алиса", subjects: ["JavaScript", "Python"] },

  { name: "Боб", subjects: ["Java", "C++"] },

  { name: "Чарли", subjects: ["HTML", "CSS"] },
];

const studentName = "Алиса";

const findStudent = students.find((i) => i.name == studentName);
const includes = findStudent.subjects.includes("Ja");
console.log(includes);

console.log("-------------------------------");

const reduce = arr.reduce((acc, item) => acc + item);

console.log(reduce);

console.log("-------------------------------");

const words = ["Привет", "мир", "изучаем", "JavaScript"];

function combineStrings(arr) {
  return words.reduce((acc, item) => acc + " " + item);
}

const combinedString = combineStrings(words);
console.log(combinedString); // Ожидаемый результат: 'Привет мир изучаем JavaScript'

console.log("-------------------------------");

const user = [
  { name: "Alice", age: 30, country: "USA" },

  { name: "Bob", age: 25, country: "Canada" },

  { name: "Charlie", age: 35, country: "UK" },

  { name: "Diana", age: 40, country: "USA" },

  { name: "Eva", age: 22, country: "Canada" },
];

const filteredUsers = use
  .sort((item, item2) => item.age - item2.age)
  .filter((i) => i.country == "USA");

console.log(filteredUsers);

console.log("-------------------------------");

const library = [];
library.push(["Война и мир", "Лев Николаевич Толстой", 1869]);
library.push([
  "Сборник стихов А.С. Пушкина",
  "Александр Сергеевич Пушкин",
  2017,
]);
library.push(["Древний мир. Египет, Греция, Рим", "Astra", 2020]);
console.log(library);

console.log("-------------------------------");

const numbers = [1, 2, 3, 4, 5, 6, 7, 4, 2];

console.log(numbers.flatMap((num) => (num % 2 === 0 ? num : [])));

console.log("-------------------------------");

console.log(numbers.reduce((acc, num) => acc + num));
console.log(
  numbers.reduce((acc, num) => (acc < num ? (acc = num) : (acc = acc)))
);
console.log(Math.max(...numbers));
