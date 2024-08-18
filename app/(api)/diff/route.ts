import { MongoClient } from "mongodb";
import clientPromise from "@/lib/mongodb";
import { NextResponse,NextRequest } from "next/server";

interface DataResponse{
    id:string;
    name:string;
    generes:string;
}

export async function GET(req:NextRequest){
    try{
        const client:MongoClient = await clientPromise;
        const db = client.db("feelGoodAnime")
        const collection = db.collection<DataResponse>("anime_list")
        const data:DataResponse[] = await collection.distinct("Genres");
        const arr = new Set();
     data.forEach(entry => { 
            (entry as unknown as string).split(",")
                        .forEach(genre =>{
                         arr.add(genre.trim())
            });
            
        })
        console.log(arr)
       return  NextResponse.json(Array.from(arr))   
    }
    catch(e){
        console.log(e)
        return NextResponse.json({message:"something went wrong"},{status:500})
    }
}

