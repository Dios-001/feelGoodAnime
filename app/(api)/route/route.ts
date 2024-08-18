// app/api/route/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { MongoClient } from 'mongodb';
import clientPromise from '../../../lib/mongodb';

interface DataResponse {
  _id: string;
  name: string;
}

export async function GET(req: NextRequest) {
  try {
    const client: MongoClient = await clientPromise;
    const db = client.db('feelGoodAnime');
    const collection = db.collection<DataResponse>('anime_list');

    const data: DataResponse[] = await collection.find({}).toArray();

    return NextResponse.json(data);
  } catch (e) {
    console.error(e);
    return NextResponse.json({ message: 'An error occurred while fetching data' }, { status: 500 });
  }
}