let person = Object.create({}, {
  name: {
    value: 'Person',
    enumerable: true,
    writable: true,
    configurable: true,
  },
  birthYear: {
    value: 1973,
    enumerable: true,
    writable: true,
    configurable: false,
  },
  age: {
    get () {
      return new Date().getFullYear() - this.birthYear
    },
    set (newValue) {
      this.birthYear = newValue
    }
  }
})

for (let key in person) {
  if (person.hasOwnProperty(key)) {
    console.log(key + ': ' + person[key])
  }
}