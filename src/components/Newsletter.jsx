export default function Newsletter() {
  return (
    <section className="newsletter">
      <div className="container newsletter-inner">
        <div><span className="eyebrow light">THE DAILY PULSE</span><h2>News worth opening your inbox for.</h2><p>One useful email. Top stories, sharp context, zero noise.</p></div>
        <form onSubmit={(e) => e.preventDefault()}><input type="email" placeholder="Enter your email" required /><button>Subscribe</button></form>
      </div>
    </section>
  );
}
