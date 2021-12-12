const joi = require('joi')

const validator = (req, res, next) => {
    const schema = joi.object({
        name: joi.string().max(12).min(3).trim().pattern(new RegExp ('[a-zA-Z]')).messages({
            'string.empty' : "this field is required",
            'string.min' : "This field must be at least 3 characters long"
        }),
        lastName: joi.string(),
        password: joi.string().required().trim().max(12).min(8).required().messages({
            'string.empty' : "this field is required",
            'string.min' : "This field must be at least 8 characters long"
        }),
        email: joi.string().required(),
        photo: joi.string(),
        country: joi.string()
    })
    const validation = schema.validate(req.body, {abortEarly:false})
    if(validation.error) {
        console.log(validation.error.details)
        return res.json({success: false, response:validation.error.details })
    }
    next()
}

module.exports = validator