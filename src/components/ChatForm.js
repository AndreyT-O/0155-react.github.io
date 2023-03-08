import "../scss/components/chat-form.scss";

import { useForm } from "react-hook-form";

function ChatForm(props) {

    const { register, handleSubmit, watch, reset, formState: { errors } } = useForm({
        defaultValues: {
            textarea: ''
        }
    });

    function submitForm(e) {
        props.onSubmit(watch("textarea"));
        reset();
    }

    return (
        <form
            action=""
            onSubmit={ handleSubmit(submitForm) }
            className={ 'chat-form ' + props.className ?? '' }
        >
            <textarea
                className={ errors.textarea ? 'chat-form__textarea error' : 'chat-form__textarea' }
                { ...register("textarea", { required: true, minLength: 2 }) } />
            <button
                type="submit"
                className="chat-form__button">
                <span className="chat-form__text title">
                    Send a message
                </span>
            </button>
        </form>
    );
}

export default ChatForm;