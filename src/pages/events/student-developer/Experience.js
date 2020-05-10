import React from 'react';

import { Calendar } from 'react-feather';

import { breakpoints } from '../../../styles';

function Experience() {
  return (
    <section>
      <div className="container">
        <div className="row">
          <figure className="figureExperience">
            <img className="imgExperience" src="/static/images/experience.webp" alt="" />
          </figure>

          <div>
            <h2>What you’ll experience</h2>

            <p className="resume">
              3 lightning talks. Listen to experiences, tips to make development more fun, (technologies, tools) for
              daily use, answers to 5 questions from the audience, All in a fun and friendly environment!.
            </p>

            <div className="eventsDates">
              <div>
                <h3>UT (VIRTUAL)</h3>

                <time className="date">
                  <Calendar color="#fff" size={20} />

                  <h4 className="dateTitle">May 15, 3:30pm</h4>
                </time>

                <p className="dateDescription">
                  This webinar is directed for Students of the UT Technological University.
                </p>
              </div>

              <div>
                <h3>UT (VIRTUAL)</h3>

                <time className="date">
                  <Calendar color="#fff" size={20} />

                  <h4 className="dateTitle">Coming soon</h4>
                </time>

                <p className="dateDescription">
                  We’re also pleased to share registration for “Student Developer. Webinar 1.0” Virtual will be FREE
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        section {
          background: linear-gradient(356deg, #fff 0%, #000 0%, #000 80%, #fff 80.1%);
          color: #fff;
          padding: 13rem 1rem 3.6rem 1rem;
        }

        @media ${breakpoints.down('sm')} {
          section {
            background: linear-gradient(356deg, #fff 0%, #000 0%, #000 85%, #fff 85.1%);
            padding: 13rem 1rem 3rem 1rem;
          }
        }

        @media ${breakpoints.down('xs')} {
          section {
            background: linear-gradient(356deg, #fff 0%, #000 0%, #000 93%, #fff 93.1%);
            padding: 7rem 1rem 3rem 1rem;
          }
        }

        .container {
          width: 100%;
          max-width: 1024px;
          margin: 0 auto;
        }

        .row {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          grid-gap: 28px;
        }

        @media ${breakpoints.down('sm')} {
          .row {
            grid-template-columns: repeat(1, 1fr);
          }
        }

        .figureExperience {
          margin: 0;
        }

        @media ${breakpoints.down('sm')} {
          .imgExperience {
            width: 100%;
          }
        }

        h2 {
          font-size: 2.25rem;
          font-weight: 500;
          color: #4444ff;
          margin-top: 0;
          margin-bottom: 0.8rem;
        }

        .resume {
          font-weight: 300;
          line-height: 1.5;
          letter-spacing: 1px;
          margin-top: 0;
          margin-bottom: 1.5rem;
        }

        .eventsDates {
          display: flex;
        }

        .eventsDates > :not(:first-child) {
          margin-left: 1rem;
        }

        @media ${breakpoints.down('xs')} {
          .eventsDates {
            flex-direction: column;
          }

          .eventsDates > :not(:first-child) {
            margin-top: 2.5rem;
            margin-left: 0;
          }
        }

        h3 {
          font-size: 1.11rem;
          font-weight: bold;
          letter-spacing: 1.25px;
          margin-top: 0;
          margin-bottom: 1.5rem;
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
          font-size: 1.1rem;
        }

        .dateDescription {
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

export default Experience;
