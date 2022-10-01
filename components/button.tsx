import { JSX } from "preact";

export function Button({ text, icon }: { text: string; icon?: JSX.Element }) {
  const hasIcon = Boolean(icon);

  return (
    <button
      class={`bg-gray-800 bg-opacity-[0.1] hover:bg-opacity-[0.2] active:bg-opacity-[0.25] text-black text-opacity-50 text-2xl py-3 ${
        hasIcon ? "pr-4 pl-6" : "px-4"
      } inline-flex items-center gap-x-2`}
    >
      <span>{text}</span>
      {icon}
    </button>
  );
}
