import NewsCard from '../components/NewsCard';
import Newsletter from '../components/Newsletter';
import { newsItems } from '../data/siteData';

export default function CategoryPage({ category }) {
  const items = newsItems.filter(n => n.category === category);
  const descriptions = {
    National: 'Stories from across India — people, policy, cities, culture and ideas shaping the country.',
    International: 'A concise global view of technology, climate, business, culture and the world beyond borders.',
    Fitness: 'Practical fitness, recovery, nutrition and wellbeing stories built around sustainable habits.'
  };
  return <><section className="category-banner"><div className="container"><span className="eyebrow light">SECTION</span><h1>{category} News</h1><p>{descriptions[category]}</p></div></section><section className="section-pad"><div className="container"><div className="news-grid">{items.map(item=><NewsCard item={item} key={item.id}/>)}</div>{items.length<4 && <div className="coming-note">More {category.toLowerCase()} stories will appear here as your CMS/API grows.</div>}</div></section><Newsletter/></>;
}
