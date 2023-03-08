import SpriteIcons from '../sprite/sprite.svg';

function Sprite(props) {
    return (
        <svg className={ props.className ?? 'icon' }>
            <use xlinkHref={ `${SpriteIcons}#${props.icon ?? ''}` }/>
        </svg>
    );
}

export default Sprite;