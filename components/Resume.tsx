import React from 'react';

export const Resume = ({ experiences }: any) => {
  const { education, professionalExperience } = experiences;
  return (
		<section id="resume" className="resume">
      <div className="container">

        <div className="section-title">
          <h2>Resume</h2>
          <p>Comprehensive overview of my relevant professional experience and educational background, highlighting key achievements and qualifications in the field of web development.</p>
        </div>

        <div className="row">
          <div className="col-lg-12" data-aos="fade-up" data-aos-delay="100">
            <h3 className="resume-title">Professional Experience</h3>
            {
              professionalExperience.map((professionalExperienceDetail: any, index: number) => {
                const { designation, details, organization, yearStart, yearEnd } = professionalExperienceDetail;
                return (
                  <div key={index} className="resume-item">
                    <h4>{designation}</h4>
                    <h5>{yearStart} - {yearEnd || 'Present'}</h5>
                    <p><strong>{organization}</strong></p>
                    <ul>
                      {
                        details.map((detail: string) => (<li key={detail}>{detail}</li>))
                      }
                    </ul>
                  </div>
                )
              })
            }
          </div>
          <div className="col-lg-12" data-aos="fade-up">

            <h3 className="resume-title">Education</h3>
            {
              education.map((educationDetail: any, index: number) => {
                const { degree, institution, result, yearStart, yearEnd } = educationDetail;
                return (
                  <div key={index} className="resume-item">
                    <h4>{degree}</h4>
                    <h5>{yearStart} - {yearEnd}</h5>
                    <p>{institution}</p>
                  </div>
                )
              })
            }
          </div>
        </div>

      </div>
    </section>
	)
}