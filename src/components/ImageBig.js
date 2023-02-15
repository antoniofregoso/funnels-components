import SimpleParallax from "simple-parallax-js"

class ImageBig extends HTMLElement {

    constructor(){
        super()
    }

    render(){
        this.innerHTML =  /* html */`
        <section class="section has-text-centered">
        <h1 class="title">Section</h1>
            <h2 class="subtitle">
                A simple container to divide your page into <strong>sections</strong>, like the one you're currently reading.
            </h2>
            <figure class="image">
                <img src="https://source.unsplash.com/random/?nature">
            </figure>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic eius velit ex neque accusantium sapiente, perferendis distinctio dolorem illo laboriosam dignissimos consectetur aliquam voluptate non perspiciatis ea eligendi architecto doloribus.</p>
            </div>
        </section>
        `  
        var image = this.querySelector('img')   
        new SimpleParallax(image,{
            orientation: 'right'
        })  
    }

    connectedCallback(){
        this.render()
    }
}

customElements.define("image-big", ImageBig)

export {ImageBig}