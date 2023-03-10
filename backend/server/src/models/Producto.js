const { DataTypes, Sequelize }=require("sequelize"); 

module.exports=Sequelize=>{
    Sequelize.define('Producto',{
        nombre:{
            type:DataTypes.STRING,
            allownull:false
        },
        talla:{
            type:DataTypes.STRING,
            allownull:false
        },
        color:{
            type:DataTypes.STRING,
            allownull:false
        },
        img:{
            type:DataTypes.STRING,
            allownull:false
        },
        marca:{
            type:DataTypes.STRING,
            allownull:false
        },
        genero:{
            type:DataTypes.ENUM("M","F"),
            allownull:false
        },
        stock:{
            type:DataTypes.FLOAT,
            allownull:false
        },
        precio:{
            type:DataTypes.FLOAT,
            allownull:false
        },
        estado:{
            type:DataTypes.ENUM('activo','desactivado'),
            allownull:false,
            defaultValue:'activo'
        }
        })
}