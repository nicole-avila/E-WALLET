import './CardForm.scss';
import { useState } from 'react';

function CardForm() {
    const [cardInfo, setCardInfo] = useState( {
        cardNumber: '',
        fullname: '',
        valid: '',
        ccv: '',
        selected: ''
    })

    function handleChange(e) {
        const {name, value} = e.target;

        setCardInfo((prev) => {
            return { ...prev, [name]: value };
        });
    };

    function handleSubmit(e) {
        e.preventDefault();
        console.log(cardInfo);
    };

    return( 
        <form className='card-form' onSubmit={ handleSubmit }>
            <p>card number</p>
            <input className='card-form__bigfield' type="text" name='cardNumber' onChange={ handleChange } />
            <p>cardholder name</p> 
            <input className='card-form__bigfield' type="text" placeholder=' FIRSTNAME & LASTNAME' name='fullname' onChange={ handleChange } />
            <article className='card-form__smallfields'>
                <article>
                    <p>valid thru</p> <input className='card-form__smallfield' type="text" name='valid' onChange={ handleChange } />
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