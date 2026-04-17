import { useParams } from "@solidjs/router";

export default function PostBySlug() {
    const {slug} = useParams();

    return (
        <div>
            Blog From {slug}
        </div>
    );
}