import { JSX } from "solid-js";

type ContainerProps = {
  children: JSX.Element;
};

export default function Container(props: ContainerProps) {
  return <div class="max-w-2xl h-svh mx-auto">{props.children}</div>;
}