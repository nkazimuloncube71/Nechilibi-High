import { image } from './data'

const portalStatuses = {
  online: { label: 'Online', tone: 'online' },
  maintenance: { label: 'Maintenance', tone: 'maintenance' },
  offline: { label: 'Offline', tone: 'offline' },
}

const portalStatus = portalStatuses.offline

function PortalStatus() {
  return (
    <section className="portal-section section-pad" id="portal">
      <div className="page-width portal-grid">
        <div className="portal-copy">
          <span className="eyebrow">The learner hub</span>
          <h2>Your school day,<br /><em>all in one place.</em></h2>
          <p>When available, the student portal is where learners can find school updates, timetables, examination information and learning resources.</p>
          <div className="portal-status-card">
            <span className={`status-dot ${portalStatus.tone}`} />
            <span className="status-label">PORTAL STATUS</span>
            <strong className={`status-text ${portalStatus.tone}`}>{portalStatus.label}</strong>
            <span className="status-helper">Updated by the school administrator</span>
          </div>
          <div className="portal-links">
            <span>✦ School announcements</span><span>✦ Timetables & results</span><span>✦ Learning resources</span>
          </div>
        </div>
        <div className="portal-card">
          <div className="portal-card-top"><span className="portal-logo"><img src={image('nechilibi-logo.png')} alt="" /></span><span className="portal-lock" aria-hidden="true">⌑</span></div>
          <span className="mini-label">NECHILIBI HIGH SCHOOL</span>
          <h3>Student portal</h3>
          <p className="portal-offline-message">Online student access is not available yet. No password is collected on this page.</p>
          <label className="portal-field">
            Learner number
            <input type="text" placeholder="Portal access is unavailable" disabled />
          </label>
          <button className="button button-disabled" type="button" disabled>Portal unavailable</button>
          <p className="portal-help">For assistance, please contact the school office.</p>
        </div>
      </div>
    </section>
  )
}

export default PortalStatus
