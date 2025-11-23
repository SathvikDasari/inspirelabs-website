import { useState } from 'react'
import './Team.css'

interface TeamMember {
  name: string
  title: string
  bio: string
  image: string
  linkedin?: string
}

function Team() {
  const teamMembers: TeamMember[] = [
    {
      name: "Aarush",
      title: "Team Member",
      bio: "Hi there, I am Aarush! I am passionate about empowering students through hands-on STEM education and building innovative programs.",
      image: "/images/aarush.webp",
      linkedin: "#"
    },
    {
      name: "Gautham",
      title: "Team Member",
      bio: "Hi there, I am Gautham! I am dedicated to creating engaging curriculum and ensuring every student has access to quality STEM learning.",
      image: "/images/gautham.webp",
      linkedin: "#"
    },
    {
      name: "Hemit",
      title: "Team Member",
      bio: "Hi there, I am Hemit! I love organizing workshops and connecting students with mentors in the STEM community.",
      image: "/images/hemit.webp",
      linkedin: "#"
    }
  ]

  const [currentIndex, setCurrentIndex] = useState(0)

  const nextMember = () => {
    setCurrentIndex((prev) => (prev + 1) % teamMembers.length)
  }

  const prevMember = () => {
    setCurrentIndex((prev) => (prev - 1 + teamMembers.length) % teamMembers.length)
  }

  const currentMember = teamMembers[currentIndex]

  return (
    <div className="team-page">
      <div className="team-container">
        <h1 className="team-title">Our Team</h1>
        
        <div className="team-card-wrapper">
          <div className="team-card">
            <div className="team-image-container">
              {teamMembers.map((member, index) => {
                const isCurrent = index === currentIndex
                const stackPosition = teamMembers.length - index
                
                return (
                  <div
                    key={index}
                    className="team-image-wrapper"
                    style={{
                      opacity: isCurrent ? 1 : 0.7,
                      transform: isCurrent 
                        ? 'none' 
                        : 'translateZ(-100px) scale(0.95) rotate(8deg)',
                      zIndex: isCurrent ? 999 : stackPosition
                    }}
                  >
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="team-image"
                    />
                  </div>
                )
              })}
            </div>
            
            <div className="team-info">
              <div className="team-header">
                <h2 className="team-name">
                  {currentMember.name}
                  {currentMember.linkedin && (
                    <a href={currentMember.linkedin} target="_blank" rel="noopener noreferrer" className="linkedin-icon">
                      <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                      </svg>
                    </a>
                  )}
                </h2>
                <p className="team-title-text">{currentMember.title}</p>
              </div>
              
              <p className="team-bio">{currentMember.bio}</p>
              
              <div className="team-navigation">
                <button onClick={prevMember} className="nav-button" aria-label="Previous">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M15 18l-6-6 6-6"/>
                  </svg>
                </button>
                <button onClick={nextMember} className="nav-button" aria-label="Next">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M9 18l6-6-6-6"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Team

