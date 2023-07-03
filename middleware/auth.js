const auth=(req,res,next)=>{
    console.log("user authrosied");
    next()
}
module.exports=auth