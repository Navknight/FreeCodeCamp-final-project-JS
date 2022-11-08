function palindrome(str) {
  let s = str.replace(/[^A-Za-z0-9]/g, "").toLowerCase();
  return s.split("").reverse().join("") == s;
}

palindrome("A man, a plan, a canal. Panama");