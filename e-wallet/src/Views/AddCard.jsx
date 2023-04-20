import './AddCard.scss';
import goBack from '../assets/go-back.svg'
import Top from '../Components/Top/Top';
import CardForm from '../Components/CardForm/CardForm';

import { useNavigate  } from 'react-router-dom';

function AddCard() {
    const navigate = useNavigate()

    function backToHome() {
        navigate(-1)
    }

    return(
        <section className= 'add-card'>
            <article className='add-card__top'>
                <img onClick={ backToHome } src={ goBack } className='add-card__back' alt="black circle with an white arrow in it" />
                <Top title='add a new bank card' text='new card'/>
            </article>
            <CardForm />
        </section>
    )
}

export default AddCard