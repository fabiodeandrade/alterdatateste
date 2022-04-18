import { Link, useNavigate } from "react-router-dom";
import atentionPic from "../../assets/atention.svg";

export const ResetPassword = (props) => {
  document.title = "Resetar Senha";

  let navigate = useNavigate();

  const handleReset = () => {
    alert("Usuario resetado");

    let path = "/";
    navigate(path);
  };

  return (
    <section className="userRegister">
      <form className="formUser" onSubmit={props.submit}>
        <h2>RESETAR SENHA DOS USUÁRIOS</h2>
        <h3>Isso era resetar a senha do usuario {props.name}</h3>
        <input placeholder="Nova senha*" type="text" />

        <div className="infoBox">
          <p>
            <img src={atentionPic} alt="atention" />
            Iniciar com letra ou número
          </p>
          <p>
            <img src={atentionPic} alt="atention" />
            Pelo menos 10 caracteres
          </p>
          <p>
            <img src={atentionPic} alt="atention" />
            Pelo menos 1 letra maiscula(A-Z)
          </p>
          <p>
            <img src={atentionPic} alt="atention" />
            Pelo menos 1 letra minúscula
          </p>
          <p>
            <img src={atentionPic} alt="atention" />
            Pelo menos 1 desdes caracteres especiais @##%*
          </p>
          <p>
            <img src={atentionPic} alt="atention" />
            Pelo menos 1 número(0-9)
          </p>
        </div>

        <button className="registerButton reset" onClick={handleReset}>
          RESETAR SENHA
        </button>

        <div className="cancelBtn">
          <Link to="/">
            <button onClick={props.handleCloseReset}>Cancelar</button>
          </Link>
        </div>
      </form>
    </section>
  );
};
