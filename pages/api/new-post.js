// /api/new-post **//these are the server-side code
import {MongoClient} from 'mongodb'

const handler = async (req, res) => {

    try {
        if(req.method === 'POST'){
            const {title, description} = req.body;
            // console.log("process.env.DB_USER",process.env.DB_USER);
    
            const client = await MongoClient.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.gjv0d.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`);
            const db = client.db();
    
            const postCollection = db.collection('posts');
    
            const result = await postCollection.insertOne(req.body);
    
            console.log("created post is ", result);
            
            client.close();

            return res.status(201).json({
                message: "Post Created",
                result
            })
        }
    } catch (error) {
        console.log("post creation error occured");
    }
    

}

export default handler;