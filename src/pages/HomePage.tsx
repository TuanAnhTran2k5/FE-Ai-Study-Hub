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
