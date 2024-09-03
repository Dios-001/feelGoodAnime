"use client"
import { useState } from 'react'
import React from 'react'
import { Button } from './ui/button'
const Card = () => {
   

    return (

    <div className='outer-card bg-emerald-500 inline-block'>
        <div className='video-area'>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/H6e_JQYG5m4?si=_01U4_qRgwO1UZ97" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </div>
        <div className='description-and-button'>
            <h1>this is the title of the movie</h1>
            <h2>these are its sub description</h2>
            <h3></h3>

            <p></p>

            <div className='button-container'>
                <Button></Button>
                <Button></Button>
                <Button></Button>
            </div>
        </div>

    </div>
  )
}


export default Card