import "tailwindcss/tailwind.css";
import styles from './styles.module.css'
import About from "../../components/Dashboard/About/About";
import Contact from "../../components/Dashboard/Contact/Contact";
import Header from "../../components/Dashboard/Header/Header";
import Resume from "../../components/Dashboard/Resume/Resume";
import Footer from "../../components/Dashboard/Footer";
import Wa from "../../components/Dashboard/wa";
import Layout from "../../components/shared/layout";
import Services from "../../components/Dashboard/Services";
import Head from "next/head";
import NavBar from "../../components/NavBar";

interface DashboardProps {}

const Dashboard: React.FC<DashboardProps> = () => {




  return (
    <Layout background={styles.main}>
      <NavBar/>
      <Head>
        <title>Isaías Chávez Martínez</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Wa />
        {/* <ProjectModal /> */}
        <Header />
        <About />
        <Services />
        <Resume />
        <Contact />
      
        <Footer />
    </Layout>
  );
};

export default Dashboard;
