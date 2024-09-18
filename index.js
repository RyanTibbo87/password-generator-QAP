#!/usr/bin/env node

const { program } = require("commander");
const chalk = require("chalk");

// Function to generate random password
function generatePassword(
  length,
  includeNumbers,
  includeUppercase,
  includeSymbols
) {
  const lowercase = "abcdefghijklmnopqrstuvwxyz";
  const numbers = "0123456789";
  const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const symbols = "!@#$%^&*()_+~`|}{[]:;?><,./-=";

  let characters = lowercase;

  if (includeNumbers) characters += numbers;
  if (includeUppercase) characters += uppercase;
  if (includeSymbols) characters += symbols;

  let password = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    password += characters[randomIndex];
  }

  return password;
}

// CLI implementation using Commander.js
program
  .name("password-generator")
  .description("CLI tool to generate secure passwords")
  .version("1.0.0")
  .option("-l, --length <number>", "length of the password (default is 8)", "8")
  .option("-n, --numbers", "include numbers in the password")
  .option("-u, --uppercase", "include uppercase letters in the password")
  .option("-s, --symbols", "include symbols in the password")
  .helpOption("-h, --help", "display help for command")
  .parse(process.argv);

const options = program.opts();

// Handle invalid length input
const length = parseInt(options.length);
if (isNaN(length) || length <= 0) {
  console.log(chalk.red("Error: Invalid password length specified."));
  process.exit(1);
}

// Generate password with provided options
const password = generatePassword(
  length,
  options.numbers,
  options.uppercase,
  options.symbols
);

// Output the generated password
console.log(chalk.green(`Generated Password: ${password}`));
