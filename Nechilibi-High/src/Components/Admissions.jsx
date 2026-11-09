import { InquiryForm } from './shared'

function Admissions() {
  return (
    <section className="admissions-section section-pad" id="admissions">
      <div className="page-width admissions-grid">
        <div className="admissions-copy">
          <span className="eyebrow">Take your next step</span>
          <h2>A bright future<br />starts <em>right here.</em></h2>
          <p>We would love to help your family learn more about Nechilibi High School. Get in touch with the school office for current requirements, availability and important dates.</p>
          <div className="admissions-list">
            <div><span>01</span><p><strong>Start a conversation</strong><small>Tell us a little about your learner.</small></p></div>
            <div><span>02</span><p><strong>Talk with our team</strong><small>Confirm requirements and availability.</small></p></div>
            <div><span>03</span><p><strong>Plan a visit</strong><small>Contact the school office to arrange a visit.</small></p></div>
          </div>
          <p className="dates-note">Admission dates and requirements are confirmed by the school office.</p>
        </div>
        <div className="form-card">
          <div className="form-card-heading">
            <span className="form-icon" aria-hidden="true">✳</span>
            <div><span className="mini-label">WE'RE HERE TO HELP</span><h3>Make an enquiry</h3></div>
          </div>
          <InquiryForm kind="admissions" />
        </div>
      </div>
    </section>
  )
}

export default Admissions
