import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { EditMailPage } from "../pages/EditMail/EditMailPage";
import { MainPage } from "../pages/MainPage/MainPage";
import { RegisterPage } from "../pages/RegisterUser/RegisterPage";
import { ResetPage } from "../pages/ResetPassword/ResetPage";

export const MainRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<MainPage />} />
        <Route exact path="/register" element={<RegisterPage />} />
        <Route exact path="/resetpassword" element={<ResetPage />} />
        <Route exact path="/editmail" element={<EditMailPage />} />
      </Routes>
    </Router>
  );
};
