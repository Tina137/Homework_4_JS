let a = String(prompt("which language you choose?"));

switch (a) {
  case "ukrainian":
    let c = String(prompt("напиши слово"));
    switch (c) {
      case "Яблуко":
        alert("Apple");
        break;
      case "Автомобіль":
        alert("Car");
        break;
      case "Телефон":
        alert("Phone");
        break;
      case "Ноутбук":
        alert("Laptop");
        break;
      default:
        alert("Вибачте в нас немає таких слів у базі :(");
        prompt("напиши слово");
        break;
    }
  case "english":
    let b = String(prompt("write the word"));
    switch (b) {
      case "Apple":
        alert("Яблуко");
        break;
      case "Car":
        alert("Автомобіль");
        break;
      case "Phone":
        alert("Телефон");
        break;
      case "Laptop":
        alert("Ноутбук");
        break;
      default:
        alert("Sorry, we don't have such words in the database :(");
        prompt("write the word");
        break;
    }
  default:
    alert("Вибачте але ви можете вибрати тільки англійську або українську");
    prompt("which language you choose?");
}
