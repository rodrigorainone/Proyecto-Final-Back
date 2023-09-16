import { Router } from "express";
import { privacy, handlePolicies } from "../middlewares/auth.js";
import viewsController from "../controllers/views.controller.js";


const router = Router();

router.get ('/',privacy('PRIVATED'),handlePolicies(['USER','PREMIUM']),viewsController.mostrarProductos)
router.get('/products', privacy('PRIVATED'),handlePolicies(['USER','PREMIUM']),viewsController.mostrarProductosPage)
//router.get('/realtimeproducts',privacy('PRIVATED'),handlePolicies(['ADMIN']),viewsController.realTimeProducts)    /* lo comento pq ya esta el panel de admin
router.get('/paneladmin',privacy('PRIVATED'),handlePolicies(['ADMIN',"PREMIUM"]),viewsController.panelAdmin)
router.get('/chat',privacy('PRIVATED'),handlePolicies(['USER',"PREMIUM"]), viewsController.chat)
router.get('/carts/:cid' ,privacy('PRIVATED'),handlePolicies(['USER',"PREMIUM"]), viewsController.getCarrito)
router.get('/register',privacy('NO_AUTHENTICATED'),viewsController.register)
router.get('/login',privacy('NO_AUTHENTICATED'),viewsController.login)
router.get('/profile',handlePolicies(['ADMIN','USER',"PREMIUM"]),viewsController.profile)
router.get('/restoreRequest',privacy('NO_AUTHENTICATED'),viewsController.restoreRequest)
router.get('/restorePassword',privacy('NO_AUTHENTICATED'),viewsController.restorePassword)
router.get('/paneladminuser',privacy('PRIVATED'),handlePolicies(['ADMIN']),viewsController.panelAdminUser)
router.get('/endpoint',(req,res)=>{       
    req.logger.debug('This is a debug log message.');
    req.logger.http('This is a debug log message.');
    req.logger.info('This is a debug log message.');
    req.logger.warning('This is a debug log message.');
    req.logger.error('This is a debug log message.');
    req.logger.fatal('This is a debug log message.');
})


export default router;