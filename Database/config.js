const {mongoose} = require('mongoose')

dbconnetion = async()=>{
    try{
        await (mongoose.connect(process.env.CNN_V))
        console.log('connecting')
    }catch(e){
        console.log(e)
    }
}

module.exports = dbconnetion

