
import store from "./store";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Provider } from "react-redux";

import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import AnimatedRoutes from "Routes";


function App() {
  
  return (
    <HelmetProvider>
      <Helmet>
        <title>Three Codes</title>
        <meta
          name="description"
          content="Servicios de desarollo web y aplicaciones moviles."
        />
        <meta name="keywords" content="Agencia de desarollo de aplicaciones" />
        <meta name="robots" content="all" />
        <link rel="canonical" href="https://www.ThreeCodes.com/" />
        <meta name="author" content="ThreeCodes" />
        <meta name="publisher" content="ThreeCodes" />

        {/* Social Media Tags */}
        <meta property="og:title" content="Three Codes" />
        <meta
          property="og:description"
          content="Servicios de desarollo web y aplicaciones moviles."
        />
        <meta property="og:url" content="https://www.ThreeCodes.com/" />
        <meta
          property="og:image"
          content="https://bafybeicwrhxloesdlojn3bxyjqnxgsagtd4sl53a7t4cn4vfe2abmybzua.ipfs.w3s.link/lightbnuilbg.jpg"
        />

        <meta name="twitter:title" content="Three Codes" />
        <meta
          name="twitter:description"
          content="Servicios de desarollo web y aplicaciones moviles."
        />
        <meta
          name="twitter:image"
          content="https://bafybeicwrhxloesdlojn3bxyjqnxgsagtd4sl53a7t4cn4vfe2abmybzua.ipfs.w3s.link/lightbnuilbg.jpg"
        />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
      <Provider store={store}>
        <Router>
          <AnimatedRoutes/>

        </Router>
      </Provider>
    </HelmetProvider>
  );
}

export default App;
