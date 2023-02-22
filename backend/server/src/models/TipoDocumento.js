const { DataTypes, Sequelize }=require("sequelize"); 

module.exports=Sequelize=>{
    Sequelize.define('TipoDocumento',{
        descripcion:{
            type:DataTypes.STRING,
            unique:true,
            allownull:false
        },
        estado:{
            type:DataTypes.ENUM('activo','desactivado'),
            allownull:false,
            defaultValue:'activo'
        }
        })
}