import './OurWork.css'

function OurWork() {
  return (
    <article className="our-work-page">
      <div className="our-work-container">
        <h1 className="our-work-title">Our Work</h1>
        <div className="our-work-content">
          <section className="work-section">
            <div className="work-text">
              <h2 className="work-section-title">LBES STEM Workshop</h2>
              <p>
                Igniting young minds, one spark at a time! InspireLabs STEM is on a mission to make science fun, hands-on, and accessible for every student—especially in underserved communities.
              </p>
              <p>
                We recently held a STEM workshop at Little Bennett Elementary School in Clarksburg, MD, where students engaged in exciting hands-on activities. We also partnered with a local FIRST Tech Challenge (FTC) robotics team to provide real-world demos and mentorship!
              </p>
            </div>
            <div className="work-image">
              <img src="/images/ourwork.png" alt="LBES STEM Workshop" />
            </div>
          </section>
        </div>
      </div>
    </article>
  )
}

export default OurWork

