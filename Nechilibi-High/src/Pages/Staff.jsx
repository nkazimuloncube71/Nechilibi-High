import { Link } from 'react-router-dom'
import { image } from '../Components/data'
import { SectionHeading } from '../Components/shared'

function Staff() {
  return (
    <section className="staff-section section-pad">
      <div className="page-width staff-grid">
        <div className="staff-photo">
          <img src={image('image2.png')} alt="A teacher speaking with Nechilibi students" />
        </div>
        <div className="staff-copy">
          <SectionHeading
            eyebrow="Our staff"
            title={<>Here for every<br /><em>learner.</em></>}
            copy="Teachers and administrators work alongside families to support learning, wellbeing and responsible leadership."
          />
          <p>Our staff are part of the school community, helping make learning meaningful and supporting every learner to reach their potential.</p>
          <Link className="arrow-link" to="/contact">Contact the school office <span aria-hidden="true">↗</span></Link>
        </div>
      </div>
    </section>
  )
}

export default Staff
