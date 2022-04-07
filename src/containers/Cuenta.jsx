import React from 'react'
import { useDate } from '../hooks/Conteo'
import './Cuenta.css';
import facebook from '../images/icon-facebook.svg';
import instagram from '../images/icon-instagram.svg';
import pinterest from '../images/icon-pinterest.svg';
export const CounterWhitCustomeHook = () => {
  const{dias,horas,minutos,segundos,otroProceso}= useDate(100);
  const instagram_link = ()=>window.location.href = "https://www.instagram.com/laacademiageek/?hl=es";
  
  const pinterest_link = ()=>window.location.href = "https://co.pinterest.com/";

  const facebook_link = ()=>window.location.href = "https://www.facebook.com/Academia-Geek-107886901581361/";


  return (
    <> 
    <section className="contenedorGeneral">
      <div className="titulo">
        <h3>WE ' RE LAUCHING SOON</h3>
      </div>
      <div className="contador">
        <div className="tarjeta">
          <div className="numero">
          {dias}
          </div>
          <h5>DAYS</h5>
    </div>

    <div className="tarjeta">
          <div className="numero">
          {horas}
          </div>
          <h5>HOURS</h5>
    </div>

    <div className="tarjeta">
          <div className="numero">
          {minutos}
          </div>
          <h5>MINUTES</h5>
    </div>

    <div className="tarjeta">
    <div className="numero">
          {segundos}
          </div>
          <h5>SECONDS</h5>
    </div>
    </div>

    
    <footer>
        <div className="redes">
        <div className="imagen" onClick={facebook_link}>
          <img src={facebook} alt=""/>
        </div>
        <div className="imagen" onClick={pinterest_link}>
          <img src={pinterest} alt=""/>
        </div>
        <div className="imagen" onClick={instagram_link}>
          <img src={instagram} alt=""/>
        </div>
        </div>
        <button  className='boton'onClick={()=>{otroProceso()}}>Iniciar</button>

      </footer>
    <hr/>
      </section>
    </>
  )
}
