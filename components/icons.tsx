import { JSX } from "preact";

function ArrowRight(props: JSX.SVGAttributes<SVGSVGElement>) {
  return (
    <svg width="36" height="24" fill="none" viewBox="0 0 36 24" {...props}>
      <path
        fill="currentColor"
        d="M20.2 8.53c-.43-.3-.43-.77 0-1.06.44-.3 1.16-.3 1.6 0l6 4c.43.3.43.77 0 1.06l-6 4c-.44.3-1.16.3-1.6 0-.43-.3-.43-.77 0-1.06l4.08-2.72H9.75c-.62 0-1.13-.34-1.13-.75s.5-.75 1.13-.75h14.53L20.2 8.53Z"
      />
    </svg>
  );
}

export const icons = {
  ArrowRight,
};
