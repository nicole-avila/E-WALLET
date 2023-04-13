import './CardStack.scss';
// import CardStackSCSS from './CardStack.module.scss';
import Card from '../Card/Card';
import { useSelector } from 'react-redux';

import variables from '../../scss/_variables.scss'

function CardStack() {
    const creditCards = useSelector((state)=> {return state.creditCards})
    const SCSS = { backgroundColor: variables.margin}

    const CardStackComponents = creditCards.map((card, index) => {
        return( <Card 
        cardNumber={card.cardNumber} 
        cardHolder={card.cardHolder}
        validThru={card.validThru}
        ccv={card.ccv}
        vendor={card.vendor}
        id= {card.cardNumber}
        key={index} 
        // className={CardStackSCSS.margin}
        style={SCSS}
        />
        )
    })
    console.log(CardStackComponents);

    return( 
        <section className='card-stack'>
            <article className='card-stack__grid'>
            { CardStackComponents }
            </article>
        </section>

    )
}

export default CardStack