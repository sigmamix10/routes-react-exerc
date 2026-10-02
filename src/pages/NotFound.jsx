import { Link } from "react-router-dom";

function NotFound() {
  return (
    <section>
        <h1>404</h1>

      <h2>Página não encontrada</h2>

      <p>
        A página que você está procurando não existe.
      </p>

      <Link to="/">
        Voltar para Home
      </Link>
    </section>
  );
}

export default NotFound;