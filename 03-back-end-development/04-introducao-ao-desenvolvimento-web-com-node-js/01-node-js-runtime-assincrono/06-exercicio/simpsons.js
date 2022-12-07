const fs = require('fs').promises;

async function readAll() {
  const fileContent = await fs.readFile('./simpsons.json', 'utf-8');
  const parsedFile = JSON.parse(fileContent);
  parsedFile.forEach(({id, name}) => console.log(`${id} - ${name}`));
}

async function main() {
  await readAll()
}

main();