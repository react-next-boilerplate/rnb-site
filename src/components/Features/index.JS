/* eslint-disable react/no-unescaped-entities */
import React from 'react';

function Features() {
  return (
    <section id="features">
      <div className="container">
        <h2>Features</h2>

        <div className="row">
          <div className="card">
            <div>
              <h3>Seo</h3>
            </div>

            <div>
              <p>
                The advantage of this approach is the ability to create Rich User experiences in a uniform way, without
                compromising Search Engine Optimisation (SEO) factors, which are key to a good ranking on Google and
                other search engines.
              </p>
            </div>
          </div>

          <div className="card">
            <div>
              <h3>redux-saga</h3>
            </div>

            <div>
              <p>
                Is a library that aims to make application side effects (i.e. asynchronous things like data fetching and
                impure things like accessing the browser cache) easier to manage, more efficient to execute, easy to
                test, and better at handling failures.
              </p>
            </div>
          </div>

          <div className="card">
            <div>
              <h3>next-i18next</h3>
            </div>

            <div>
              <p>
                Is a plugin for Next.js projects that allows you to get translations up and running quickly and easily,
                while fully supporting SSR, multiple namespaces with code splitting, etc.
              </p>
            </div>
          </div>

          <div className="card">
            <div>
              <h3>i18next</h3>
            </div>

            <div>
              <p>Is an internationalization-framework written in and for JavaScript. But it's much more than that.</p>
            </div>
          </div>

          <div className="card">
            <div>
              <h3>redux</h3>
            </div>

            <div>
              <p>Is a predictable state container for JavaScript apps.</p>
            </div>
          </div>

          <div className="card">
            <div>
              <h3>reselect</h3>
            </div>

            <div>
              <p>
                Simple “selector” library for Redux (and others) inspired by getters in NuclearJS, subscriptions in
                re-frame and this proposal from speedskater.
              </p>
            </div>
          </div>

          <div className="card">
            <div>
              <h3>testing-library/react</h3>
            </div>

            <div>
              <p>Simple and complete React DOM testing utilities that encourage good testing practices.</p>
            </div>
          </div>

          <div className="card">
            <div>
              <h3>Typefaces</h3>
            </div>

            <div>
              <p>
                Self-hosting is significantly faster. Loading a typeface from Google Fonts or other hosted font service
                adds an extra (blocking) network request.
              </p>
            </div>
          </div>

          <div className="card">
            <div>
              <h3>Emotion</h3>
            </div>

            <div>
              <p>
                Emotion is a library designed for writing css styles with JavaScript. It provides powerful and
                predictable style composition in addition to a great developer experience with features such as source
                maps, labels, and testing utilities.
              </p>
            </div>
          </div>

          <div className="card">
            <div>
              <h3>Immer</h3>
            </div>

            <div>
              <p>
                (German for: always) is a tiny package that allows you to work with immutable state in a more convenient
                way. It is based on the copy-on-write mechanism
              </p>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .container {
          width: 100%;
          margin: 0 auto;
          max-width: 1024px;
        }

        .row {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          grid-gap: 24px;
        }

        @media screen and (max-width: 960px) {
          .row {
            grid-template-columns: 1fr 1fr;
          }

          .container {
            padding: 0 16px;
          }
        }

        @media screen and (max-width: 600px) {
          .row {
            grid-template-columns: 1fr;
          }
        }

        .features-list {
          display: flex;
          flex-flow: row wrap;
          justify-content: space-around;
        }

        h2 {
          font-weight: 600;
          font-size: 2.25rem;
          text-align: center;
          margin: 3rem 0;
        }

        .card {
          background-color: #ffffff;
          border-radius: 1rem;
          padding: 1.5rem;
          box-shadow: 4px 4px 25px rgba(0, 0, 0, 0.15);
        }

        h3 {
          font-weight: 600;
          font-size: 20px;
          line-height: 24px;
          color: #6aeb9d;
          margin: 0;
        }

        p {
          font-weight: 300;
          font-size: 16px;
          line-height: 2em;
        }
      `}</style>
    </section>
  );
}

export default Features;
