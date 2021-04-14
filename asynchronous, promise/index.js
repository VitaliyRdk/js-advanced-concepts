let promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log('preparing data...')
    const data = {
      server: 'serverData',
      port: 2000,
      status: 'working'
    }
    resolve(data)
    // reject(data)
  }, 2000)
}).then((data) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      data.modified = true
      resolve(data)
    }, 2000)
  })
}).then(data => {
  console.log(data)
}).catch(error => {
  console.error('Error', error)
}).finally(() => {
  console.log('finally callback')
})

const sleep = ms => {
  return new Promise(resolve => {
    setTimeout(() => resolve(), ms)
  })
}

sleep(2000).then(() => console.log('2000 sec'))

Promise.all([sleep(2000), sleep(5000)]).then(() => {
  console.log('all promises')
})