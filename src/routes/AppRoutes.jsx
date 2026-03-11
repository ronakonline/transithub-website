import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import Demo from '../pages/Demo'
import OTA from '../pages/OTA'
import PrivacyPage from '../pages/Privacy'
import TermsPage from '../pages/Terms'
import SecurityPage from '../pages/Security'
import CaseStudy from '../pages/CaseStudies'
import About from '../pages/About'
import CaseStudyDetailPage from '../components/CaseStudyDetailPage'
function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/demo" element={<Demo />} />
      <Route path="/ota" element={<OTA/>} />
       <Route path="/privacy" element={<PrivacyPage />} />
      <Route path="/terms" element={<TermsPage />} />
      <Route path="/security" element={<SecurityPage />} />
      <Route path="/case-study" element={<CaseStudy/>} />
       <Route path="/case-study/:id" element={<CaseStudyDetailPage />} />
      <Route path="/about" element={<About/>} />
    </Routes>
  )
}

export default AppRoutes