import { Logo } from './shared'
import { navigation } from './data'

function Footer() {
  return (
    <footer className="site-footer">
      <div className="page-width">
        <div className="footer-main">
          <div className="footer-brand-block"><Logo light /><p>Learning with purpose.<br />Growing into tomorrow.</p></div>
          <div className="footer-links">
            <span className="mini-label">EXPLORE</span>
            <div>{navigation.map(([label, id]) => <a key={id} href={`#${id}`}>{label}</a>)}</div>
          </div>
          <div className="footer-contact">
            <span className="mini-label">SAY HELLO</span>
            <p>Nechilibi High School</p>
            <p>Contact the school office for enquiries, directions and visiting hours.</p>
            <a href="#contact">Get in touch <span aria-hidden="true">↗</span></a>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Nechilibi High School</span>
          <span>Made for learning. Built for the future.</span>
          <a href="#home">Back to top ↑</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
