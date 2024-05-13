import type { NextPage } from "next";
import Script from "next/script";
import Head from "next/head";
import {
  About,
  Contact,
  Header,
  Hero,
  Portfolio,
  Resume,
  Services,
  Skills,
  Testimonials,
} from "../components";

export async function getStaticProps() {
  try {
    return {
      props: {
        user: {
          profile: {
            firstName: "Divya",
            designation: "Full Stack Developer",
            dateOfBirth: "2000-01-13T14:30:00",
            phoneNumber: "647-994-4526",
            email: "dmrrattaa786@gmail.com",
            address: {
              addressLine1: "521-2301 Danforth Ave",
              city: "Toronto",
              state: "ON",
              country: "Canada",
              zipcode: "M4C 0A7",
            },
          },
          testimonials: [
            {
              name: "Sandra Uribe Carreon",
              designation: "UX Specialist Deloitte,Mexico",
              date: "2022-09-18T00:00-05:00",
              recommendation:
                "Working with Divya was an absolute pleasure; she is a very committed professional with a curiosity to understand the broader processes and tasks assigned to her. As a Front End developer, her recommendations and deliverables help us to complete deliverables in a short time successfully. I appreciate your help, Divya.",
              profileImage: "/assets/images/avatar/Sandra.jpeg",
              url:"https://www.linkedin.com/in/sanuribe/"
            },
            {
              name: "Naveen Chaudhary",
              designation: "Senior Frontend Developer Deloitte,USI",
              date: "2022-09-18T00:00-05:00",
              recommendation:
                "Divya is one of the best among all the people I have ever worked with. As I remember, Divya was a very productive person, is hardworking, broad-minded and forward thinking individual. Intelligent, ambitious, energetic and proactive perfectionist. Desire for proficiency and education makes Divya a valuable asset to the team. Working with Divya is a signature of success.",
              profileImage: "/assets/images/avatar/Naveen.jpeg",
              url:"https://www.linkedin.com/in/naveenrawat51"

            },
            {
              name: "Sangram Singh",
              designation: "Senior Frontend Developer Deloitte,USI",
              date: "2022-09-18T00:00-05:00",
              recommendation:
                "Divya is someone with vision, diligence and knows how to get things done. She is very sincere towards her work and has a can-do attitude towards any task assigned to him. It was a pleasure working with her. She is a great asset to any company.",
              profileImage: "/assets/images/avatar/Sangram.jpeg",
              url:"https://www.linkedin.com/in/sangram-singh-0288ba27/"
            },
            {
              name: "Kinjal Chowdury",
              designation: "Full Stack Developer Deloitte,USI",
              date: "2022-09-18T00:00-05:00",
              recommendation:
                "It is a pleasure to work with Divya. Divya and I worked together at Deloitte. I thoroughly enjoyed my time working with Divya and came to know her as a truly valuable asset to any team. she is honest, dependable, and incredibly hard-working. Beyond that, she is an impressive problem solver who is always able to address complex ui issues with strategy and confidence. Divya is inspired by challenges, and never intimidated by them. Without a doubt, I confidently recommend Divya as a dedicated and knowledgeable employee and an all-around great person, I know that she will be a beneficial addition to any organization.",
              profileImage: "/assets/images/avatar/Kinjal.jpeg",
              url:"https://www.linkedin.com/in/kinjal-chowdhury/"
            },
            {
              name: "Chirag Aggarwal",
              designation: "Software Engineer Deloitte,USI",
              date: "2022-09-18T00:00-05:00",
              recommendation:
                "It has been amazing work with Divya Great at work,dedicated and fast learner. She got handy on front end stuff so quickly and she has great attention to detail. Her communications skills are excellent, she is delight to work with and she was an asset to our team. ",
              profileImage: "/assets/images/avatar/Chirag.jpeg",
              url:"https://www.linkedin.com/in/chirag24agarwal/"
            },
            {
              name: "Swati Gupta",
              designation: "Java Developer Deloitte,USI",
              date: "2022-09-18T00:00-05:00",
              recommendation:
                "It has been amazing working with Divya Dedicated at work and a very hardworking person.She is engaged and responsive and is a very good team player.Keep up doing the good work . Hope to work with you soon again in future. ",
              profileImage: "/assets/images/avatar/Swati.jpeg",
              url:"https://www.linkedin.com/in/swati-gupta-35900a1b2/"
            },
            {
              name: "Sripad Bal",
              designation: "Java Developer at Deloitte",
              date: "2022-09-18T00:00-05:00",
              recommendation:
                "I’ve worked with Divya in Deloitte. She has gained some coding and technical skills while she was in the firm. Divya is not only friendly and helpful but also goes above and beyond to maintain team spirit. Divya always push her limits to achieve greater goals",
              profileImage: "/assets/images/avatar/Sripad.jpeg",
              url:"https://www.linkedin.com/in/sripad-bal-018873189/"
            },
            {
              name: "Vasundhara Rani",
              designation: "Associate Analyst at Deloitte",
              date: "2022-09-18T00:00-05:00",
              recommendation:
                "I had the pleasure of working closely with Divya, a skilled front end developer. Her expertise spans in frontend development, with a knack for problem-solving and innovation. Divya's professionalism, strong communication, and collaborative nature make her a valuable asset to any team. I highly recommend her for her dedication, technical proficiency, and positive attitude.",
              profileImage: "assets/images/avatar/Vasundhara.jpeg",
              url:"https://www.linkedin.com/in/vasundhara-rani-78645120a/"
            },
          ],
          socialConnections: [
            {
              fields: {
                url: "https://medium.com/@dmrrattaa786",
                title: "Know more on Medium",
                icon: "bx bxl-medium",
              },
            },
            {
              fields: {
                url: "https://www.linkedin.com/in/divya-mehndiratta-46635921b/",
                title: "Know more on LinkedIn",
                icon: "bx bxl-linkedin-square",
              },
            },
            {
              fields: {
                url: "https://www.instagram.com/divya___13/",
                title: "Know more on Instagram",
                icon: "bx bxl-instagram",
              },
            },
            {
              fields: {
                url: "https://github.com/DivyaMehndhiratta",
                title: "Know more on github",
                icon: "bx bxl-github",
              },
            },
          ],
          assets: {
            cover: "Image",
            profileImage: "Image",
            avatar: "Image",
          },
          skills: [
            {
              name: "Javascript",
              proficiency: 95,
            },
            {
              name: "HTML,CSS,SCSS,SASS",
              proficiency: 80,
            },
            {
              name: "React JS",
              proficiency: 95,
            },
            {
              name: "NODEJS/EXPRESSJS/MONGODB",
              proficiency: 75,
            },
            {
              name: "Ruby on Rails",
              proficiency: 70,
            },
            {
              name: "Typescript",
              proficiency: 90,
            },
            {
              name: "Redux",
              proficiency: 80,
            },
            {
              name: "JAVA/SPRING BOOT",
              proficiency: 80,
            },
            {
              name: "TEST DRIVEN DEVELOPMENT (TDD)",
              proficiency: 80,
            },
            {
              name: "Libraries: Bootstrap,Antd Design, Material ui",
              proficiency: 90,
            },
            {
              name: "GITHUB/BITBUCKET/GITLAB/SVN",
              proficiency: 95,
            },
          ],
          experiences: {
            title: "Professional Experience",
            education: [
              {
                degree: "Post Graduate Diploma in Full Stack Development",
                yearStart: "Jan 2023",
                yearEnd: "April 2024",
                institution: "Lambton College, Toronto",
                result: "3.5 GPA",
              },
              {
                degree: "Bachelor of Computer Applications",
                yearStart: "July 2018",
                yearEnd: "Aug 2021",
                institution:
                  "Mukand Lal National College Affiliated to Kurukshetra University, Kurukshetra",
                result: "90%",
              },
            ],
            professionalExperience: [
              {
                designation: "Full Stack Developer",
                yearStart: "May 2024",
                organization: "Ultimate Coders, Greater Toronto Area",
                details: [
                    `Full-stack Development using libraries and frameworks such as React.js, TypeScript, Next.js, and Tailwind alongside Ant Design for UI components and Ruby on Rails and Node.js in backend technologies. Responsibility to make user-friendly UI and components for application development.
                    Projects: Accomplished the successful delivery of responsive UI designs for admin, student, and general user interfaces across three separate websites. Led the independent development of critical features including Leads, Student Program, and Franchising Portal within both the Ultimate Coders(UC) website and Admin Portal.
                    UC official Website for All: (https://www.ultimatecoders.ca)
                    UC Admin Portal for Admins: (https://code.ultimatecoders.ca)
                    Codey Kids for Students: (https://www.codeykids.com/login)
                    Deloitte USI, India— Frontend Developer`
                ],
            }
,            
              {
                designation: "Frontend Developer",
                yearStart: "Sept 2021",
                yearEnd: "Dec 2022",
                organization: "Deloitte, US",
                details: [
                `Frontend Development using libraries such as React JS, Javascript,
                Ant Design, HTML5, CSS for designing the user-friendly UI
                components for application development to have better
                performance in terms of page speed.
                Projects: HRT Solutions Library, a platform hosting a centralized
                master repository of solutions that will allow our project teams to
                easily search and apply solutions in order to deliver faster with higher quality for Human Resource Transformation(HRT) clients,
                saving them money and decreasing their time to value. It's an
                internal company tool that is currently adding value to the
                customer/Deloitte by cost savings on projects due to accelerated
                project timelines, hours saved in effort, and higher quality, more
                standardized work. (https://solutionslibrary.hcdev.deloitte.com/)`,
                ],
              },
            ],
          },
          portfolio: [
            {
              image: "/assets/images/portfolio/UltimateCoders.jpeg",
              url: "https://www.ultimatecoders.ca/",
            },
            {
              image: "/assets/images/portfolio/uc-admin.jpeg",
              url: "https://code.ultimatecoders.ca/",
            },
            {
              image: "/assets/images/portfolio/codeKids.jpeg",
              url: "https://www.codeykids.com/",
            },
            {
              image: "/assets/images/portfolio/crypto.jpeg",
              url: "https://divyamehndhiratta.github.io/crypto-app/",
            },
            {
              image: "/assets/images/portfolio/sl_homepage1.jpeg",
              url: "/solutions-library",
            },
          ],
        },
      },
    };
  } catch (error) {
    return null;
  }
}

