let favoriteCityId = "rome"

console.log(favoriteCityId)
favoriteCityId = "paris"
console.log(favoriteCityId)

const citiesId = ["paris", "nyc", "rome", "rio-de-janeiro"]
console.log(citiesId)
// citiesId = []
// console.log(citiesId)
citiesId.push("tokyo")
console.log(citiesId)

function getWeather(cityId){
  let city = cityId.toUpperCase()
  let temperature = 20
  return {city,  temperature}
}
const weather = getWeather(favoriteCityId)
console.log(weather)

const {
  city: city,
  temperature: temperature
} = weather;
console.log(city)
console.log(temperature)

const [parisId, nycId, ...othersCitiesId] = citiesId
console.log(parisId)
console.log(nycId)
console.log(othersCitiesId.length)

class Trip{
  get price(){
    return this._price
  }
  set price(price){
    this._price = price
  }
  constructor(id, name, imageUrl){
    this.id = id
    this.name = name
    this.imageUrl = imageUrl
  }
  toString(){
    return `Trip [${this.id}, ${this.name}, ${this.imageUrl}, ${this.price}]`
  }
  static getDefaultTrip(){
    return new Trip("rio-de-janeiro", "Rio de Janeiro", "img/rio-de-janeiro.jpg")
  }
}
let parisTrip = new Trip("paris", "Paris", "img/paris.jpg")
console.log(parisTrip)
console.log(parisTrip.name)

console.log(parisTrip.toString())

parisTrip.price = 100
console.log(parisTrip.toString())

const defaultTrip = Trip.getDefaultTrip()
console.log(defaultTrip.toString())