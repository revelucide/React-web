import "../Css/contact.css";
import { useInView } from "react-intersection-observer";

function Contact() {
  // Hook to track visibility
  const { ref, inView } = useInView({
    threshold: 0.2, // trigger when 20% of footer is visible
    triggerOnce: false, // animate every time it enters/exits
  });

  return (
    <div ref={ref} className={`footer-wrapper ${inView ? "show" : "hide"}`}>
      <h1 className="footer-bg-text">contact</h1>
      <footer className="footer-area">
        <div className="footer-container">
          {/* Logo + Quick Links */}
          <div className="footer-col">
            <h2 className="footer-logo">dev.gg</h2>
            <ul className="footer-links">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">FAQ</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
              <li>
                <a href="#">Support</a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer-col">
            <h3>Contacts</h3>
            <p>
              2113, Dominga Bldg. III, Chino Roces,
              <br />
              Dela Rosa St. Makati City.
            </p>
            <p>+63 9626277933</p>
            <p>devgg@gmail.com</p>
          </div>

          {/* Newsletter + Social */}
          <div className="footer-col">
            <h3>Newsletter</h3>
            <form className="newsletter-form">
              <input type="email" placeholder="Your email address" />
              <button type="submit">Sign up</button>
            </form>
            <div className="socials">
              <a href="#"></a>
              <a href="#"></a>
              <a href="#"></a>
              <a href="#"></a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            © 2025. All rights reserved. Designed by <span>Lanes</span>
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Contact;
