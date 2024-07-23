let hoy;
let identificadorIntervaloDeTiempo;

tiemporestante = function () {
  let fechaInicio = hoy.getTime();
  let fechaFin = new Date('2025-01-01 00:00:00').getTime();
  let diff = fechaFin - fechaInicio;
  let resto;

  diff = (diff / (1000))

  let diasRestantes = Math.floor(diff / 60 / 60 / 24)
  resto = (diasRestantes * 60 * 60 * 24)
  diff = diff - resto
  let horasRestantes = (Math.floor(diff / 60 / 60))
  resto = (horasRestantes * 60 * 60)
  diff = diff - resto

  let minutosRestantes = (Math.floor(diff / 60))
  resto = (minutosRestantes * 60)
  diff = diff - resto

  let segundosRestantes = (Math.floor(diff))
  resto = (segundosRestantes)
  diff = diff - resto

  dias= '<span>'+diasRestantes+'</span>'
  horas= '<span>'+horasRestantes+'</span>'
  minutos= '<span>'+minutosRestantes+'</span>'
  segundos= '<span>'+segundosRestantes+'</span>'

 return dias , horas, minutos, segundos
}


function repetirCadaSegundo() {
  identificadorIntervaloDeTiempo = setInterval(recargar, 1000);
}

function recargar() {
  hoy = new Date();
  mostrarContador = tiemporestante()
  document.getElementById('dias').innerHTML =  dias;
  document.getElementById('horas').innerHTML = horas;
  document.getElementById('minutos').innerHTML = minutos;
  document.getElementById('segundos').innerHTML = segundos;
}
mostrarFecha = function () {
  hoy = new Date();
  let mes = hoy.getMonth() + 1
  let dia = hoy.getDay();
  let diaP
  switch (dia) {
    case 0: diaP = "Domingo"
      break;
    case 1: diaP = "Lunes"
      break;
    case 2: diaP = "Martes"
      break;
    case 3: diaP = "Miercoles"
      break;
    case 4: diaP = "Jueves"
      break;
    case 5: diaP = "Viernes"
      break;
    case 6: diaP = "Sabado"
      break;
  }
  alert("Hoy es " + diaP + " " + hoy.getDate() + " del mes " + mes + " de " + hoy.getFullYear() + ", y son las " + hoy.getHours() +
    " horas, " + hoy.getMinutes() + " minutos con " + hoy.getSeconds() + " segundos.")

}
repetirCadaSegundo()
mostrarFecha()
