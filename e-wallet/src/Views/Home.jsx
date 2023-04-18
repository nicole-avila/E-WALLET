import './Home.scss';
import Top from '../Components/Top/Top';
import Card from '../Components/Card/Card';
import CardStack from '../Components/CardStack/CardStack';
import { useNavigate } from 'react-router-dom';


function Home() {
    const navigate = useNavigate();

    function handleClick() {
        navigate('/addcard')
    }

    return( 
        <section className='home'>
            <article className='home__top'>
                <Top title="E-wallet" text='active card' />
            </article>
            <section className='home__cards'>
                <article className='home__card'>
                    <Card />
                </article>
                <article className='home__cardStack' >
                    <CardStack />
                </article>
            </section>
            <article className='home__btn--container'>
                <button className='home__btn' onClick={ handleClick }>add a new card</button>
            </article>
        </section>
    )
}

export default Home
