import './About.css'

function About() {
  return (
    <article className="about-page">
      <div className="about-container">
        <h1 className="about-title">About</h1>
        <div className="about-content">
          <p>
            InspireLabs is a student-led nonprofit on a mission to ignite curiosity and confidence in elementary school students through hands-on science, technology, engineering, and math (STEM) experiences.
          </p>
          <p>
            We believe early exposure to STEM fosters problem-solving, creativity, and long-term interest in innovation. From community expos to school-based workshops and mentorship, our goal is to make STEM fun and accessible — especially for underserved communities.
          </p>
          <p>
            We are proudly partnered with NASA Astro Camp® and supported by local STEM professionals, educators, and volunteers across the region.
          </p>

          <hr className="divider" />

          <h3 className="section-title">Our Vision</h3>
          <p>
            We envision a world where every child has access to quality STEM education and the tools to become tomorrow's innovators. Through our programs, we strive to break down barriers and bring hands-on science directly to the classroom.
          </p>

          <hr className="divider" />

          <h3 className="section-title">What We Do</h3>
          <p>
            School STEM workshops<br />
            Community science expos<br />
            Mentorship programs<br />
            Hands-on experiments<br />
            Project-based learning
          </p>

          <hr className="divider" />

          <h3 className="section-title">Join Us</h3>
          <p>
            Want to make a difference? Join our mission to inspire the next generation of scientists, engineers, and creators.
          </p>
          <p>
            Volunteer opportunities<br />
            School partnerships<br />
            STEM mentorship
          </p>
        </div>
      </div>
    </article>
  )
}

export default About

