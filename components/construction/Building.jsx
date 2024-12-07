// eslint-disable-next-line no-unused-vars
import React from 'react';
//import "./underConstruction.css";
//import ConstructionImg from "../../src/assets/construction-image.jpg"; // Puedes reemplazar con una imagen relacionada


const UnderConstruction = () => {
  return (
    <section className="under-construction section" id="under-construction">
      <h2 className="section__title">Sección en Construcción</h2>
      <span className="section__subtitle">Estamos trabajando en ello 🚧</span>

      <div className="under-construction__container container grid">
        

        <div className="under-construction__data">
          

          <p className="under-construction__description">
            ¡Estamos trabajando arduamente para ofrecerte lo mejor! Esta sección está en desarrollo y pronto estará disponible.
            <br />
            Mientras tanto, no dudes en explorar otras partes de nuestro portafolio.
          </p>

          <a href="#home" className="button button--flex">
            Volver al Inicio 🏗️💻
            <svg
              className="button__icon"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M15.25 22.7502H9.25C3.82 22.7502 1.5 20.4302 1.5 15.0002V9.00024C1.5 3.57024 3.82 1.25024 9.25 1.25024H14.25C14.66 1.25024 15 1.59024 15 2.00024C15 2.41024 14.66 2.75024 14.25 2.75024H9.25C4.64 2.75024 3 4.39024 3 9.00024V15.0002C3 19.6102 4.64 21.2502 9.25 21.2502H15.25C19.86 21.2502 21.5 19.6102 21.5 15.0002V10.0002C21.5 9.59024 21.84 9.25024 22.25 9.25024C22.66 9.25024 23 9.59024 23 10.0002V15.0002C23 20.4302 20.68 22.7502 15.25 22.7502Z"
                fill="var(--container-color)"
              ></path>
              <path
                d="M22.25 10.7502H18.25C14.83 10.7502 13.5 9.42023 13.5 6.00023V2.00023C13.5 1.70023 13.68 1.42023 13.96 1.31023C14.24 1.19023 14.56 1.26023 14.78 1.47023L22.78 9.47023C22.99 9.68023 23.06 10.0102 22.94 10.2902C22.82 10.5702 22.55 10.7502 22.25 10.7502ZM15 3.81023V6.00023C15 8.58023 15.67 9.25023 18.25 9.25023H20.44L15 3.81023Z"
                fill="var(--container-color)"
              ></path>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}

export default UnderConstruction;
