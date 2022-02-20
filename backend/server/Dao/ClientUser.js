import mongodb from 'mongodb'

const ObjectId = mongodb.ObjectID

let Client

export default class ClientDao{
    static async injectDB(conn){
        if(Client){
            return
        }
        try{
            Client = await conn.db(process.env.Database).collection('Client')
        }catch(e){
            console.log(`Unable to establish a connection handle at ClientDao:${e}`)
        }
    }
    static async addClient(userId,personal,date){
        try{
            const clientDao ={
                userId:userId,
                name:personal.name,
                surname:personal.surname,
                age:personal.age,
                image:personal.image,
                email:personal.email,
                password:personal.password,
                date:date
            }
            console.log(clientDao)
            return await Client.insertOne(clientDao)

        }catch(e){
            console.log('client not posted')
        }
    }
    static async getUser({
        filters = null,
        page = 0,
        ClientPerPage = 10,
    }={}){
        let cursor
        let query
        try{
            cursor = await Client
            .find(query)
        }catch(e){
            console.log(`Unable to issue a command`)
            return {ClientList:[],totalNumClientList}
        }
        const displayCursor = cursor.limit(ClientPerPage).skip(ClientPerPage * page)
        try{
            const ClientList = await displayCursor.toArray()
            const totalNumClientList = await Client.countDocuments(query)
            return {ClientList,totalNumClientList}
        }catch(e){
            console.log(`Unable to convert cursor to array`)
            return {ClientList:[],totalNumClientList:0}
        }
    }
    static async updateClient(userId,personal){
        try{
            const updateClient = await Client.updateOne(
                {userId:ObjectId(userId)},
                {$set:{ name:personal.name,surname:personal.surname,image:personal.image,age:personal.age,email:personal.email,password:personal.password,}}
            )
            return updateClient
        }catch(e){
            console.error(`Unable to update review`)
        }
    }
}