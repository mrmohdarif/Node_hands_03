const auth2=(req,res,next)=>{
console.log("welcome in middleware all");
next()
}
module.exports=auth2