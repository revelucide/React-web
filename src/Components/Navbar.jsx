import "../Css/navbar.css";

function Navbar() {
  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="header">
      <a onClick={() => handleScroll("home")} className="logo">
        dev.gg
      </a>
      <nav className="navbar">
        <a onClick={() => handleScroll("home")}>Home</a>
        <a onClick={() => handleScroll("about")}>About</a>
        <a onClick={() => handleScroll("services")}>Services</a>
        <a onClick={() => handleScroll("contact")}>Contact</a>
      </nav>
    </header>
  );
}

export default Navbar;
