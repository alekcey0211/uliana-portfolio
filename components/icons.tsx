import { JSX } from "preact";
import { useId } from "../hooks/use-id.ts";

const ArrowRight = (props: JSX.SVGAttributes<SVGSVGElement>) => {
  return (
    <svg width="36" height="24" fill="none" viewBox="0 0 36 24" {...props}>
      <path
        fill="currentColor"
        d="M20.2 8.53c-.43-.3-.43-.77 0-1.06.44-.3 1.16-.3 1.6 0l6 4c.43.3.43.77 0 1.06l-6 4c-.44.3-1.16.3-1.6 0-.43-.3-.43-.77 0-1.06l4.08-2.72H9.75c-.62 0-1.13-.34-1.13-.75s.5-.75 1.13-.75h14.53L20.2 8.53Z"
      />
    </svg>
  );
};

const ArrowUp = (props: JSX.SVGAttributes<SVGSVGElement>) => {
  return (
    <svg
      width="24"
      height="24"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      viewBox="0 0 24 24"
      {...props}
    >
      <path d="M12 19V5m-7 7 7-7 7 7" />
    </svg>
  );
};

const Envelope = (props: JSX.SVGAttributes<SVGSVGElement>) => {
  return (
    <svg width="40" height="40" fill="none" {...props}>
      <path
        d="M12.149 8.18a90.66 90.66 0 0 1 15.702 0l2.517.218a4.814 4.814 0 0 1 3.855 2.575.393.393 0 0 1-.152.513L23.628 17.95a7.083 7.083 0 0 1-7.332.075L5.783 11.814a.393.393 0 0 1-.171-.489 4.815 4.815 0 0 1 4.02-2.927l2.517-.219Z"
        fill="currentColor"
      />
      <path
        d="M5.603 14.612a.413.413 0 0 0-.622.312 50.584 50.584 0 0 0 .307 12.598 4.813 4.813 0 0 0 4.344 4.08l2.517.219a90.67 90.67 0 0 0 15.702 0l2.517-.22a4.813 4.813 0 0 0 4.344-4.079 50.59 50.59 0 0 0 .268-12.965.413.413 0 0 0-.628-.304l-9.408 5.823a9.583 9.583 0 0 1-9.92.103l-9.42-5.567Z"
        fill="currentColor"
      />
    </svg>
  );
};

const Phone = (props: JSX.SVGAttributes<SVGSVGElement>) => {
  return (
    <svg width="40" height="40" fill="none" {...props}>
      <path
        d="M8.334 16.434A30.778 30.778 0 0 0 24.277 31.92l1.133.505a5.833 5.833 0 0 0 7.218-2.079l1.48-2.206a1.667 1.667 0 0 0-.338-2.226l-5.02-4.05a1.667 1.667 0 0 0-2.385.305l-1.553 2.096a20.234 20.234 0 0 1-9.185-9.186l2.095-1.552c.761-.564.9-1.648.305-2.386l-4.05-5.02a1.667 1.667 0 0 0-2.225-.338L9.53 7.273a5.833 5.833 0 0 0-2.062 7.26l.863 1.899.002.002Z"
        fill="currentColor"
      />
    </svg>
  );
};

