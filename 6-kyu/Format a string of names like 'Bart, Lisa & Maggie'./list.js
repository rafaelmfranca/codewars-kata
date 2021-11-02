function list(names) {
  let str = "";

  while (names.length) {
    str += names.shift().name;
    if (names.length === 1) str += " & ";
    else if (names.length > 1) str += ", ";
  }

  return str;
}

console.log(
  list([
    { name: "Bart" },
    { name: "Lisa" },
    { name: "Maggie" },
    { name: "Homer" },
    { name: "Marge" },
  ]),
  "Bart, Lisa, Maggie, Homer & Marge",
  "Must work with many names"
);
console.log(
  list([{ name: "Bart" }, { name: "Lisa" }, { name: "Maggie" }]),
  "Bart, Lisa & Maggie",
  "Must work with many names"
);
console.log(
  list([{ name: "Bart" }, { name: "Lisa" }]),
  "Bart & Lisa",
  "Must work with two names"
);
console.log(list([{ name: "Bart" }]), "Bart", "Wrong output for a single name");
console.log(list([]), "", "Must work with no names");
