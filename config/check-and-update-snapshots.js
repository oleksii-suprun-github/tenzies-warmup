import { execSync } from 'child_process';

const changedFiles = execSync('git diff --cached --name-only --diff-filter=ACMRTUXB')
  .toString()
  .split('\n')
  .filter((file) => file.endsWith('.tsx'));

if (changedFiles.length > 0) {
  execSync(
    `yarn node --experimental-vm-modules $(yarn bin jest) --coverage --verbose --no-cache ${changedFiles.join(' ')} --updateSnapshot`,
    {
      stdio: 'inherit',
    },
  );

  execSync('git add -A', {
    stdio: 'inherit',
  });
} else {
  console.log('No related tests to update snapshots for.');
}
