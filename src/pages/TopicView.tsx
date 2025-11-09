// src/pages/TopicView.tsx
import React from "react";
import { useParams } from "react-router-dom";
import { topics } from "../topics";

export default function TopicView() {
  const { slug } = useParams<{ slug: string }>();
  const topic = topics.find(t => t.slug === slug);

  if (!topic) {
    return <div className="alert alert-danger">Topic not found.</div>;
  }

  return (
    <article className="bg-white border rounded-4 p-4 shadow-sm">
      <header className="mb-4">
        <h1 className="h3 mb-1">{topic.title}</h1>
        {topic.subtitle && <div className="text-muted">{topic.subtitle}</div>}
      </header>

      {/* Render raw HTML from the original file */}
      <div
        className="topic-html"
        dangerouslySetInnerHTML={{ __html: topic.html ?? "<p>No content.</p>" }}
      />
    </article>
  );
}
