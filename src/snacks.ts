import { printFeatureMessage } from "./animation";
export const snacks: string[] = ['Cookies', 'Candy', 'Chocolate', 'Fruit', 'Popcorn', 'Carrots'];
export function printSnacks() {
     console.log(snacks.join(', '));
}

// Call the function
printSnacks();

printFeatureMessage('Snacks', 'italic');
printFeatureMessage('Snacks', 'bold');