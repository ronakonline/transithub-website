import CaseStudiesPage from '../components/CaseStudiesPage'
import Navbar from '../components/NavBar';
import Footer from '../components/Footer';

export default function CaseStudy() {
  return (
      <div className="w-full h-full">
        <Navbar />
        <CaseStudiesPage/>
        <Footer />
      </div>
    );
}