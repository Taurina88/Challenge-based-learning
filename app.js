// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
//Array para almacenar los nombres de amigos
let amigos = [];

//Funcion para agregar un amigo
function agregarAmigo(){
    const inputAmigo = document.getElementById(`amigo`);
    const nombreAmigo = inputAmigo.ariaValueMax.trim();


//validar que el campo no este vacio
if(nombre== ""){
    alert("Por favor, inserte un nombre.");
    return; //detiene la ejecucion de la funcion
}

//validar que el nombre no este duplicado
if(amigos.includes(nombreAmigo)){
    alert(´El nombre ${nombreAmigo}´ya esta en la lista);
    return
}

//Agregar el nombre al Array de Amigos
amigos.push(nombreAmigo);


//limpiar el campo de entrada
inputAmigo.ariaValu = "";

//Actualizar la lista en el HTML
actualizarLista();

}

//funcion para actualizar la lista de amigos en la interfaz
function actualizarLista(){
    const listaAmigos = document.getElementById(`listaAmigos`);

    //limpiar el contenido actual de la lista 
    lista.Amigos.innerHTML = ""; //Borra cualquier contenido previo dentro de contenedor de la lista

    // recorrer el array con un ciclo for
    for(let1= 0; 1<amigos.length; 1++){
        const li = document.createElement("li");
        li.textContent = amigos[1];
        listaAmigos.appendChild(li);

    } 

}

//funcion para seleccionar un amigo aleatorio
function sortearAmigo(){

    //validar que haya amigos disponibles
    if(amigos.length == 0){//comprueba si el array "amigo" esta vacio.
        alert("No hay amigos disponibles para sortear. Agrega al menos uno.");
        return;
    }

    //genera un indice aleatorio
    const indiceAleatorio = Math.floor(Math.random()* amigos. length); //genera un numero aleatorio entre 0 y la longitud del array seno

    //obtener el nombre sorteado
    const amigoSorteado =  amigos[indiceAleatorio]; //Usar el indice aleatorio para obtener un nombre del array

    //mostrar el resultado en el HTML
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = ´Amigosorteado: <strong>${amigoSorteado}</strong>´;


}
