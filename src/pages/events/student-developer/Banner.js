import React from 'react';

import { breakpoints } from '../../../styles';

function Banner() {
  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="containerInfo">
            <h1>
              Student Developer. Webinar <span className="first20">20</span>
              <span className="second20">20</span> <span className="spanNumber">1.0</span>
            </h1>

            <p>
              We want to contribute to the need to provide tools to university students. The initiative is to learn how
              software is currently developed in different industries and introduce them to web development. With the
              help of professional and experienced programmers in the web world, who talk about their programming
              experiences and knowledge, to motivate them to create great innovative things.
            </p>

            <a
              data-category="Site-Wide Custom Events"
              data-label="Hazte patrocinador"
              type="button"
              className="button"
              href="https://github.com/react-next-boilerplate/react-next-boilerplate/blob/canary/CONTRIBUTING.md">
              Become a sponsor
            </a>
          </div>

          <div className="banner">
            <img className="bannerLarge" src="/static/images/svg/banner-event-logo.svg" alt="" />
            <img className="bannerSmall" src="/static/images/svg/banner-mobil.svg" alt="" />
          </div>
        </div>
      </div>

      <style jsx>{`
        section {
          padding: 0 1rem;
        }

        .container {
          width: 100%;
          max-width: 1024px;
          margin: 0 auto;
        }

        .wrapper {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        @media ${breakpoints.down('sm')} {
          .wrapper {
            flex-direction: column-reverse;
          }
        }

        .containerInfo {
          width: 100%;
          max-width: 33rem;
        }

        @media ${breakpoints.down('sm')} {
          .containerInfo {
            display: flex;
            flex-direction: column;
            max-width: 60rem;
          }
        }

        .bannerSmall {
          display: none;
        }

        .bannerLarge {
          display: block;
        }

        @media ${breakpoints.down('sm')} {
          .bannerSmall {
            display: block;
            width: 100%;
          }

          .bannerLarge {
            display: none;
          }
        }

        h1 {
          font-size: 3rem;
          font-weight: 500;
        }

        .first20 {
          color: #4444ff;
        }

        .second20 {
          color: #00aea0;
        }

        .spanNumber {
          color: #ff57a8;
        }

        p {
          font-weight: 500;
          line-height: 1.5;
        }

        .button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          position: relative;

          outline: 0;
          border: 0;
          margin: 0;
          border-radius: 0;
          padding: 0;
          cursor: pointer;
          user-select: none;
          vertical-align: middle;
          text-decoration: none;
          appearance: none;
          color: white;
          background-color: #000;
          border-radius: 4px;
          letter-spacing: 0.02857em;
          font-weight: 600;
          line-height: 1.75;
          padding: 0 80px;
          height: 40px;
          font-size: 14px;
          line-height: 2.25rem;
        }

        .button:focus {
          box-shadow: 0px 0px 0px 2px #000;
        }

        .button:hover {
          box-shadow: 0px 0px 0px 2px #000;
        }

        .button {
          margin-top: 1.5rem;
        }
      `}</style>
    </section>
  );
}

export default Banner;
