<<<<<<< HEAD
import { Link } from 'react-router-dom';
import { FileText } from 'lucide-react';

import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { routePath } from '@/models/routePath';

export function HomePage() {
  return (
    <div className="home-page">
      <Header />

      <main className="home-main">
        <section className="home-hero">
          <div>
            <div className="hero-pill">
              <FileText size={15} />
              Simple Document Management System
            </div>

            <h1>
              Manage, Share, and Learn Smarter with <span>AI Study Hub</span>
            </h1>

            <p>
              A comprehensive platform to store, search, and access your study materials anytime,
              anywhere. Use AI to chat with documents, summarize content, and generate practice
              quizzes.
            </p>

            <div className="hero-actions">
              <Link className="hero-primary" to={routePath.documents}>
                Get Started
              </Link>
              <Link className="hero-secondary" to={routePath.documents}>
                Explore Documents
              </Link>
            </div>
          </div>

          <div className="hero-visual">
            <img src="/img/LogoLink.png" alt="AI Study Hub learning dashboard" />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
=======
import React from "react";
import { TbFileText } from "react-icons/tb";

function HomePage() {
  return (
    <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1fr_0.92fr]">
      <div>
        <div className="mb-12 inline-flex items-center gap-2 rounded-full bg-[#cfe7f6]/70 px-4 py-1.5 text-xs font-black uppercase tracking-wide text-[#005f9e]">
          <TbFileText size={14} />
          Simple Document Management System
        </div>

        <h1 className="max-w-3xl text-5xl font-black leading-[0.95] tracking-normal text-slate-950 md:text-7xl">
          Manage, Share, and Learn Smarter with{" "}
          <span className="bg-gradient-to-r from-[#0067b1] to-[#3e42df] bg-clip-text text-transparent">
            AI Study Hub
          </span>
        </h1>

        <p className="mt-10 max-w-2xl text-lg leading-8 text-slate-700">
          A comprehensive platform to store, search, and access your study
          materials anytime, anywhere. Harness the power of AI to chat with your
          documents, summarize content, and generate practice quizzes
          effortlessly.
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <button className="h-14 rounded-2xl bg-gradient-to-r from-[#0479ff] to-[#3c42e8] px-12 text-base font-black text-white shadow-[0_16px_30px_rgba(34,95,224,0.28)] transition hover:-translate-y-1">
            Get Started
          </button>

          <button className="h-14 rounded-2xl border border-[#a7cae2] bg-white/60 px-12 text-base font-black text-[#005f9e] shadow-sm transition hover:-translate-y-1 hover:bg-white">
            Explore Documents
          </button>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
>>>>>>> b630af94cf38e29d45b378547d97ff6279140bb0
