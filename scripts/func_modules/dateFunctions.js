const monthNames = [
    "enero",
    "febrero",
    "marzo",
    "abril",
    "mayo",
    "junio",
    "julio",
    "agosto",
    "septiembre",
    "octubre",
    "noviembre",
    "diciembre",
];

const dayOfWeek = [
    "Domingo",
    "Lunes",
    "Martes",
    "Miércoles",
    "Jueves",
    "Viernes",
    "Sábado",
];

function dateLiteral(date) {
    if (!date) {
        console.log("entro al if");
        const today = new Date().toISOString().split("T")[0];
        return today;
    } else {
        console.log("el else");
        return date;
    }
}

function getDayOfWeek(date) {
    const day = new Date(date).getDay();
    return dayOfWeek[day];
}
