// About.jsx
import "../Css/about.css";
import "../Css/navbar.css";
import { useEffect } from "react";

function About() {
  useEffect(() => {
    const elements = document.querySelectorAll(".fade-up");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate");
          } else {
            entry.target.classList.remove("animate");
          }
        });
      },
      {
        threshold: 0.15, // 15% visible triggers
      }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="about" id="about">
      <div className="first-part fade-up" style={{ "--delay": "0ms" }}>
        <h1>about/me</h1>
        <h5>upbringing.origin.story.info</h5>
        <h6>upbringing.origin.story.info</h6>
      </div>

      <div className="second-part fade-up" style={{ "--delay": "160ms" }}>
        <h1>who?</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore unde
          quasi eum pariatur. Natus mollitia hic maxime quaerat necessitatibus
          itaque, nobis ut quasi commodi nostrum repudiandae quisquam excepturi,
          molestias quibusdam!
        </p>
      </div>
    </section>
  );
}

export default About;
