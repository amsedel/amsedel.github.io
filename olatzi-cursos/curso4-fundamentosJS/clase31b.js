const URL_API = "https://swapi.co/api/";
const PEOPLE_URL = "people/:id";
const opts = { crossDomain: true };

function obtenerPersonaje(id, callback) {
  const url = `${URL_API}${PEOPLE_URL.replace(':id', id)}`;
  $.get(url, opts, function (persona) {        //Si hay success,
    console.log(`Hola yo soy ${persona.name}`)

    if (callback) { //Si existe la funcion, se activa la funcion.
      callback();
    }
  })
}

obtenerPersonaje(1, function () {
  obtenerPersonaje(2, function () {
    obtenerPersonaje(3, function () {
      obtenerPersonaje(4)
    })
  });
});```