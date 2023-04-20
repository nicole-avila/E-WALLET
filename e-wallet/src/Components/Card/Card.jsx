import './Card.scss';
import AirPayDark from '../../assets/airpay-dark.svg';
import { activeCard } from '../../Action/action';
import { useDispatch, useSelector } from 'react-redux';


function Card({ cardNumber, cardHolder, validThru, ccv, vendor }) {
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
    };    

    return( 
        <section className='card' onClick={ handleClick } style={{ ...vendor ? { backgroundColor: vendor.vendor.color, color: vendor.vendor.font }: {} }} >
            <article className='card__images'>
                <img src= { vendor ? vendor.vendor.airpay : AirPayDark } alt="" />
                <img src= { vendor ? vendor.vendor.image : '' } alt="" />
            </article>

            <h1 className='card__nr' style={{ ...vendor ? { color: vendor.vendor.font }: {} }} >{ cardNumber ? cardNumber : card.cardNumber }</h1> 
            
            <article className='card__text'>
                <p>cardholder name</p>
                <p>Valid thru</p>
            </article>
            <article className='card__text--info'>
                <p> {  cardHolder ? cardHolder : card.cardHolder  }</p>
                <p> {  validThru ? validThru : card.validThru }</p> 
            </article>
        </section>
    )
}

export default Card