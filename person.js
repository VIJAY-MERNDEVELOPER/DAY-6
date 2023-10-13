class person {
  constructor(name, age, dob) {
    this._name = name;
    this._age = age;
    this._dob = dob;
  }
  get personDetails() {
    return `
        NAME:${this._name}
        AGE :${this._age}
        DOB :${this._dob}
        `;
  }
}

const person1 = new person("vijay", 28, 1995);
const person2 = new person("selva", 26, 1997);

console.log(person1.personDetails);
console.log(person2.personDetails);
