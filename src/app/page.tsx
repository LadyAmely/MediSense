
import "./sidebar.css";

import '@fortawesome/fontawesome-free/css/all.min.css';

export default function Home() {
  return (
      <main className="dashboard">

          <div className="sidebar">
              <h3>MediSense</h3>
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



          </div>


      </main>


  )
      ;
}
