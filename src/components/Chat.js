import Sprite from "../ui/Sprite";
import ChatBlock from "./ChatBlock";
import ChatForm from "./ChatForm";

import {timezone} from "./timezone";

import { useState, useEffect } from "react";

import '../scss/components/chat.scss';

function Chat(props) {
    const [messages, setMessages] = useState(props.data.chat.messages);

    function sendMessage(text) {
        setMessages([...messages, {
            name: props.data.name,
            date: timezone(),
            text: text
        }]);
    }

    return (
        <div className="chat container">
            <div className="chat__head">
                <span className="chat__text title">Latest reviews</span>
                <a href="" className="chat__link" target="_blank">All reviews</a>
                <div className="chat__box">
                    <div className="chat__inner">
                        <Sprite className="chat__icon" icon="like" />
                        <span>{ props.data.chat.like }</span>
                    </div>
                    <div className="chat__inner">
                        <Sprite className="chat__icon" icon="comment" />
                        <span>{ props.data.chat.comment }</span>
                    </div>
                </div>
            </div>
            <ChatBlock className="chat__chat-block" data={ messages }/>
            <ChatForm className="chat__chat-form" onSubmit={ sendMessage }/>
        </div>
    );
}

export default Chat;
