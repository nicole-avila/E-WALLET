import './Top.scss';

function Top(props) {

    return( 
        <section className='top'>
            <h1 className='top__title'> { props.title } </h1>
            <p className='top__title2'>{ props.title2 }</p>
        </section>
    )
}

export default Top