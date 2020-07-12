function Header(props) {
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
    function getDayOfWeek(date) {
        const day = new Date(date).getDay();
        return dayOfWeek[day];
    }

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
    const dateFrom = dateLiteral(props.availabilityFrom);
    const dateTo = dateLiteral(props.availabilityTo);
    const dateFromSplit = dateFrom.split("-");
    const dateToSplit = dateTo.split("-");
    console.log(monthNames);
    return (
        <div className='header'>
            <h1>Hoteles</h1>
            <p>
                desde el{" "}
                <strong>
                    {getDayOfWeek(dateFrom)} {dateFromSplit[2]} de{" "}
                    {monthNames[dateFromSplit[1] - 1]} de {dateFromSplit[0]}
                </strong>{" "}
                hasta el{" "}
                <strong>
                    {getDayOfWeek(dateTo)} {dateToSplit[2]} de{" "}
                    {monthNames[dateToSplit[1] - 1]} de {dateToSplit[0]}
                </strong>
            </p>
            <Filter
                handlerChanges={props.handlerChanges}
                dateFrom={dateFrom}
                dateTo={dateTo}
            />
        </div>
    );
}
