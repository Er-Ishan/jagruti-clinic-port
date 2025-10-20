import { FaGraduationCap, FaMedal, FaCheckCircle } from 'react-icons/fa';
import Image from 'next/image';

const DoctorIntro = () => {
  return (
    <section
      className="doctor-intro d-flex align-items-center py-5 w-100"
      style={{
        minHeight: '100vh',
        background: 'transparent',
      }}
    >
      <div className="container-fluid px-5">
        {/* Header Section */}
        <div className="text-center mb-5">
          <p className="fs-17 lead text-dark">
            Your trusted partner in holistic healing, dedicated to transforming lives
            through personalized homeopathic care.
          </p>
        </div>

        {/* Main Content Row */}
        <div className="row align-items-center justify-content-center">
          {/* Left Image */}
          <div className="col-md-4 text-center mb-4 mb-md-0">
            <div
              className="doctor-image-container d-flex align-items-center justify-content-center shadow rounded-circle overflow-hidden"
              style={{
                width: '240px',
                height: '240px',
                margin: '0 auto',
                background: 'linear-gradient(135deg, #fef3c7 0%, #f3f4f6 100%)',
                border: '5px solid #fff',
                transition: 'all 0.4s ease',
              }}
            >
              <Image
                src="/img/jag.jpg"
                alt="Dr. Jagruti Patil"
                width={240}
                height={240}
                style={{
                  objectFit: 'cover',
                  transition: 'transform 0.5s ease',
                }}
                className="doctor-image"
              />
            </div>
          </div>

          {/* Right Info Section */}
          <div className="col-md-7">
            <h4 className="text-center fs-28 fw-bold text-primary mb-4">Dr. Jagruti Patil</h4>
            <p
              className="fs-18 text-dark mb-5 text-center"
              style={{ lineHeight: '1.8' }}
            >
              With over 8 years of dedicated practice in homeopathic medicine, Dr. Jagruti
              has become a beacon of hope for patients seeking natural and effective
              healthcare solutions. Her approach combines traditional homeopathic
              principles with modern diagnostic techniques to provide comprehensive care.
            </p>

            {/* Info Cards */}
            <div className="row g-4 mb-4">
              {/* Education */}
              <div className="col-sm-6">
                <div className="p-4 rounded shadow-lg h-100 bg-white info-card">
                  <div className="d-flex align-items-center mb-3">
                    <FaGraduationCap className="text-success me-3 fs-24" />
                    <h5 className="fw-bold mb-0 fs-18">Education</h5>
                  </div>
                  <p className="mb-0 text-dark fs-16">
                    M.D. (Homeopathy)
                    <br />
                    Bachelor of Homeopathic Medicine & Surgery
                  </p>
                </div>
              </div>

              {/* Experience */}
              <div className="col-sm-6">
                <div className="p-4 rounded shadow-lg h-100 bg-white info-card">
                  <div className="d-flex align-items-center mb-3">
                    <FaMedal className="text-success me-3 fs-24" />
                    <h5 className="fw-bold mb-0 fs-18">Experience</h5>
                  </div>
                  <p className="mb-0 text-dark fs-16">
                    8+ Years of Clinical Practice
                    <br />
                    600+ Successfully Treated Cases
                  </p>
                </div>
              </div>

              {/* Specialization */}
              <div className="col-sm-6">
                <div className="p-4 rounded shadow-lg h-100 bg-white info-card">
                  <div className="d-flex align-items-center mb-3">
                    <FaMedal className="text-success me-3 fs-24" />
                    <h5 className="fw-bold mb-0 fs-18">Specialization</h5>
                  </div>
                  <p className="mb-0 text-dark fs-16">
                    Chronic Diseases
                    <br />
                    Skin Conditions & Pediatrics
                  </p>
                </div>
              </div>

              {/* Approach */}
              <div className="col-sm-6">
                <div className="p-4 rounded shadow-lg h-100 bg-white info-card">
                  <div className="d-flex align-items-center mb-3">
                    <FaMedal className="text-success me-3 fs-24" />
                    <h5 className="fw-bold mb-0 fs-18">Approach</h5>
                  </div>
                  <p className="mb-0 text-dark fs-16">
                    Individualized Treatment
                    <br />
                    Holistic Wellness Focus
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Hover Effect Styling */}
      <style jsx>{`
        .doctor-image-container:hover {
          transform: scale(1.05);
          box-shadow: 0 8px 20px rgba(22, 163, 74, 0.3);
        }

        .doctor-image-container:hover .doctor-image {
          transform: scale(1.1);
          filter: brightness(1.05);
        }

        .info-card {
          transition: transform 0.4s ease, box-shadow 0.4s ease;
        }

        .info-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 15px 30px rgba(0, 0, 0, 0.15);
        }

        @media (max-width: 768px) {
          .info-card {
            margin-bottom: 20px;
          }
        }
      `}</style>
    </section>
  );
};

export default DoctorIntro;
