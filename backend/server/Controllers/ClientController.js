import ClientDao from "../Dao/ClientUser.js";
import mongodb from 'mongodb'

const ObjectId = mongodb.ObjectId

export default class ClientController{
    static async apiGetClient(req,res,next){
        const ClientPerPage = req.query.ClientPerPage ? parseInt(req.ClientPerPage, 10) :20
        const page = req.query.page  ? parseInt(req.query.page, 10): 0
    
        const {ClientList,totalNumClientList} = await ClientDao.getUser()
        let response = {
            Client:ClientList,
            total_result:totalNumClientList
        }
        res.json(response.Client)
        console.log(response.Client)
    }
    static async apiPostClient(req,res){
        try{
            const userId = req.body.user_id
            const personal = {
                name:req.body.name,
                surname:req.body.surname,
                age:req.body.age,
                image:req.body.image,
                email:req.body.email,
                password:req.body.password
            }
            const date = new Date()
            const ClientRes = await ClientDao.addClient(
                ObjectId(userId),
                personal,
                date
            )
            console.log(ClientRes)
            res.json({status:"Success"})
        }catch(e){
            res.status(500).json({error:e.message})
        }
    }
}