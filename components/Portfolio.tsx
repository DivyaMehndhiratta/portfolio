import React from "react";

export const Portfolio = ({ portfolio }: any) => {

  return (
    <section id="portfolio" className="portfolio section-bg">
      <div className="container">
        <div className="section-title">
          <h2>Portfolio</h2>
          <p>
            Portfolio showcasing diverse and successful web project
            demonstrating my skills and expertise in the field of responsive
            design, user experience, and cutting-edge front-end technologies.
          </p>
        </div>
        <div
          className="row portfolio-container"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          {portfolio.map((portfolioItem: any, index: number) => {
            return (
              <div
                className="col-lg-4 col-md-6 portfolio-item filter-app"
                key={index}
              >
                {portfolioItem.url.startsWith("/") ? (
                  <>
                    <a href={portfolioItem.url}>
                    <div className="portfolio-wrap">
                      <img
                        src={portfolioItem.image}
                        className="img-fluid portfolio-image"
                        alt="sl"
                      />
                      </div>
                    </a>
                  </>
                ) : (
                  <a
                    href={portfolioItem.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="portfolio-wrap">
                      <img
                        src={portfolioItem.image}
                        className="img-fluid portfolio-image"
                        alt="image"
                      />
                    </div>
                  </a>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
