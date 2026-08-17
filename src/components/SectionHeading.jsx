import { Link } from 'react-router-dom';

export default function SectionHeading({ eyebrow, title, text, link, linkLabel = 'View all' }) {
  return (
    <div className="section-heading">
      <div>
        {eyebrow && <span className="eyebrow">{eyebrow}</span>}
        <h2>{title}</h2>
        {text && <p>{text}</p>}
      </div>
      {link && <Link className="text-link" to={link}>{linkLabel} →</Link>}
    </div>
  );
}
