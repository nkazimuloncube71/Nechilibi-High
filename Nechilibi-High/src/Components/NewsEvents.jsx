import { ArrowLink, SectionHeading } from './shared'
import { image } from './data'

const newsItems = [
  {
    image: 'image7.png',
    imageAlt: 'Students enjoying an activity together',
    tag: 'SCHOOL LIFE',
    meta: 'LEARNING & COMMUNITY',
    title: 'Small moments. Big memories.',
    description: 'Discover the friendships, shared experiences and everyday achievements that shape life at Nechilibi.',
    link: 'Explore school life',
    href: '/gallery',
    featured: true,
  },
  {
    image: 'image4.png',
    imageAlt: 'Learners exploring technology in class',
    tag: 'IN THE CLASSROOM',
    meta: 'CURIOSITY IN ACTION',
    title: 'Learning by doing',
    description: 'Hands-on experiences help learners ask questions, test ideas and see new possibilities.',
    link: 'Our approach to learning',
    href: '/academics',
  },
  {
    image: 'Football.jpg',
    imageAlt: 'Students playing a football match',
    tag: 'SPORT & CULTURE',
    meta: 'TEAMWORK & WELLBEING',
    title: 'Growing stronger together',
    description: 'Sport and shared activities build confidence, resilience and a strong sense of belonging.',
    link: 'See our gallery',
    href: '/gallery',
  },
]

function NewsEvents() {
  return (
    <section className="news-section section-pad" id="news">
      <div className="page-width">
        <div className="news-heading">
          <SectionHeading
            eyebrow="From our community"
            title={<>Good things are <em>happening.</em></>}
            copy="A glimpse of the learning, events and achievements that make school life special."
          />
          <span className="news-date-note">For current dates and announcements, please check with the school office.</span>
        </div>
        <div className="news-grid">
          {newsItems.map((item) => (
            <article className={`news-card${item.featured ? ' news-featured' : ''}`} key={item.title}>
              <div className="news-image">
                <img src={image(item.image)} alt={item.imageAlt} loading="lazy" />
                <span className="news-tag">{item.tag}</span>
              </div>
              <div className="news-content">
                <span className="news-meta">{item.meta}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <ArrowLink href={item.href}>{item.link}</ArrowLink>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default NewsEvents
