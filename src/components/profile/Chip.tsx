import { JSX } from "solid-js";

type ChipProps = {
  hoverColor: string;
  text: string;
  icon: string;
};

export default function Chip(props: ChipProps) {
  return (
    <span
      class={`flex items-center gap-2 px-4 py-1.5 rounded-full bg-gray-800 text-sm transition ${props.hoverColor}`}
    >
      <i class={props.icon}></i>
      {props.text}
    </span>
  );
}