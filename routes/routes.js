const Router = require ('express').Router();
const citiesControllers = require('../controllers/citiesControllers')
const itineraryControllers = require('../controllers/itineraryControllers')

Router.route('/cities')
.get(citiesControllers.returnCities)
.post(citiesControllers.createCity)

Router.route('/city/:id')
.get(citiesControllers.returnCity)
.post(citiesControllers.createCity)
.delete(citiesControllers.deleteCity)
.put(citiesControllers.modifyCity)

Router.route('/itineraries')
.get(itineraryControllers.returnItineraries)
.post(itineraryControllers.createItinerary)

Router.route('/itineraries/:id')
.get(itineraryControllers.returnItinerary)
.post(itineraryControllers.createItinerary)
.delete(itineraryControllers.deleteItinerary)
.put(itineraryControllers.modifyItinerary)

Router.route("/itinerary/:city")
.get(itineraryControllers.returnItinerariesByCity)

module.exports = Router