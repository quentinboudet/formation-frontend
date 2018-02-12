//let
let favoriteCityId = "rome"

console.log(favoriteCityId)
favoriteCityId = "paris"
console.log(favoriteCityId)

//const
const citiesId = ["paris", "nyc", "rome", "rio-de-janeiro"]
console.log(citiesId)
// citiesId = []
// console.log(citiesId)
citiesId.push("tokyo")
console.log(citiesId)

//Création d'objet
function getWeather(cityId) {
  let city = cityId.toUpperCase()
  let temperature = 20
  return { city, temperature }
}
const weather = getWeather(favoriteCityId)
console.log(weather)

//Affectation destructurée
const {
  city: city,
  temperature: temperature
} = weather;
console.log(city)
console.log(temperature)

//Rest operator
const [parisId, nycId, ...othersCitiesId] = citiesId
console.log(parisId)
console.log(nycId)
console.log(othersCitiesId.length)

//Classe
class Trip {
  get price() {
    return this._price
  }
  set price(price) {
    this._price = price
  }
  constructor(id, name, imageUrl) {
    this.id = id
    this.name = name
    this.imageUrl = imageUrl
  }
  toString() {
    return `Trip [${this.id}, ${this.name}, ${this.imageUrl}, ${this.price}]`
  }
  static getDefaultTrip() {
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

//Héritage
class FreeTrip extends Trip {
  constructor(id, name, imageUrl) {
    super(id, name, imageUrl)
    this.price = 0
  }
  toString() {
    return "Free" + super.toString()
  }
}

const freeTrip = new FreeTrip("nantes", "Nantes", "img/nanges.jpg")
console.log(freeTrip.toString())
console.log("hohé")

//Promise, Set, Map, Arrow Function
class TripService {
  constructor() {
    // TODO Set of 3 trips
    this.trips = new Set();
    this.trips.add(new Trip('paris', 'Paris', 'img/paris.jpg'));
    this.trips.add(new Trip('nantes', 'Nantes', 'img/nanges.jpg'));
    this.trips.add(new Trip('rio-de-janeiro', 'Rio de Janeiro', 'img/rio-de-janeiro.jpg'));
  }
  findByName(tripName) {
    // TODO return promise
    return new Promise((resolve, reject) => {
      setTimeout(() =>{
        this.trips.forEach(t => {
          if(t.name == tripName){
            resolve(t);
          }
        })
        reject("no trip with name "+ tripName)
      },2000)
    })
  }
}
class PriceService {
  constructor() {
    // TODO Map of 2 trips
    this.prices = new Map();
    this.prices.set("paris", 100);
    this.prices.set("rio-de-janeiro", 800);
  }
  findPriceByTripId(tripId) {
    // TODO return promise
    return new Promise((resolve, reject) => {
      setTimeout(() =>{
        let price = this.prices.get(tripId)
        
        if(price){
          resolve(price)
        }
        else reject("No price found")
        
      },2000)
    })
  }
}

let tripService = new TripService()
let priceService = new PriceService()

console.log("Service")
tripService.findByName("Paris")
.then(
    tripFound => console.log("Trip found : "+tripFound), 
    error => console.log(error)
);

tripService.findByName("Toulouse")
.then(
    tripFound => console.log("Trip found : "+tripFound), 
    error => console.log(error)
);

tripService.findByName("Rio de Janeiro")
.then( tripFound => priceService.findPriceByTripId(tripFound.id))
.then( priceFound => console.log("Price found : "+priceFound))
.catch(error => console.log(error));

tripService.findByName("Nantes")
.then( tripFound => priceService.findPriceByTripId(tripFound.id))
.then( priceFound => console.log("Price found : "+priceFound))
.catch( error => console.log(error));