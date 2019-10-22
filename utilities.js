
export const separator = () => {
  process.stdout.write('\n\n');

  for (let i = 1; i <= 70; i++) {
    process.stdout.write('>');
  }

  process.stdout.write('\n\n');
}

