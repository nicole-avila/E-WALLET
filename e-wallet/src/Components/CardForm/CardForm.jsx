import './CardForm.scss';
import { addNewCard } from '../../Action/action';
import Card from '../Card/Card';

import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function CardForm() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [cardNumber, setCardNumber] = useState('')
    const [cardHolder, setCardHolder] = useState('')
    const [validThru, setValidThru] = useState('')
    const [ccv, setCcv] = useState('')
    const [vendor, setVendor] = useState('')
    const [focus, setFocus] = useState('')

    function handleSubmit(e) {
        e.preventDefault();
        const user = {
            cardNumber: cardNumber,
            cardHolder: cardHolder,
            validThru: validThru,
            ccv: ccv,
            vendor: vendor
        }
        dispatch(addNewCard(user))
        navigate('/');
        console.log(user);
    };

    return( 
        <div className='card-form--container'>
            <Card  cardNumber={cardNumber} cardHolder={cardHolder} validThru={validThru} focused={focus}/>

        <form className='card-form' onSubmit={ handleSubmit }>
            <p>card number</p>
            <input className='card-form__bigfield' type="tel" placeholder='XXXX XXXX XXXX XXXX' name='cardNumber' value={cardNumber} onChange={ (event) => setCardNumber(event.target.value)} onFocus={event => setFocus(event.target.name)} /> 
            <p>cardholder name</p> 
            <input className='card-form__bigfield' type="text" placeholder=' FIRSTNAME & LASTNAME' name='cardHolder' value={cardHolder} onChange={ (event) => setCardHolder(event.target.value) } onFocus={event => setFocus(event.target.name)} />
            <article className='card-form__smallfields'>
                <article>
                    <p>valid thru</p> 
                    <input className='card-form__smallfield' type="text" name='validThru' value={validThru} onChange={ (event) => setValidThru(event.target.value) } onFocus={event => setFocus(event.target.name)}/>
                </article>
                <article>
                <p>ccv</p>
                <input className='card-form__smallfield' type="text" name='ccv' onChange={ (event) => setCcv(event.target.value) }  />
                </article>
            </article>
            <label htmlFor="">vendor</label>
            <select className='card-form__bigfield' name='vendor' onChange={ (event) => setVendor(event.target.value) }>
                <option value="nada"></option>
                <option value="bitcoin inc">bitcoin inc</option>
                <option value="njnja bank">njnja bank</option>
                <option value="block chain">block chain</option>
                <option value="evil corp">evil corp</option>
            </select> 
            <button className='card-form__btn' type='submit' value='submit'>add card</button>
        </form>
        </div>
    )
}

export default CardForm

// const {name, value} = e.target;
        
// setCardInfo((currentState) => {
//     return { ...currentState, [name]: value };
// });