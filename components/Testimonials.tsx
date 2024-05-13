import React from 'react';

export const Testimonials = ({ testimonials }: any) => {
	return (
        <section id="testimonials" className="testimonials section-bg">
      <div className="container">

        <div className="section-title">
          <h2>Testimonials</h2>
          <p><strong>LinkedIn</strong>  Testimonials from previous colleague highlighting my strong communication skills, technical proficiency, attention to detail, and ability to deliver high-quality work within tight deadlines.</p>
        </div>

        <div className="testimonials-slider swiper" data-aos="fade-up" data-aos-delay="100">
          <div className="swiper-wrapper">

						{
							testimonials.map((testimonial: any, index: number) => {
								return (
									<div className="swiper-slide" key={index}>
										<div className="testimonial-item" data-aos="fade-up" data-aos-delay={`${100 * (index)}`}>
											<p>
												<i className="bx bxs-quote-alt-left quote-icon-left"></i>
											 {testimonial.recommendation}
												<i className="bx bxs-quote-alt-right quote-icon-right"></i>
											</p>
											<a href={testimonial.url}>
										<img src={testimonial.profileImage} className="testimonial-img" alt="" /> 
											<h3>{testimonial.name}</h3>
											<h4>{testimonial.designation}</h4>
											</a>
										</div>
									</div>
								)
							})
						}
          </div>
          <div className="swiper-pagination"></div>
        </div>

      </div>
    </section>
    )
}