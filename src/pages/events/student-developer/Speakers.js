import React from 'react';

import { breakpoints } from '../../../styles';

import SpeakerCard from '../../../components/SpeakerCard';

import { speakers } from '../../../../speakers-manifest';

function Speakers() {
  return (
    <section>
      <div className="container">
        <h2>Speakers</h2>

        <div className="speakersWrapper">
          {speakers.map(speaker => (
            <SpeakerCard
              key={speaker.src}
              avatar={speaker.src}
              name={speaker.name}
              role={speaker.role}
              resume={speaker.resume}
              place={speaker.place}
              twitter={speaker.twitter}
              workplace={speaker.workplace}
            />
          ))}
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
          padding: 2rem 0;
        }

        h2 {
          font-size: 3rem;
          font-weight: 600;
          text-align: center;
        }

        .speakersWrapper {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          grid-gap: 28px;
        }

        @media ${breakpoints.down('sm')} {
          .speakersWrapper {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media ${breakpoints.down('xs')} {
          .speakersWrapper {
            grid-template-columns: repeat(1, 1fr);
          }
        }
      `}</style>
    </section>
  );
}

export default Speakers;
