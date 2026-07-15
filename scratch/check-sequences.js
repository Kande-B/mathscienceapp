const data = require('../data/formations.json');
const f = data.find(x => x.id === '3pm');

console.log('=== SEQUENCES MATHS ===');
f.resources.maths.forEach((s, i) => {
  console.log(`${i + 1}. ${s.id} - ${s.title}`);
});

if (f.resources.sciences) {
  console.log('\n=== SEQUENCES SCIENCES ===');
  f.resources.sciences.forEach((s, i) => {
    console.log(`${i + 1}. ${s.id} - ${s.title}`);
  });
}

// Show all other niveaux
console.log('\n=== AUTRES NIVEAUX ===');
data.forEach(niveau => {
  if (niveau.id !== '3pm') {
    console.log(`\nNiveau: ${niveau.id} - ${niveau.full}`);
    if (niveau.resources) {
      Object.keys(niveau.resources).forEach(matiere => {
        console.log(`  Matière: ${matiere}`);
        niveau.resources[matiere].forEach((s, i) => {
          console.log(`    ${i + 1}. ${s.id} - ${s.title}`);
        });
      });
    }
  }
});
