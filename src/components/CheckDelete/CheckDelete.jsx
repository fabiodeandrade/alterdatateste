import "./deleteStyles.css";

export const CheckDelete = (props) => {
  return (
    <div className="checkDelete">
      <h2>VOCÊ TEM CERTEZA DISSO?</h2>
      <h5>Essa ação irá excluir o {props.login}</h5>
      <div className="checkBtns">
        <button className="confirm">OK</button>
        <button className="cancel">CANCELAR</button>
      </div>
    </div>
  );
};
