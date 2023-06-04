import React, {useEffect} from "react";
import s from "./App.module.scss";
import Main from "../Main";
import "swiper/css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Auth from "../auth/Auth";
import ResetPassword from "../../components/resetPassword/resetPassword";
import Registration from "../../components/Registration/Registration/Registration";

export const App = () => {

  return (
    <div className={s.App}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/resetPassword" element={<ResetPassword/>} />
          <Route path="/registration" element={<Registration/>} />
          <Route path="*" element={<p> 404 page</p>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
