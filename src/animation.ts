export function printFeatureMessage(featureName: string, style: 'bold' | 'italic' = 'bold'): void {
    let message = `${featureName}`;
    if (style === 'bold') {
        console.log('\x1b[1m%s\x1b[0m', `${message}`);
    } else {
        console.log('\x1b[3m%s\x1b[0m', `${message}`);
    }
}
