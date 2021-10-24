import './App.css';

const App = () => {

    return (
        <main>
            <header className='header-container'>
                <h3 className='header-title'>Taylor Galloway</h3>
                <nav>
                    <button className='About'>About</button>
                    <button className='Skills'>Skills</button>
                    <button className='Projects'>Projects</button>
                    <button className='Contact'>Contact</button>
                </nav>
            </header>
            <section>
                <article className='intro'>
                    <section className='intro-left'>
                        <h1>Taylor Galloway</h1>
                        <h2>Front-End Developer</h2>
                        <div className='intro-button-container'>
                            <button className='resume-button'>Resumé</button>
                            <button className='contact-me-button'>Contact Me</button>
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