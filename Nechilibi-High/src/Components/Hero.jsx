import { Link } from 'react-router-dom'
import { image } from './data'

function Hero() {
  return (
    <>
      <section className="hero" id="home">
        <img className="hero-image" src={image('image1.png')} alt="Students sharing a moment on the school grounds" />
        <div className="hero-shade" />
        <div className="hero-content page-width">
          <span className="hero-kicker"><span /> A place to learn. A place to belong.</span>
          <h1>Welcome to<br /><em>Nechilibi</em> High School</h1>
          <p className="hero-copy">
            A welcoming community where young people are inspired to learn, find their strengths and shape a brighter future.
          </p>
          <div className="hero-actions">
            <Link className="button button-cream" to="/about">Explore our school <span aria-hidden="true">↗</span></Link>
            <Link className="button button-outline" to="/student-portal">Student portal <span aria-hidden="true">↗</span></Link>
          </div>
        </div>
        <div className="hero-caption"><span>01</span> LEARN WITH PURPOSE <i /> GROW WITH CONFIDENCE</div>
        <Link className="scroll-cue" to="/about" aria-label="Scroll to discover"><span>↓</span></Link>
      </section>

      <section className="intro-strip" aria-label="Our promise">
        <div className="page-width intro-inner">
          <p>Every learner has the potential<br />to do something extraordinary.</p>
          <div className="intro-values">
            <span>EXCELLENCE</span><i /><span>CHARACTER</span><i /><span>COMMUNITY</span>
          </div>
        </div>
      </section>
    </>
  )
}

export default Hero
