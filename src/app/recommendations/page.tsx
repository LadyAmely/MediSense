import Link from "next/link";

export default function Page(){

    return (
        <main className="main-container">

            <div className="sidebar">
                <h3>Control Panel</h3>
                <div className="section">
                    <h2>User Options</h2>
                    <ul>
                        <li><Link href="/home"><i className="fas fa-home"></i>Home</Link></li>
                        <li><Link href="/profile"><i className="fas fa-user"></i>Profile</Link></li>
                        <li><Link href="/recommendations"><i className="fas fa-heart"></i>Recommendations</Link>
                        </li>
                        <li><Link href="/history"><i className="fas fa-history"></i>History</Link></li>
                        <li><Link href="/calendar"><i className="fas fa-calendar-alt"></i>Calendar</Link></li>
                        <li><Link href="/logout"><i className="fas fa-sign-out-alt"></i>Log out</Link>
                        </li>
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
                    <i className="fas fa-cog action-btn"></i>
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