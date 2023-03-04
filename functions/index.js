import functions  from "firebase-functions";
import express from "express";
import cors from "cors";
import { getAllDoc, postDoc, getDoc, deleteDoc } from "./src/functions.js"

const app = express();
app.use(express.json());
app.use (cors());

/* Route: Root
****************************************** */
app.get("/", (req,res) => {
    res.send("MongoDB. I am root.");
    console.log(`MongoDB. I am root.`)
});

/* Route: Others
****************************************** */
// Get : Get All
app.get("/getall", getAllDoc);
// Get : Search
app.get("/get/:docId", getDoc);
// Post : Add
app.post("/post", postDoc);
// Delete
app.delete("/delete/:docId", deleteDoc);

// For Localhost
// app.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`))

// For GCP
export const api = functions.https.onRequest( app );
