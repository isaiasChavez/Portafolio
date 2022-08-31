import "tailwindcss/tailwind.css";
import styles from './styles.module.css'
import About from "../../components/Dashboard/About/About";
import Contact from "../../components/Dashboard/Contact";
import Header from "../../components/Dashboard/Header/Header";
import Resume from "../../components/Dashboard/Resume/Resume";
import Skills from "../../components/Dashboard/Skills";
import Footer from "../../components/Dashboard/Footer";
import Wa from "../../components/Dashboard/wa";
import Layout from "../../components/shared/layout";
import Services from "../../components/Dashboard/Services";

interface DashboardProps {}

const Dashboard: React.FC<DashboardProps> = () => {




  return (
    <Layout  background={styles.main}>
      <Wa />
        {/* <ProjectModal /> */}
        <Header />
        <About />
        <Services />
        <Resume />
        <Skills />
        <Contact />
      
        <Footer />
    </Layout>
  );
};

export default Dashboard;
