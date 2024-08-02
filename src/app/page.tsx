
import "./sidebar.css";
import "./header.css";
import "./footer.css";
import "./content.css";


import '@fortawesome/fontawesome-free/css/all.min.css';

export default function Home() {
  return (
      <main className="main-container">


          <div className="sidebar">
              <h3>Medical Menu</h3>
              <div className="section">
                  <h2>Medicines Categories</h2>
                  <ul>
                      <li><a href="/painkillers"><i className="fas fa-pills"></i>Painkillers</a></li>
                      <li><a href="/antibiotics"><i className="fas fa-pills"></i> Antibiotics</a></li>
                      <li><a href="/hypertension"><i className="fas fa-heartbeat"></i>Hypertension</a></li>
                      <li><a href="/antidepressants"><i className="fas fa-pills"></i>Antidepressants</a></li>
                      <li><a href="/dietary_supplements"><i className="fas fa-capsules"></i>Dietary Supplements</a></li>
                      <li><a href="/other_categories"><i className="fas fa-ellipsis-h"></i>Other Categories</a></li>
                  </ul>
              </div>

              <div className="section">
                  <h2>About the App</h2>
                  <ul>
                      <li><a href="/about_me"><i className="fas fa-user"></i>About me</a></li>
                      <li><a href="/terms"><i className="fas fa-file-alt"></i>Terms of Use</a></li>
                      <li><a href="/privacy_policy"><i className="fas fa-lock"></i>Privacy Policy</a></li>
                  </ul>
              </div>

              <div className="sidebar-footer">
                  <p>Powered by Lady Amely</p>
                  <p>Contact Me</p>
                  <p>
                      <a href="https://www.facebook.com/yourprofile" className="social-icons"><i
                          className="fab fa-facebook-f"></i></a>
                      <a href="https://www.instagram.com/yourprofile" className="social-icons"><i
                          className="fab fa-instagram"></i></a>
                      <a href="https://www.linkedin.com/in/yourprofile" className="social-icons"><i
                          className="fab fa-linkedin-in"></i></a>
                  </p>

              </div>


          </div>

          <div className="header">
              <a href="#" className="logo">MediSense</a>
              <div className="nav-links">
                  <a href="#help_tips">Help Tips</a>
                  <a href="#searcher">Medicines Searcher</a>
                  <a href="#contact">Contact</a>
              </div>
              <div className="actions">
                  <i className="fas fa-search action-btn"></i>
                  <i className="fas fa-cog action-btn"></i>
                  <i className="fas fa-user action-btn"></i>
              </div>


          </div>

          <div className="content">
              <section className="drug-search" id="searcher">
                  <form>
                      <input type="text" placeholder="Search for a medication..."/>
                      <button type="submit">Search</button>
                  </form>
              </section>

              <section className="recommendations">
                  <h2>Recommended Medications</h2>
                  <div className="recommendation-list">
                      <div className="recommendation-card">
                          <h3>Theraflu</h3>
                          <p>Description: Cold and flu symptom relief.</p>
                          <a href="/medication1-details">View Details</a>
                      </div>
                      <div className="recommendation-card">
                          <h3>Panadol Cold & Flu </h3>
                          <p>Description: Pain and fever reducer with decongestant.</p>
                          <a href="/medication2-details">View Details</a>
                      </div>
                      <div className="recommendation-card">
                          <h3>NeoCitran</h3>
                          <p>Description: Cold and flu relief drink mix.</p>
                          <a href="/medication2-details">View Details</a>
                      </div>
                      <div className="recommendation-card">
                          <h3>Sudafed</h3>
                          <p>Description: Nasal and sinus decongestant.</p>
                          <a href="/medication2-details">View Details</a>
                      </div>
                      <div className="recommendation-card">
                          <h3>Vicks NyQuil</h3>
                          <p>Description: Nighttime cold and flu relief.</p>
                          <a href="/medication2-details">View Details</a>
                      </div>
                  </div>
              </section>

              <section className="medication-tracking">
                  <h2>My Medications</h2>
                  <p>Keep track of your medications and set reminders.</p>
                  <button>Add New Medication</button>
              </section>
          </div>


          <div className="footer">
              <p>&copy; 2024 Lady Amely. All rights reserved</p>
              <div className="social-icons">
                  <a href="#facebook" title="Facebook">F</a>
                  <a href="#instagram" title="Instagram">I</a>
                  <a href="#linkedin" title="LinkedIn">L</a>
              </div>
          </div>


      </main>


  )
      ;
}
