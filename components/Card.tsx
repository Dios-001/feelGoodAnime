"use client"
import { useState } from 'react'
import React from 'react'
import { Button } from './ui/button'
import Header from './Header';

interface cardInfo{
    title:string;
    genre:string[];
    release:string;
    length:string;
    description:string;
    trailerLink:string;
    score:number;
    englishTitle:string;
}

const Card = (card:cardInfo) => {

   
    return (
    

    <div className='outer-card bg-[#ECB176] inline-block box-border border-black border-solid border-4 rounded-lg w-[567px]'>

        <div className='video-area'>
        <iframe width="560" height="315" src={card.trailerLink} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </div>

        <div className='description-and-button p-1'>
            <h1 className='text-3xl m-0'>{card.title}&nbsp;({`${card.englishTitle}`})</h1>
            <h2 className='mt-[-7px] mb-3 text-lg'>{card.release} | ⭐️ Scores: {card.score}/10</h2>
                <div className='ml-[-5px]'>
                { card.genre.map(word => 
                  <p key={word} className='text-red-500 border-4 box-border border-red-600 inline-block px-3 mx-1 rounded-full'>{word}</p>
                )}
            </div>

            <p>{card.description}</p>

            <div className='button-container flex justify-center items-center '>
                <Button>Find some other Anime?</Button>
            </div>
        </div>

    </div>
  )
}


export default Card