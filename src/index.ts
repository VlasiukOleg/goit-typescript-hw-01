import { concatenation } from "./concatenation";


const button = document.querySelector('button')!;
const input = document.querySelector('input')!;

if (button && input) {
  button.addEventListener('click', () => {
    concatenation(input.value, 'hello!');
  });
}



// ! Index Properties -----------------

// type StringDictionary = {
//   [key: string] : string;
// }

// type Goods = {
//   [key: string]: number;
// }


// const fruits: Goods = {
//   apple: 10,
//   banana: 25,
//   orange: 15,
// }

// const vegetables: Goods = {
//   potato: 40,
//   tomato: 20,
//   garlic: 8,
// }

// --------------------------------------

// type MixedType = {
//   [key: string] : number | string;
// }

// const userInfo: MixedType = {
//   name: 'Bob',
//   age: 25,
//   country: 'Ukraine',
// }

// const bookDetails : MixedType = {
//   title: 'Rework',
//   page: 346,
// }


// ! Generic

// function identity<T>(arg: T): T {
//   return arg;
// }

// const input1 = identity<string>('Hello');
// const input2 = identity<number>(123);


//* extends та key of

function lengthOfObject<T extends {length: number}>(obj: T): number {
  return obj.length;
}

 lengthOfObject({name: "Earth", length: 10});


// TODO Створіть загальну функцію яка приймає об'єкт та ключ як рядок.Функція повина повертати значення цього ключа з об'єкта

// const  student = {
//   name: "John",
//   age: 25,
// }

// function getProperty<T,K extends keyof T>(obj: T, key: K): T[K] {
//   return obj[key];
// }

// let studentName = getProperty(student, "name");
// let studentAddress = getProperty(student, "age");

// console.log(studentName);
// console.log(studentAddress);

// * Partial <T>

