import {MongoClient, ObjectId} from 'mongodb';
import {useRouter} from 'next/router';


const favouritePostHandler = async (req, res) => {

    try {

        if(req.method === 'PATCH'){
            const {id} = req.params;
            console.log("favourite post id is", id);
            // console.log("process.env.DB_USER",process.env.DB_USER);
            const client = await MongoClient.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.gjv0d.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`);
            const db = client.db();
            const postCollection = db.collection('posts');

            let query ={
                _id: ObjectId(id)
            };
    
            const result = await postCollection.updateOne(query, req.body);
            console.log("created post is ", result);
            client.close();

            res.status(201).json({
                message: "favourite Post added",
                result
            });
        }
    } catch (error) {
        console.log("favourite post error occured", error);
    }
    

}

export default favouritePostHandler;