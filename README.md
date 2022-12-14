# Final Project for the DSA Course On JavaScript On FCC
## This is my final project for FCC's course on JavaScript

![certificate](certificate.jpeg)
(Verify this certification at https://freecodecamp.org/certification/navknight/javascript-algorithms-and-data-structures)

### Contents
- [Palindrome checker](#palindrome-checker)
- [Roman Numeral Converter](#roman-numeral-converter)
- [Caeser Cipher](#caeser-cipher)
- [Telephone Number Validator](#telephone-number-validator)
- [Cash Register](#cash-register)

### Palindrome checker

Return true if the given string is a palindrome. Otherwise, return false.

A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.

Note: You'll need to remove all non-alphanumeric characters (punctuation, spaces and symbols) and turn everything into the same case (lower or upper case) in order to check for palindromes.

We'll pass strings with varying formats, such as racecar, RaceCar, and race CAR among others.

We'll also pass strings with special symbols, such as 2A3*3a2, 2A3 3a2, and 2_A3*3#A2.

```js
function palindrome(str) {
  let s = str.replace(/[^A-Za-z0-9]/g, "").toLowerCase();
  return s.split("").reverse().join("") == s;
}

palindrome("A man, a plan, a canal. Panama");
```


### Roman Numeral Converter

Convert the given number into a roman numeral.

| Roman numerals| Arabic numerals |
|:-----------:|:---------------:|
|M	|1000|
|CM	|900
|D	|500
|CD	|400
|C	|100
|XC	|90
|L	|50
|XL	|40
|X	|10
|IX	|9
|V	|5
|IV	|4
|I	|1

All roman numerals answers should be provided in upper-case.

```js
function convertToRoman(num) {
  let roman = {
    1: "I",
    2: "II",
    3: "III",
    4: "IV",
    5: "V",
    6: "VI",
    7: "VII",
    8: "VIII",
    9: "IX",
    10: "X",
    20: "XX",
    30: "XXX",
    40: "XL",
    50: "L",
    60: "LX",
    70: "LXX",
    80: "LXXX",
    90: "XC",
    100: "C",
    200: "CC",
    300: "CCC",
    400: "CD",
    500: "D",
    600: "DC",
    700: "DCC",
    800: "DCCC",
    900: "CM",
    1000: "M",
    2000: "MM",
    3000: "MMM",
  };

  return num.toString().split("").reverse().map((a, i) => roman[a * Math.pow(10, i)]).reverse().join("");
}

console.log(convertToRoman(36));
```

### Caeser Cipher
One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.

A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus A ??? N, B ??? O and so on.

Write a function which takes a ROT13 encoded string as input and returns a decoded string.

All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.

```js
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
```

### Telephone Number Validator

Return true if the passed string looks like a valid US phone number.

The user may fill out the form field any way they choose as long as it has the format of a valid US number. The following are examples of valid formats for US numbers (refer to the tests below for other variants):
```js
- 555-555-5555
- (555)555-5555
- (555) 555-5555
- 555 555 5555
- 5555555555
- 1 555 555 5555
```
For this challenge you will be presented with a string such as 800-692-7753 or 8oo-six427676;laskdjf. Your job is to validate or reject the US phone number based on any combination of the formats provided above. The area code is required. If the country code is provided, you must confirm that the country code is 1. Return true if the string is a valid US phone number; otherwise return false.

```js
function telephoneCheck(str) {
  let regex = [/^(1\s*)?\(\d{3}\)(-|\s)*\d{3}(-|\s)*\d{4}$/,
    /^\d{10}$/,
    /^(1\s*)?\d{3}(-|\s)\d{3}(-|\s)\d{4}$/,
  ]
  return regex.some((a) => a.test(str));
}

console.log(telephoneCheck("1 555-555-5555"));
```

### Cash Register

Design a cash register drawer function checkCashRegister() that accepts purchase price as the first argument (price), payment as the second argument (cash), and cash-in-drawer (cid) as the third argument.

cid is a 2D array listing available currency.

The checkCashRegister() function should always return an object with a status key and a change key.

Return {status: "INSUFFICIENT_FUNDS", change: []} if cash-in-drawer is less than the change due, or if you cannot return the exact change.

Return {status: "CLOSED", change: [...]} with cash-in-drawer as the value for the key change if it is equal to the change due.

Otherwise, return {status: "OPEN", change: [...]}, with the change due in coins and bills, sorted in highest to lowest order, as the value of the change key.

|Currency| Unit |Amount|
|:------:|:---:|:----:|
Penny	|$0.01 |(PENNY)
Nickel	|$0.05 |(NICKEL)
Dime	|$0.1 |(DIME)
Quarter	|$0.25 |(QUARTER)
Dollar	|$1 |(ONE)
Five Dollars	|$5| (FIVE)
Ten Dollars	|$10| (TEN)
Twenty Dollars	|$20| (TWENTY)
One-hundred Dollars	|$100| (ONE HUNDRED)

See below for an example of a cash-in-drawer array:

```js
[
  ["PENNY", 1.01],
  ["NICKEL", 2.05],
  ["DIME", 3.1],
  ["QUARTER", 4.25],
  ["ONE", 90],
  ["FIVE", 55],
  ["TEN", 20],
  ["TWENTY", 60],
  ["ONE HUNDRED", 100]
]
```

#### Solution

```js
function checkCashRegister(price, cash, cid) {
    const denomination = {
        "PENNY": .01,
        "NICKEL": .05,
        "DIME": .10,
        "QUARTER": .25,
        "ONE": 1.00,
        "FIVE": 5.00,
        "TEN": 10.00,
        "TWENTY": 20.00,
        "ONE HUNDRED": 100.00
    }
    let cashremaining = 0;
    for (let element of cid) {
        cashremaining += element[1];
    }
    cashremaining = cashremaining.toFixed(2);
    let change = cash - price;
    const a = [];
    if (change > cashremaining) {
        return { status: "INSUFFICIENT_FUNDS", change: a };
    }
    else if (change.toFixed(2) === cashremaining) {
        return { status: "CLOSED", change: cid };
    }
    else {
        cid = cid.reverse();
        for (let elem of cid) {
            let temp = [elem[0], 0];
            while (change >= denomination[elem[0]] && elem[1] > 0) {
                temp[1] += denomination[elem[0]];
                elem[1] -= denomination[elem[0]];
                change -= denomination[elem[0]];
                change = change.toFixed(2);
            }
            if (temp[1] > 0) {
                a.push(temp);
            }
        }
    }
    if (change > 0) {
        return { status: "INSUFFICIENT_FUNDS", change: [] };
    }
    return { status: "OPEN", change: a };
}

checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);
```
