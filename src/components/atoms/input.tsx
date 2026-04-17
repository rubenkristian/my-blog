import { ParentProps } from "solid-js";

type InputProps = {
    type: string;
    onTyping: (event: InputEvent) => void;
};

export default function Input(props: ParentProps<InputProps>) {
    return (
        <input
            type={props.type}
            onInput={props.onTyping}
        />
    );
}