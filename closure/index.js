const preson1 = { name: 'UserName1', age: 10, job: 'Job1' }
const preson2 = { name: 'UserName2', age: 16, job: 'Job2' }

function logPerson () {
  debugger
  console.log(`Person: ${this.name}, ${this.age}, ${this.job}`)
}

function bind(person, logFunction) {
  // person.logFunc = logFunction
  // person.logFunc()

  return function () {
    logFunction.apply(person)
  }
}

bind(preson1, logPerson)()
bind(preson2, logPerson)()