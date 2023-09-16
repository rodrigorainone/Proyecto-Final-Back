import mongoose from 'mongoose';
import config from '../config.js';


//A partir de esa variable, definirá qué DAO tomar.
export default class PersistenceFactory {
    static async getPersistence() {
        let usersDAO;
        let productDAO;
        let cartDAO;
        let ticketDAO;        
        switch(process.env.PERSISTENCE) {            
            case "FS":
                // como solo tengo product y cart manager en fs lo dejo como referencia para futuros proyectos pero no los declaro . 
                break;
            
            case "MONGO":
                //mongoose.connect(process.env.MONGO_URL)
                const {default: userMongoDAO} = await import('./mongo/Managers/UserManagerMongo.js')
                usersDAO = new userMongoDAO();

                const {default: productMongoDAO} = await import('./mongo/Managers/ProductsManagerMongo.js')
                productDAO = new productMongoDAO();

                const {default :cartMongoDAO} = await import ('./mongo/Managers/CartsManagerMongo.js')
                cartDAO = new cartMongoDAO();

                const {default : ticketMongoDAO} = await import ('./mongo/Managers/TicketManagerMongo.js')
                ticketDAO = new ticketMongoDAO();               

                break;
        }
        return {
            usersDAO,
            productDAO,
            cartDAO,
            ticketDAO
            
        };
    }

}