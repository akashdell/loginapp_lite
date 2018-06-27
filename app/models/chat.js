let mongoose= require('mongoose');
console.log("chat schema file");
let chatSchema= mongoose.schema({
    // connections: { type: [{ roomId: String, socketId: String }]},
    // message:{
    //     type:string,
    //     required:true
    // }
    name:{
        type:string,
        required:true
    },
    message:{
        type:string,
        required:true
    }
})
module.exports = mongoose.model('chats',chatSchema);