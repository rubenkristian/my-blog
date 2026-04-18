type CardProps = {
  repo: string;
  detail: string;
  language: string;
  color: string;
  link: string;
};

export default function Card(props: CardProps) {
  return (
    <a
      href={props.link}
      target="_blank"
      class="w-72 bg-gray-800 rounded-xl shadow-lg p-5 transition hover:scale-105 hover:shadow-2xl"
    >
      <div class="flex items-center gap-3 mb-3">
        <i class="fa-brands fa-github text-2xl text-white"></i>
        <h3 class="text-white text-lg font-semibold truncate text-ellipsis">
          {props.repo}
        </h3>
      </div>
      <p class="text-gray-300 text-sm mb-3">{props.detail}</p>
      <div class="flex items-center gap-3 text-gray-400 text-sm">
        <span>
          <i class={`fa-solid fa-circle ${props.color}`}></i> {props.language}
        </span>
      </div>
    </a>
  );
}