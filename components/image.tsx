const getBaseFormat = (src: string) => (src.endsWith("png") ? "png" : "jpeg");

export function Image({
  src,
  alt = "",
  width,
  height,
  baseFormat: baseFormatDefault,
  isLazy = true,
  className,
  pictureClassName,
  showBreakpoint,
  showAvif = true,
}: {
  src: string;
  alt?: string;
  width?: number;
  height?: number;
  baseFormat?: string;
  className?: string;
  pictureClassName?: string;
  isLazy?: boolean;
  aspect?: "square" | "video" | "4/3";
  showBreakpoint?: string;
  showAvif?: boolean;
}) {
  const baseFormat = baseFormatDefault ? baseFormatDefault : getBaseFormat(src);
  const showBreakpointWidth = showBreakpoint
    ? { sm: 640, md: 768, lg: 1024, xl: 1280, "2xl": 1536 }[showBreakpoint]
    : undefined;

  return (
    <picture class={pictureClassName}>
      {showBreakpointWidth && (
        <source
          media={`(max-width: ${showBreakpointWidth}px)`}
          sizes="1px"
          srcset="/assets/img/blank.gif 1w"
        />
      )}
      {showAvif && (
        <source
          type="image/avif"
          srcset={src.replace(`.${baseFormat}`, ".avif")}
          sizes="100vw"
          {...(showBreakpointWidth && {
            media: `(min-width: ${showBreakpointWidth}px)`,
          })}
        />
      )}
      <source
        type="image/webp"
        srcset={src.replace(`.${baseFormat}`, ".webp")}
        sizes="100vw"
        {...(showBreakpointWidth && {
          media: `(min-width: ${showBreakpointWidth}px)`,
        })}
      />
      <source
        type={baseFormat === "jpg" ? "image/jpeg" : `image/${baseFormat}`}
        srcset={src}
        sizes="100vw"
        {...(showBreakpointWidth && {
          media: `(min-width: ${showBreakpointWidth}px)`,
        })}
      />
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        class={className}
        {...(isLazy && {
          loading: "lazy",
          decoding: "async",
        })}
      />
    </picture>
  );
}
