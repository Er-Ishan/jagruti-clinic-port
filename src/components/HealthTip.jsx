import React from 'react';

const HealthTip = () => {
  return (
    <section className="health-tip py-12 px-6 text-center">
      <div className="content-wrapper mx-auto">
        <h3 className="fs-32 fw-bold mb-4 text-primary">Health Tip of the Week</h3>
        <p className="fs-18 mb-4 text-dark">
          <strong>Natural Immunity Booster:</strong> Start your day with warm water mixed with a teaspoon of honey and a few drops of lemon. This simple remedy helps detoxify your body, boosts metabolism, and strengthens your immune system naturally.
        </p>
        <p className="fs-16 text-dark-50">
          Updated weekly by Dr. Jagruti
        </p>
      </div>

      <style jsx>{`
        .health-tip {
          width: 100%;
          background: #d5d8e8;
          border-radius: 20px;
        }
        .content-wrapper {
          max-width: 900px;
          padding: 0 20px;
        }
        .fs-32 { font-size: 32px; }
        .fs-18 { font-size: 18px; }
        .fs-16 { font-size: 16px; }

        /* Responsive */
        @media (max-width: 768px) {
          .fs-32 { font-size: 26px; }
          .fs-18 { font-size: 16px; }
          .fs-16 { font-size: 14px; }
          .content-wrapper { padding: 0 15px; }
        }
      `}</style>
    </section>
  );
};

export default HealthTip;
