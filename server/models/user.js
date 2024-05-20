import {mongoose ,Schema} from 'mongoose';
const userSchema =new Schema(
    {
        firstName :{
            type: String,
            required:true,
            trim:true
        },
        lastName :{
            type: String,
            trim: true
        },
        email:{
            type:String,
            required: [true,"Email is requried"],
            unique :true,
            trim:true
        },
        mobile:{
            type:Number,
            required: [true,"Mobile is requried"]
        },
        gender:{
            type:String,
        },
        location:{
            type:String,
            required:true
        },
        status:{
            type:String,
            default:'inactive'
        },
        profileImage:{
            
        }

    }
)
