import {productService,cartService} from "../services/index.js";
import TokenDTO from "../dtos/user/TokenDTO.js";
import {userService } from "../services/index.js";
import  jwt  from "jsonwebtoken";
import config from "../config/config.js";

const mostrarProductos = async (req,res )=>{
    const product = await productService.getProducts();   
    res.render('home',{product,
        css:'home'})
}

const mostrarProductosPage = async (req,res) =>{
    const {page=1} = req.query;
    const {limit=10} = req.query
    const {sort} = req.query
    const {category} = req.query;
    const {status} = req.query;
    let sortAux;
    if (sort!==undefined){
      if (sort =="asc"){
        sortAux = 1;
     }
     else{
       if (sort=="des"){
         sortAux = -1;
       }    
     }
    }  
    
    const {docs,hasPrevPage,hasNextPage,prevPage,nextPage, ...rest} =  await productService.getProductsPaginate(page,limit,sortAux,category,status); 
    
    const product = docs;  
    res.render('home',{user:req.session.user,product,hasPrevPage,hasNextPage,prevPage,nextPage,page:rest.page,limit,sort ,category,status, css:'home'})
  }


  const realTimeProducts =  async (req,res)=>{       
    res.render('realTimeProducts',{
      css:'realtimeproducts'  
    });
}

 const chat = async(req,res)=>{
    res.render('chat');
  }

const getCarrito = async (req,res) =>{
    const carritoId = await cartService.getCartsByID(req.params.cid).populate('products.product');
    
    let total=0;
    carritoId.products.forEach(element => {          
        if (element.product){
          total= total + element.quantity*element.product.price;
        }       
    });
    
    res.render('home',{carritoId ,total,css:'home'})
  }

const register = (req,res)=>{
    res.render('register',{css:'home'});
  }

const login = (req,res)=>{
    res.render('login',{css:'home'});
  }

  const profile =(req,res)=>{
    res.render('profile',{
        user:req.session.user
    })
  }

  const panelAdmin = (req,res) =>{
    res.render('panelAdmin',{
      user:req.session.user,
      css:'realtimeproducts'
    })
  }

  const restoreRequest = (req,res) =>{
    res.render('restoreRequest')
  }

  const restorePassword = (req,res) =>{
    const {token} = req.query;
    try{
      const validToken = jwt.verify(token,config.jwt.SECRET)
      res.render('restorePassword')
    } 
    catch(error){      
       return res.render('invalidToken')    
      }   
   
  }

  const panelAdminUser = async (req,res)=>{
    const users = await userService.getUserAll();
    const userDTO = users.map( user =>  new TokenDTO(user) ) 
    res.render('panelAdminUser',{
      users:userDTO,
      css:'realtimeproducts'
    })
  }

export default {
    mostrarProductos,
    mostrarProductosPage,
    realTimeProducts,
    chat,
    getCarrito,
    register,
    login,
    profile,
    panelAdmin,
    restoreRequest,
    restorePassword,
    panelAdminUser
}
