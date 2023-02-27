import { whithAnimations} from "./components/ux";
import { ImageParallaxText } from "./components/ImegeParallaxText";

export class App {
    constructor() {
        this.page = /* html */`
            <image-parallax-text image-position="right" vcentered></image-paralax-text>
        `
    }

    init(){
        document.querySelector('#app').innerHTML = this.page;
        whithAnimations();
    }

    }