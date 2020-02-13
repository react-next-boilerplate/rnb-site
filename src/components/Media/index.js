import React from 'react';

function Media() {
  return (
    <section>
      <div className="container">
        <h2>Media</h2>

        <div className="wrapper">
          <a
            href="https://www.producthunt.com/posts/react-next-boilerplate?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-react-next-boilerplate"
            rel="noopener noreferrer"
            target="_blank">
            <img
              src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=184218&theme=light"
              alt="React Next Boilerplate - Start your project with the NextJS in seconds. | Product Hunt Embed"
              width="250px"
              height="54px"
            />
          </a>
        </div>
      </div>

      <style jsx>{`
        section {
          background: linear-gradient(-2deg, #fafafa 15%, #fafafa 15.1%, #fafafa 85%, #fff 85.1%);
          padding: 50px 0;
          margin-top: 32px;
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
          margin: 3rem 0;
        }

        .wrapper {
          display: flex;
          justify-content: center;
        }
      `}</style>
    </section>
  );
}

export default Media;
