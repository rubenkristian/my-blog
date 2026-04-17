import { ParentProps } from "solid-js";

type ButtonProps = {
    style: string;
    onClick: (event: MouseEvent) => void;
};

export default function Button(props: ParentProps<ButtonProps>) {
    return (
        <button onClick={props.onClick}>
            {props.children}
        </button>
    );
}