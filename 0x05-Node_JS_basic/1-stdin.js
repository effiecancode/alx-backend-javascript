process.stdout.write('Welcome to Holberton School, what is your name?\n');

process.stdin.on('readable', () => {
  const jina = process.stdin.read();

  if (jina) {
    process.stdout.write(`Your name is: ${jina}`);
  }
});

process.stdin.on('end', () => {
  process.stdout.write('This important software is now closing\n');
});
