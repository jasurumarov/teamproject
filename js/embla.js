import { addDotBtnsAndClickHandlers } from "./dot-buttons";

const OPTIONS = { align: "start", loop: true };

const emblaNode = document.querySelector(".embla");
const viewportNode = emblaNode.querySelector(".embla__viewport");
const dotsNode = document.querySelector(".embla__dots");
const emblaApi = EmblaCarousel(viewportNode, OPTIONS);

const removeDotBtnsAndClickHandlers = addDotBtnsAndClickHandlers(
  emblaApi,
  dotsNode
);

emblaApi.on("destroy", removeDotBtnsAndClickHandlers);
