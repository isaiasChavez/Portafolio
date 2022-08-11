import "tailwindcss/tailwind.css";
import About from "../../components/Dashboard/About/About";
import Contact from "../../components/Dashboard/Contact";
import Header from "../../components/Dashboard/Header/Header";
import Portfolio from "../../components/Dashboard/Portfolio";
import Resume from "../../components/Dashboard/Resume/Resume";
import Services from "../../components/Dashboard/Services";
import Skills from "../../components/Dashboard/Skills";
import Footer from "../../components/Dashboard/Footer";
import Wa from "../../components/Dashboard/wa";
import Layout from "../../components/shared/layout";

interface DashboardProps {}

const Dashboard: React.FC<DashboardProps> = () => {
  return (
    <Layout>
      <Wa />
      <div className="">
        {/* <ProjectModal /> */}
        <Header />
        <About />
        <Services />
        <Resume />
        <Skills />
        <Contact />
        <Footer />
      </div>
    </Layout>
  );
};

export default Dashboard;
