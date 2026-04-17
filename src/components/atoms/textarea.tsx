import { ParentProps } from "solid-js";

type TextAreaProps = {
    onTyping: (event: InputEvent) => void;
};

export default function TextArea(props: ParentProps<TextAreaProps>) {
    return (
        <textarea onInput={props.onTyping}></textarea>
    );
}