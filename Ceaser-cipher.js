function rot13(str) {
  const regex = new RegExp(/[A-Z]/)
  return str.split("").map((a, i) => {
    if (regex.test(a)) {
      if (a.charCodeAt(0) + 13 <= 90) {
        return String.fromCharCode(a.charCodeAt(0) + 13);
      } else {
        return String.fromCharCode(a.charCodeAt(0) + 13 - 26);
      }
    }
    else {
      return a;
    }
  }).join("");
}

console.log(rot13("SERR PBQR PNZC"));