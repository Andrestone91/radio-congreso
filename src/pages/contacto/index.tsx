import React from "react";
import css from "./index.css";
function Contacto() {
  return (
    <div className={css.bodyc}>
      <div className={css.headerTitle}>
        <h1 className={css.title}>Contacto</h1>
      </div>
      <div className={css["contenedor_product"]}>
        <div className={css["contenedor_maps"]}>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6567.453233375797!2d-58.39402877890653!3d-34.611073910906576!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccadcecd82e3d%3A0xd7320953b8b20730!2sSol%C3%ADs%20218%2C%20C1078AAF%20Cdad.%20Aut%C3%B3noma%20de%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1745447009917!5m2!1ses!2sar" width="600" height="450" style={{ border: "0" }} allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
        <div className={css["contenedor_info"]}>
          <p>solis 218 caba</p>
        </div>
      </div>
    </div>
  );
}
export { Contacto };
