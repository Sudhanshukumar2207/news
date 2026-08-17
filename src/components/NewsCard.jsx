export default function NewsCard({ item, compact = false }) {
  return (
    <article className={`news-card ${compact ? 'compact' : ''}`}>
      <div className="news-card-image">
        <img src={item.image} alt={item.title} />
        <span className="category-chip">{item.category}</span>
      </div>
      <div className="news-card-body">
        <h3>{item.title}</h3>
        {!compact && <p>{item.excerpt}</p>}
        <div className="meta"><span>{item.author}</span><span>•</span><span>{item.readTime}</span></div>
      </div>
    </article>
  );
}
