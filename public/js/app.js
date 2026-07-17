// frontend only for UI interactions

function activarConfirmacionEliminar(claseBotones, cardId, formId, nombreId, btnCancelarId) {
  const botones = document.querySelectorAll(claseBotones);
  const card = document.getElementById(cardId);
  const form = document.getElementById(formId);
  const nombreEl = document.getElementById(nombreId);
  const botonCancelar = document.getElementById(btnCancelarId);

  if (!card || !form) return;

  botones.forEach((boton) => {
    boton.addEventListener("click", () => {
      form.action = boton.dataset.eliminarUrl;
      if (nombreEl) {
        nombreEl.textContent = `"${boton.dataset.eliminarNombre}"`;
      }
      card.hidden = false;
    });
  });

  if (botonCancelar) {
    botonCancelar.addEventListener("click", () => {
      card.hidden = true;
    });
  }
}

activarConfirmacionEliminar(".eliminar-libro-btn", "eliminar-libro-card", "form-eliminar-libro", "nombre-libro-seleccionado", "btn-cancelar-libro-card");
activarConfirmacionEliminar(".eliminar-categoria-btn", "eliminar-categoria-card", "form-eliminar-categoria", "nombre-categoria-seleccionada", "btn-cancelar-categoria-card");
activarConfirmacionEliminar(".eliminar-autor-btn", "eliminar-autor-card", "form-eliminar-autor", "nombre-autor-seleccionado", "btn-cancelar-autor-card");
activarConfirmacionEliminar(".eliminar-editorial-btn", "eliminar-editorial-card", "form-eliminar-editorial", "nombre-editorial-seleccionada", "btn-cancelar-editorial-card");
