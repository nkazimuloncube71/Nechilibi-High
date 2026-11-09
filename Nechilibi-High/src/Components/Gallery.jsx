import { ArrowLink, SectionHeading } from './shared'
import { image } from './data'

const galleryItems = [
  { src: 'image1.png', alt: 'Nechilibi students together on the school grounds', title: 'Our school community' },
  { src: 'image4.png', alt: 'Students working together with classroom technology', title: 'Learning by doing' },
  { src: 'image2.png', alt: 'A teacher speaking with students', title: 'Guided by great teachers' },
  { src: 'image5.jpg', alt: 'Students playing football', title: 'Play with purpose', href: 'Football.jpg' },
  { src: 'image3.png', alt: 'A school gathering under the trees', title: 'Coming together' },
  { src: 'image8.png', alt: 'Students celebrating a school activity', title: 'Every achievement matters' },
  { src: 'image10.png', alt: 'Nechilibi students gathered outside at school', title: 'Proud to be Nechilibi' },
]

function Gallery() {
  return (
    <section className="gallery-section section-pad" id="gallery">
      <div className="page-width">
        <div className="gallery-heading">
          <SectionHeading
            eyebrow="A little life at Nechilibi"
            title={<>Learning looks good <em>on you.</em></>}
            copy="Our learners, our community, our moments. Take a look around."
            light
          />
          <ArrowLink href="#contact" light>Come and see for yourself</ArrowLink>
        </div>
        <div className="gallery-grid">
          {galleryItems.map((item, index) => (
            <a
              className={`gallery-item gallery-item-${index + 1}`}
              href={image(item.href || item.src)}
              key={item.src}
              target="_blank"
              rel="noreferrer"
            >
              <img src={image(item.src)} alt={item.alt} loading="lazy" />
              <span className="gallery-caption">{item.title}<b aria-hidden="true">↗</b></span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Gallery
