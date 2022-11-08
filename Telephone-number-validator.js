function telephoneCheck(str) {
  let regex = [/^(1\s*)?\(\d{3}\)(-|\s)*\d{3}(-|\s)*\d{4}$/,
    /^\d{10}$/,
    /^(1\s*)?\d{3}(-|\s)\d{3}(-|\s)\d{4}$/,
  ]
  return regex.some((a) => a.test(str));
}

console.log(telephoneCheck("1 555-555-5555"));