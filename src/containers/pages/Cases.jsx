import HeaderCases from "components/cases/cases";
import CasesList from "components/cases/casesList";
import Footer from "components/navigation/Footer";
import Navbar from "components/navigation/Navbar";
import Layout from "hocs/layouts/Layout";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";

function Cases() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Layout>
      <Helmet>
        <title>Three Codes|Casos de Estudio</title>
        <meta
          name="description"
          content="Casos de estudio sobre le desarrollo de aplicaciones web y moviles."
        />
        <meta name="keywords" content="Casos de estudio en el desarrollo de paginas" />
        <meta name="robots" content="all" />
        <link rel="canonical" href="https://www.ThreeCodes.com/" />
        <meta name="author" content="ThreeCodes" />
        <meta name="publisher" content="ThreeCodes" />

        {/* Social Media Tags */}
        <meta property="og:title" content="Three Codes|Casos de Estudio" />
        <meta
          property="og:description"
          content="Casos de estudio sobre le desarrollo de aplicaciones web y moviles."
        />
        <meta property="og:url" content="https://www.ThreeCodes.com/" />
        <meta
          property="og:image"
          content="https://bafybeicwrhxloesdlojn3bxyjqnxgsagtd4sl53a7t4cn4vfe2abmybzua.ipfs.w3s.link/lightbnuilbg.jpg"
        />

        <meta name="twitter:title" content="Three Codes|Casos de Estudio" />
        <meta
          name="twitter:description"
          content="Casos de estudio sobre le desarrollo de aplicaciones web y moviles."
        />
        <meta
          name="twitter:image"
          content="https://bafybeicwrhxloesdlojn3bxyjqnxgsagtd4sl53a7t4cn4vfe2abmybzua.ipfs.w3s.link/lightbnuilbg.jpg"
        />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
      <Navbar />
      <div className="pt-32">
        <HeaderCases />
        <CasesList />
      </div>

      <Footer />
    </Layout>
  );
}
export default Cases;
