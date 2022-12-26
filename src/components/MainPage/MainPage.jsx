import React from "react";
import style from "./MainPage.module.css";
import main_image from "../../image/oww_main_photo.png";
import { BiMap } from "react-icons/bi";

export default function MainPage() {
  const openMap = (e) => {
    e.preventDefault();
    window.open("https://naver.me/5HSEtAfp", "_blank");
  };
  return (
    <div className={style.main_page}>
      <h1 className={style.header}>
        <span className={style.name_highlight}>원우</span>의 <br />
        돌잔치에 초대합니다
      </h1>
      <img className={style.main_image} src={main_image} alt="file not found" />
      <div className={style.space}></div>
      <h2 className={style.datetime}>2023.02.26 일요일 오후 12:00</h2>
      <h2 className={style.location}>하누소더힐</h2>
      <buttton onClick={openMap}>
        지도열기
        <BiMap />
      </buttton>
    </div>
  );
}
