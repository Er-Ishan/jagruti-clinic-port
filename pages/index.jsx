import { Fragment } from 'react';
import Head from 'next/head';
import PageProgress from 'components/PageProgress';
import Hero from 'components/Hero';
import About from 'components/About';
import Services from 'components/Services';
import Intro from 'components/DoctorIntro';
import Test from 'components/Testimonials';
import Free from 'components/FreeGuide';

const Home = () => {
  return (
    <Fragment>
      <PageProgress />

      <Head>
        <title>Dr. Jagruti Homeopathy Clinic</title>
        <meta name="description" content="Trusted ENT care in Location. Discover our expert surgeries, treatments, and compassionate healthcare." />
        <link rel="canonical" href="https://entrova.com" />
      </Head>

      <main className="content-wrapper overflow-hidden">
        {/* Hero Section */}
        <Hero />

        {/* About Section */}
        {/* <section className="wrapper bg-light">
          <div className="container pt-8 pt-md-15">
            <About
              imgPosition="right"
              imgSrc="/img/ent.png"
              heading="Best ENT Hospital in Location"
              para="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur ut, nisi voluptatum dolore fuga molestiae optio magnam, sit recusandae vel repellat. Ad fuga eius modi repellendus perspiciatis fugit necessitatibus iusto blanditiis optio. Ipsam, qui cum? Numquam itaque doloremque qui, nihil sit, eligendi magni accusantium eaque similique vel deleniti hic recusandae. Ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur ut, nisi voluptatum dolore fuga molestiae optio magnam, sit recusandae vel repellat. Ad fuga eius modi repellendus perspiciatis fugit necessitatibus iusto blanditiis optio. Ipsam, qui cum? Numquam itaque doloremque qui, nihil sit, eligendi magni accusantium eaque similique vel deleniti hic recusandae."
              isH1="true"
            />
          </div>
        </section> */}

        {/* <section className="wrapper bg-light">
          <div className="container pt-8 pt-md-15">
            <Intro></Intro>
          </div>
        </section> */}

        <section className="wrapper bg-light py-10 py-md-14">
          <div className="container">
            <div className="col-md-10 col-lg-8">
              <p className="fs-80 fw-bolder sub-h2 position-relative">About Us</p>
              <h2 className="display-5 mb-16 fw-bold z-1 mt-n15 mt-md-n16 mt-lg-n17 sub-head">
                Meet Dr. Jagruti
                <span
                  className="ms-2 d-inline-block"
                  style={{
                    borderBottom: '3px solid #D8D8D8',
                    width: '30px',
                    height: 0,
                  }}
                />
              </h2>
            </div>

            {/* intro Grid */}
            <Intro></Intro>
          </div>
        </section>

        {/* Surgeries Section */}
        <section className="wrapper bg-light py-10 py-md-14">
          <div className="container">
            <div className="col-md-10 col-lg-8">
              <p className="fs-80 fw-bolder sub-h2 position-relative">Services</p>
              <h2 className="display-5 mb-16 fw-bold z-1 mt-n15 mt-md-n16 mt-lg-n17 sub-head">
                Our Services
                <span
                  className="ms-2 d-inline-block"
                  style={{
                    borderBottom: '3px solid #D8D8D8',
                    width: '30px',
                    height: 0,
                  }}
                />
              </h2>
            </div>

            {/* Services Grid */}
            <Services />
          </div>
        </section>

        {/* Guide Section */}
        <section className="wrapper bg-light py-10 py-md-14">
          <div className="container">
            <div className="col-md-10 col-lg-8">
              <p className="fs-80 fw-bolder sub-h2 position-relative">Free Guide</p>
              <h2 className="display-5 mb-16 fw-bold z-1 mt-n15 mt-md-n16 mt-lg-n17 sub-head">
                Guide
                <span
                  className="ms-2 d-inline-block"
                  style={{
                    borderBottom: '3px solid #D8D8D8',
                    width: '30px',
                    height: 0,
                  }}
                />
              </h2>
            </div>

            {/* testinomials Grid */}
            <Free></Free>
          </div>
        </section>

        {/* stories Section */}
        <section className="wrapper bg-light py-10 py-md-14">
          <div className="container">
            <div className="col-md-10 col-lg-8">
              <p className="fs-80 fw-bolder sub-h2 position-relative">Testinomials</p>
              <h2 className="display-5 mb-16 fw-bold z-1 mt-n15 mt-md-n16 mt-lg-n17 sub-head">
                Healing Stories
                <span
                  className="ms-2 d-inline-block"
                  style={{
                    borderBottom: '3px solid #D8D8D8',
                    width: '30px',
                    height: 0,
                  }}
                />
              </h2>
            </div>

            {/* testinomials Grid */}
            <Test></Test>
          </div>
        </section>
      </main>
    </Fragment>
  );
};

export default Home;
