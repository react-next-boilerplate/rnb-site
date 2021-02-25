import React from 'react';
import PropTypes from 'prop-types';

import { MapPin, Twitter } from 'react-feather';

function SpeakerCard({ avatar, name, role, resume, place, twitter }) {
  return (
    <div className="speakerCard">
      <header>
        <div className="avatarWrapper">
          <img className="avatar" src={avatar} alt={name} />
        </div>

        <div className="description">
          <h3>{name}</h3>
          <p className="descriptionText">{role}</p>
        </div>
      </header>

      <div className="resume">
        <p className="resumeText">{resume}</p>
      </div>

      <div className="spacer" />

      <footer>
        <div className="place">
          <MapPin size={20} />
          <span>{place}</span>
        </div>

        {twitter && (
          <a
            target="_blank"
            rel="noreferrer"
            href={`https://twitter.com/${twitter}`}
            data-category="Site-Wide Custom Events"
            data-label="Link social"
            className="social">
            <Twitter size={20} />
            <span>{twitter}</span>
          </a>
        )}
      </footer>

      <style jsx>{`
        .speakerCard {
          display: flex;
          flex-direction: column;
          background-color: #ffffff;
          border-radius: 1rem;
          padding: 1.5rem;
          box-shadow: 4px 4px 25px rgba(0, 0, 0, 0.15);
        }

        .spacer {
          flex: 1;
        }

        header {
          display: flex;
          align-items: center;
          margin-bottom: 2rem;
        }

        figure {
          width: 4.5rem;
          height: 4.5rem;
          margin: 0;
        }

        .avatarWrapper {
          display: inline-block;
          z-index: 0;
          position: relative;
          width: 4rem;
          height: 4rem;
        }

        .avatarWrapper::before {
          display: inline-block;
          z-index: 0;
          position: relative;
          inset: 0px;
          margin: -3px;
          content: '';
          display: block;
          z-index: -1;
          position: absolute;
          background: linear-gradient(to right bottom, #85f, #0bc);
          border-radius: 50%;
        }

        .avatar {
          width: 4rem;
          height: 4rem;
          border-radius: 50%;
          object-fit: cover;
        }

        .description {
          margin-left: 1rem;
        }

        h3 {
          margin: 0;
          margin-bottom: 0.5rem;
          font-size: 1.12rem;
          letter-spacing: 1.13px;
        }

        .descriptionText {
          margin: 0;
        }

        .resume {
          margin-bottom: 2rem;
        }

        .resumeText {
          font-size: 20px;
          letter-spacing: 1.25px;
          line-height: 1.4;
        }

        footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .place {
          display: flex;
          align-items: center;
        }

        .place > :not(:first-child) {
          margin-left: 0.5rem;
        }

        .social {
          display: flex;
          align-items: center;
          color: #000;
        }

        .social > :not(:first-child) {
          margin-left: 0.5rem;
        }
      `}</style>
    </div>
  );
}

SpeakerCard.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  role: PropTypes.string,
  resume: PropTypes.string,
  place: PropTypes.string,
  twitter: PropTypes.string,
};

export default SpeakerCard;
