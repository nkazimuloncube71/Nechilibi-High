import { ArrowLink, SectionHeading } from './shared'

const subjects = [
  { number: '01', title: 'Sciences', detail: 'Curiosity, discovery and practical thinking.' },
  { number: '02', title: 'Mathematics', detail: 'Building confidence through clear reasoning.' },
  { number: '03', title: 'Languages', detail: 'Finding a voice and communicating with purpose.' },
  { number: '04', title: 'Humanities', detail: 'Understanding people, place and possibility.' },
  { number: '05', title: 'Technology', detail: 'Creative problem-solving for a changing world.' },
  { number: '06', title: 'Sport & the arts', detail: 'Growing teamwork, expression and resilience.' },
]

const subjectMarks = ['✳', '∑', 'Aa', '◎', '⌘', '↗']

function Academics() {
  return (
    <section className="academics-section section-pad" id="academics">
      <div className="page-width">
        <div className="academic-top">
          <SectionHeading
            eyebrow="Learning for life"
            title={<>An education that opens<br /><em>doors and minds.</em></>}
            copy="Strong foundations, inspiring teaching and the space to explore—so our learners are ready for what comes next."
          />
          <ArrowLink href="#admissions">Explore admissions</ArrowLink>
        </div>
        <div className="subject-grid">
          {subjects.map((subject) => (
            <article className="subject-card" key={subject.number}>
              <span className="subject-number">{subject.number}</span>
              <div className="subject-mark" aria-hidden="true">{subjectMarks[Number(subject.number) - 1]}</div>
              <h3>{subject.title}</h3>
              <p>{subject.detail}</p>
            </article>
          ))}
        </div>
        <div className="learning-note">
          <span className="learning-symbol" aria-hidden="true">✦</span>
          <p><strong>More than a syllabus.</strong> We encourage collaboration, self-belief and a lifelong love of learning.</p>
          <a href="#gallery" aria-label="See student life">See student life <span aria-hidden="true">↗</span></a>
        </div>
      </div>
    </section>
  )
}

export default Academics
