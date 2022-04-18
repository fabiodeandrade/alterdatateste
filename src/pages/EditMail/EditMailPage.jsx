import { EditMail } from "../../components/EditMail/EditMail";
import { MyFooter } from "../../components/Footer/Footer";
import { MyHeader } from "../../components/Header/Header";


export const EditMailPage = () => {
  document.title = "Resetar E-mail";
  return (
    <>
      <MyHeader />
      <EditMail />
      <MyFooter />
    </>
  );
};
