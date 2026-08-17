import { useState } from 'react';
import NewsCard from '../components/NewsCard';
import { newsItems } from '../data/siteData';

export default function News() {
  const categories = ['All','National','International','Fitness','Business','Technology'];
  const [filter,setFilter]=useState('All');
  const visible = filter === 'All' ? newsItems : newsItems.filter(n => n.category === filter);
  return <section className="section-pad"><div className="container"><div className="page-hero"><span className="eyebrow">NEWSROOM</span><h1>Latest News</h1><p>Top stories, clear context and useful reads — all in one place.</p></div><div className="filter-row">{categories.map(c=><button key={c} onClick={()=>setFilter(c)} className={filter===c?'active':''}>{c}</button>)}</div><div className="news-grid">{visible.map(item=><NewsCard item={item} key={item.id}/>)}</div></div></section>;
}
