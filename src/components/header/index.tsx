import React, { useState } from "react";
import { Link } from "react-router-dom";
import css from "./index.css";
import { createBrowserRouter } from "react-router-dom";

function Header() {
  return (
    <div className={css.contenedor}>
      <div className={css["nav-custom"]}>
        <Link to={"/"} className={css["text-nav"]}>
          Inicio
        </Link>
        <Link to={"/muestra"} className={css["text-nav"]}>
          muestra
        </Link>
        <a href="/contacto" className={css["text-nav"]}>
          contacto
        </a>
        {/* <a href="" className={css["text-nav"]}>
          menu
        </a> */}
      </div>
      {/* <button className="boton-menu"></button> */}
      {/* <div className="ventana">
        <button className="boton-menu__cierre">cruz</button>
        <img className={css.img} src="" alt="" />
        <div className={css["ventana__contenido"]}>
          <a className={css["ventana__text inicio"]} href="">
            Inicio
          </a>
          <a className={css["ventana__text user"]} href="">
            contacto
          </a>
          <a className={css["ventana__text"]} href="">
            menu
          </a>
          <a className={css["ventana__text"]} href="">
            menu
          </a>
        </div>
      </div> */}
      {/* <img className={css.burger} src="" /> */}
    </div>
  );
}

export { Header };
