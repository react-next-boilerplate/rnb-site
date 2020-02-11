import React from 'react';

function Banner() {
  return (
    <section>
      <img src="/static/images/svg/banner-logo.svg" />

      <h1>React Next Boilerplate</h1>

      <p>Start your project with the NextJS in seconds</p>

      <style jsx>{`
        section {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          padding: 80px 0;
        }

        h1 {
          font-weight: 500;
          font-size: 2.8125rem;
          margin: 10px 0;
        }

        p {
          font-weight: 500;
        }
      `}</style>
    </section>
  );
}

export default Banner;
