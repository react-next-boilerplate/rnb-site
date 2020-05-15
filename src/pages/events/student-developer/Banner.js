import React from 'react';

import { Calendar } from 'react-feather';

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
              software is currently developed in different industries and to motivate them to create great innovative
              things.
            </p>

            <a
              className="button"
              data-category="Site-Wide Custom Events"
              data-label="Hazte patrocinador"
              type="button"
              href="https://docs.google.com/forms/d/e/1FAIpQLSdeINbWkZnGkXNUZkLtZa2j7lfC1CS0ni4zFCmn4JPDAJuhoQ/viewform?usp=sf_link0">
              BECOME A SPONSOR
            </a>

            <div className="events">
              <div>
                <h3>VIRTUAL (MEX)</h3>

                <time className="date">
                  <Calendar size={20} />

                  <span className="dateTitle">Coming soon</span>
                </time>

                <p className="eventDescription">Will be open to the community.</p>

                <a
                  className="button buttonRegister"
                  data-category="Site-Wide Custom Events"
                  data-label="Hazte patrocinador"
                  type="button"
                  href="https://ti.to/react-next-boilerplate/student-developer-webinar-2020-10">
                  EARLY SIGN-UP
                </a>
              </div>
            </div>
          </div>

          <div className="banner">
            <img className="bannerLarge" src="/static/images/svg/banner-event-logo.svg" alt="banner event" />
            <img className="bannerSmall" src="/static/images/svg/banner-mobil.svg" alt="banner event mobil" />
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

        .actions {
          display: flex;
        }

        .actions > :not(:first-child) {
          margin-left: 1rem;
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
          margin-bottom: 1rem;
        }

        .first20 {
          color: #4444ff;
        }

        .second20 {
          color: #08a296;
        }

        .spanNumber {
          color: #ec509c;
        }

        p {
          font-weight: 500;
          line-height: 1.5;
        }

        .button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
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
          padding: 0 30px;
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

        .buttonRegister {
          background-color: #4444ff;
          margin-top: 1rem;
        }

        .buttonRegister:focus {
          box-shadow: 0px 0px 0px 2px #4444ff;
        }

        .buttonRegister:hover {
          box-shadow: 0px 0px 0px 2px #4444ff;
        }

        .events {
          display: flex;
          margin-top: 2rem;
        }

        .events > :not(:first-child) {
          margin-left: 1.2rem;
        }

        @media ${breakpoints.down('xs')} {
          .events {
            flex-direction: column;
          }

          .events > :not(:first-child) {
            margin-left: 0;
            margin-top: 2rem;
          }
        }

        .date {
          display: flex;
          align-items: center;
        }

        .date > :not(:first-child) {
          margin-left: 1rem;
        }

        .dateTitle {
          margin: 0;
          font-size: 1.25rem;
          font-weight: 600;
        }

        .eventDescription {
          font-weight: 300;
          font-size: 1rem;
          letter-spacing: 1px;
          margin-top: 0.8rem;
          margin-bottom: 0;
        }
      `}</style>
    </section>
  );
}

export default Banner;
