/* eslint-disable react/no-unescaped-entities */
import React from 'react';

function GettingStarted() {
  return (
    <section>
      <h2>Getting Started</h2>

      <div className="commands">
        <ol>
          <li>
            <p>Clone the boilerplate if you haven't downloaded it</p>

            <div>
              <span>
                <pre>
                  <code>$ git clone https://github.com/react-next-boilerplate/react-next-boilerplate.git</code>
                </pre>
              </span>
            </div>
          </li>

          <li>
            <p>Move to the appropriate directory</p>

            <div>
              <span>
                <pre>
                  <code>$ cd react-next-boilerplate</code>
                </pre>
              </span>
            </div>
          </li>

          <li>
            <p>install dependencies</p>

            <div>
              <span>
                <pre>
                  <code>$ yarn</code>
                </pre>
              </span>
            </div>
          </li>

          <li>
            <p>To see the example app</p>
            <div>
              <span>
                <pre>
                  <code>$ yarn dev</code>
                </pre>
              </span>
            </div>
          </li>
        </ol>
      </div>

      <style jsx>{`
        section {
          background: linear-gradient(-2deg, #fff 15%, #fafafa 15.1%, #fafafa 85%, #fff 85.1%);
          padding: 50px 0;
        }

        .commands {
          width: 100%;
          margin: 0 auto;
          max-width: 1024px;
        }

        h2 {
          font-weight: 600;
          font-size: 2.25rem;
          text-align: center;
        }

        p {
          font-size: 16px;
        }

        code {
          white-space: normal;
        }

        li::before {
          color: red;
        }
      `}</style>
    </section>
  );
}

export default GettingStarted;
