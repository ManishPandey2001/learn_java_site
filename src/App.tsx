// src/App.tsx
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Programs from "./pages/Programs";

import TopicView from "./pages/TopicView";

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/topic/:slug" element={<TopicView />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
