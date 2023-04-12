import './CardStack.scss';
import Card from '../Card/Card';

import { useSelector } from 'react-redux';

function CardStack() {
    const creditCards = useSelector((state)=> {return state.creditCards})

    const CardStackComponents = creditCards.map((card, index) => {
        return( <Card 
        cardNumber={card.cardNumber} 
        cardHolder={card.cardHolder}
        validThru={card.validThru}
        key={index} 
         />
        )
    })

    return( 
        <div>
            { CardStackComponents }
        </div>

    )
}

export default CardStack