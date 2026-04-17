import { ParentProps } from "solid-js";

/**
 * @author: Kristian Ruben
 * @description: This component to put text, image and content item
 * @property: 
 */
type Roundedlist = 'small' | 'medium' | 'large' | 'larger' | 'extra-larger';
type CardProps = {
    height?: number;
    width?: number;
    rounded?: Roundedlist;
};

const sizeList: Record<Roundedlist, string> = {
    'small': '4px',
    'medium': '8px',
    'large': '12px',
    'larger': '16px',
    'extra-larger': '24px',
}

export default function Card(props: ParentProps<CardProps>) {
    return (
        <div style={{"border-radius": sizeList[props.rounded ?? 'small']}}>
            {props.children}
        </div>
    );
}