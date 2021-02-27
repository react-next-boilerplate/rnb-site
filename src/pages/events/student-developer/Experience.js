import React from 'react';

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
              4 lightning talks. Listen to experiences, tips to make development more fun, (technologies, tools) for
              daily use, answers to 5 questions from the audience, All in a fun and friendly environment!.
            </p>

            <p className="resume">
              With the help of professional and experienced programmers in the web world, who talk about their
              programming experiences and knowledge.
            </p>
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
          font-size: 1.25rem;
          font-weight: 300;
          line-height: 1.5;
          letter-spacing: 1px;
          margin-top: 0;
          margin-bottom: 1.5rem;
        }
      `}</style>
    </section>
  );
}

export default Experience;
