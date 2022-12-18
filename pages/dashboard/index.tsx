import "tailwindcss/tailwind.css";
import styles from "./styles.module.css";
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
import CookieConsent from "../../components/CookieConsent/CookieConsent";

interface DashboardProps {}

const Dashboard: React.FC<DashboardProps> = () => {
  return (
    <Layout background={styles.main}>
      <NavBar />
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
      <CookieConsent message="Hola, debo informarte que este sitio utiliza cookies para mejorar tu experiencia de usuario. Las cookies me permiten recordar tus preferencias y hacer que el sitio funcione de manera más eficiente. Si estás de acuerdo con las cookies, por favor acepta el uso de ellas haciendo clic en el botón 'Aceptar'. Si prefieres no utilizar cookies, puedes cambiar la configuración de tu navegador para bloquearlas. ¡Gracias por visitarme!" />
    </Layout>
  );
};

export default Dashboard;
