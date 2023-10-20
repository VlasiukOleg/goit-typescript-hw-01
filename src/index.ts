import { concatenation } from "./concatenation";


const button = document.querySelector('button')!;
const input = document.querySelector('input')!;

if (button && input) {
  button.addEventListener('click', () => {
    concatenation(input.value, 'hello!');
  });
}



// ! Index Properties -----------------

type StringDictionary = {
  [key: string] : string;
}

type Goods = {
  [key: string]: number;
}


const fruits: Goods = {
  apple: 10,
  banana: 25,
  orange: 15,
}

const vegetables: Goods = {
  potato: 40,
  tomato: 20,
  garlic: 8,
}