import React from 'react';

function Contributing() {
  return (
    <section>
      <div className="container">
        <h2>Contributing</h2>

        <div className="wrapper">
          <p>
            Thank you for your interest in contributing; we are delighted you want to help out. We have a contributing
            guide to help you get started.
          </p>

          <a
            type="button"
            className="button button-contributing"
            href="https://github.com/react-next-boilerplate/react-next-boilerplate/blob/canary/CONTRIBUTING.md">
            Started
          </a>
        </div>
      </div>

      <style jsx>{`
        section {
          background-color: #000;
          padding: 50px 16px;
        }

        .container {
          width: 100%;
          margin: 0 auto;
          max-width: 1024px;
        }

        h2 {
          font-weight: 600;
          font-size: 2.25rem;
          text-align: center;
          margin-bottom: 2rem;
          color: #fff;
        }

        p {
          color: #fff;
          max-width: 530px;
        }

        .wrapper {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          position: relative;
          background-color: transparent;
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
          color: inherit;
          background-color: #ffffff;
          border-radius: 4px;
          letter-spacing: 0.02857em;
          font-weight: 600;
          line-height: 1.75;
          color: #000000;
          padding: 0 80px;
          height: 40px;
          font-size: 14px;
          line-height: 2.25rem;
        }

        .button-contributing {
          margin-top: 2rem;
        }

        .button-contributing:focus {
          box-shadow: 0px 0px 0px 2px #ffffff;
          background: rgb(255, 255, 255, 0.3);
        }
        .button-contributing:hover {
          box-shadow: 0px 0px 0px 2px #ffffff;
        }
        .button-contributing:active {
          background: rgb(255, 255, 255, 0.3);
        }
      `}</style>
    </section>
  );
}

export default Contributing;
