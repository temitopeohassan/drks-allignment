import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import ScrollReveal from "./components/ScrollReveal";
import Home from "./pages/Home";
import WhoWeAre, { Leadership } from "./pages/WhoWeAre";
import ClientsAndPartners from "./pages/ClientsAndPartners";
import ContractVehicles from "./pages/ContractVehicles";
import Community from "./pages/Community";
import { WhatWeDoIndex, ServiceDetail } from "./pages/WhatWeDo";
import { OurImpactIndex, CaseStudyDetail } from "./pages/OurImpact";
import JoinOurTeam from "./pages/JoinOurTeam";
import Contact from "./pages/Contact";
import TermsOfService from "./pages/TermsOfService";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <>
      <a className="skip-link" href="#main">Skip to main content</a>
      <ScrollToTop />
      <ScrollReveal />
      <Header />
      <main id="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/what-we-do" element={<WhatWeDoIndex />} />
          <Route path="/what-we-do/:slug" element={<ServiceDetail />} />
          <Route path="/who-we-are" element={<WhoWeAre />} />
          <Route path="/who-we-are/leadership" element={<Leadership />} />
          <Route path="/who-we-are/clients-and-partners" element={<ClientsAndPartners />} />
          <Route path="/who-we-are/contract-vehicles" element={<ContractVehicles />} />
          <Route path="/who-we-are/community" element={<Community />} />
          <Route path="/our-impact" element={<OurImpactIndex />} />
          <Route path="/our-impact/:slug" element={<CaseStudyDetail />} />
          <Route path="/join-our-team" element={<JoinOurTeam />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/terms-service" element={<TermsOfService />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}
