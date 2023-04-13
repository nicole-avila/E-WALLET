import './Card.scss';
import Bitcoin from '../../assets/Bitcoin logo.svg'
import AirPayDark from '../../assets/Group 6.svg'

import { activeCard } from '../../Action/action';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';

function Card({ cardNumber, cardHolder, validThru, ccv, vendor}) {
    const dispatch = useDispatch();
    const card = useSelector((state) => { return state.activeCard});


    function handleClick() {
        let getActiveCard = {
            cardNumber: cardNumber,
            cardHolder: cardHolder,
            validThru: validThru,
            ccv: ccv,
            vendor: vendor
        }
        dispatch(activeCard(getActiveCard))
    }

    return( 
        <div>
            <section className='card' onClick={ handleClick }>
                <article className='card__images'>
                    <img src= { AirPayDark} alt="" />
                    <img src= { Bitcoin } alt="" />
                </article>
                <h1 className='card__nr'>{ cardNumber ? cardNumber : card.cardNumber }</h1> 
                <article className='card__text'>
                    <p>cardholder name</p>
                    <p>Valid thru</p>
                </article>
                <article className='card__text__info'>
                    <p> {  cardHolder ? cardHolder : card.cardHolder  }</p>
                    <p> {  validThru ? validThru : card.validThru }</p> 
                </article>
            </section>
        </div>

    )
}

export default Card

{/* <p> { card.hasOwnProperty('cardHolder') ? card.cardHolder : cardHolder }</p> */}

// Om propsen (cardHolder) finns så visa/kör cardHolder (ex, <p> {cardHolder} </p> )
// OM INTE så kör {card.cardHolder}
{/* <p>  cardHolder ? cardHolder : card.cardHolder  </p>   */}