import "../Css/home.css";
import "../Css/navbar.css";

function Home() {
  return (
    <>
      <section className="home">
        <div className="home-content">
          <h1>Hi, I'm Godwin</h1>
          <h3>Student Developer</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore unde
            quasi eum pariatur. Natus mollitia hic maxime quaerat necessitatibus
            itaque, nobis ut quasi commodi nostrum repudiandae quisquam
            excepturi, molestias quibusdam!
          </p>
          <div className="btn-box">
            <a href="#">Let's Talk</a>
            <a href="#">Documents</a>
          </div>
        </div>
        <div className="home-sci">
          <a href="#">
            <i class="bxl  bx-facebook"></i>
          </a>
          <a href="#">
            <i class="bxl  bx-twitter"></i>
          </a>
          <a href="#">
            <i class="bxl  bx-linkedin"></i>
          </a>
        </div>
        <span className="home-imgHover"></span>
      </section>
    </>
  );
}

export default Home;
