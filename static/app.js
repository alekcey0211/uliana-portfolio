// deno-lint-ignore-file
import PhotoSwipeLightbox from "./photoswipe/photoswipe-lightbox.esm.min.js";
const lightbox = new PhotoSwipeLightbox({
  gallery: ".gallery-open",
  // initialZoomLevel: .75,
  pswpModule: () => import("./photoswipe/photoswipe.esm.min.js"),
});
lightbox.init();
