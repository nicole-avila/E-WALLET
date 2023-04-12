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
        <div className='home'>
            <Top title="E-wallet" title2='active card' />

            <section className='home__card'>
            <Card />
            <CardStack />
            </section>
            <button className='home__btn' onClick={ handleClick }>add a new card</button>
        </div>

    )
}

export default Home

