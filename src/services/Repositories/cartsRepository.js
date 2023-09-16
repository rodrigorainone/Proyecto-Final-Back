export default class CartsRepository {
    constructor(dao){
        this.dao =dao;
    }
    createCart = ()=>{
        return this.dao.createCart();
    }
    getCartsByID= (params)=>{
        return this.dao.getCartsByID(params);
    }

    agregarProductCart= (idCart,producto)=>{
        return this.dao.agregarProductCart(idCart,producto);
    }

    eliminarProductCart = (idCart,producto)=>{
        return this.dao.eliminarProductCart(idCart,producto);
    }

    ModificarTodosProductCart = (idCart,arregloProductos)=>{
        return this.dao.ModificarTodosProductCart(idCart,arregloProductos);
    }

    ModificarQuantityProduct = (idCart,producto)=>{
        return this.dao.ModificarQuantityProduct(idCart,producto);
    } 

    EliminarTodosProductCart = (idCart)=>{
        return this.dao.EliminarTodosProductCart(idCart)
    }
}