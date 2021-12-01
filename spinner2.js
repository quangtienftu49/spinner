
const arr = ['|   ', '/   ', '-   ', '\\   ', '|   ', '/   ', '-   ', '\\   \n']
let delay = 100;

for (const item of arr) {
  setTimeout(() => {
    process.stdout.write('\r' + item);
  }, delay);
  delay += 200;
}