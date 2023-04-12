import './Card.scss';
import Bitcoin from '../../assets/Bitcoin logo.svg'
import AirPayDark from '../../assets/Group 6.svg'

import { useSelector } from 'react-redux';

function Card( { cardNumber, cardHolder, validThru }) {
    // const creditCards = useSelector((state)=> {return state.creditCards})

    return( 
        <div>
            <section className='card'>
                <article className='card__images'>
                    <img src= { AirPayDark} alt="" />
                    <img src= { Bitcoin } alt="" />
                </article>
                <h1 className='card__nr'>{ cardNumber }</h1> 
                <article className='card__text'>
                    <p>cardholder name</p>
                    <p>Valid thru</p>
                </article>
                <article className='card__text__info'>
                    <p> { cardHolder }</p>
                    <p> { validThru }</p>
                </article>
            </section>
        </div>

    )
}

export default Card