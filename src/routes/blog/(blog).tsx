export default function BlogHome() {
    return (
        <div class="max-w-3xl px-4 pt-16 mx-auto">
            <div class="flex gap-3">
                <div class="flex gap-5 items-end">
                    <h1 class="text-5xl font-bold">Blog</h1>
                    <h1 class="text-4xl font-bold">Tech</h1>
                </div>
                <div class="flex-1 items-end">
                    
                </div>
            </div>
            <div class="mt-8">
                {/* blow to card component */}
                <div class="py-6 px-1 grid sm:grid-cols-3 gap-4 hover:bg-gray-950 rounded-sm">
                    <div class="flex">
                        <time datetime="2026-02-25T09:00:00.000Z">February 25, 2026</time>
                    </div>
                    <div class="mb-4 grid col-span-2">
                        <h2 class="text(2xl gray-800) sm:text-3xl font-bold leading-tight tracking-tight">Title</h2>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}