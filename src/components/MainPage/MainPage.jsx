import React from "react";
import style from "./MainPage.module.css";

export default function MainPage() {
  return (
    <div className={style.main_page}>
      <h1 className={style.header}>
        <span className={style.name_highlight}>원우</span>의 <br />
        돌잔치에 초대합니다
      </h1>
      <img
        className={style.main_image}
        src="https://phx02pap002files.storage.live.com/y4mTAEmC25Z3R0P31uWH8aPEKcbeazMIhLk-wuhPI_-9u2jsBdVTnJQzzFzr3l2C6cmXM08zowTwu7bICo9d1hJfNQWV0i9VklKcl7pYjq22mb7wMA91QDEel-hwQuCHnkbof-mRnpbYXysmmoFR0EFwOWnKkZY0UcgWviuhfLceLpgPsW-LZTkwR23G97JP9mC?width=171&height=256&cropmode=none"
        alt="file not found"
      />
      <h2>2023.02.26 일요일 오후 12:00</h2>
      <h1>하누소더힐</h1>
    </div>
  );
}
