const { DataTypes, Sequelize }=require("sequelize"); 

module.exports=Sequelize=>{
    Sequelize.define('Producto',{
        nombre:{
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