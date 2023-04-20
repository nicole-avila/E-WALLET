import './Top.scss';


function Top({ title, text }) {

    return( 
        <section className='top'>
            <h1 className='top__title'> { title } </h1>
            <p className='top__text'>{ text }</p>
        </section>
    )
}

export default Top