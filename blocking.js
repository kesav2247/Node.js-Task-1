const fs = require('fs');


const content = `Session 1: ${new Date().toISOString()}`;

fs.writeFileSync('./test.txt', content, { flag: 'a' });
console.log('content written successfully!');