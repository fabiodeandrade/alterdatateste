import "./dashboardStyles.css";
import btnIcons from "../../assets/Grupo 157.png";
import { Link } from "react-router-dom";
import { UserTable } from "../UserTable/UserTable";
import { useContext, useState } from "react";
import { GlobalContext } from "../../context/GlobalContext";
import { Modal } from "@mui/material";
import { Box } from "@mui/system";
import { Check } from "../Check/Check";

const style = {
  position: "absolute",
  top: "50%",
  left: "46%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "transparent",
  boxShadow: 50,
  p: 0,
};

export const Dashboard = () => {
  const dashContext = useContext(GlobalContext);
  const { users, setUsers } = dashContext;

  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [openReseteAllUser, setOpenResseteAllUser] = useState(false);

  const handleOpenDeleteModal = () => setOpenDeleteModal(true);
  const handleCloseDeleteModal = () => setOpenDeleteModal(false);

  const handleResetAllUsers = () => setOpenResseteAllUser(true);
  const handleCloseResetAllUsers = () => setOpenResseteAllUser(false);

  const callBackDelete = () => {
    setUsers([]);
    setOpenDeleteModal(false);
  };

  const callBackReset = () => {
    users.map((user) => user.password = '0');
    alert('Senhas alteradas');
    setOpenResseteAllUser(false);
  };

  const noUsersAlert = () => {
    alert("Não existem mais usuários");
    setOpenDeleteModal(false);
    setOpenResseteAllUser(false);
  };

  const deleteAllUsers = () => {
    users.length > 0 ? callBackDelete() : noUsersAlert();
  };

  const resetAllUsers = () => {
    users.length > 0 ? callBackReset() : noUsersAlert();
  };

  return (
    <section className="dashboard">
      <div className="topDash">
        <div className="users">
          <h3>Quantidade de usuários cadastrados:</h3>
          <h2>{users.length}</h2>
        </div>

        <div className="users">
          <h3>Limite de usuários permitidos:</h3>
          <h2>10</h2>
        </div>
        <Link to="/register">
          <button>
            <img src={btnIcons} alt="ico" />
            <h4>CADASTRAR USUÁRIOS</h4>
          </button>
        </Link>
      </div>

      <div className="infoDash">
        <div className="info">
          <h3>Ações em mais de um usuário</h3>
          <p>
            Caso deseje alterar mais de um usuário, selecione-os através da
            caixa de marcação e em seguida utilize algumas das funções abaixo:
          </p>
        </div>
        <div className="buttons">
          <button className="resetUser" onClick={handleResetAllUsers}>
            RESETAR SENHA DOS USUÁRIOS SELECIONADOS
          </button>
          <Modal
            open={openReseteAllUser}
            onClose={handleCloseResetAllUsers}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <Check
                handleFunction={resetAllUsers}
                handleClose={handleCloseResetAllUsers}
              />
            </Box>
          </Modal>

          <button className="deleteUsers" onClick={handleOpenDeleteModal}>
            DELETAR USUÁRIOS SELECIONADOS
          </button>
          <Modal
            open={openDeleteModal}
            onClose={handleCloseDeleteModal}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <Check
                handleFunction={deleteAllUsers}
                handleClose={handleCloseDeleteModal}
              />
            </Box>
          </Modal>
        </div>
      </div>

      <div className="usersTable"></div>

      <UserTable />
    </section>
  );
};
