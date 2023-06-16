const {response} = require ('express')
const Hurto = require ('../Models/hurto')

const getHurto = async (req, res= response)=>{
    let mensaje = ''
    try{
        const hurto = await Hurto.find()
        mensaje = hurto
    }catch(e){
        mensaje = e
    }
    res.json({
        hurto : mensaje
    })

}

const postHurto = async (req, res) =>{
    let mensaje = ''
    const body = req.body
    const hurto = new Hurto(body)
    console.log(body)
    try{
        await hurto.save()
        mensaje = 'Hurto Registrado Exitosamente'
    }catch(e){
        mensaje = e.message
    }
    res.json({
        hurto: mensaje
    })
}

const putHurto = async(req, res = response) =>{
    const body = req.body
  
  let mensaje = ''

  try {
      if(body.tipoModificacion == 'Unitaria'){
          await Hurto.findOneAndUpdate({direccion: body.direccion}, {latitud: body.latitud, longitud: body.longitud,
            descripcion: body.descripcion})
          mensaje = 'Hurto modificado exitosamente.'
      }
      else{
          await Hurto.updateMany({latitud:body.latitud, longitud: body.longitud,
            descripcion: body.descripcion, direccion: body.direccion})
          mensaje = 'Hurto modificado exitosamente. '
      }


  } catch (error) {
      mensaje = error
  }
  res.json({
      hurto: mensaje
  })
 
}

const deleteHurto = async(req, res) => {
    let mensaje = ''
    const body = req.body
    try{
        await Hurto.findOneAndDelete({direccion: body.direccion})
        mensaje = 'Eliminado Exitosamente'
    }catch(e){
        mensaje = e
    }
    res.json({
        hurto: mensaje
    })
}

module.exports = {
   getHurto,
   postHurto,
   putHurto,
   deleteHurto
}
