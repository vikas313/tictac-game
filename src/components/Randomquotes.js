import React, { useEffect, useState } from 'react';
import { quotes } from './quotes';




export default function Randomquotes() {
    let num = Math.floor(Math.random()*quotes.length)


    return (
        <div className='quote'>
            <h3 className='quote' >{quotes[num].text}-{quotes[num].from}</h3>
        </div>
    )
}