const Home: NextPage = ({ user }: any) => {
  console.log(user, "user");
  if (!user) {
    return null;
  }
  const {
    assets,
    experiences,
    profile,
    skills,
    socialConnections,
    testimonials,
    portfolio,
  } = user;
  return (
    <div>
      <Head>
        <title>
          {profile.firstName} {profile.lastName}
        </title>
        <meta name="description" content={`${profile.firstName}'s Portfolio`} />
        <meta
          property="og:title"
          content={`${profile.firstName} ${profile.lastName}`}
        />
        <meta property="og:locale" content="en_US" />
        <link
          href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Raleway:300,300i,400,400i,500,500i,600,600i,700,700i|Poppins:300,300i,400,400i,500,500i,600,600i,700,700i"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        ></link>
        <link href="assets/vendor/aos/aos.css" rel="stylesheet" />
        <link
          href="assets/vendor/bootstrap/css/bootstrap.min.css"
          rel="stylesheet"
        />
        <link
          href="assets/vendor/bootstrap-icons/bootstrap-icons.css"
          rel="stylesheet"
        />
        <link
          href="assets/vendor/boxicons/css/boxicons.min.css"
          rel="stylesheet"
        />
        <link
          href="assets/vendor/glightbox/css/glightbox.min.css"
          rel="stylesheet"
        />
        <link
          href="assets/vendor/swiper/swiper-bundle.min.css"
          rel="stylesheet"
        />
        <link href="assets/css/style.css" rel="stylesheet" />
      </Head>
      <div>
        <Header
          socialConnections={socialConnections}
          profile={profile}
          assets={assets}
        />
        <Hero cover={assets.cover} />
        <main id="main">
          <About assets={assets} profile={profile} />
          <Skills skills={skills} />
          <Resume experiences={experiences} />
          <Portfolio portfolio={portfolio} />
          <Testimonials testimonials={testimonials} />
          <Contact profile={profile} />
        </main>
      </div>
      <Script
        src="/assets/vendor/purecounter/purecounter_vanilla.js"
        strategy="beforeInteractive"
      ></Script>
      <Script
        src="/assets/vendor/bootstrap/js/bootstrap.bundle.min.js"
        strategy="beforeInteractive"
      ></Script>
      <Script
        src="/assets/vendor/glightbox/js/glightbox.min.js"
        strategy="beforeInteractive"
      ></Script>
      <Script
        src="/assets/vendor/isotope-layout/isotope.pkgd.min.js"
        strategy="beforeInteractive"
      ></Script>
      <Script
        src="/assets/vendor/swiper/swiper-bundle.min.js"
        strategy="beforeInteractive"
      ></Script>
      <Script
        src="/assets/vendor/typed.js/typed.min.js"
        strategy="beforeInteractive"
      ></Script>
      <Script
        src="/assets/vendor/waypoints/noframework.waypoints.js"
        strategy="beforeInteractive"
      ></Script>
      <Script
        src="/assets/vendor/php-email-form/validate.js"
        strategy="beforeInteractive"
      ></Script>
      <Script
        src="/assets/vendor/aos/aos.js"
        strategy="beforeInteractive"
      ></Script>
      <Script src="/assets/js/main.js" strategy="afterInteractive"></Script>
    </div>
  );
};

export default Home;
