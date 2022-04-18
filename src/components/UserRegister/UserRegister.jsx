import { Link, useNavigate } from "react-router-dom";
import "./registerStyles.css";
import atentionPic from "../../assets/atention.svg";
import { useContext, useState } from "react";
import { GlobalContext } from "../../context/GlobalContext";

export const UserRegister = () => {
  const [codigo, setCodigo] = useState();
  const [login, setLogin] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  let navigate = useNavigate();

  document.title = "Registrar Usuario";
  const userContext = useContext(GlobalContext);
  const { setUsers } = userContext;

  const habdleSubmit = (e) => {
    e.preventDefault();
    const newUser = {
      codigo: codigo,
      login: login,
      email: email,
      senha: senha,
    };

    setUsers((users) => [...users, newUser]);
    alert(`Usuario ${newUser.login} cadastrado com sucesso`);

    let path = '/';
    navigate(path)
  };

  const handleChange = (e) => {
    const login = e.target.value;
    setLogin(login);
  };

  const handleEmail = (e) => {
    const email = e.target.value;
    setEmail(email);
  };

  const handleCode = (e) => {
    const newCode = e.target.value;
    setCodigo(newCode);
  };

  const handlePassword = (e) => {
    const password = e.target.value;
    setSenha(password);
  };

  return (
    <section className="userRegister">
      <form className="formUser" onSubmit={habdleSubmit}>
        <h2>Cadatrar usuário</h2>
        <input
          type="number"
          placeholder="Código* (Exemplo: 123456)"
          onChange={handleCode}
        />
        <input type="text" placeholder="Login" onChange={handleChange} />
        <input placeholder="E-mail*" type="text" onChange={handleEmail} />
        <input placeholder="Senha*" type="password" onChange={handlePassword} />

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
        <div className="radioHandle">
          Senha fixa:
          <input type="radio" value="sim" name="register" id="sim" />
          <label htmlFor="sim">Sim</label>
          <input type="radio" value="nao" name="register" id="nao" />
          <label htmlFor="nao">Não</label>
        </div>

        <button className="registerButton">CADASTRAR USUÁRIO</button>

        <div className="cancelBtn">
          <Link to="/">
            <button>Cancelar</button>
          </Link>
        </div>
      </form>
    </section>
  );
};
