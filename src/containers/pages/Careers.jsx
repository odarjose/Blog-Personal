import CarriersLogo from "components/carriers/CarriersLogo";
import CarriersPro from "components/carriers/carriers";
import Features from "components/carriers/carriersFeactures";
import CarriersTestimonial from "components/carriers/carriersTestimonial";
import PositionList from "components/carriers/positionLists";
import Footer from "components/navigation/Footer";
import Navbar from "components/navigation/Navbar";
import Layout from "hocs/layouts/Layout";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";

function Careers() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Layout>
      <Helmet>
        <title>Three Codes|Carreras</title>
        <meta
          name="description"
          content="Conoce nuestras carreras que permitiran impulsar tu negocio."
        />
        <meta name="keywords" content="Conoce nuestras carreras." />
        <meta name="robots" content="all" />
        <link rel="canonical" href="https://www.ThreeCodes.com/" />
        <meta name="author" content="ThreeCodes" />
        <meta name="publisher" content="ThreeCodes" />

        {/* Social Media Tags */}
        <meta property="og:title" content="Three Codes|Carreras" />
        <meta
          property="og:description"
          content="Conoce nuestras carreras que permitiran impulsar tu negocio."
        />
        <meta property="og:url" content="https://www.ThreeCodes.com/" />
        <meta
          property="og:image"
          content="https://bafybeicwrhxloesdlojn3bxyjqnxgsagtd4sl53a7t4cn4vfe2abmybzua.ipfs.w3s.link/lightbnuilbg.jpg"
        />

        <meta name="twitter:title" content="Three Codes|Carreras" />
        <meta
          name="twitter:description"
          content="Conoce nuestras carreras que permitiran impulsar tu negocio."
        />
        <meta
          name="twitter:image"
          content="https://bafybeicwrhxloesdlojn3bxyjqnxgsagtd4sl53a7t4cn4vfe2abmybzua.ipfs.w3s.link/lightbnuilbg.jpg"
        />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
      <Navbar />
      <div className="pt-32">
        <CarriersPro />
        <CarriersTestimonial />
        <CarriersLogo />
        <Features />
        <PositionList />
      </div>

      <Footer />
    </Layout>
  );
}
export default Careers;
