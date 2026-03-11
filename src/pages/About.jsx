import AboutPage from '../components/About';
import Navbar from '../components/NavBar';
import Footer from '../components/Footer';

export default function About() {
  return (
      <div className="w-full h-full">
        <Navbar />
        <AboutPage/>
        <Footer />
      </div>
    );
}