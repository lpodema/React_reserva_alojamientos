function Pricing(props) {
    const { info, icon } = props;

    function getPricing(info, icon) {
        let pricing = [];
        for (let i = 1; i < 5; i++) {
            info >= i
                ? pricing.push(`${icon} active`)
                : pricing.push(`${icon}`);
        }
        return pricing;
    }

    return (
        <div className='pricing'>
            {getPricing(info, icon).map((iconclass, index) => (
                <i className={iconclass} aria-hidden key={index}></i>
            ))}
        </div>
    );
}
