function checkUser() {
  let name;
  do {
    name = prompt("Введите ваше имя");
  } while (!name);
  let isAgeValid = confirm("Вам есть 18?");
  if (!isAgeValid) {
    alert("Вам нет 18!");
  } else {
    return greeting();
  }
  function greeting() {
    alert("Ваше имя " + name);
  }
}
console.log(checkUser());

function printAllEvenNumbers() {
  let number1;
  do {
    number1 = +prompt("Введите число");
  } while (!number1 || number1 < 0);
  for (let i = 0; i <= number1; i++) {
    if (i % 2 == 0) {
      console.log(i);
    }
  }
}
printAllEvenNumbers();

function del(obj, key) {
  for (let i in obj) {
    let i = key;
    if (i in obj) {
      delete obj[i];
      return obj;
    } else {
      return null;
    }
  }
}

console.log(del({ name: "peter", age: 22 }, "dfgfd"));
