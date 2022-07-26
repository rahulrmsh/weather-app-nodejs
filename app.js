const request = require('postman-request')

const url = 'http://api.weatherstack.com/current?access_key=f5b1c7acbc8fefc1024ff1017a3208f0&query=Kodungallur'
const log = console.log
request({ url: url }, (error, response) => {
  const data = JSON.parse(response.body)
  log(data.current)
  log(error)
})
