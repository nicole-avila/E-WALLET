import './ActiveCard.scss';
import AirPayDark from '../../assets/airpay-dark.svg'
import { useSelector } from 'react-redux';


function ActiveCard() {
    const active = useSelector((state) => { return state.activeCard});

    return(
        <section className='card'  style={{ ...active?.vendor ? { backgroundColor: active.vendor.vendor.color }: {} }} >
            <article className='card__images'>
                <img src= { active?.vendor ? active.vendor.vendor.airpay : {AirPayDark} } alt="" />
                <img src= { active?.vendor ? active.vendor.vendor.image : '' } alt="" />
            </article>

            <h1 className='card__nr' style={{ ...active?.vendor ? { color: active.vendor.vendor.font }: {} }}>{ active.cardNumber ? active.cardNumber : active.cardNumber }</h1> 

            <article className='card__text'>
                <p style={{ ...active?.vendor ? { color: active.vendor.vendor.font }: {} }}>cardholder name</p>
                <p style={{ ...active?.vendor ? { color: active.vendor.vendor.font }: {} }}>Valid thru</p>
            </article>
            <article className='card__text--info'>
                <p style={{ ...active?.vendor ? { color: active.vendor.vendor.font }: {} }}> {  active.cardHolder ? active.cardHolder : active.cardHolder  }</p>
                <p style={{ ...active?.vendor ? { color: active.vendor.vendor.font }: {} }}> {  active.validThru ? active.validThru : active.validThru }</p> 
            </article>
        </section>
    )
}

export default ActiveCard