// src/components/Card.tsx
import React from "react";

type Props = {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
};

export default function Card({ title, subtitle, children, className }: Props) {
  return (
    <section className={`card card-gradient shadow-sm rounded-4 p-4 ${className ?? ""}`}>
      <div className="card-header bg-white">
        <h2 className="h5 mb-0">{title}</h2>
        {subtitle && <div className="text-muted small mt-1">{subtitle}</div>}
      </div>
      <div className="card-body">{children}</div>
    </section>
  );
}
