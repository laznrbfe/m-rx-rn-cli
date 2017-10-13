// init.js
import chalk from 'chalk';
import leftPad from 'left-pad';


function info(type, message) {
  console.log(`${chalk.green.bold(leftPad(type, 12))}  ${message}`);
}

function error(message) {
  console.error(chalk.red(message));
}

function success(message) {
  console.error(chalk.green(message));
}

export default function init() {
  console.log('init');
}
