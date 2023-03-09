import '../scss/components/services.scss';

function Services(props) {

    return (
        <ul className={ 'services ' + props.className ?? ''}>
            <li className='services__head'>
                <span className='services__title'>Services</span>
            </li>
            { props.services.items.map((el, index) => 
                <li 
                    className={'services__info' + (index === props.services.items.length - 1 ? ' services__info--last' : '')} 
                    key={index} 
                    style={{'--interest': el.interest + '%'}}>
                    <span className='services__name'>{ el.name }</span>
                    <span className='services__result'>{ el.amount }</span>
                </li>
            ) }
            <li className='services__foot'>
                <span className='services__total'>
                    Total
                </span>
                <span className='services__amount'>
                    { props.services.total }
                </span>
            </li>
        </ul>
    );
}

export default Services;
