function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {}

class Person {
  constructor(navn, cpr, mail) {
    this.navn = navn;
    this.cpr = cpr;
    this.mail = mail;
  }

  skiftMail(nyMail) {
    this.mail = nyMail;
    console.log(
      "Mailadressen tilhørende %s er skiftet til: %s",
      this.navn,
      this.mail
    );
  }

  printData() {
    console.log(
      "Følgende data haves på personen: \n Navn: %s \n CPR: %s \n Mail: %s",
      this.navn,
      this.cpr,
      this.mail
    );
  }
}

class Elev extends Person {
  constructor(navn, cpr, mail, stamklasse) {
    super(navn, cpr, mail);
    this.stamklasse = stamklasse;
  }

  printData() {
    console.log(
      "Følgende data haves på eleven: \n Navn: %s \n CPR: %s \n Mail: %s \n Stamklasse: %s",
      this.navn,
      this.cpr,
      this.mail,
      this.stamklasse
    );
  }
}

class Lærer extends Person {
  constructor(navn, cpr, mail, uvfag) {
    super(navn, cpr, mail);
    this.uvfag = uvfag;
  }

  printData() {
    console.log(
      "Følgende data haves på læreren: \n Navn: %s \n CPR: %s \n Mail: %s \n Undervisningsfag: %s",
      this.navn,
      this.cpr,
      this.mail,
      this.uvfag
    );
  }
}

let testPerson = new Person("Hans", "041291-2103", "hans@mail.dk", "kjahYgb");
testPerson.printData();
testPerson.skiftMail("hans2@mail.dk");
testPerson.printData();

let testElev = new Elev("Bjarne", "020202-9283", "bjarne@mail.dk", "3.v");
testElev.printData();
testElev.skiftMail("ennymail@mail.dk");
testElev.printData();

let testLærer = new Lærer("Line", "130870-3972", "line@mail.dk", "Matematik");
testLærer.printData();
testLærer.skiftMail("frkline@mail.dk");
testLærer.printData();
