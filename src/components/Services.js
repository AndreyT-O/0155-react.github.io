import '../scss/components/services.scss';

function Services(props) {

    const listItems = props.services.items.map((el, index) =>
        <tr className="services__row" key={index}>
            <td className="services__name" style={{'--interest': el.interest + '%'}}>
                <span>{ el.name }</span>
            </td>
            <td className="services__result">
                <span>{ el.amount }</span>
            </td>
        </tr>
    );

    return (
        <table className={ 'services ' + props.className ?? '' }>
            <thead className="services__head">
                <tr className="services__row">
                    <th></th>
                    <th className="services__title">
                        <span>Services</span>
                    </th>
                </tr>
            </thead>
            <tbody className="services__body">
                { listItems }
            </tbody>
            <tfoot className="services__foot">
                <tr className="services__row">
                    <td className="services__total">
                        <span className="title">Total</span>
                    </td>
                    <td className="services__amount">
                        <span className="title">{ props.services.total }</span>
                    </td>
                </tr>
            </tfoot>
        </table>
    );
}

export default Services;
