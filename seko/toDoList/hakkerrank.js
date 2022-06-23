// 'a', 'b', 'c', 'a', 'b'

let names = ['Alice', 'Bob', 'Tiff', 'Bruce', 'Alice']

let countedNames = names.reduce(function (allNames, name) {
  if (name in allNames) {
    allNames[name]++
  }
  else {
    allNames[name] = 1
  }
  return allNames;
}, {})

console.log(names);
// countedNames is:
// { 'Alice': 2, 'Bob': 1, 'Tiff': 1, 'Bruce': 1 }