class Circle {
  constructor(radius, color) {
    this._radius = radius;
    this._color = color;
  }

  getArea() {
    return Math.PI * Math.pow(this._radius, 2);
  }

  getCircumeference() {
    return 2 * Math.PI * this._radius;
  }

  getValues() {
    return `
        radius : ${this._radius}
        color  : ${this._color}
                `;
  }
}

const circleObj = new Circle(20, "blue");
console.log("Area of Circle          :", circleObj.getArea().toFixed(2));

console.log(  "Circumeference of Circle:", circleObj.getCircumeference().toFixed(2));

console.log(circleObj.getValues());



