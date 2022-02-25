import '../public/fontello/css/fontello.css';

import { AnimatePresence } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { GlobalStyles } from '../styles/GlobalStyles';

function MyApp({ Component, pageProps, router }) {
  const url = `http://localhost:3000/${router.route}`;
  return (
    <>
      <GlobalStyles />
      <Header />
      <AnimatePresence
        exitBeforeEnter
        onExitComplete={() => window.scrollTo(0, 0)}
      >
        <Component {...pageProps} canonical={url} key={url} />
      </AnimatePresence>
      <Footer />
    </>
  );
}

export default MyApp;
