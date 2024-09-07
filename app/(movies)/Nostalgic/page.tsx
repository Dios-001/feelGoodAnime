// app/components/RandomAnime.js
import Card from '@/components/Card';
import Header from '@/components/Header';
import clientPromise from '@/lib/mongodb';
import { ChevronsLeftIcon } from 'lucide-react';


async function getRandomActionOrComedyAnime() {

  const client = await clientPromise

  try {
    await client.connect(); // ye glt lgg rha, theek kar
    const database = client.db('feelGoodAnime'); 
    const collection = database.collection('anime_list');

    const randomAnime = await collection.aggregate([
      { $match: { Genres: { $in: [      "slice of life",
        "romance",
        "fantasy",
        "award winning"] } } },
      { $sample: { size: 1 } }
    ]).toArray();


    return randomAnime[0]; //phela result 
  } catch(e)
  {
     console.log(e)
  }
}

export default async function RandomAnime() {
  const anime = await getRandomActionOrComedyAnime();
  const trailer = await fetch(`https://www.googleapis.com/youtube/v3/search?key=AIzaSyC_QsAsLteq5mqhpq_rLRhDHRimMZ2dhec&part=snippet&maxResults=1&q=${anime?.Name} trailer`)
  const resp = await trailer.json()
  let what;
  try{  
     what = resp.items.at(0).id.videoId
  }catch(e){
     what = e
  }

  return (
    <div className='flex flex-col justify-center items-center mt-10'>
        <Header/>
      <Card englishTitle={`${anime?.['English name']}`} score={anime?.Score} trailerLink={`https://www.youtube.com/embed/${what}`} genre={anime?.Genres} title={`${anime?.Name}`} release={`${anime?.Aired.toString().split("to")[0]}`} length={anime?.Duration} description={anime?.Synopsis}/>
    </div>
  );
}
