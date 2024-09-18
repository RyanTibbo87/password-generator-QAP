# Password Generator CLI

A Command-Line Interface (CLI) application to generate secure passwords with customizable options.

## Features

- Generate passwords of a specified length.
- Optionally include numbers, uppercase letters, and symbols in the password.
- Provides a help message with usage instructions.

## Usage

```bash
password-generator [options]
```
Options
--help, -h: Display the help message
--length, -l <num>: Set the desired password length (default: 8)
--numbers, -n: Add numbers to the generated password
--capitals, -c: Include uppercase letters in the password
--symbols, -s: Add special characters to the password
Example
password-gen --length 12 --numbers --symbols
This command will generate a 12-character password including numbers and special symbols
