import mongoose  from "mongoose";


const { Schema, model } = mongoose;


const documentSchema = new Schema (
    {
name: { type: String, required: true },
textData: { type: String },

},
 { timestamps: true }
)

// userSchema.statics.checkCredentials = async function (email, plainPW) {
//     console.log("EMAIL:", email)
//     console.log("pw:",plainPW)
//     //finds user by email
//     //if user => compare PWs 
//     const user = await this.findOne({email: email}).populate({path:"games", populate:{path:"characters"}}) 
  
//     if (user) {
//         const passwordMatch = await bcrypt.compare(plainPW, user.password)
//         if (passwordMatch) {
//             return user
//         } else {
//             return null
//         }
//     } else {
  
//       return undefined
//     }
    
//   }  

//   userSchema.pre("save", async function (next) {
//     const newUser = this;
//     console.log(this)
//     const plainPW = newUser.password;
//     console.log("the password is :", plainPW)

//     if (newUser.isModified("password")) {
//         const hash = await bcrypt.hash(plainPW, 10);
//         console.log("got this far")
//       newUser.password = hash;
//     } else {
//         console.log("This didn't work")
//     }

//     console.log("after the hash: ", newUser)
//     next()
//   });

  
// userSchema.methods.toJSON = function() {
//   const CurrentDoc = this  
//   const userObject = CurrentDoc.toObject()
//   if (userObject.role !== "admin") {
//     delete  userObject.password
//     delete  userObject.__v
//   }
//   return userObject
// }  

export default model("Document", documentSchema)