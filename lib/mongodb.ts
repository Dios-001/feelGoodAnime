import { error } from "console";
import { MongoClient } from "mongodb";
let uri = process.env.MONGODB_URI1;

let client;
let clientPromise:Promise<MongoClient>;


if(!process.env.MONGODB_URI){
  throw error("mongodb uri not there where it should be!")
}

if(process.env.NODE_ENV == "development"){
  if(!(global as any)._mongoclient){
    client = new MongoClient(uri || '');
    (global as any)._mongoclient = client.connect()
  }
  clientPromise = (global as any)._mongoclient
}else{
  client = new MongoClient(uri || "");
  clientPromise = client.connect();
}

export default clientPromise;
