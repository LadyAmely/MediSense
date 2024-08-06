import Link from "next/link";

import '@fortawesome/fontawesome-free/css/all.min.css';


export default function Page(){

    return(<main className="main-container">

        <div className="sidebar">
            <h3>Medical Menu</h3>

            <div className="section">
                <h2>Medicines Categories</h2>
                <ul>
                    <li><Link href="/painkillers"><i className="fas fa-pills"></i>Painkillers</Link></li>
                    <li><Link href="/antibiotics"><i className="fas fa-pills"></i> Antibiotics</Link></li>
                    <li><Link href="/hypertension"><i className="fas fa-heartbeat"></i>Hypertension</Link></li>
                    <li><Link href="/antidepressants"><i className="fas fa-pills"></i>Antidepressants</Link></li>
                    <li><Link href="/dietary_supplements"><i className="fas fa-capsules"></i>Dietary Supplements</Link>
                    </li>
                    <li><Link href="/other_categories"><i className="fas fa-ellipsis-h"></i>Other Categories</Link></li>
                </ul>
            </div>

            <div className="section">
                <h2>About the App</h2>
                <ul>
                    <li><Link href="/about_me"><i className="fas fa-user"></i>About me</Link></li>
                    <li><Link href="/terms"><i className="fas fa-file-alt"></i>Terms of Use</Link></li>
                    <li><Link href="/privacy_policy"><i className="fas fa-lock"></i>Privacy Policy</Link></li>
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

        </div>

        <div className="footer">
            <p>&copy; 2024 Lady Amely. All rights reserved</p>
            <div className="social-icons">
                <a href="#facebook" title="Facebook">F</a>
                <a href="#instagram" title="Instagram">I</a>
                <a href="#linkedin" title="LinkedIn">L</a>
            </div>
        </div>


    </main>);

}