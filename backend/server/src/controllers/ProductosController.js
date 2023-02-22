const {Producto}=require('../db');

//trae todos los productos
const allProducts=async (req,res)=>{
    try{
        let productos= await Producto.findAll();
        console.log(productos.length)
        if(productos.length>0){
            return res.status(201).json({status:"success",productos});
        }else{
            return res.status(404).json({status:"error",msj:"No existen productos en la base de datos"})
        }
    }catch(e){
        res.status(404).json({message: "error, no se ha podido traer la lista de productos",e});
    }
    

}

//creas un producto
const createProducts=async (req,res)=>{
    let{nombre,talla,color,img,marca,genero,stock,precio}=req.body
    if(!nombre,!talla,!color,!img,!marca,!genero,!stock,!precio){
        return res.status(404).send("la informacion del producto esta incompleta");
    }
    try{
        const newProduct=await Producto.create(req.body) 
        return res.status(201).send({message:"Producto creado",newProduct})
    }catch(e){
        res.status(404).json({message: "error, no se ha podido crear el libro",e,});
    }
}

module.exports={
    allProducts,
    createProducts
}