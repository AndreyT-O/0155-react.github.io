
import '../scss/components/profile.scss';
import Services from "./Services";

function Profile(props) {

    return (
        <div className="profile container">
            <picture className="profile__picture">
                <img
                    src={ props.data.profile }
                    alt=""
                    className="profile__img"
                    width=""
                    height=""
                    decoding="async"
                />
            </picture>
            <div className="profile__box">
                <div className="profile__inner">
                    <span className="profile__name title">
                        { props.data.name }
                    </span>
                    <span className="profile__position">
                        { props.data.position }
                    </span>
                    <div className="profile__short-message">
                        { props.data.shortInfo.map((text, index) =>
                            <span className="profile__text standard-text" key={ index }>{ text }</span>
                        )}
                    </div>
                </div>
                <Services className="profile__services" services={ props.data.services }/>
            </div>
        </div>
    );
}

export default Profile;
