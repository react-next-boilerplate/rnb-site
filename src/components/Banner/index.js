import React from 'react';

function Banner() {
  return (
    <section>
      <img aria-label="React Next Boilerplate banner logo" alt="banner logo" src="/static/images/svg/banner-logo.svg" />

      <h1>React Next Boilerplate</h1>

      <p>Start your project with the NextJS in seconds</p>
      <p>We spend time using good community practices to make your project scalable.</p>

      <sub>
        <span role="img" aria-labelledby="rocke">
          🚀
        </span>
        A basis for reducing the configuration of your projects with Next.js, best development practices and popular
        libraries in the developer community.
      </sub>

      <style jsx>{`
        section {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          padding: 80px 16px;
          text-align: center;
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
