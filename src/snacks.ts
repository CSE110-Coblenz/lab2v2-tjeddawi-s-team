import { printFeatureMessage } from "./animation";

export function printSnacks() {
    const snacks: string[] = ['Cookies', 'Candy', 'Chocolate', 'Fruit'];
    console.log(snacks.join(', '));
}

// Call the function
printSnacks();

printFeatureMessage('Snacks', 'italic');
printFeatureMessage('Snacks', 'bold');