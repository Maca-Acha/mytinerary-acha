const mongoose = require('mongoose');

const citySchema = new mongoose.Schema({
    name:{type:String, required: true}, //si es obligatorio o no
    country:{type:String},
    src:{type:String, required: true},
    description:{type: String},
    /* itineraries: [
        itineraryId: {type: mongoose.Types.ObjectId, ref:'itinerary'}
    ] */
})

const City = mongoose.model("city", citySchema )

module.exports = City;

