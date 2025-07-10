import AosModule from "./module/AosModule.js";
import BtnToTopModule from "./module/BtnToTopModule.js";
import HeaderModule from "./module/HeaderModule.js";
import ScrollToSectionModule from "./module/ScrollToSectionModule.js";
import SwiperModule from "./module/SwiperModule.js";
import LinksMain from "./module/linksMain.js";
import GSAPJS from "./module/gsap.js";

import CountUpModule from "./module/CountUpModule.js";
import HomeJS from "./module/Home.js";
import TextAniModule from "./module/TextAniModule.js";


window.addEventListener("DOMContentLoaded", () => {
    HeaderModule();
    BtnToTopModule();
    SwiperModule();
    AosModule();
    ScrollToSectionModule();
    LinksMain();
    GSAPJS();
    CountUpModule();
    HomeJS();
    Splitting();
    TextAniModule();
  
});