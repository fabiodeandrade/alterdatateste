import './checkStyles.css';

export const Check = (props) => {
    return (
        <div className="check">
            <h2>VOCÊ TEM CERTEZA DISSO?</h2>
            <div className="checkBtns">
                <button className='confirm' onClick={props.handleFunction}>OK</button>
                <button className='cancel' onClick={props.handleClose}>CANCELAR</button>
            </div>
        </div>
    )
}