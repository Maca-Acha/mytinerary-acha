const Itinerary = require('../models/Itinerary')

const itineraryControllers = {
    returnItineraries:(req,res)=>{
        Itinerary.find()
        .populate('city')
        .then((response)=> res.json({response}))
    }, 
    returnItinerary:(req,res)=>{
        Itinerary.findOne({_id: req.params.id})
            .then((response) =>{res.json({response})
    })  
    },
    returnItinerariesByCity: (req, res) => {
        Itinerary.find({city: {_id: req.params.city}})
            .then((response) => {
                res.json({response})
            })
            .catch((err) => console.log(err))
    },
    createItinerary:(req,res)=>{
        const {name, title, src, price, like, description, hashtags, comment, city}= req.body
        const itinerary = new Itinerary(req.body).save()
        .then((response)=> res.json({response}))
        console.log(itinerary)
    },
    deleteItinerary: async (req,res) =>{
        const id = req.params
        let itineraries
        try{
            await Itinerary.findOneAndDelete({_id:id})
            itineraries = await Itinerary.find()
        }catch(error){
        console.log(error)
        }
        res.json({response: itineraries, success:true})
    },
    modifyItinerary: async(req,res) => {
        try{
            actualizado = await Itinerary.findOneAndUpdate({_id:req.params.id}, {...req.body}, {new:true})
        }catch(error){
            console.log(error)
        }
        res.json({success:actualizado ? true : false})
    }
}


module.exports = itineraryControllers 


