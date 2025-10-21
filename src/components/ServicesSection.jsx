import React from "react";

const ServicesSection = () => {
  

  return (
    <section className="testimonials py-10 bg-light">
      <div className="container text-center">
        <h2 className="fs-40 fw-bold mb-6 text-success">Conditions We Treat</h2>
        <p className="fs-16 text-dark mb-5" style={{ lineHeight: "1.6" }}>
          Comprehensive homeopathic care for a wide range of health conditions, tailored to your unique needs.
        </p>

        {/* Desktop Cards */}
        <div className="d-none d-lg-flex testimonial-track-wrapper justify-content-center">
          <div className="testimonial-track">
            {services.map((service, index) => (
              <div key={index} className="testimonial-card p-4 rounded shadow bg-white mx-3 flex-shrink-0">
                <h5 className="mb-3 fw-bold text-success fs-20">{service.title}</h5>
                <ul className="list-unstyled text-dark mb-0" style={{ lineHeight: "1.6" }}>
                  {service.items.map((item, i) => (
                    <li key={i} className="mb-2 d-flex align-items-center fs-16">
                      <i className="bi bi-check-circle-fill text-success me-2"></i>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile/Tablet Carousel */}
        <div className="d-lg-none position-relative mt-6">
          <div className="carousel-wrapper">
            <div className="testimonial-card p-4 rounded shadow bg-white mx-auto">
              <h5 className="mb-3 fw-bold text-success fs-20">{services[0].title}</h5>
              <ul className="list-unstyled text-dark mb-0" style={{ lineHeight: "1.6" }}>
                {services[0].items.map((item, i) => (
                  <li key={i} className="mb-2 d-flex align-items-center fs-16">
                    <i className="bi bi-check-circle-fill text-success me-2"></i>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* We Also Treat */}
        <div className="mt-6">
          <h5 className="fw-bold text-success mb-4 fs-18">We Also Treat</h5>
          <div className="d-flex flex-wrap justify-content-center gap-3">
            {moreTreatments.map((item, i) => (
              <span
                key={i}
                className="border rounded-pill px-3 py-2 bg-white shadow-sm fs-16 text-dark"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        /* Desktop */
        .testimonial-track-wrapper { overflow: hidden; }
        .testimonial-track { display: flex; gap: 20px; flex-wrap: nowrap; }
        .testimonial-card { 
          flex: 0 0 auto; 
          min-width: 320px; 
          max-width: 360px; 
          background: #fff; 
          border-radius: 12px; 
          box-shadow: 0 4px 12px rgba(0,0,0,0.1); 
          display: flex; 
          flex-direction: column; 
          justify-content: flex-start;
          border: 1px solid #ddd;
          min-height: 420px; /* Uniform height like testimonials */
        }

        /* Mobile/Tablet Carousel */
        .carousel-wrapper { position: relative; display: flex; justify-content: center; align-items: center; }
        .d-lg-none .testimonial-card { min-width: 250px; max-width: 300px; border: 1px solid #ddd; min-height: 420px; display: flex; flex-direction: column; justify-content: flex-start; }
      `}</style>
    </section>
  );
};

export default ServicesSection;
