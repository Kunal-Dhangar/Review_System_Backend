import userModel from "../model/User.js";
  export const isAdmin=async(req,res,next)=>{
    try{
        const {email}=req.body;

        const userInfo=await userModel.findOne({email});

        if(userInfo && userInfo.role=="Admin")
        {
            next();
            //proceed
        }
        else{
            res.status(404).json({
                message:"Access  denied, only admin is allowed"
            })
        }
    }
    catch(error){
        console.log(error);
        
        res.status(500).json({
            error:"Internal Server Error"


        })

    }
}