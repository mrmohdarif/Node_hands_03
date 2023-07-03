const {home, contact, about,register,login,defaul } = require('../controler/api') 
const auth=require('../middleware/auth')
const auth2=require('../middleware2/auth2')
const route=require('express').Router()



route.get('/home',auth2,auth,home)

route.get('/contact',auth2,auth,contact)

route.get('/', auth2,defaul) 

route.get('/about', auth2,about)

route.get('/register', auth2,register)

route.get('/login', auth2,login)




module.exports=route
