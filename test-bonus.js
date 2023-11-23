const objSubcriptionType = {
    free: "Solo puedes tomar cursos gratis",
    basic: "Puedes tomar casi todos los cursos de platzi durante 1 mes",
    expert: "Puedes tomar casi todos los cursos de Platzi durante 1 año",
    expertduo:
        "Tu y alguien mas pueden tomar TODOS los cursps de PLatzi durante 1 año",
};

function determinaSub(objSubcriptionType, typeSub) {
    if (objSubcriptionType.hasOwnProperty(typeSub)) {
        console.log(objSubcriptionType[typeSub]);
    } else {
        console.log("No existe este tipo se suscripcion");
    }
}

determinaSub(objSubcriptionType, "expert");

//2da solucion:
const tiposDeSuscripciones = {
    free: "Solo puedes tomar los cursos gratis",
    basic: "Puedes tomar casi todos los cursos de Platzi durante un mes",
    expert: "Puedes tomar casi todos los cursos de Platzi durante un año",
    expertduo:
        "Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año",
};

function conseguirTipoSuscripcion(suscripcion) {
    if (tiposDeSuscripciones[suscripcion]) {
        console.log(tiposDeSuscripciones[suscripcion]);
        return;
    }

    console.warn("Ese tipo de suscripción no existe");
}
