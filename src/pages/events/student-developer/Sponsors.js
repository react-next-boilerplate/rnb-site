import React from 'react';

import { breakpoints } from '../../../styles';
import { wootsbot } from '../../../../speakers-manifest';
import SpeakerCard from '../../../components/SpeakerCard';

function Sponsors() {
  return (
    <section>
      <div className="container">
        <h2>Sponsors and partners</h2>

        <div className="sponsors">
          <img src="/static/images/svg/code-dev-sponsor.svg" alt="codea.dev" />
        </div>

        <div className="actions">
          <a
            data-category="Site-Wide Custom Events"
            data-label="Hazte patrocinador"
            type="button"
            className="button"
            href="https://docs.google.com/forms/d/e/1FAIpQLSdeINbWkZnGkXNUZkLtZa2j7lfC1CS0ni4zFCmn4JPDAJuhoQ/viewform?usp=sf_link0">
            BECOME A SPONSOR
          </a>
        </div>

        <div className="organizersWrapper">
          <h2 className="organizerTitle">Event Organizer</h2>

          <div className="organizers">
            <div className="wootsbot">
              <SpeakerCard
                avatar={wootsbot.src}
                name={wootsbot.name}
                role={wootsbot.role}
                resume={wootsbot.resume}
                place={wootsbot.place}
                twitter={wootsbot.twitter}
                workplace={wootsbot.workplace}
              />
            </div>

            <div className="others">
              <img src="/static/images/svg/r-n-b-sponsor.svg" alt="react next boilerplate" />
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        section {
          background: linear-gradient(-355deg, #fff 0%, #4444ff 0%, #4444ff 80%, #fff 80.1%);
          padding: 12rem 1rem 3.6rem 1rem;
        }

        @media ${breakpoints.down('sm')} {
          section {
            background: linear-gradient(-355deg, #fff 0%, #4444ff 0%, #4444ff 92%, #fff 92.1%);
            padding: 3rem 1rem 3.6rem 1rem;
          }
        }

        @media ${breakpoints.down('xs')} {
          section {
            background: linear-gradient(-355deg, #fff 0%, #4444ff 0%, #4444ff 96%, #fff 96.1%);
            padding: 2rem 1rem 3.6rem 1rem;
          }
        }

        .container {
          width: 100%;
          max-width: 1024px;
          margin: 0 auto;
          padding: 2rem 0;
        }

        h2 {
          font-size: 3rem;
          font-weight: 600;
          text-align: center;
        }

        .sponsors {
          display: flex;
          flex-flow: row wrap;
          justify-content: space-around;
        }

        .actions {
          display: flex;
          justify-content: center;
          margin-top: 2rem;
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

        .button {
          margin-top: 1.5rem;
        }

        .organizersWrapper {
          margin-top: 5rem;
        }

        .organizerTitle {
          margin: 0;
        }

        .organizers {
          display: grid;
          grid-template-columns: repeat(6, 1fr);
          grid-gap: 28px;
          margin-top: 3rem;
        }

        .wootsbot {
          grid-column: 2 / span 2;
        }

        .others {
          grid-column: 4 / span 3;
        }

        .others > :not(:first-child) {
          margin-top: 4rem;
        }

        @media ${breakpoints.down('sm')} {
          .wootsbot {
            grid-column: 1 / span 3;
          }

          .others {
            grid-column: 4 / span 3;
          }

          .others > img {
            width: 95%;
          }
        }

        @media ${breakpoints.down('xs')} {
          .wootsbot {
            grid-column: span 6;
          }

          .others {
            grid-column: span 6;
          }
        }
      `}</style>
    </section>
  );
}

export default Sponsors;
