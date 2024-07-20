function genPassword(
  passwordLength,
  includeLowercase,
  includeUppercase,
  includeNumbers,
  includeSymbols
) {
  const lowerChar = "abcdefghijklmnopqrstuvwxyz";
  const upperChar = lowerChar.toUpperCase();
  const numberChar = "0123456789";
  const symbolChar = "<>?:@#!$%^&*()";

  let allowedChars = "";
  let password = "";

  allowedChars += includeLowercase ? lowerChar : "";
  allowedChars += includeUppercase ? upperChar : "";
  allowedChars += includeNumbers ? numberChar : "";
  allowedChars += includeSymbols ? symbolChar : "";

  if (passwordLength <= 0) {
    return `password length should be at least one`;
  }
  if (allowedChars.length === 0) {
    return `at least one set of characters need to be allowed`;
  }
  for (let i = 0; i < passwordLength; i++) {
    const randomIndex = Math.floor(Math.random() * allowedChars.length);
    password += allowedChars[randomIndex];
  }
  return password;
}

const passwordLength = 12;
const includeLowercase = true;
const includeUppercase = true;
const includeNumbers = true;
const includeSymbols = true;

const password = genPassword(
  passwordLength,
  includeLowercase,
  includeUppercase,
  includeNumbers,
  includeSymbols
);

console.log(`Generated password: ${password}`);
