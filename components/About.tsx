import React from "react";
import moment from "moment";

export const About = ({profile }: any) => {

  const { dateOfBirth, email, phoneNumber, address, designation } = profile;

  return (
    <section id="about" className="about">
      <div className="container">
        <div className="section-title">
          <h2>About</h2>
          <p>
            Innovative and deadline-driven Software Developer with 2 years of experience, Team player with a can-do attitude, 
						good time management skills, and a strong user focus. Skilled in Continuous Improvement, Agile, and 
						Business Process Improvement.
          </p>
        </div>

        <div className="row">
          <div className="col-lg-4" data-aos="fade-right">
            <img
              src="/assets/images/profileImage/profilepic2.jpeg"
              className="img-fluid"
              alt="profile pic"
							width={420}
							style={{objectFit: 'cover', height: 500}}
            />
          </div>
          <div className="col-lg-8 pt-4 pt-lg-0 content" data-aos="fade-left">
            <h3>{designation}</h3>
            <p className="fst-italic">
            An accomplished professional who has significant web experiences that seamlessly blend functionality with aesthetics. With a robust background in creating user-friendly interfaces, I specialize in developing responsive and visually captivating websites and web applications. My expertise lies in leveraging the latest technologies to ensure that every project is not only mobile-friendly but also delivers a flawless user experience across devices. Whether it&apos;s designing intuitive user interfaces or implementing complex backend functionalities, I am committed to delivering top-notch solutions that exceed expectations.
</p>
            <div className="row">
              <div className="col-lg-6">
                <ul>
                  <li>
                    <i className="bi bi-chevron-right"></i>{" "}
                    <strong>Birthday:</strong> <span>{moment(dateOfBirth).format('DD MMMM, YYYY')}</span>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>{" "}
                    <strong>Phone:</strong> <span><a href={`tel:+1${phoneNumber}`}>+1 {phoneNumber}</a></span>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>{" "}
                    <strong>City:</strong> <span>{address.city}, {address.country}</span>
                  </li>
                </ul>
              </div>
              <div className="col-lg-6">
                <ul>
                  <li>
                    <i className="bi bi-chevron-right"></i>{" "}
                    <strong>Age:</strong> <span>{moment(moment()).diff(moment(dateOfBirth), 'years')}</span>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>{" "}
                    <strong>Email:</strong> <span><a href={`mailto:${email}`}>{email}</a></span>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>{" "}
                    <strong>Fulltime/Contract:</strong> <span>Available</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
