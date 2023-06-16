const {Schema, model} = require ('mongoose')

const hurtoSchema = Schema ({
    direccion: {
        type: String,
        required: [ true, 'El campo es obligatorio']

    },
    latitud: {
        type: Number,
        required: [ true, 'La latitud es obligatoria' ],
        minlength:[6.217, 'Maximo debe digitar 10 numeros'],
        maxlength:[6.13, 'Maximo debe digitar 10 numeros']
    },
    longitud: {
        type: Number,
        required: [ true, 'La longitud es obligatoria'],
        minlength:[-75.34, 'Maximo debe digitar 10 numeros'],
        maxlength:[-75.567, 'Maximo debe digitar 10 numeros']

    },
    descripcion: {
        type:String,
        required: [ true, 'La descripción es obligatoria']
    },
    fecha: {
        type: Date,
        default: Date.now
    }
})

module.exports = model('Hurto', hurtoSchema)