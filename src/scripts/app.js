//animations
import { moveUpTitle, moveUpTitleRight } from "./animations/titleanimation.js";
import fadeAnimation from "./animations/fadeupanimation.js";
import arrowAnimation from "./animations/arrowanimation.js";
import heroTitleAnimation from "./animations/banneranimation.js";
import mouseMove from "./animations/mouseanimation.js";
import interactAnimation from "./animations/interactanimation.js";

//class functions
import headerBackground from "./functions/headerBackground.js";

gsap.registerPlugin(ScrollTrigger);

const executeAnimations = () => {
  mouseMove();
  headerBackground();
  heroTitleAnimation();
  interactAnimation();
  moveUpTitle();
  fadeAnimation();
  moveUpTitleRight();
  arrowAnimation();
};

executeAnimations();
