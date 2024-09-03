// app/components/RandomAnime.js
import clientPromise from '@/lib/mongodb';
import { ChevronsLeftIcon } from 'lucide-react';


async function getRandomActionOrComedyAnime() {

  const client = await clientPromise

  try {
    await client.connect();
    const database = client.db('feelGoodAnime'); // Replace with your database name
    const collection = database.collection('anime_list');

    const randomAnime = await collection.aggregate([
      { $match: { Genres: { $in: ["action", "award-winning"] } } },
      { $sample: { size: 1 } }
    ]).toArray();
    console.log(randomAnime)
    return randomAnime[0]; // Return the random anime document
  } catch(e)
  {
     console.log(e)
  }
}

export default async function RandomAnime() {
  const anime = await getRandomActionOrComedyAnime();
  const trailer = process.env.YOUTUBE_API

  return (
    <div>
      {anime ? (
        <>
          <h1>{anime.Name}</h1>
          <p>Genres: {anime.Genres.join(', ')}</p>
          <p>Description: {anime.Synopsis}</p>
          {/* Add more fields as necessary */}
        </>
      ) : (
        <p>No anime found in the specified genres.</p>
      )}
    </div>
  );
}
