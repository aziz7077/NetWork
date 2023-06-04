import React from "react";
import MyButton from "../MUI/Button/Button";
import Myinput from "../MUI/Input/Input";
import s from "./resetPassword.module.scss";

const ResetPassword = () => {
  return (
    <div className={s.authPage}>
      <h1>Восстановление пароля</h1>
      <p>Введите email, который вы использовали при регистрации</p>
      <div className={s.resetBtn}>
        <span>Email</span>
        <Myinput />

        <div className={s.block_btn}>
          <MyButton className={s.btn}>Войти</MyButton>

          <MyButton
            style={{
              backgroundColor: "#fff",
              color: "black",
            }}
          >
            Зарегистрироваться
          </MyButton>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
