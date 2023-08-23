import AboutCTA from "components/about/AboutCTA";
import AboutFeactures from "components/about/AboutFeactures";
import AboutTeam from "components/about/AboutTeams";
import AboutImages from "components/about/aboutImages";
import { AboutSections } from "components/about/aboutSections";
import HeaderAbout from "components/about/header";
import AboutTestimonal from "components/about/testimonal";
import Footer from "components/navigation/Footer";
import Navbar from "components/navigation/Navbar";
import Layout from "hocs/layouts/Layout";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";

function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Layout>
      <Helmet>
        <title>Three Codes|Sobre Nosotros</title>
        <meta
          name="description"
          content="Sobre Nosotros y lo que ofrecemos."
        />
        <meta
          name="keywords"
          content="Sobre Nosotros."
        />
        <meta name="robots" content="all" />
        <link rel="canonical" href="https://www.ThreeCodes.com/" />
        <meta name="author" content="ThreeCodes" />
        <meta name="publisher" content="ThreeCodes" />

        {/* Social Media Tags */}
        <meta property="og:title" content="Three Codes|Sobre Nosotros" />
        <meta
          property="og:description"
          content="Sobre Nosotros y lo que ofrecemos."
        />
        <meta property="og:url" content="https://www.ThreeCodes.com/" />
        <meta
          property="og:image"
          content="https://bafybeicwrhxloesdlojn3bxyjqnxgsagtd4sl53a7t4cn4vfe2abmybzua.ipfs.w3s.link/lightbnuilbg.jpg"
        />

        <meta name="twitter:title" content="Three Codes|Sobre Nosotros" />
        <meta
          name="twitter:description"
          content="Sobre Nosotros y lo que ofrecemos."
        />
        <meta
          name="twitter:image"
          content="https://bafybeicwrhxloesdlojn3bxyjqnxgsagtd4sl53a7t4cn4vfe2abmybzua.ipfs.w3s.link/lightbnuilbg.jpg"
        />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
      <Navbar />
      <div className="pt-32">
        <HeaderAbout />
        <AboutSections />
        <AboutImages />
        <AboutTestimonal />
        <AboutFeactures />
        <AboutTeam />
        <AboutCTA />
      </div>

      <Footer />
    </Layout>
  );
}
export default About;
