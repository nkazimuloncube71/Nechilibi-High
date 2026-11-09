import { InquiryForm, SectionHeading } from './shared'

function Contact() {
  return (
    <section className="contact-section section-pad" id="contact">
      <div className="page-width">
        <div className="contact-heading">
          <SectionHeading
            eyebrow="We'd love to hear from you"
            title={<>Let's start a <em>conversation.</em></>}
            copy="Whether you are a prospective family, a former learner or a member of our community, our school is ready to connect."
          />
        </div>
        <div className="contact-grid">
          <div className="contact-info">
            <div className="contact-detail"><span className="contact-icon" aria-hidden="true">↗</span><div><span className="mini-label">VISIT THE SCHOOL</span><p>Nechilibi High School<br />Please contact the school for directions and visiting hours.</p></div></div>
            <div className="contact-detail"><span className="contact-icon" aria-hidden="true">✉</span><div><span className="mini-label">GET IN TOUCH</span><p>Use the enquiry form or contact the school office directly.</p></div></div>
            <div className="map-card">
              <iframe
                title="Search for Nechilibi High School on Google Maps"
                src="https://maps.google.com/maps?q=Nechilibi%20High%20School&t=&z=13&ie=UTF8&iwloc=&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <a href="https://www.google.com/maps/search/?api=1&query=Nechilibi+High+School" target="_blank" rel="noreferrer">Search for the school on Google Maps ↗</a>
            </div>
          </div>
          <div className="contact-form-wrap">
            <span className="mini-label">SEND US A NOTE</span>
            <h3>How can we help?</h3>
            <InquiryForm kind="contact" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
