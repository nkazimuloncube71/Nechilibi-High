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
            <a className="button button-cream" href="#about">Explore our school <span aria-hidden="true">↗</span></a>
            <a className="button button-outline" href="#portal">Student portal <span aria-hidden="true">↗</span></a>
          </div>
        </div>
        <div className="hero-caption"><span>01</span> LEARN WITH PURPOSE <i /> GROW WITH CONFIDENCE</div>
        <a className="scroll-cue" href="#about" aria-label="Scroll to discover"><span>↓</span></a>
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
