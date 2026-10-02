import { useParams } from "react-router-dom";

function User() {
  const { id } = useParams();

  return (
    <section>
        <h1>Perfil do Usuário</h1>

      <p>
        ID do usuário: {id}
      </p>
    </section>
  );
}

export default User;