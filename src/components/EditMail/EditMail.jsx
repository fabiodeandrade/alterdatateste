import "./mailStyles.css";

export const EditMail = (props) => {
  return (
    <div className="edit">
      <div className="editMail">
        <h2>INSIRA O E-MAIL</h2>
        <h5>{props.user}</h5>
        <input type="text" placeholder="E-mail*" />
        <div className="checkBtns">
          <button className="confirm" onClick={props.handleChangeEmail}>OK</button>
          <button className="cancel" onClick={props.handleCloseMail}>
            CANCELAR
          </button>
        </div>
      </div>
    </div>
  );
};
