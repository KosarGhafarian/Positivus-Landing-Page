import NavBar from "../components/NavBar";
import Header from "../components/Header";
import LogoDetail from "../components/LogoDetail";

const Home = () => {
  return (
    <div style={{ margin: "0 30px" }}>
      <NavBar />
      <Header />
      <LogoDetail />
      {/* <Services />
      <CaseStudies />
      <WorkingProcess />
      <Team /> */}
    </div>
  );
};

export default Home;
