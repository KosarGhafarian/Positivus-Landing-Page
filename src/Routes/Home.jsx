import NavBar from "../components/NavBar";
import Header from "../components/Header";
import LogoDetail from "../components/LogoDetail";
import Services from "./Services";
import CaseStudies from "./CaseStudies";
import WorkingProcess from "./WorkingProcess";
import Team from "./Team";
import Testimonials from "./Testimonials";
import ContactUs from "./ContactUs";

const Home = () => {
  return (
    <div id="home">
      <NavBar />
      <Header />
      <LogoDetail />
      <Services />
      <CaseStudies />
      <WorkingProcess />
      <Team />
      <Testimonials />
      <ContactUs />
    </div>
  );
};

export default Home;
