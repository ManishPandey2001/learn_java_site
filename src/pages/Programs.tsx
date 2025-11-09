import React from "react";
import { Link } from "react-router-dom";
import Card from "../components/Card";
import { topics, homeIntroSlug } from "../topics";

export default function Programs() {
  const [q, setQ] = React.useState("");

  const list = React.useMemo(() => {
    const s = q.trim().toLowerCase();
    return topics
      .filter(t => t.slug !== homeIntroSlug) // hide welcome on grid
      .filter(t => !s || t.title.toLowerCase().includes(s) || (t.subtitle ?? "").toLowerCase().includes(s));
  }, [q]);

  return (
    <div className="container-xxl">
      <div className="d-flex flex-wrap align-items-center justify-content-between gap-2 mb-3">
        <h1 className="h3 mb-0">Programs</h1>
        <input
          className="form-control"
          style={{ maxWidth: 320 }}
          placeholder="Search topics…"
          value={q}
          onChange={(e) => setQ(e.target.value)}
        />
      </div>

      <div className="row g-4 row-cols-1 row-cols-md-2 row-cols-xl-3">
        {list.map(t => (
          <div className="col" key={t.slug}>
            <Card title={t.title} subtitle={t.subtitle} className="h-100 hover-lift">
              <p className="mb-4 small text-muted">
                Open the full topic page with examples and explanations.
              </p>
              <Link to={`/topic/${t.slug}`} className="btn btn-sm btn-primary">Open</Link>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}
