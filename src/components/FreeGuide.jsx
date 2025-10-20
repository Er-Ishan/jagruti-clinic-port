import React from 'react';

const FreeGuide = () => {
  return (
    <section className="free-guide bg-light py-16 px-6 text-center">
      <div className="content-wrapper mx-auto">
        <h3 className="fs-36 fw-bold mb-6">Free Download</h3>
        <p className="fs-18 mb-8">
          <strong>"How to Start Natural Healing at Home"</strong><br />
          A comprehensive guide with simple home remedies, lifestyle tips, and preventive measures for common health issues. Perfect for beginners to natural healing.
        </p>
        <a 
          href="/files/NaturalHealingGuide.pdf" // Replace with your file path
          download
          className="download-btn px-6 py-3 secondary-bg text-white rounded fw-bold"
        >
          Download Free Guide
        </a>
      </div>

      <style jsx>{`
        .free-guide {
          width: 100%;
          background: #f8f9fa;
        }
        .content-wrapper {
          max-width: 900px;
          padding: 0 20px;
        }
        .download-btn {
          display: inline-block;
          text-decoration: none;
          font-size: 18px;
          transition: background 0.3s ease;
        }
        .download-btn:hover {
          background: #0d6efd;
        }

        /* Responsive */
        @media (max-width: 768px) {
          .fs-36 { font-size: 26px; }
          .fs-18 { font-size: 16px; }
          .download-btn { padding: 12px 24px; font-size: 16px; }
        }
      `}</style>
    </section>
  );
};

export default FreeGuide;
