import { useEffect } from "react";
import "../Css/services.css";

function Services() {
  useEffect(() => {
    const cards = document.querySelectorAll(".card-elem"); // get all cards
    const stackArea = document.querySelector(".stack-area");

    function rotateCards() {
      let angle = 0;
      const total = cards.length;
      cards.forEach((card, index) => {
        if (card.classList.contains("away")) {
          card.style.transform = `translateY(-120vh) rotate(-48deg)`; // fixed typo
        } else {
          card.style.transform = `rotate(${angle}deg)`;
          angle -= 10;
          card.style.zIndex = total - index;
        }
      });
    }

    function handleScroll() {
      let distance = window.innerHeight / 2;
      let topVal = stackArea.getBoundingClientRect().top;
      let index = Math.floor(-1 * (topVal / distance + 1));

      for (let i = 0; i < cards.length; i++) {
        if (i <= index) {
          cards[i].classList.add("away"); // fixed classList typo
        } else {
          cards[i].classList.remove("away");
        }
      }
      rotateCards();
    }

    window.addEventListener("scroll", handleScroll);
    rotateCards(); // run on mount

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="stack-area">
      <div className="container">
        <div className="left-container">
          <h1>Our</h1>
          <h1>Services</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
            aliquid fugiat eius explicabo, voluptas numquam ut quasi officia
          </p>
          <button className="deets">See Details</button>
        </div>

        <div className="right-container">
          <div className="card-elem react">
            <h2>React</h2>
            <h1>Lorem ipsum dolor sit</h1>
          </div>

          <div className="card-elem nextjs">
            <h2>Next JS</h2>
            <h1>Dolor sit amet consecter</h1>
          </div>

          <div className="card-elem laravel">
            <h2>Laravel</h2>
            <h1>Dolor sit amet consecter</h1>
          </div>

          <div className="card-elem vue">
            <h2>Vue</h2>
            <h1>Dolor sit amet consecter</h1>
          </div>

          <div className="card-elem angular">
            <h2>Angular</h2>
            <h1>Adipisici elit, fuga eveniet</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
