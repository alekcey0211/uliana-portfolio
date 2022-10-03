import { useRef, useState, useEffect, useCallback } from "preact/hooks";
import { Image } from "../components/image.tsx";
import { IS_BROWSER } from "$fresh/runtime.ts";
import { useHover } from "../hooks/use-hover.ts";
import { useIntersectionObserver } from "../hooks/use-intersection-observer.ts";

export default function AutoScrollImage({
  containerHeight,
  imageProps,
}: {
  containerHeight: string;
  imageProps: Parameters<typeof Image>[number];
}) {
  const container = useRef<HTMLDivElement>(null);
  const trigger = useRef<HTMLDivElement>(null);
  const [requestId, setRequestId] = useState<number>();

  const isHover = useHover(container);
  const entry = useIntersectionObserver(container, {});
  const isVisible = !!entry?.isIntersecting;

  const scroll = useCallback(() => {
    container.current?.scrollBy({
      top: 1,
    });
  }, [container]);

  useEffect(() => {
    if (!IS_BROWSER || !container.current || !isVisible) return;

    const hasScroll =
      container.current.scrollTop + container.current.clientHeight <
      container.current.scrollHeight - 1;

    if (!isHover && hasScroll) {
      setRequestId(
        requestAnimationFrame(() => {
          scroll();
        })
      );
    } else if (requestId) {
      cancelAnimationFrame(requestId);
      setRequestId(undefined);
    }
  }, [scroll, isHover, requestId, isVisible, container]);

  return (
    <div ref={container} class="overflow-scroll overscroll-contain">
      <div class={`h-[${containerHeight}]`}>
        <Image {...imageProps} />
      </div>
    </div>
  );
}
