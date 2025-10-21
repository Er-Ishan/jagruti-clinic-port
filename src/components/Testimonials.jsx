import Image from 'next/image';
import { FaQuoteLeft, FaQuoteRight, FaCalendarAlt } from 'react-icons/fa';
import { useState } from 'react';

const testimonials = [
  { name: "Rohit Sharma", designation: "Patient", treatedAt: "Jan 2025", image: "/img/rohit.jpg", quote: "Dr. Jagruti's treatment changed my life. I felt the improvement within weeks, and her care is truly personalized." },
  { name: "Mahendra Dhoni", designation: "Patient", treatedAt: "Feb 2025", image: "/img/dhoni.jpg", quote: "I always struggled with chronic conditions, but the holistic approach here really worked. Highly recommend!" },
  { name: "Virat Kohli", designation: "Patient", treatedAt: "Mar 2025", image: "/img/virat.jpg", quote: "Professional, compassionate, and highly skilled. The homeopathic treatment was exactly what I needed." },
  { name: "Hritik Roshan", designation: "Patient", treatedAt: "Apr 2025", image: "/img/ritik.jpg", quote: "I had persistent health issues, and Dr. Jagruti's holistic approach gave me a new lease on life. Truly amazing care!" },
  { name: "Christopher Nolan", designation: "Patient", treatedAt: "May 2025", image: "/img/nolan.avif", quote: "The personalized treatment made all the difference. I feel healthier and more energetic than ever." },
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);

  const prevSlide = () => setCurrent(current === 0 ? testimonials.length - 1 : current - 1);
  const nextSlide = () => setCurrent(current === testimonials.length - 1 ? 0 : current + 1);

  return (
    <section  className="testimonials py-10 bg-light">
      <div className="container text-center">
        <h2 className="fs-40 fw-bold mb-6 text-primary">What Our Patients Say</h2>

        {/* Desktop Auto-scroll */}
        <div className="d-none d-lg-flex testimonial-track-wrapper">
          <div className="testimonial-track">
            {[...testimonials, ...testimonials].map((item, index) => (
              <div key={index} className="testimonial-card p-4 rounded shadow bg-white mx-3 flex-shrink-0">
                <div className="testimonial-quote mb-3 text-primary fs-24"><FaQuoteLeft /></div>
                <p className="fs-16 text-dark mb-2" style={{ lineHeight: "1.6" }}>{item.quote}</p>
                <div className="d-flex align-items-center justify-content-center mb-3 text-muted">
                  <FaCalendarAlt className="me-2" /> <small>Treated at: {item.treatedAt}</small>
                </div>
                <div className="d-flex align-items-center justify-content-center">
                  <div className="patient-image rounded-circle overflow-hidden me-3">
                    <Image src={item.image} alt={item.name} width={60} height={60} style={{ objectFit: "cover" }} />
                  </div>
                  <div className="text-start">
                    <h6 className="mb-0 fw-bold">{item.name}</h6>
                    <small className="text-muted">{item.designation}</small>
                  </div>
                </div>
                <div className="testimonial-quote-end mt-3 text-primary fs-24"><FaQuoteRight /></div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile/Tablet Carousel */}
        <div className="d-lg-none position-relative mt-6">
          <div className="carousel-wrapper">
            <div className="testimonial-card p-4 rounded shadow bg-white mx-auto">
              <div className="testimonial-quote mb-3 text-primary fs-24"><FaQuoteLeft /></div>
              <p className="fs-16 text-dark mb-2" style={{ lineHeight: "1.6" }}>
                {testimonials[current].quote}
              </p>
              <div className="d-flex align-items-center justify-content-center mb-3 text-muted">
                <FaCalendarAlt className="me-2" /> <small>Treated at: {testimonials[current].treatedAt}</small>
              </div>
              <div className="d-flex align-items-center justify-content-center">
                <div className="patient-image rounded-circle overflow-hidden me-3">
                  <Image src={testimonials[current].image} alt={testimonials[current].name} width={60} height={60} style={{ objectFit: "cover" }} />
                </div>
                <div className="text-start">
                  <h6 className="mb-0 fw-bold">{testimonials[current].name}</h6>
                  <small className="text-muted">{testimonials[current].designation}</small>
                </div>
              </div>
              <div className="testimonial-quote-end mt-3 text-primary fs-24"><FaQuoteRight /></div>
            </div>

            {/* Arrows */}
            <button className="carousel-btn prev" onClick={prevSlide}>&lt;</button>
            <button className="carousel-btn next" onClick={nextSlide}>&gt;</button>
          </div>
        </div>
      </div>

      <style jsx>{`
        /* Desktop */
        .testimonial-track-wrapper { overflow: hidden; }
        .testimonial-track { display: flex; gap: 20px; flex-wrap: nowrap; animation: scroll-left 40s linear infinite; }
        .testimonial-card { 
          flex: 0 0 auto; 
          min-width: 320px; 
          max-width: 360px; 
          background: #fff; 
          border-radius: 12px; 
          box-shadow: 0 4px 12px rgba(0,0,0,0.1); 
          display: flex; 
          flex-direction: column; 
          justify-content: space-between;
          border: 1px solid #ddd; /* Added border */
          min-height: 420px; /* Uniform height */
        }
        .patient-image { width: 60px; height: 60px; }
        @keyframes scroll-left { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }

        /* Mobile/Tablet Carousel */
        .carousel-wrapper { position: relative; display: flex; justify-content: center; align-items: center; }
        .carousel-btn {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          background: #4CAF50;
          border: none;
          color: white;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          font-size: 20px;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .carousel-btn.prev { left: 10px; }
        .carousel-btn.next { right: 10px; }
        .carousel-btn:hover { background: #388E3C; }
        .d-lg-none .testimonial-card { min-width: 250px; max-width: 300px; border: 1px solid #ddd; min-height: 420px; display: flex; flex-direction: column; justify-content: space-between; }
      `}</style>
    </section>
  );
};

export default Testimonials;
