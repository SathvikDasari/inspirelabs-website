import './Home.css'

function Home() {
  return (
    <>
      <div className="hero-section">
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <h1 className="hero-title">InspireLabs</h1>
              <h2 className="hero-subtitle">Inspiring the Next Generation of Innovators</h2>
              <div className="hero-description">
                <p>
                  InspireLabs is a STEM-focused nonprofit empowering elementary students 
                  through hands-on experiments, mentorship, and expert-led programs. Our mission 
                  is to bridge the gap in STEM education—especially in underserved communities—by 
                  sparking creativity, curiosity, and confidence.
                </p>
                <p>
                  From rocket launches to coding challenges, we make science fun, accessible, 
                  and unforgettable.
                </p>
              </div>
            </div>
            <div className="hero-image">
              <img src="/images/rocket2.png" alt="Rocket Launch" />
            </div>
          </div>
        </div>
      </div>

      <div className="our-mission-section">
        <div className="container">
          <div className="our-mission-content">
            <div className="our-mission-image">
              <img src="/images/omis.png" alt="Students engaged in STEM activity" />
            </div>
            <div className="our-mission-text">
              <h2 className="our-mission-title">Our Mission</h2>
              <p>
                InspireLabs is on a mission to make STEM fun, hands-on, and accessible for every student.
              </p>
              <p>
                We organize engaging activities like balloon-powered cars, coding workshops, bridge-building 
                challenges, and more.
              </p>
              <p>
                Our network of mentors and professionals helps guide students through real-world problem solving.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div id="our-work" className="recent-events-section">
        <div className="container">
          <div className="recent-events-content">
            <div className="recent-events-text">
              <h2 className="recent-events-title">Recent Events</h2>
              <p>
                Igniting young minds, one spark at a time! InspireLabs STEM is on a mission to make 
                science fun, hands-on, and accessible for every student —especially in underserved communities. 
                We recently held a STEM workshop at Little Bennett Elementary School in Clarksburg, MD, where 
                students engaged in exciting hands-on activities. We also partnered with a local FIRST Tech 
                Challenge (FTC) robotics team to provide real-world demos and mentorship!
              </p>
              <a href="#our-work" className="work-button">More of Our Work</a>
            </div>
            <div className="recent-events-image">
              <img src="/images/lilbenpurp1.png" alt="Robotics Workshop" />
            </div>
          </div>
        </div>
      </div>

      <div className="partners-section">
        <div className="partners-container">
          <h2 className="partners-title">Our Partners</h2>
          <img src="/images/nasa-astro-camp-logo.png" alt="NASA Astro Camp Logo" className="partners-logo" />
        </div>
      </div>
    </>
  )
}

export default Home

