import Navbar from "../components/NavBar";
import Footer from "../components/Footer";
import OTAHerosection from "../components/OTAHeroSection"
import OTAPainPoints from "../components/OTAPainPoints";
import OTAFeatures from "../components/OTAFeatures";
import OTAGetStarted from "../components/OTAGetStarted";
import SupplierNetwork from "../components/SupplierNetwork";
import OTACTA from "../components/OTACTA";
import ComparisonTable from "../components/ComparisonTable";



export default function OTA() {
 return (
     <div className="w-full h-full">
       <Navbar />
       <OTAHerosection/>
       <OTAPainPoints/>
       <OTAFeatures/>
       <ComparisonTable/>
       <OTAGetStarted/>
       <SupplierNetwork/>
       <OTACTA/>
       <Footer />
     </div>
   );
}