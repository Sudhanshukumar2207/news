import { Link } from 'react-router-dom';
import NewsCard from '../components/NewsCard';
import SectionHeading from '../components/SectionHeading';
import Newsletter from '../components/Newsletter';
import { newsItems, services, testimonials, products } from '../data/siteData';

export default function Home() {
  const lead = newsItems[0];
  return (
    <>
      <section className="hero section-pad">
        <div className="container hero-grid">
          <article className="lead-story">
            <img src={lead.image} alt={lead.title} />
            <div className="lead-overlay">
              <span className="category-chip">TOP STORY • {lead.category}</span>
              <h1>{lead.title}</h1>
              <p>{lead.excerpt}</p>
              <div className="meta light-meta"><span>{lead.author}</span><span>•</span><span>{lead.date}</span></div>
            </div>
          </article>
          <div className="hero-side">
            {newsItems.slice(1, 4).map(item => <NewsCard item={item} compact key={item.id} />)}
          </div>
        </div>
      </section>

      <section className="section-pad bg-soft">
        <div className="container">
          <SectionHeading eyebrow="LATEST" title="What everyone is reading" text="Fresh reporting and smart perspectives across the topics that shape your day." link="/news" />
          <div className="news-grid">{newsItems.slice(1, 7).map(item => <NewsCard item={item} key={item.id} />)}</div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container split-feature">
          <div className="feature-copy"><span className="eyebrow">EDITOR'S NOTE</span><h2>Good journalism should leave you clearer, not louder.</h2><p>PulseNews is designed around useful reporting, clean presentation and enough context to help readers understand what actually matters.</p><Link to="/about" className="pill-btn inline-btn">Our story</Link></div>
          <div className="quote-panel"><span>“</span><blockquote>We focus on signal over noise — thoughtful stories, fast navigation and a reading experience built for modern screens.</blockquote><small>Editorial Team • PulseNews</small></div>
        </div>
      </section>

      <section className="section-pad dark-section">
        <div className="container">
          <SectionHeading eyebrow="SERVICES" title="More than a news platform" text="Editorial, storytelling and brand solutions for businesses that want to communicate with credibility." link="/services" />
          <div className="service-grid mini">{services.slice(0,4).map(([title, text], i) => <div className="service-card" key={title}><span>0{i+1}</span><h3>{title}</h3><p>{text}</p></div>)}</div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container">
          <SectionHeading eyebrow="SHOP" title="From the newsroom desk" text="Simple merchandise for readers, creators and people who still love a good notebook." link="/shopping" />
          <div className="product-grid home-products">{products.slice(0,4).map(product => <div className="product-card" key={product.name}><div className="product-image"><img src={product.image} alt={product.name}/><span>{product.tag}</span></div><h3>{product.name}</h3><div className="product-bottom"><b>{product.price}</b><button>Add +</button></div></div>)}</div>
        </div>
      </section>

      <section className="section-pad bg-soft">
        <div className="container">
          <SectionHeading eyebrow="TESTIMONIALS" title="Trusted by people who value good storytelling" link="/testimonials" />
          <div className="testimonial-grid home-testimonials">{testimonials.slice(0,3).map(t => <div className="testimonial-card" key={t.name}><div className="stars">★★★★★</div><p>“{t.quote}”</p><h4>{t.name}</h4><small>{t.role}</small></div>)}</div>
        </div>
      </section>
      <Newsletter />
    </>
  );
}
