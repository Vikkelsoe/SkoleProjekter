function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {}

class Rektangel {
  constructor(højde, bredde) {
    this.højde = højde;
    this.bredde = bredde;
  }

  areal() {
    return this.højde * this.bredde;
  }

  udskrivOplysninger() {
    console.log("Kvadratet har bredde", this.bredde, "og højde", this.højde);
  }
}

class Kvadrat extends Rektangel {
  constructor(sidelængde) {
    super(sidelængde, sidelængde);
  }

  udskrivOplysninger() {
    console.log("Kvadratet har sidelængde", this.bredde);
  }
}

let objekt = new Rektangel(5, 10);
objekt.udskrivOplysninger();

let kvadrat = new Kvadrat(11);
kvadrat.udskrivOplysninger();
console.log(kvadrat.areal());
