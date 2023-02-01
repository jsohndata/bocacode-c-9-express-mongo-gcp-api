import { MongoClient } from "mongodb";
import { URI, DB } from "./secrets.js";

export function dbConnect() {
    const client = new MongoClient(URI);
    return client.db(DB);
}
