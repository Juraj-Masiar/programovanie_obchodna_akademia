
// To shuffle text using our methods, you need to convert it to array of characters first.

const text = 'hello from text';
const arrayOfCharacters = text.split('');

console.log('Original:\n', text);
console.log('As array:\n', arrayOfCharacters);

// To get back the text from array of characters you can use `join` function:
const joinedText = arrayOfCharacters.join('');
console.log('\n Joined text:\n', joinedText);
