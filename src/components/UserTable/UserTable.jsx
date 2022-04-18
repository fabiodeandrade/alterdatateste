import "./tableStyles.css";
import trashIcon from "../../assets/trash.svg";
import { useContext, useState } from "react";
import { GlobalContext } from "../../context/GlobalContext";
import { Modal } from "@mui/material";
import { Box } from "@mui/system";
import { ResetPassword } from "../ResetPassword/ResetPassword";
import { EditMail } from "../EditMail/EditMail";
import sortPic from '../../assets/sort.svg'

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "transparent",
  boxShadow: 24,
  p: 0,
};

export const UserTable = () => {
  const [open, setOpen] = useState(false);
  const [openReset, setOpenReset] = useState(false);
  const [openMail, setOpenMail] = useState(false);

  const theContext = useContext(GlobalContext);
  const { users, setUsers } = theContext;

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleOpenReset = () => setOpenReset(true);
  const handleCloseReset = () => setOpenReset(false);

  const handleOpenMail = () => setOpenMail(true);
  const handleCloseMail = () => setOpenMail(false);

  const handleDelete = (codigo) => {
    const deleteUser = users.filter((user) => {
      return user.codigo !== codigo;
    });

    setUsers(deleteUser);
  };

  const cbChangeEmail = () => {
    alert('Senha resetada');
    setOpenMail(false);
  }

  const handleChangeEmail = () => {cbChangeEmail();}

  return (
    <div className="userTable">
      <div className="infoTable">
        <h3>Usuario Cadastrados</h3>
        <div className="infoTableBtns">
          <input type="text" placeholder="Busca"></input>

          <select>
            <option>2019</option>
            <option>2020</option>
            <option>2021</option>
            <option>2022</option>
          </select>
        </div>
      </div>

      <table>
        <tbody>
          <tr>
            <th>
              <input type="checkbox" />
            </th>
            <th>
              <p>
                Código <img src={sortPic} alt="Sort logo" />
              </p>
            </th>
            <th>
              <p>
                Login <img src={sortPic} alt="Sort logo" />
              </p>
            </th>
            <th>
              <p>
                Email <img src={sortPic} alt="Sort logo" />
              </p>
            </th>
            <th>
              <p>Resetar Senha</p>
            </th>
            <th>
              <p>Deletar </p>
            </th>
          </tr>
        </tbody>

        {users.map((item) => (
          <tbody key={item.codigo}>
            <tr>
              <td>
                <input type="checkbox" name="users" value={item.codigo} />
              </td>
              <td>
                <p>{item.codigo}</p>
              </td>
              <td>
                <p>{item.login}</p>
              </td>
              <td>
                <p className="emailArea">
                  {item.email}{" "}
                  <button className="changeMail" onClick={handleOpenMail}>
                    Mudar E-mail
                  </button>
                  <Modal
                    open={openMail}
                    onClose={handleCloseMail}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                  >
                    <Box sx={style}>
                      <EditMail
                        handleCloseMail={handleCloseMail}
                        user={item.login}
                        handleChangeEmail={handleChangeEmail}
                      />
                    </Box>
                  </Modal>
                </p>
              </td>

              <td>
                <button className="resetBtn" onClick={handleOpenReset}>
                  Resetar
                </button>
                <Modal
                  open={openReset}
                  onClose={handleCloseReset}
                  aria-labelledby="modal-modal-title"
                  aria-describedby="modal-modal-description"
                >
                  <Box sx={style}>
                    <ResetPassword
                      handleCloseReset={handleCloseReset}
                      name={item.login}
                    />
                  </Box>
                </Modal>
              </td>
              <td>
                <button>
                  <img
                    src={trashIcon}
                    alt="botao de deletar"
                    className="deleteButton"
                    onClick={handleOpen}
                  />
                </button>
                <Modal
                  open={open}
                  onClose={handleClose}
                  aria-labelledby="modal-modal-title"
                  aria-describedby="modal-modal-description"
                >
                  <Box sx={style}>
                    <div className="checkDelete">
                      <h2>VOCÊ TEM CERTEZA DISSO?</h2>
                      <h5>Essa ação irá excluir o usuario</h5>
                      <div className="checkBtns">
                        <button
                          className="confirm"
                          onClick={() => {
                            handleDelete(item.codigo);
                            handleClose();
                          }}
                        >
                          OK
                        </button>
                        <button className="cancelUser" onClick={handleClose}>
                          CANCELAR
                        </button>
                      </div>
                    </div>
                  </Box>
                </Modal>
              </td>
            </tr>
          </tbody>
        ))}
      </table>
    </div>
  );
};
