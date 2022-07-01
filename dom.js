/* **********     Curso JavaScript: 60. WEB APIs - #jonmircha     ********** */
/* https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model */
/* https://developer.mozilla.org/en-US/docs/Mozilla/Gecko/Chrome/API/Browser_API */
/* https://developer.mozilla.org/en-US/docs/Web/API/CSS_Object_Model */

/*-----Clase N° 62: Nodos, elementos y selectores-----*/
/*
//-----Estos metodos ya no se usan-----

console.log(document.getElementsByTagName("li"))
console.log(document.getElementsByClassName("card"))
console.log(document.getElementsByName("nombre"))


//-----Este es el metodo usado para obtener nodos del DOM-----

console.log(document.getElementById("menu"))

console.log(document.querySelector(".card"))

console.log(document.querySelectorAll(".card"))

console.log(document.querySelectorAll(".card").length)

console.log(document.querySelectorAll(".card")[2])
*/

/*-----Clase N° 63. Dom: Atributos y Data-attributes-----*/

//Recuperar un atributo dentro de una etiqueta html

//primera forma con notacion de punto
//console.log(document.documentElement.lang)

//segunda forma y mas correcta. Con metodo GetAttribute
//console.log(document.documentElement.getAttribute("lang"))

//Recuperando etiqueta segun selector
//console.log(document.querySelector(".link-dom").getAttribute("href"))

//cambiar valores de los atributos

//document.documentElement.lang = "en";
//console.log(document.documentElement.getAttribute("lang"))

/*-----Clase N° 68 Dom: creando elemento y fragmentos-----*/

/*document.write("<h3> Dias de la semana</h3>");
const $ul = document.createElement("ul"),
diasDeLaSemana = ["Lunes", "Martes", "La puta que te pario", "Jueves", "Viernes", "Sabado", "Domingo"],
$fragment = document.createDocumentFragment();
document.body.appendChild($ul);

diasDeLaSemana.forEach(el =>{
    const $li = document.createElement("li");
    $li.textContent = el;
    $fragment.appendChild($li)
})
$ul.appendChild($fragment)*/

/*-----Clase N° 69 Dom: creando elemento y fragmentos-----*/

/*const $cards = document.querySelector(".cards"),//apunto al primer elemento con la clase .cards
$template = document.getElementById("template-card").content,// apunto al contenido de template
$fragment = document.createDocumentFragment();// creo un fragment


const cardContent = [
    {
        title: "Tecnologia",
        img: "https://placeimg.com/200/200/tech",
    },
    {
        title: "Animales",
        img: "https://placeimg.com/200/200/animals",
    },
    {
        title: "Arquitectura",
        img: "https://placeimg.com/200/200/arch",
    },
    {
        title: "Personas",
        img: "https://placeimg.com/200/200/people",
    },
    {
        title: "Naturaleza",
        img: "https://placeimg.com/200/200/nature",
    }    
]

cardContent.forEach(el=>{
//recupero cada elemento que contiene el template y le agrego el tributo correpondiente
    $template.querySelector("img").setAttribute("src", el.img);
    $template.querySelector("img").setAttribute("alt", el.title);
    $template.querySelector("figcaption").textContent = el.title;
//como el template es unico si lo ejecuto en un bucle solo quedara el ultimo elemento
//para evitar esto lo que se hace es clonarlo para que cada clon almacene cada elemento del arreglo
    const $clone = document.importNode($template, true);
    $fragment.appendChild($clone);
})

$cards.appendChild($fragment);*/

function Saludar(){

}
document.addEventListener("click", (e)=>{
    console.log(e.target)

    if(e.target.matches(".eventos-flujo a")){
        alert("Hola soy Seba probando");
        e.preventDefault();
    }
})




