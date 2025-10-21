import Image from 'next/image';
import NextLink from './NextLink';
import PropTypes from 'prop-types';

const ServiceCard = ({ title, src, description }) => {
  return (
    <div className="col-md-6 col-lg-4 mb-4">
      <div className="card service-card h-100 text-center p-3">
        <div className="card-body d-flex flex-column align-items-center justify-content-between">
          <Image
            src={src}
            alt={`${title} | ENTrova`}
            width={100}
            height={100}
            className="my-3"
            style={{ objectFit: 'contain' }}
          />
          <h3 className="fs-20 fw-bold mt-3">{title}</h3>
          <p className="fs-16 text-muted px-3 mt-2">{description}</p>
          <NextLink
            title="Learn More"
            href="#"
            className="btn btn-md text-white secondary-bg rounded mt-3 service-btn"
          />
        </div>
      </div>

      <style jsx>{`
        .service-card {
          min-height: 420px; /* Uniform height */
          border: 1px solid #ddd;
          border-radius: 12px;
          box-shadow: 0 4px 12px rgba(0,0,0,0.1);
          transition: none !important; /* Remove all hover/dancing effects */
        }

        .service-card:hover {
          transform: none !important; /* Prevent any movement */
          box-shadow: 0 4px 12px rgba(0,0,0,0.1) !important; /* Keep shadow same */
        }

        .service-btn {
          background-color: #4CAF50;
          transition: background-color 0.3s ease;
        }

        .service-btn:hover {
          background-color: #388E3C;
        }

        h3, p {
          text-align: center;
        }
      `}</style>
    </div>
  );
};

ServiceCard.propTypes = {
  title: PropTypes.string,
  src: PropTypes.string,
  description: PropTypes.string,
};

ServiceCard.defaultProps = {
  title: 'Untitled Service',
  src: '/img/default-service.png',
  description: 'No description available.',
};

export default ServiceCard;
