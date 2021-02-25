/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

import Link from 'next/link';

import { breakpoints } from '../../styles';

function BannerEvent() {
  return (
    <div className="row">
      <div className="banner">
        <Link href="/events/student-developer">
          <img className="linkImage" src="/static/images/svg/banner_event_title.svg" alt="Banner" />
        </Link>

        <Link href="/events/student-developer">
          <a className="link">watch the details of the first webinar 1.0 →</a>
        </Link>
      </div>
      <style jsx>{`
        .row {
          border-width: 10px 0 0;
          border-top-style: solid;
          border-image: linear-gradient(139deg, #85f, #0bc) 3;
          background-color: #ffffff;
        }

        .banner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 3.1rem;
          margin: 0 auto;
          padding: 0 1rem;
          max-width: 1024px;
          background-color: #ffffff;
        }

        .linkImage:hover {
          cursor: pointer;
        }

        .link {
          text-decoration: none;
          color: #000;
          letter-spacing: 0.5px;
          font-weight: 500;
        }

        @media ${breakpoints.down('sm')} {
          .banner {
            justify-content: center;
          }

          .linkImage {
            width: 90%;
          }

          .link {
            display: none;
          }
        }
      `}</style>
    </div>
  );
}

export default BannerEvent;
