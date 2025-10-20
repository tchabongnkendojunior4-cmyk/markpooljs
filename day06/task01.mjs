export function drawTriangle(height) {
if (typeof height !== 'number' || height <= 0)
return;

for (let i = 1; i <= height; i++) {
console.log('$'.repeat(i));
 }
}
