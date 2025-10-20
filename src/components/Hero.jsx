import Image from 'next/image';
import NextLink from './NextLink';

/**
 * Hero section with centered content.
 */
const Hero = () => {
  return (
    <section
      className="hero d-flex align-items-center justify-content-center text-center position-relative"
      style={{
        minHeight: '90vh',
        fontFamily: "'Poppins', sans-serif",
      }}
    >
      <div className="container position-relative z-1">
        <div className="row justify-content-center">
          <div
            className="col-lg-8 col-md-10 p-4 d-flex flex-column align-items-center justify-content-center"
            data-cues="slideInDown"
            data-group="page-title"
            data-interval="-200"
            data-delay="500"
          >
            <h2 className="fs-56 mb-4 text-dark fw-bold animate__animated animate__slideInDown animate__delay-1s">
              Holistic Healing Through Personalized Homeopathy
            </h2>

            <p className="lead fs-20 lh-sm mb-5 text-muted animate__animated animate__slideInRight animate__delay-2s">
              Led by Dr. Jagruti, transforming lives through science-backed natural care. Experience the power of individualized homeopathic treatment for lasting wellness.
            </p>

            <div className="animate__animated animate__slideInUp animate__delay-3s">
              <NextLink
                title="Read More"
                href="#"
                className="btn btn-lg text-white secondary-bg rounded px-5 py-3"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
