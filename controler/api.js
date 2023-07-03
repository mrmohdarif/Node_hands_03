
const defaul=(req,res)=>{
  console.log("default path");
   res.send({
    message:"default path"
   })
}
const home = (req, res) => {
  console.log("home")
  res.send({
    masage: 'home'
  })
}
const contact = (req, res) => {
 console.log("contact us")
  res.send({
    masage: 'contact'
  })
}
const about = (req, res) => {
  console.log("about us");
  res.send({
    massage: 'about'
  })
}
const register=(req,res)=>{
  console.log("register");
  res.send({
    message:"Your are on register page"
  })
}

const login=(req,res)=>{
  console.log("login");
res.send({
  message:"Your are on login page"
})
}

 module.exports = { home, contact, about,login,register,defaul }
