import { useState } from 'react'
import { Link } from 'react-router-dom'
import { image } from './data'

export function Logo({ light = false }) {
  return (
    <Link className={`brand${light ? ' brand-light' : ''}`} to="/" aria-label="Nechilibi High School home">
      <img src={image('nechilibi-logo.png')} alt="" />
      <span className="brand-copy">
        <strong>NECHILIBI</strong>
        <span>HIGH SCHOOL</span>
      </span>
    </Link>
  )
}

export function SectionHeading({ eyebrow, title, copy, light = false }) {
  return (
    <div className={`section-heading${light ? ' section-heading-light' : ''}`}>
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {copy && <p>{copy}</p>}
    </div>
  )
}

export function ArrowLink({ href, children, light = false }) {
  return (
    <Link className={`arrow-link${light ? ' arrow-link-light' : ''}`} to={href}>
      {children}<span aria-hidden="true">↗</span>
    </Link>
  )
}

export function InquiryForm({ kind }) {
  const [submitted, setSubmitted] = useState(false)
  const isAdmission = kind === 'admissions'

  function handleSubmit(event) {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <form className="inquiry-form" onSubmit={handleSubmit}>
      <p className="form-note">Enquiry forms are a preview and do not send or store information yet.</p>
      <div className="form-row">
        <label>
          Your name
          <input name="name" autoComplete="name" placeholder="Full name" required />
        </label>
        <label>
          Email address
          <input name="email" type="email" autoComplete="email" placeholder="you@example.com" required />
        </label>
      </div>
      {isAdmission && (
        <label>
          Learner's year of interest
          <select name="year" defaultValue="" required>
            <option value="" disabled>Select a year</option>
            <option>Year 1</option>
            <option>Year 2</option>
            <option>Year 3</option>
            <option>Year 4</option>
            <option>Year 5</option>
            <option>Year 6</option>
          </select>
        </label>
      )}
      <label>
        {isAdmission ? 'How can we help?' : 'Your message'}
        <textarea name="message" rows="3" placeholder="Write your message..." required />
      </label>
      <button className="button button-purple form-submit" type="submit">
        {isAdmission ? 'Prepare enquiry' : 'Prepare message'} <span aria-hidden="true">↗</span>
      </button>
      {submitted && (
        <p className="form-feedback" role="status">
          Thanks for getting in touch. This preview cannot deliver messages yet; please contact the school office directly.
        </p>
      )}
    </form>
  )
}
