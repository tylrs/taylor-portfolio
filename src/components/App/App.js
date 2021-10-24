import './App.css';

const App = () => {

    return (
        <main>
            <header></header>
            <section>
                <article className='intro'>
                    <section className='intro-left'>
                        <h1>Taylor Galloway</h1>
                        <h2>Front-End Developer</h2>
                        <div className='intro-button-container'>
                            <button className='resume-button'></button>
                        <button className='contact-me-button'></button>
                        </div>
                        <div className='socials'>

                        </div>
                    </section>
                    <section className='intro-right'>
                        <p>Something fun</p>
                    </section>
                </article>
            </section>
        </main>
    )
}

export default App;
