import { whithAnimations} from "./components/ux";
import { ImageText } from "./components/ImegeText";

export class App {
    constructor() {
        this.page = /* html */`
            <image-text image-position="right"></image-text>
        `
    }

    init(){
        document.querySelector('#app').innerHTML = this.page;
        whithAnimations();
    }

    }