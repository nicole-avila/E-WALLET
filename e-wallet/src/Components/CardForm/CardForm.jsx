import './CardForm.scss';
import Card from '../Card/Card';
import bitcoin from '../../assets/bitcoin logo.svg';
import ninja from '../../assets/ninja logo.svg';
import chain from '../../assets/chain logo.svg';
import evil from '../../assets/evil logo.svg';
import airPayDark from '../../assets/airpay-dark.svg'
import airPayLight from '../../assets/airpay-light.svg'

import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addNewCard } from '../../Action/action';

function CardForm() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [cardNumber, setCardNumber] = useState('')
    const [cardHolder, setCardHolder] = useState('')
    const [validThru, setValidThru] = useState('')
    const [ccv, setCcv] = useState('')
    const [vendor, setVendor] = useState('')
    const [focus, setFocus] = useState('')


    const handleCardNumberDisplay = () => {
        const numberText = [...cardNumber.split(' ').join('')]
        const card = []
        numberText.forEach((t, i) => {
            if(i % 4 === 0 && i !== 0) card.push(' ')
            card.push(t)
        })
        return card.join('')
    }
    const handleValidDisplay = () => {
        const validText = [...validThru.split('/').join('')]
        const cardValid = []
        validText.forEach((t, i) => {
            if(i % 2 === 0 && i !== 0) cardValid.push('/')
            cardValid.push(t)
        })
        return cardValid.join('')
    }

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
    };

    function handleSelect(e) {
        const vendor = e.target.value;

        let optionVendorObject;
        switch (vendor) {
            case 'choose vendor':
                optionVendorObject = {
                    name: 'choose',
                    color: '#e6e9f5',
                    image: ''
                }
                break;
                case 'bitcoin inc':
                    optionVendorObject = {
                        name: 'bitcoin inc',
                        color: '#f7b801',
                        image: bitcoin,
                        airpay: airPayDark
                    }
                    break;
                    case 'ninja bank':
                        optionVendorObject = {
                            name: 'ninja bank',
                            color: '#a200f4',
                            font: '#ffffff',
                            image: ninja,
                            airpay: airPayLight
                        }
                        break;
                        case 'block chain':
                            optionVendorObject = {
                                name: 'block chain',
                                color: '#e0ecf9',
                                image: chain,
                                airpay: airPayDark
                            }
                            break;
                            case 'evil corp':
                                optionVendorObject = {
                                    name: 'evil corp',
                                    color: '#44155a',
                                    font: '#ffffff',
                                    image: evil,
                                    airpay: airPayLight
                                }
                                break;
        
            default:
                break;
        }
        setVendor(prevCard => ({
            ...prevCard,
            vendor: optionVendorObject
        }))
    };

    return( 
        <section className='card-form'>
            <article className='card-form__card-component'>
            <Card  
            cardNumber={ cardNumber } 
            cardHolder={ cardHolder } 
            validThru={ validThru } 
            vendor={ vendor } 
            focused={ focus }/>
            </article>

            <form className='card-form__form' onSubmit={ handleSubmit }>
                <p>card number</p>
                <input className='card-form__bigfield' type="tel" maxLength={19} minLength={19} 
                placeholder=' XXXX XXXX XXXX XXXX' name='cardNumber' value={ handleCardNumberDisplay() }
                inputMode='numeric' pattern='[0-9\s]{13,19}' autoComplete='cc-number'
                onFocus={ event => setFocus(event.target.name) }
                onChange={ (event) => setCardNumber(event.target.value) }  /> 
               
                <p>cardholder name</p> 
                <input className='card-form__bigfield' type="text" 
                placeholder=' FIRSTNAME & LASTNAME' name='cardHolder'
                value={ cardHolder } onFocus={ event => setFocus(event.target.name) } 
                onChange={ (event) => setCardHolder(event.target.value) } />

                <article className='card-form__smallfields'>
                    <article>
                        <p>valid thru</p> 
                        <input className='card-form__smallfield' type="text" maxLength={5} minLength={5}
                        placeholder=' DD/MM' name='validThru' value={ handleValidDisplay() } 
                        onFocus={ event => setFocus(event.target.name) }
                        onChange={ (event) => setValidThru(event.target.value) } />
                    </article>
                    <article>
                        <p>ccv</p>
                        <input className='card-form__smallfield' type="text" maxLength={3} minLength={3} 
                        placeholder=' CCV' name='ccv' onChange={ (event) => setCcv(event.target.value) }  />
                    </article>
                </article>

                <label htmlFor="">vendor</label>
                <select className='card-form__bigfield' name='vendor' value={ vendor } onChange={ handleSelect }>
                    <option value='choose vendor'> CHOOSE VENDOR </option>
                    <option value='bitcoin inc'>BITCOIN INC</option>
                    <option value='ninja bank'>NINJA BANK</option>
                    <option value='block chain'>BLOCK CHAIN</option>
                    <option value='evil corp'>EVIL CORP</option>
                </select> 
                <button className='card-form__btn' type='submit' value='submit'>add card</button>
            </form>
        </section>
    )
}

export default CardForm