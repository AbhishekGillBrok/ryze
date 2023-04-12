import Header from './Header.jsx';
import style from './styles/Hero.module.css'

function Hero() {
    return (
        <div className={style.hero}>
            <Header />
            <div className={style.hero_container}>
                <div className={style.hero_left}>
                    <div className={style.hero_tagline}>
                        <p>Seriou Busisness, Serious Finance</p>
                    </div>
                    <div className={style.hero_h1}>
                        <h1>Simplyfying Investing For</h1>
                    </div>

                    <div className={style.hero_p_h1}>
                        <div className={style.hero_h1}>
                            <h1>You</h1>
                        </div>
                        <p>Timely research and analysis. Intiuitive yet powerful busisness tool</p>
                    </div>

                    <button className={style.btn}>Start Trading</button>
                </div>
                <div className={style.hero_right}>
                </div>


            </div>

        </div>
    )
}

export default Hero