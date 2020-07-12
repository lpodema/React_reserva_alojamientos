function Header(props) {
    const dateFrom = dateLiteral(props.availabilityFrom);
    const dateTo = dateLiteral(props.availabilityTo);
    const dateFromSplit = dateFrom.split("-");
    const dateToSplit = dateTo.split("-");
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
