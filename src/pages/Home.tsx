import { Link } from "react-router-dom";
import { topics, homeIntroSlug } from "../topics";

export default function Home() {
  const intro = topics.find(t => t.slug === homeIntroSlug);

  return (
    <div className="container-xxl">
      {/* Practical details (centered) */}
<section className="mb-4">
  <div className="hero rounded-4 p-4 p-lg-5 mb-4 border rounded-4 p-4 shadow-sm text-center">
    <h1 className="h4 mb-3 fw-semibold">JAVA PRACTICAL</h1>

    <p className="mb-1"><strong>Submitted To:</strong> Mr. Chetan Gupta</p>
    <p className="mb-1"><strong>Name:</strong> Hema Pandey</p>
    <p className="mb-1"><strong>Roll No:</strong> 4021/23</p>
    <p className="mb-0"><strong>Class:</strong> BCA 3rd</p>
  </div>
</section>



      {/* Hero */}
      <section className="hero rounded-4 p-4 p-lg-5 mb-4">
        <h1 className="display-5 fw-semibold mb-2">Java Practical</h1>
        <p className="text-muted mb-4">
          Java remains one of the most strategically important languages in enterprise software development, valued for its platform independence, strong type system, and long-term stability. Its JVM ecosystem enables highly optimized performance, seamless scalability, and integration across distributed architectures. Today, Java is the foundation of mission-critical systems in banking, healthcare, e-commerce, telecommunications, and government infrastructure. With modern frameworks such as Spring Boot, Quarkus, and Micronaut, Java continues to evolve for cloud-native microservices, container orchestration, and DevOps workflows. Its mature concurrency model, extensive standard library, and backward-compatible releases make it a preferred choice for organizations requiring reliability, security, and long-term maintainability. Java’s relevance is further strengthened by active community support, continuous LTS updates, and its adoption in emerging domains like Big Data, Machine Learning pipelines, and high-performance distributed systems.
        </p>
        <div className="d-flex flex-column justify-content-center align-items-center gap-2">
          <Link to="/programs" className="btn btn-lg btn-primary">Explore Programs</Link>
          {intro && <a href="#welcome" className="btn btn-lg btn-outline-secondary">Read Welcome</a>}
        </div>
      </section>

      {/* What is Java */}
      <section className="hero rounded-4 p-4 p-lg-5 mb-4 border rounded-4 p-4 p-lg-5 shadow-sm mb-4">
        <h2 className="h4 mb-3">What is Java?</h2>
        <p className="mb-3">
          Java is a high-level, class-based, object-oriented language that runs on the JVM and follows
          “write once, run anywhere.”
        </p>
        <div className="row g-3">
          <div className="col-12 col-md-4">
            <div className="p-3 border rounded-3 h-100">
              <strong>Popular uses</strong>
              <ul className="mb-0 small text-muted">
                <li>Enterprise apps</li><li>Android</li><li>Web backends</li><li>Big data</li>
              </ul>
            </div>
          </div>
          <div className="col-12 col-md-4">
            <div className="p-3 border rounded-3 h-100">
              <strong>Core features</strong>
              <ul className="mb-0 small text-muted">
                <li>OOP & GC</li><li>Collections & Streams</li><li>Concurrency</li><li>Rich stdlib</li>
              </ul>
            </div>
          </div>
          <div className="col-12 col-md-4">
            <div className="p-3 border rounded-3 h-100">
              <strong>Checklist</strong>
              <ul className="mb-0 small text-muted">
                <li>Syntax & types</li><li>Classes & interfaces</li><li>Exceptions</li><li>Threads</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Optional: original welcome HTML */}
      {intro?.html && (
        <section id="welcome" className="bg-white border rounded-4 p-4 shadow-sm">
          <h2 className="h5">Welcome</h2>
          <div className="topic-html mt-2" dangerouslySetInnerHTML={{ __html: intro.html }} />
        </section>
      )}
    </div>
  );
}
