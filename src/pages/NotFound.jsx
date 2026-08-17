import { Link } from 'react-router-dom';
export default function NotFound(){return <section className="section-pad"><div className="container not-found"><span>404</span><h1>That story moved somewhere else.</h1><p>The page you are looking for does not exist.</p><Link to="/" className="pill-btn inline-btn">Back home</Link></div></section>}
