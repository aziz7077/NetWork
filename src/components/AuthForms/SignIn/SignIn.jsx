import React from "react";
import { Link } from "react-router-dom";
import s from "./SignIn.module.scss";

const SignIn = () => {
  return (
    <div className={s.signIn}>
      <h2>Авторизация</h2>
      <label htmlFor="email">
        Email
        <input type="email" id="email" className={s.inputs} />
      </label>
      <label htmlFor="email">
        Пароль
        <input type="password" id="email" className={s.inputs} />
      </label>
      <Link to='/resetPassword'>
        <span>Восстановить пароль</span>
      </Link>
      <button className={s.signInbtn}>
        Войти
      </button>
      <button className={s.signUpbtn}>
      <Link to='/registration'>
        Зарегистрироваться
        </Link>
        </button>
    </div>
  );
};

export default SignIn;
