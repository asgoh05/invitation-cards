import React from "react";
import style from "./MainPage.module.css";

export default function MainPage() {
  return (
    <div className={style.main_page}>
      <h1 className={style.header}>
        <span className={style.name_hightlight}>원우</span>의 <br />
        돌잔치에 초대합니다
      </h1>
    </div>
  );
}
