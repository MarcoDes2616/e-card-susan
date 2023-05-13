import { useState } from "react";
import "./App.css";
import Swiperm from "./components/Swiper";
import qr from "./assets/img/qr-susan.png"

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <nav>
        <a href="#services">Servicios</a>
        <a href="#contact">Contacto</a>
      </nav>
      <header>
        <div>
          <h2>Visitador a Médico</h2>
          <hr />
          <h1>Susan Vitores Posligua</h1>
          <hr className="second_hr" />
          <h3 id="contact">
            Estaré a gusto de brindarte toda la Asesoría/Consultoría
            farmacotécnica de vanguardia!
          </h3>
        </div>
      </header>
      <main>
        <div className="contact">
          <div>
            <a target="_blank" href="tel:+5939900000">
              <i className="bx bxl-whatsapp bx-md"></i>
            </a>
          </div>
          <div>
            <a target="_blank" href="mailTo:susan@gmail.com">
              <i className="bx bxl-gmail bx-md"></i>
            </a>
          </div>
          <div>
            <a
              target="_blank"
              href="https://www.facebook.com/svitoresposligua"
            >
              <i className="bx bxl-facebook bx-md"></i>
            </a>
          </div>
          <div>
            <a
              target="_blank"
              href="https://www.instagram.com/suvitores/"
            >
              <i className="bx bxl-instagram bx-md"></i>
            </a>
          </div>
        </div>
        <div className="services_contain">
          <h3>Empresas que confirman mi experiencia...</h3>
          <Swiperm />
          {/* <div id="services" className="services">
            <div>
              <i className="bx bx-label bx-fade-right bx-sm"></i>
              <p>Asesoría legal</p>
            </div>
            <div>
              <i className="bx bx-label bx-fade-right bx-sm"></i>
              <p>Redacción de Documentos legales</p>
            </div>
            <div>
              <i className="bx bx-label bx-fade-right bx-sm"></i>
              <p>Trámites laborales, civiles, mercantiles, y mas...</p>
            </div>
            <div>
              <i className="bx bx-label bx-fade-right bx-sm"></i>
              <p>Procedimientos de Divorcio</p>
            </div>
            <div>
              <i className="bx bx-label bx-fade-right bx-sm"></i>
              <p>Autorización de viaje de niños y adolescentes</p>
            </div>
            <div>
              <i className="bx bx-label bx-fade-right bx-sm"></i>
              <p>Legalizaciones y apostillas</p>
            </div>
            <div>
              <i className="bx bx-label bx-fade-right bx-sm"></i>
              <p>Tramites ante el SAIME</p>
            </div>
            <div>
              <i className="bx bx-label bx-fade-right bx-sm"></i>
              <p>Polizas de seguro Nacional e Internacional</p>
            </div>
          </div> */}
          <div className="scam_qr">
            <h3>Escanea y comparte mi QR...</h3>
            <div className="qr">
              <img  width="300" src={qr} alt="" />
            </div>
          </div>
        </div>
      </main>
      <footer>
        <p>© 2023 Susan Vitores Posligua. All rights reserved.</p>
        <a target="_blank" href="tel:+593958863290">
          Created by: Marco Cardenas <br /> (Full-stack Developer)
        </a>
      </footer>
    </>
  );
}

export default App;
