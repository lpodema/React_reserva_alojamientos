const countries = ["Argentina", "Brasil", "Chile", "Uruguay"];

const sizes = ["pequeño", "mediano", "grande"];

const prices = ["$", "$$", "$$$", "$$$$"];

function checkCriterias(element, filter) {
    const [key, val] = filter;
    switch (key) {
        case "price":
            return filterByCriteria(element, parseInt(val));
        case "country":
            return filterByCriteria(element, val);
        case "size":
            return filterBySize(element.rooms, val);
        case "availabilityFrom":
            return checkDatesFrom(element.availabilityFrom, Date.parse(val));
        case "availabilityTo":
            return checkDatesTo(
                element.availabilityFrom,
                element.availabilityTo,
                Date.parse(val)
            );
        default:
            return true;
    }
}

function filterByCriteria(element, filt) {
    if (filt && filt !== "any") {
        return Object.values(element).includes(filt);
    }
    return true;
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

function checkDatesTo(availabilityFrom, availabilityTo, val) {
    if (val) {
        const offset =
            new Date().getHours().valueOf() * 1000 * 60 * 60 +
            timeOffset * 1000 * 60 * 60;
        return (
            availabilityTo >= val + offset && availabilityFrom <= val + offset
        );
    }
    return true;
}
function checkDatesFrom(availability, val) {
    if (val) {
        const offset =
            new Date().getHours().valueOf() * 1000 * 60 * 60 +
            (timeOffset + 1) * 1000 * 60 * 60;
        return availability < val + offset;
    }
    return true;
}
