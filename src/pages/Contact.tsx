import './Contact.css'

function Contact() {
  return (
    <article className="contact-page">
      <div className="contact-container">
        <h1 className="contact-title">Contact</h1>
        <div className="contact-content">
          <h3 className="section-title">Contact Us</h3>
          <p>We'd love to hear from you! Whether you're an educator, parent, student, or potential partner, feel free to reach out with questions or ideas.</p>
          
          <hr className="divider" />
          
          <h3 className="section-title">Email</h3>
          <p>
            <a href="mailto:contact@inspirelabs.org" className="email-link">contact@inspirelabs.org</a>
          </p>
          
          <hr className="divider" />
          
          <h3 className="section-title">Social Media</h3>
          <p>
            Follow us on Instagram: <a href="https://www.instagram.com/inspirelabs.stem/" className="email-link" target="_blank" rel="noopener noreferrer">@inspirelabs.stem</a> for event updates and STEM tips!
          </p>
          
          <hr className="divider" />
        </div>
      </div>
    </article>
  )
}

export default Contact
