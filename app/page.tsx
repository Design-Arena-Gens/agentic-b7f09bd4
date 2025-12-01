export default function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="hero-content">
          <h1>Build faster with confidence</h1>
          <p>
            A minimal, production-ready Next.js starter deployed on Vercel. Clean
            structure, great DX, and instant scalability.
          </p>
          <div className="cta-row">
            <a className="btn btn-primary" href="#features">Explore features</a>
            <a className="btn btn-secondary" href="/api/hello">Ping API</a>
          </div>
        </div>
      </section>

      <section id="features" className="section">
        <h2>Features</h2>
        <ul className="features">
          <li>
            <h3>Next.js 14</h3>
            <p>App Router, Server Components, fast builds.</p>
          </li>
          <li>
            <h3>TypeScript</h3>
            <p>Type-safe by default for maintainable code.</p>
          </li>
          <li>
            <h3>Zero-config deploy</h3>
            <p>One command deploys globally on Vercel.</p>
          </li>
        </ul>
      </section>

      <section id="about" className="section">
        <h2>About</h2>
        <p>
          This template provides a clean foundation to ship landing pages,
          product sites, and micro-apps quickly, with excellent performance and
          SEO out of the box.
        </p>
      </section>

      <section id="contact" className="section">
        <h2>Contact</h2>
        <p>
          Questions or feedback? Reach us anytime at
          <a href="mailto:hello@example.com"> hello@example.com</a>.
        </p>
      </section>
    </>
  );
}
