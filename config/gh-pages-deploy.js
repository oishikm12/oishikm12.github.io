const execa = require('execa');
const emoji = require('node-emoji');
const chalk = require('chalk');
const fs = require('fs-extra');

const eArrows = emoji.get('fast_forward');
const eRocket = emoji.get('rocket');

const master = 'master';
const deploy = 'build';

(async () => {
  try {
    await execa('git', ['checkout', '--orphan', deploy]);
    console.log(`${eArrows} ${chalk.yellow('Building...')}`);
    await execa('npm', ['run', 'build']);
    // Understand if it's dist or build folder
    const folderName = fs.existsSync('dist') ? 'dist' : 'build';
    await execa('git', ['--work-tree', folderName, 'add', '--all']);
    await execa('git', ['--work-tree', folderName, 'commit', '-m', deploy]);
    console.log(`${eArrows} ${chalk.yellow('Pushing...')}`);
    await execa('git', ['push', 'origin', `HEAD:${deploy}`, '--force']);
    await execa('rm', ['-r', folderName]);
    await execa('git', ['checkout', '-f', master]);
    await execa('git', ['branch', '-D', deploy]);
    console.log(
      `${eRocket} ${chalk.green('Successfully deployed')} ${eRocket}`
    );
  } catch (e) {
    console.log(e.message);
    process.exit(1);
  }
})();
