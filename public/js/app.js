// frontend only for UI interactions
const bontonEliminarLibro = document.getElementById("eliminar-libro-btn");
const cardEliminarLibro = document.getElementById("eliminar-libro-card");

const botonCancelarEliminarLibro = document.getElementById("btn-cancelar-libro-card");


bontonEliminarLibro.addEventListener("click", ()=>{
cardEliminarLibro.hidden = false;
})

botonCancelarEliminarLibro.addEventListener("click", ()=>{
    cardEliminarLibro.hidden = true;

})