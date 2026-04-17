import { ParentProps } from "solid-js";
import { Icon as Iconify, IconifyIcon } from '@iconify-icon/solid';

type IconProps = {
    name: string | IconifyIcon;
    size: number;
    color: string;
};

export default function Icon(props: ParentProps<IconProps>) {
    return (
        <Iconify
            icon={props.name}
            width={props.size}
            height={props.size}
            style={{color: props.color}}
        />
    );
}