import './Top.scss';

function Top(props) {

    return( 
        <section className='top'>
            <h1 className='top__title'> { props.title } </h1>
        </section>
    )
}

export default Top