import './Programs.css'

function Programs() {
  return (
    <article className="programs-page">
      <div className="programs-container">
        <h1 className="programs-title">Programs</h1>
        <div className="programs-content">
          <h3 className="section-title">STEM Discovery Workshops</h3>
          <p>Hands-on activities at local schools and libraries that make learning science and engineering exciting.</p>
          
          <hr className="divider" />
          
          <h3 className="section-title">NASA Astro Camp®</h3>
          <p>Through our partnership, students explore space science, rocketry, and robotics in immersive sessions.</p>
          
          <hr className="divider" />
          
          <h3 className="section-title">Community STEM Expos</h3>
          <p>Public events with live demos, student projects, and expert guest speakers from STEM fields.</p>
          
          <hr className="divider" />
          
          <h3 className="section-title">Youth Mentor Network</h3>
          <p>Connecting younger students with high school and college mentors in science and technology.</p>
          
          <hr className="divider" />
        </div>
      </div>
    </article>
  )
}

export default Programs
