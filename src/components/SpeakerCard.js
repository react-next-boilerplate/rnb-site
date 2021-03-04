import React from 'react';
import PropTypes from 'prop-types';

import { MapPin, Twitter, Dribbble } from 'react-feather';

function SpeakerCard({ avatar, name, role, resume, place, twitter, dribbble, workplace }) {
  return (
    <div className="speakerCard">
      <header>
        <div className="avatarBg">
          <div className="avatarWrapper">
            <img className="avatar" src={avatar} alt={name} />
          </div>
        </div>

        <div className="description">
          <h3>{name}</h3>
          <p className="roleText">{role}</p>
        </div>
      </header>

      <div>
        <h3 className="workplaceText">{workplace}</h3>
      </div>

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

        {dribbble && !twitter && (
          <a
            target="_blank"
            rel="noreferrer"
            href={`https://dribbble.com/${dribbble}`}
            data-category="Site-Wide Custom Events"
            data-label="Link social"
            className="social">
            <Dribbble size={20} />
            <span>{dribbble}</span>
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
          margin-bottom: 1rem;
        }

        figure {
          width: 4.5rem;
          height: 4.5rem;
          margin: 0;
        }

        .avatarBg {
          display: inline-block;
          z-index: 0;
          position: relative;
        }

        .avatarBg::before {
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

        .avatarWrapper {
          width: 4rem;
          height: 4rem;
          border: 3px solid #fff;

          display: flex;
          overflow: hidden;
          position: relative;
          font-size: 1.25rem;
          align-items: center;
          flex-shrink: 0;
          font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
          line-height: 1;
          user-select: none;
          border-radius: 50%;
          justify-content: center;
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

        .description > :not(:first-child) {
          margin-top: 0.5rem;
        }

        h3 {
          font-size: 1.125rem;
          margin: 0;
          font-size: 1.12rem;
          letter-spacing: 1.13px;
        }

        .workplaceText {
          font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
          font-weight: 500;
          letter-spacing: 1.13px;
        }

        .roleText {
          margin: 0;
          font-size: 0.875rem;
          color: hsl(0deg 0% 0% / 70%);
        }

        .resume {
          margin-bottom: 2rem;
          margin-top: 0.5rem;
        }

        .resumeText {
          color: hsl(0deg 0% 0% / 70%);
          font-size: 1.125rem;
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
          color: #000;
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
  workplace: PropTypes.string,
  twitter: PropTypes.string,
  dribbble: PropTypes.string,
};

export default SpeakerCard;
