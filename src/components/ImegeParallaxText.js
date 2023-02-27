import { FunnelElement } from "./FunnelElement";
import SimpleParallax from "simple-parallax-js";

export class ImageParallaxText extends FunnelElement {
    vcentered = this.getAttribute("vcentered") || false;
    textAlign = this.getAttribute("text-align") || "left";
    imagePosition =  this.getAttribute("image-position") || "left";
    imageWidth = this.getAttribute("image-width") || "half";
    #default = {image:{src:"https://source.unsplash.com/random/?people"},
                title:{text:"Tile"}, 
                subtitle:{text:"Subtitle"},
                message:{text:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et quibusdam error enim, sapiente corporis ut ab incidunt quos voluptate porro facilis distinctio quae magnam dicta sequi, quia quaerat labore odio?"}
                }

    constructor(props={}){
        super()
        this.state =this.initState(this.#default,props); 
    }

    render(){
        console.log(this.vcentered)
        let img = /* html */`
            <figure class="image">
                <img src="${this.state.image.src}">
            </figure>
            `
        let text = /* html */`
            <h2 class="subtitle">${this.state.subtitle.text}</h2>
            <h1 class="title" >${this.state.title.text}</h1>
            <p >${this.state.message.text}</p>
            `
        this.innerHTML = /* html */`
            <section class="section has-background-primary columns ${this.vcentered===true?'is-vcentered':''}is-medium">
            <div class="column">
                ${this.imagePosition==='right'?text:img}
            </div>
            <div class="column">
            ${this.imagePosition==='right'?img:text}
            </div>
            </section>
    `
    var image = this.querySelector('img')   
    new SimpleParallax(image,{
        orientation: 'right'
    })  

    }

    

}

customElements.define("image-parallax-text", ImageParallaxText)