const Whatsapp = (props: JSX.SVGAttributes<SVGSVGElement>) => {
  const id = useId();

  return (
    <svg width="40" height="40" fill="none" {...props}>
      <mask id={id} fill="#fff">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M3.64 35.552a.667.667 0 0 0 .811.822l7.68-2.006a16.666 16.666 0 0 0 7.93 2.01h.01c9.142 0 16.596-7.41 16.596-16.518A16.38 16.38 0 0 0 31.81 8.175a16.528 16.528 0 0 0-11.74-4.842c-9.143 0-16.597 7.41-16.597 16.519a16.459 16.459 0 0 0 2.218 8.255l-2.05 7.445ZM14.81 11.95c.305.009.643.025.965.74.213.474.572 1.35.865 2.062.228.555.415 1.011.462 1.105.107.213.173.46.033.746l-.047.098c-.113.233-.193.4-.382.616-.078.09-.159.187-.24.285a7.031 7.031 0 0 1-.403.462c-.214.213-.437.443-.19.87.248.427 1.114 1.83 2.392 2.962a11.057 11.057 0 0 0 3.172 2c.117.05.212.091.282.126.429.213.684.18.931-.107.248-.287 1.072-1.247 1.361-1.674.28-.427.569-.361.965-.213.395.147 2.506 1.181 2.935 1.395.084.042.164.08.237.115.298.143.501.24.587.385.107.18.107 1.034-.247 2.035-.363 1.001-2.11 1.962-2.902 2.035-.075.007-.15.017-.227.026-.725.087-1.646.199-4.926-1.092-4.043-1.59-6.711-5.534-7.25-6.331a4.963 4.963 0 0 0-.088-.128l-.01-.012c-.245-.328-1.746-2.337-1.746-4.41 0-1.984.977-3.017 1.422-3.488l.078-.082c.396-.427.858-.534 1.146-.534.29 0 .578 0 .825.008Z"
        />
      </mask>
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M3.64 35.552a.667.667 0 0 0 .811.822l7.68-2.006a16.666 16.666 0 0 0 7.93 2.01h.01c9.142 0 16.596-7.41 16.596-16.518A16.38 16.38 0 0 0 31.81 8.175a16.528 16.528 0 0 0-11.74-4.842c-9.143 0-16.597 7.41-16.597 16.519a16.459 16.459 0 0 0 2.218 8.255l-2.05 7.445ZM14.81 11.95c.305.009.643.025.965.74.213.474.572 1.35.865 2.062.228.555.415 1.011.462 1.105.107.213.173.46.033.746l-.047.098c-.113.233-.193.4-.382.616-.078.09-.159.187-.24.285a7.031 7.031 0 0 1-.403.462c-.214.213-.437.443-.19.87.248.427 1.114 1.83 2.392 2.962a11.057 11.057 0 0 0 3.172 2c.117.05.212.091.282.126.429.213.684.18.931-.107.248-.287 1.072-1.247 1.361-1.674.28-.427.569-.361.965-.213.395.147 2.506 1.181 2.935 1.395.084.042.164.08.237.115.298.143.501.24.587.385.107.18.107 1.034-.247 2.035-.363 1.001-2.11 1.962-2.902 2.035-.075.007-.15.017-.227.026-.725.087-1.646.199-4.926-1.092-4.043-1.59-6.711-5.534-7.25-6.331a4.963 4.963 0 0 0-.088-.128l-.01-.012c-.245-.328-1.746-2.337-1.746-4.41 0-1.984.977-3.017 1.422-3.488l.078-.082c.396-.427.858-.534 1.146-.534.29 0 .578 0 .825.008Z"
        fill="currentColor"
        stroke="currentColor"
        stroke-width="2"
        stroke-linejoin="round"
        mask={`url(#${id})`}
      />
    </svg>
  );
};

const Figma = (props: JSX.SVGAttributes<SVGSVGElement>) => {
  return (
    <svg width="55" height="55" fill="none" {...props}>
      <path
        d="M21.705 50.417a7.639 7.639 0 0 0 7.64-7.64V35.14h-7.64a7.639 7.639 0 1 0 0 15.278Z"
        fill="#0ACF83"
      />
      <path
        d="M14.066 27.5a7.639 7.639 0 0 1 7.64-7.64h7.638V35.14h-7.639a7.639 7.639 0 0 1-7.639-7.64Z"
        fill="#A259FF"
      />
      <path
        d="M14.066 12.223a7.639 7.639 0 0 1 7.64-7.64h7.638v15.278h-7.639a7.639 7.639 0 0 1-7.639-7.639Z"
        fill="#F24E1E"
      />
      <path
        d="M29.344 4.583h7.639a7.639 7.639 0 1 1 0 15.278h-7.64V4.583Z"
        fill="#FF7262"
      />
      <path
        d="M44.622 27.5a7.64 7.64 0 1 1-15.279 0 7.64 7.64 0 0 1 15.279 0Z"
        fill="#1ABCFE"
      />
    </svg>
  );
};

export const icons = {
  ArrowRight,
  ArrowUp,
  Envelope,
  Phone,
  Whatsapp,
  Figma
};
