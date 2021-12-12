const { default: axios } = require('axios')
const bcryptjs = require ('bcryptjs')
const User = require('../models/User')
const jwt = require('jsonwebtoken')

const authControllers = {
    signUp: async(req,res) => {
        const {name, lastName, email, password, photo, country} = req.body
        try{
            const userExist = await User.findOne({email})
            if (userExist){
                res.json({success: false, error: "The username is already registered", response:null})
            }else{
                const passwordHasheada = bcryptjs.hashSync(password,10)
                const newUser = new User ({name, lastName, email, password:passwordHasheada, photo, country} )
                await newUser.save()
                res.json({success: true, response: newUser, error: null})
            }
        }catch(error){
            res.json({success: false, response: null, error: error})
        }
    },
    readUsers:(req,res) => {
        User.find().then((response)=>{
            res.json({response})
        })
    },
    signIn:async(req,res) => {
        const {password, email} = req.body
        try{
            const emailExist = await User.findOne({email})
            if(emailExist){
                let passwordSuccess = bcryptjs.compareSync(password, emailExist.password)
                console.log("hola tu viejA")
                if(passwordSuccess){
                    const token = jwt.sign({...emailExist}, process.env.SECRET_KEY)
                    console.log(req)
                    res.json({success:true, response:{token, emailExist }, error:null})
                }else{
                    res.json({success: false, error: "The password is incorrect", response: null}) //CAMBIAR MENSAJE
                }
            }else{
                res.json({success: false, error: "The email is incorrect", response: null}) //CAMBIAR MENSAJE
            }
        }catch(error){
        res.json({success: false, response: null, error: error})
        }
    }
}

module.exports = authControllers