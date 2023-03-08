import '../scss/components/chat-block.scss';

import {useEffect, createRef} from "react";

function ChatBlock(props) {

    const chatBlock = createRef();

    useEffect(function() {
        chatBlock.current.scrollTo(0, chatBlock.current.scrollHeight);
    }, [props.data]);

    return (
        <div className={ 'chat-block ' + props.className ?? '' } ref={ chatBlock }>
            { props.data.map((el, index) =>
                <div className="chat-block__inner" key={ index }>
                    <div className="chat-block__box">
                        <span className="chat-block__name title">{ el.name }</span>
                        <span className="chat-block__date">{ el.date }</span>
                    </div>
                    <div className="triangle"></div>
                    <p className="chat-block__text">
                        { el.text }
                    </p>
                </div>
            )}
        </div>
    );
}

export default ChatBlock;