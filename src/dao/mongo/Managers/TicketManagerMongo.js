
import ticketModel from "../models/ticket.js"

export default class TicketManagerMongo {

    
    createTicket = (ticket) =>{
       return ticketModel.create(ticket);
    }
    getTicket = (ticket) => {
        return ticketModel.findOne(ticket);
     }  

}