import 'animate.css'
import { ImageText } from './components/ImageText'
import { ImageBig } from './components/ImageBig'
import { HeroBaner } from './components/HeroBaner'
import { ImageParallax } from './components/ImageParallax'

class AppElement extends HTMLElement {

    constructor(){
        super()
    }

    render(){
        this.innerHTML =  /* html */`        
        <div id="main"></div>
        `
        const main = this.querySelector('#main')
        const heroBanner = new HeroBaner()
        main.append(heroBanner)
        const imageBig = new ImageBig()
        main.append(imageBig)
        const imageText = new ImageText()
        main.append(imageText)
        const imageParallax = new ImageParallax()
        main.append(imageParallax)
    }

    connectedCallback(){
        this.render()
    }
}

customElements.define("app-element", AppElement)

export {AppElement}