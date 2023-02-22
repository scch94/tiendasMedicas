const server= require("./app")
const {conn}=require("./src/db")
const {PORT}=process.env


conn.sync({force:false}).then(()=>{
    console.log("conectado a la base de datos de UniformesMedicos")
    server.listen(PORT,()=>{
        console.log(`escuchadno el puerto: ${PORT}`)
    })
})


