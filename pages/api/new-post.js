// /api/new-post **//these are the server-side code
import {MongoClient} from 'mongodb'

const handler = async (req, res) => {

    if(req.method === 'POST'){
        const {title, description} = req.body;

        const client = await MongoClient.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.gjv0d.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`);
        const db = client.db();

        const postCollection = db.collection('posts');

        
    }

}

export default handler;