import SimpleParallax from "simple-parallax-js"

class ImageParallax extends HTMLElement {

    constructor(){
        super()
    }

    render(){
        this.innerHTML =  /* html */`
        <section class="section">
                <figure class="image">
                    <img src="https://source.unsplash.com/random/?people">
                </figure>
        </section>
        `   
        var image = this.querySelector('img')   
        new SimpleParallax(image,{
            orientation: 'up right'
        })  
    }

    connectedCallback(){
        this.render()
    }
}

customElements.define("image-paralax", ImageParallax)

export {ImageParallax}