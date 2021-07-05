import {MongoClient, ObjectId} from 'mongodb';


const favouritePostHandler = async (req, res) => {

    try {
        if(req.method === 'PATCH'){
            console.log("req.body is", req.body);
            const {id} = req.query;
            console.log("favourite post id is", id);
            // console.log("process.env.DB_USER",process.env.DB_USER);
            const client = await MongoClient.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.gjv0d.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`);
            const db = client.db();
            const postCollection = db.collection('posts');

            let query ={
                _id: ObjectId(id)
            };
    
            const result = await postCollection.findOneAndUpdate(query, { $set: req.body});
            console.log("updated result is", result.value);
            client.close();

            return res.status(200).json({
                message: "favourite Post added",
                result
            });
        }
    } catch (error) {
        console.log("favourite post error occured", error);
    }
    

}

export default favouritePostHandler;