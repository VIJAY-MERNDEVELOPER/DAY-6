console.log("working Good");

class price {
  constructor(rate, distance) {
    this.rate = rate;
    this.distance = distance;
  }
  get uberPrice() {
    return `Uber price is ${this.rate * this.distance}`;
  }
}

const priceObj = new price(20, 45);
console.log(priceObj.uberPrice);
