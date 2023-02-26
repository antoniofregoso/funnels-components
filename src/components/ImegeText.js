import { FunnelElement } from "./FunnelElement";
import SimpleParallax from "simple-parallax-js";

export class ImageText extends FunnelElement {

    textAlign = this.getAttribute("text-align") || "left";
    imagePosition =  this.getAttribute("image-position") || "left";
    imageWidth = this.getAttribute("image-width") || "half";

    constructor(){
        super()
    }

    image = /* html */`
            <figure class="image">
                <img src="https://source.unsplash.com/random/?people">
            </figure>
    `

    text = /* html */`
            <h2 class="subtitle">Hola</h2>
            <h1 class="title" data-animation="lightSpeedInRight">Large section</h1>
            <p >
                A simple container to divide your page into <strong>sections</strong>, like the one you're currently reading.
            </p>
    `

    render(){
        this.innerHTML = /* html */`
            <section class="section has-background-primary columns is-medium">
            <div class="column">
                ${this.imagePosition==='right'?this.text:this.image}
            </div>
            <div class="column">
            ${this.imagePosition==='right'?this.image:this.text}
            </div>
            </section>
    `
    var image = this.querySelector('img')   
    new SimpleParallax(image,{
        orientation: 'right'
    })  

    }

    

}

customElements.define("image-text", ImageText)