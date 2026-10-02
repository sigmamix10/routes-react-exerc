import { Link } from "react-router-dom";

function Header() {
  return (
   <>
    <header>
      <div>
        <h2>Meu Site</h2>

      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">Sobre</Link>
        <Link to="/contact">Contato</Link>
      </nav>
      </div>
    </header>
   </>
  );
}

export default Header;