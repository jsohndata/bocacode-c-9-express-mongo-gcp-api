import { dbConnect } from "./dbConnect.js";
import { ObjectId } from "mongodb";

const collectionName = "mock_data";

// Get: All
export async function getAllDoc(req, res) {
    const db = dbConnect();
    const collection = await db.collection(collectionName)
        .find({})
        .limit(10)
        .toArray()
        .catch(err => {
            res.status(500).send(err);
            return
        });
    
    console.log("Get: All");     
    console.table(collection);
    res.send(collection);
}


// Get: Search
export async function getDoc(req, res) {
    const searchParam = { id: Number(req.params.docId) };

    const db = dbConnect();
    const collection = await db.collection(collectionName)
        .find(searchParam)
        .toArray()
        .catch(err => {
            res.status(500).send(err);
            return
        });

    console.log("Get: Search");
    console.table(collection);
    res.send(collection);
}


// Post
export async function postDoc(req, res) {
    const newDoc = req.body
    // { "id":"2000","first_name":"jojo","last_name":"mojo","email":"hoho@email.com","gender":"idk","ip_address":"yourmom"}

    const db = dbConnect();
    const collection = await db.collection(collectionName)
        .insertOne(newDoc)
        .catch(err => {
            res.status(500).send(err);
            return
        });

        console.log("Post");
        console.table(collection);
        res.status(201).send( {message: 'New Doc Inserted'});
}


// Delete
export async function deleteDoc(req, res) {
    const docId = { "_id": new ObjectId(req.params.docId) };

    const db = dbConnect();
    const collection = await db.collection(collectionName)
        .deleteOne( docId )        
        .catch(err => {
            res.status(500).send(err);
            return
        });

    console.log("Delete");        
    console.table(collection);
    res.send(collection);
}
