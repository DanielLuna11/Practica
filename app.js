const mongoose = require('mongoose');
const url_db = 'mongodb://localhost:27017/Practica';

mongoose.connect(url_db)
.then(() => {
    console.log('conexion exitosa')
})
.catch((err) =>{
    console.log('no jalo alv')
})

const esquemaAlumnos = new mongoose.Schema(
    {
        name: {
            type:String
        },
        apepat: {
            type:String
        },
        apemat: {
            type:String
        },
        telnumber: {
            type:Number
        },
        fechanac: {
            type:Date
        },


    }

)

const alumnos =new mongoose.model('tabla de registro de alumnos', esquemaAlumnos)

alumnos.create(
    {
        name:'daniel',
        apepat: 'gallegos',
        apemat: 'luna',
        telnumbre: 4494131429,
        fechanac: new Date(2004, 3, 15)

    }
)