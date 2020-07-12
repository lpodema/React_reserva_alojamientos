function Header(props) {
    const { dateStart, dateEnd } = props;
    return (
        <div className='header'>
            <h1>Hoteles</h1>

            <p>
                desde el <b>día, 1 de enero de 2019</b> hasta el{" "}
                <b>miércoles, 2 de enero de 2019</b>
            </p>
            <Filter handlerChanges={props.handlerChanges} />
        </div>
    );
}
