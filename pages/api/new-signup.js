// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import {MongoClient} from 'mongodb'
// const MONGO_URL = process.env.MONGO_URL

async function handler(req,res){
    if(req.method === 'POST'){

        const data = req.body;

        const client = await MongoClient.connect("mongodb+srv://alena:AlEnA1999@cluster0.ex3c2.mongodb.net/users?retryWrites=true&w=majority");

        const db = client.db();

        const UserCollection = db.collection('users');

        const result = UserCollection.insertOne(data);
        
        console.log(result);
        
        client.close();
        
        res.status(201).json({message:"Already inserted!"});
      }

}

export default handler;