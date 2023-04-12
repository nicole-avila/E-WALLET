import './Card.scss';
import Bitcoin from '../../assets/Bitcoin logo.svg'
import AirPayDark from '../../assets/Group 6.svg'

import { useState } from 'react';

function Card() {
    const [cardInfo, setCardInfo] = useState( {
        cardNr: '',
        fullName: '',
        date: ''
    })


    return( 
        <div>
            <p className='card__title2'>active card</p>
            <section className='card'>
                <article className='card__images'>
                    <img src= { AirPayDark} alt="" />
                    <img src= { Bitcoin } alt="" />
                </article>
                <h1 className='card__nr'> 1234 5678 1234 0987 </h1>
                
                <article className='card__text'>
                    <p>cardholder name</p>
                    <p>Valid thru</p>
                </article>
            
                <article className='card__text__info'>
                    <p>nicole avila</p>
                    <p> 12/12</p>
                </article>

            </section>
        </div>

    )
}

export default Card