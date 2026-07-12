import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProjectsClient from '@/components/ProjectsClient';

export const metadata = {
  title: "Project Portfolio | Projexel Engineering - Successful EPC Projects",
  description: "View our diverse portfolio of successfully delivered EPC and industrial projects for major clients like Amul Dairy, Coca-Cola, and JSW Steel.",
  keywords: "EPC projects, industrial projects, mechanical fabrication portfolio, E&I projects, successful engineering projects, Projexel case studies",
};

export default function ProjectsPage() {
  return (
    <>
      <Header />
      
      {/* Page Header */}
      <header className="page-header pattern-bg">
          <div className="container">
              <h1 className="page-title fade-in-up">PROJECT <span className="text-gradient">PORTFOLIO</span></h1>
              <p className="page-subtitle fade-in-up delay-1" style={{"fontFamily":"var(--font-heading)","fontWeight":"700","color":"var(--clr-primary)","fontSize":"1.25rem"}}>Executing Excellence across Water, Mechanical, and E&I Infrastructure.</p>
          </div>
      </header>

      {/* Projects Client Component */}
      <ProjectsClient />

      <Footer />
    </>
  );
}

