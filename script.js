const letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "0123456789";
const symbols = "!@#$%^&*()_+-=[]{}|;:,.<>?";

const generateBtn = document.getElementById("generateBtn");
const copyBtn = document.getElementById("copyBtn");
const passwordOutput = document.getElementById("passwordOutput");

generateBtn.addEventListener("click", generatePassword);
copyBtn.addEventListener("click", copyToClipboard);

function generatePassword() {
  const length = parseInt(document.getElementById("length").value);
  const includeNumbers = document.getElementById("includeNumbers").checked;
  const includeSymbols = document.getElementById("includeSymbols").checked;

  let allChars = letters;
  if (includeNumbers) allChars += numbers;
  if (includeSymbols) allChars += symbols;

  let passwordArray = [];

  for (let i = 0; i < length; i++) {
    const randomChar = allChars[Math.floor(Math.random() * allChars.length)];
    passwordArray.push(randomChar);
  }

  // Shuffle characters
  passwordArray.sort(() => Math.random() - 0.5);

  const password = passwordArray.join("");
  passwordOutput.value = password;
}

function copyToClipboard() {
  if (passwordOutput.value) {
    navigator.clipboard.writeText(passwordOutput.value);
    alert("Password copied to clipboard!");
  }
}
