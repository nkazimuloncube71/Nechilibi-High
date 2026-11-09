import { ArrowLink, SectionHeading } from './shared'
import { image } from './data'

const schoolValues = ['Integrity', 'Respect', 'Curiosity', 'Perseverance']

function About() {
  return (
    <section className="about-section section-pad" id="about">
      <div className="page-width about-grid">
        <div className="about-visual">
          <div className="about-photo-main">
            <img src={image('image10.png')} alt="Nechilibi students gathered at school" loading="lazy" />
          </div>
          <div className="about-photo-small">
            <img src={image('image3.png')} alt="Students attending a school gathering" loading="lazy" />
          </div>
          <div className="about-stamp"><span>LEARN</span><span>BELONG</span></div>
          <span className="image-caption">A community built around possibility</span>
        </div>
        <div className="about-copy">
          <SectionHeading
            eyebrow="A school with heart"
            title={<>Room to grow.<br /><em>Every reason to shine.</em></>}
            copy="At Nechilibi High School, education is about more than what happens in the classroom. It is about building confidence, character and the courage to imagine what comes next."
          />
          <p className="about-extra">
            We bring learners, teachers and families together in a supportive environment where curiosity is encouraged and every young person is known, valued and challenged to do their best.
          </p>
          <div className="story-row">
            <div><span className="mini-label">OUR STORY</span><p>Our school story is shaped by the learners, families and educators who make this community what it is.</p></div>
            <div><span className="mini-label">OUR LEADERSHIP</span><p>Teachers and administrators work alongside families to support learning, wellbeing and responsible leadership.</p></div>
          </div>
          <div className="vision-row">
            <div><span className="mini-label">OUR VISION</span><p>To nurture thoughtful, capable and responsible future leaders.</p></div>
            <div><span className="mini-label">OUR MISSION</span><p>To make learning meaningful and help every learner reach their potential.</p></div>
          </div>
          <div className="values-row">
            <span className="mini-label">WHAT GUIDES US</span>
            <div>{schoolValues.map((value) => <span className="value-chip" key={value}>{value}</span>)}</div>
          </div>
          <ArrowLink href="/academics">Discover our approach</ArrowLink>
        </div>
      </div>
    </section>
  )
}

export default About
