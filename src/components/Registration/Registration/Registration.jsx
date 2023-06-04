import React, { useState } from "react";
import Myinput from "../../MUI/Input/Input";
import s from "./Registration.module.scss";
import classnames from "classnames";

const Registration = () => {
  const [state, setstate] = useState(false);

  return (
    <div className={s.registration}>
      <h1>Регистрация</h1>

      <div className={s.registration_users}>
        <button>Я фрилансер</button>
        <button>Я заказчик</button>
      </div>

      <div className={s.register_inputs}>
        <div className={s.register_item}>
          <span>Имя</span>
          <Myinput />
        </div>
        <div className={s.register_item}>
          <span>Фамилия</span>
          <Myinput />
        </div>
        <div className={s.register_item}>
          <span>Email</span>
          <Myinput />
        </div>
        <div className={s.register_item}>
          <span>Пароль</span>
          <Myinput />
        </div>

        <hr />

        <p>
          Пароль должен содержать не менее 8 символов, латиницу, цифры, один из
          символов (!$#%)
        </p>

        <div className={s.register_item}>
          <span>Подтверждение пароля</span>
          <Myinput />
        </div>
      </div>
    </div>
  );
};

export default Registration;
