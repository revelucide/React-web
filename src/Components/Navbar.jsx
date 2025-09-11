import "../Css/navbar.css";

function Navbar() {
  return (
    <>
      <header className="header">
        <a href="#" className="logo">
          dev.gg
        </a>
        <nav className="navbar">
          <a href="#" className="active">
            Home
          </a>
          <a href="#">About</a>
          <a href="#">Services</a>
          <a href="#">Contact</a>
        </nav>
      </header>
    </>
  );
}

export default Navbar;
