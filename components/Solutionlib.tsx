import React from 'react';
import styles from "../pages/solutions-library/SolutionLibrary.module.css";

 const Solutionlib = () => {
  const projectImages = [
     "/assets/images/portfolio/sl_homepage2.jpeg",
     "/assets/images/portfolio/sl_addsolution1.jpeg",
     "/assets/images/portfolio/sl_addsolution2.jpeg",
     "/assets/images/portfolio/sl_addsolution3.jpeg",
     "/assets/images/portfolio/sl_filter.jpeg",
     "/assets/images/portfolio/sl_migration.jpeg",
     "/assets/images/portfolio/sl_notification.jpeg",
     "/assets/images/portfolio/sl_faq.jpeg",
     "/assets/images/portfolio/sl_dashboard.jpeg",
     "/assets/images/portfolio/sl_analytics.jpeg",

  ];

  return (
    <section id="portfolio" className={styles.portfolio}>
         <div className={styles.dflex}
         data-aos="fade-up"
          data-aos-delay="100"
        >
      {projectImages.map((image, index) => (
         <div
      className= {styles.portfolioItem}
         key={index}
       >
        <img
          src={image}
          alt={`Project ${index + 1}`}
    className={styles.portfolioImage}></img>
        </div>
      ))}
      </div>
    </section>
  );
};


export default Solutionlib