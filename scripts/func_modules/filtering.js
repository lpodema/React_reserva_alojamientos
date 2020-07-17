const countries = ["Argentina", "Brasil", "Chile", "Uruguay"];

const sizes = ["pequeño", "mediano", "grande"];

const prices = ["$", "$$", "$$$", "$$$$"];

function checkCriterias(element, filter) {
    const val = filter[1];
    const key = filter[0];
    switch (key) {
        case "price":
            return filterByCriteria(element, parseInt(val));
        case "country":
            return filterByCriteria(element, val);
        case "size":
            return filterBySize(element.rooms, val);
        case "availabilityFrom":
            return checkDates(element.availabilityFrom, Date.parse(val));
        case "availabilityTo":
            return checkDates(element.availabilityTo, Date.parse(val));
        default:
            return true;
    }
}

function filterByCriteria(element, filt) {
    if (filt && filt !== "any") {
        return Object.values(element).includes(filt);
    } else {
        return true;
    }
}

function filterBySize(size, filter) {
    switch (filter) {
        case "pequeño":
            return size > 0 && size <= 10;
        case "mediano":
            return size > 10 && size <= 20;
        case "grande":
            return size > 20;
        default:
            return true;
    }
}

function checkDates(availability, val) {
    if (val) {
        return availability > val;
    } else {
        return true;
    }
}
