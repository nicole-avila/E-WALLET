import './AddCard.scss';
import '../scss/_variables.scss';
import goBack from '../assets/🦆 icon _arrow back circle sharp_.svg'
import Top from '../Components/Top/Top';
// import Card from '../Components/Card/Card';
import CardForm from '../Components/CardForm/CardForm';

import { useNavigate  } from 'react-router-dom';

function AddCard() {
    const navigate = useNavigate()
    // const [color, setColor] = useState('grey')

    function backToHome() {
        navigate(-1)
    }

     
    return(
        <div className= 'addCard'>
            <img onClick={ backToHome } src={ goBack } className='addCard__back' alt="black circle with an white arrow in it" />
            <Top title="add a new bank card" />
            <CardForm />
        </div>
  
    )
}

export default AddCard

{/* <div className={ `addCard ${color}`}> */}

// <Card style={ setColor }/>