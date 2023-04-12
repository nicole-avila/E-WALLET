import './CardForm.scss';
import { addNewCard } from '../../Action/action';

import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

function CardForm() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    // const creditCards = useSelector((state)=> {return state.creditCards})


    const [cardInfo, setCardInfo] = useState( {
        cardNumber: '',
        cardHolder: '',
        validThru: '',
        ccv: '',
        vendor: ''
    })

    function handleChange(e) {
        const {name, value} = e.target;

        setCardInfo((currentState) => {
            return { ...currentState, [name]: value };
        });
    }

    function handleSubmit(e) {
        e.preventDefault();
        const newCard = {
            user: cardInfo
        }
        dispatch(addNewCard(newCard))
        navigate('/')
    };
    console.log(cardInfo);

    return( 
        <form className='card-form' onSubmit={ handleSubmit }>
            <p>card number</p>
            <input className='card-form__bigfield' type="text" name='cardNumber' onChange={ handleChange } /> 
            <p>cardholder name</p> 
            <input className='card-form__bigfield' type="text" placeholder=' FIRSTNAME & LASTNAME' name='cardHolder' onChange={ handleChange } />
            <article className='card-form__smallfields'>
                <article>
                    <p>valid thru</p> <input className='card-form__smallfield' type="text" name='validThru' onChange={ handleChange } />
                </article>
                <article>
                <p>ccv</p> <input className='card-form__smallfield' type="text" name='ccv' onChange={ handleChange } />
                </article>
            </article>
            <label htmlFor="">vendor</label>
            <select className='card-form__bigfield' name='selected' onChange={ handleChange }>
                <option value="nada"></option>
                <option value="bitcoin">bitcoin inc</option>
                <option value="njnja">njnja bank</option>
                <option value="chain">block chain</option>
                <option value="evil">evil corp</option>
            </select> 
            <button className='card-form__btn' type='submit' value='submit'>add card</button>
        </form>
    )
}

export default CardForm