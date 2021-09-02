const URL = "https://jsonplaceholder.typicode.com/todos";

let delay = (ms) => {
  return new Promise((f) => {
    setTimeout(() => f(), ms)
  });
};

// function fetchData() {
//   delay(2000).then(() => {
//     fetch(URL)
//       .then((response) => response.json())
//       .then((json) => console.log(json))
//   })
// }

// fetchData()

async function fetchData() {
  try {
    await delay(3000)
    let response = await fetch(URL)
    let data = await response.json()
    console.log(data)
  } catch (error) {
    console.log(error)
  }
}

fetchData()
