import { concatenation } from "./concatenation";
const button = document.querySelector('button');
const input = document.querySelector('input');
if (button && input) {
    button.addEventListener('click', () => {
        concatenation(input.value, 'hello!');
    });
}
const fruits = {
    apple: 10,
    banana: 25,
    orange: 15,
};
const vegetables = {
    potato: 40,
    tomato: 20,
    garlic: 8,
};
//# sourceMappingURL=index.js.map