import React, { useState } from "react";
import s from "./Performers.module.scss";
import user1 from "../../assets/user1.png";
import user2 from "../../assets/user2.png";
import profile from "../../assets/profile.png";
import UserCard from "../UserCard/UserCard";

const Performers = () => {
  const [users, setUsers] = useState([
    {
      name: "Максим Фролов",
      img: [user1, user2, user1],
      profileImg: profile,
      id: 1,
    },
    {
      name: "Максим Фролов",
      img: [user1, user2, user1],
      profileImg: profile,
      id: 2,
    },
    {
      name: "Максим Фролов",
      img: [user1, user2, user1],
      profileImg: profile,
      id: 3,
    },
    {
      name: "Максим Фролов",
      img: [user1, user2, user1],
      profileImg: profile,
      id: 4,
    },
    {
      name: "Максим Фролов",
      img: [user1, user2, user1],
      profileImg: profile,
      id: 5,
    },
    {
      name: "Максим Фролов",
      img: [user2, user1, user1],
      profileImg: profile,
      id: 6,
    },
    {
      name: "Максим Фролов",
      img: [user1, user2, user1],
      profileImg: profile,
      id: 7,
    },
    {
      name: "Максим Фролов",
      img: [user1, user2, user1],
      profileImg: profile,
      id: 8,
    },
  ]);

  return (
    <div className={s.Performers}>
      <h2>Наши лучшие исполнители</h2>
      <div className={s.cards}>
        {users.map((user) => {
          return (
            <UserCard
              key={user.id}
              name={user.name}
              img={user.img}
              profileImg={user.profileImg}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Performers;
