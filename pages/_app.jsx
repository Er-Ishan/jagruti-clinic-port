import { Fragment, useEffect, useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { ToastContainer } from 'react-toastify';
import Layout from 'components/Layout';
import ThemeProvider from 'theme/ThemeProvider';

import 'animate.css';
import 'styles/style.css';
import 'styles/responsive.css';
import 'plyr-react/plyr.css';
import 'plugins/scrollcue/scrollCue.css';
import 'assets/scss/style.scss';

function MyApp({ Component, pageProps }) {
  const { pathname } = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (typeof window !== 'undefined') import('bootstrap');
  }, []);

  useEffect(() => {
    (async () => {
      const scrollCue = (await import('plugins/scrollcue')).default;
      scrollCue.init({
        interval: -400,
        duration: 700,
        percentage: 0.8,
      });
      scrollCue.update();
    })();
  }, [pathname]);

  useEffect(() => {
    const timeout = setTimeout(() => setLoading(false), 300); // debounce initial load
    return () => clearTimeout(timeout);
  }, []);

  return (
    <Fragment>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Dr. Jagruti Homeopathy Clinic</title>
        <meta name="description" content="Dr. Jagruti Homeopathy Clinic" />

        {/* Open Graph Meta */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Dr. Jagruti Homeopathy Clinic" />
        <meta property="og:description" content="Dr. Jagruti Homeopathy Clinic" />
        <meta property="og:url" content="https://entrova.com/" />
        <meta property="og:image" content="https://entrova.com/img/logo.webp" />
        <meta property="og:image:secure_url" content="https://entrova.com/img/logo.webp" />

        {/* Twitter Meta */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Dr. Jagruti Homeopathy Clinic" />
        <meta name="twitter:description" content="Dr. Jagruti Homeopathy Clinic" />
        <meta name="twitter:image" content="https://entrova.com/img/logo.webp" />
      </Head>

      <ThemeProvider>
        <Layout>
          <ToastContainer position="bottom-right" autoClose={5000} />
          {loading ? <div className="page-loader" /> : <Component {...pageProps} />}
        </Layout>
      </ThemeProvider>
    </Fragment>
  );
}

export default MyApp;
