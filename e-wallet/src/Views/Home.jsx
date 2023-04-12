import './Home.scss';
import Top from '../Components/Top/Top';
import Card from '../Components/Card/Card';

import { useNavigate } from 'react-router-dom';

function Home() {
    const navigate = useNavigate();


    function handleClick() {
        navigate('/addcard')
    }

    return( 
        <div className='home'>
            <Top title="E-wallet" />
            <section className='home__card'>
                <Card />
            </section>

            
            <section>
            <button className='home__btn' onClick={ handleClick }>add a new card</button>
            </section>
            
        </div>

    )
}

export default Home

