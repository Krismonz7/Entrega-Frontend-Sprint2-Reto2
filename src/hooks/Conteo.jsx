import {useState} from 'react';
export const useDate = (state=100,state2=140) => {
// VARIABLES
    const[dias,setDias]=useState(10);
    const[horas,setHoras]=useState(10);
    const[minutos,setMinutos]=useState(10);
    const[segundos,setSegundos]=useState(10);

//Otro proceso
const otroProceso = ()=>{
const DATE_TARGET = new Date('04/05/2022 1:00 PM');
// Milisegundo para los calculos
const MILLISECONDS_OF_A_SECOND = 1000;
const MILLISECONDS_OF_A_MINUTE = MILLISECONDS_OF_A_SECOND * 60;
const MILLISECONDS_OF_A_HOUR = MILLISECONDS_OF_A_MINUTE * 60;
const MILLISECONDS_OF_A_DAY = MILLISECONDS_OF_A_HOUR * 24

// FUNCIONES
/* Metodo que actualiza la cuenta regresiva y los estados */
function updateCountdown() {
    // Calcs
    const NOW = new Date();
    const DURATION = DATE_TARGET - NOW;
    const REMAINING_DAYS = Math.floor(DURATION / MILLISECONDS_OF_A_DAY);
    const REMAINING_HOURS = Math.floor((DURATION % MILLISECONDS_OF_A_DAY) / MILLISECONDS_OF_A_HOUR);
    const REMAINING_MINUTES = Math.floor((DURATION % MILLISECONDS_OF_A_HOUR) / MILLISECONDS_OF_A_MINUTE);
    const REMAINING_SECONDS = Math.floor((DURATION % MILLISECONDS_OF_A_MINUTE) / MILLISECONDS_OF_A_SECOND);
    //Renderizar
    setDias(REMAINING_DAYS)
    setHoras(REMAINING_HOURS)
    setMinutos(REMAINING_MINUTES)
    setSegundos(REMAINING_SECONDS)
}
// INIT
updateCountdown();
// Refresh every second - 
setInterval(updateCountdown, MILLISECONDS_OF_A_SECOND);
}
  return {
      dias,
      horas,
      minutos,
      segundos,
      otroProceso
  }
}