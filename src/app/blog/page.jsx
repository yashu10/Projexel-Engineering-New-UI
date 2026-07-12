import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BlogClient from '@/components/BlogClient';

export const metadata = {
  title: "Engineering & EPC Blog | Insights from Projexel Engineering",
  description: "Read the latest insights, industry trends, and updates on Turnkey EPC, mechanical fabrication, and E&I solutions from the experts at Projexel Engineering.",
  keywords: "EPC blog, engineering blog, mechanical fabrication insights, E&I trends, industrial engineering news",
};

export default function BlogPage() {
  return (
    <>
      <Header />
      
      {/* Page Header */}
      <header className="page-header pattern-bg">
          <div className="container">
              <h1 className="page-title fade-in-up is-visible">LATEST <span className="text-gradient">INSIGHTS</span></h1>
              <p className="page-subtitle fade-in-up delay-1 is-visible">Stay updated with industrial engineering trends, technological innovations, and company achievements.</p>
          </div>
      </header>

      {/* Blog listing interactive client component */}
      <BlogClient />

      <Footer />
    </>
  );
}
