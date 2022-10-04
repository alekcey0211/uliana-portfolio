import {
  useRef,
  useState,
  useEffect,
  useCallback,
  useMemo,
} from "preact/hooks";
import { Image } from "../components/image.tsx";
import { IS_BROWSER } from "$fresh/runtime.ts";
import { useHover } from "../hooks/use-hover.ts";
import { useIntersectionObserver } from "../hooks/use-intersection-observer.ts";
import { AnimationFrame } from "../shared/animation-frame.ts";

export default function AutoScrollImage({
  containerHeight,
  imageProps,
}: {
  containerHeight: string;
  imageProps: Parameters<typeof Image>[number];
}) {
  const container = useRef<HTMLDivElement>(null);

  const isHover = useHover(container);
  const entry = useIntersectionObserver(container, {});
  const isVisible = !!entry?.isIntersecting;

  const scroll = useCallback(() => {
    container.current?.scrollBy({
      top: 1,
    });
  }, [container]);

  const animation = useMemo(() => {
    return new AnimationFrame(() => {
      scroll();
    }, 30);
  }, []);

  useEffect(() => {
    if (!IS_BROWSER || !container.current || !isVisible) return;

    const hasScroll =
      container.current.scrollTop + container.current.clientHeight <
      container.current.scrollHeight - 1;

    if (!isHover && hasScroll) {
      animation.start();
    } else {
      animation.stop();
    }
  }, [scroll, isHover, isVisible, container]);

  return (
    <div ref={container} class="overflow-scroll overscroll-contain">
      <div class={`h-[${containerHeight}]`}>
        <Image {...imageProps} />
      </div>
    </div>
  );
}
