import SimpleParallax from "simple-parallax-js"

class ImageText extends HTMLElement {

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
            <div class="columns is-vcentered">
                <div class="column">
                <figure class="image">
                    <img src="https://source.unsplash.com/random/?city,night">
                </figure>
                </div>
                <div class="column">
                    <div class="content has-text-left">
                        <h1>Hello World</h1>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim eum tempora error tenetur consequuntur alias impedit quos delectus nobis et ad inventore, eveniet quidem quia ea. Aspernatur cum atque maxime!</p>
                    </div>
                    <a class="button is-info" href="#">Info</a>
                </div>
            </div>
        </section>
        `   
        var image = this.querySelector('img')   
        new SimpleParallax(image,{
            orientation: 'left'
        })  
    }

    connectedCallback(){
        this.render()
    }
}

customElements.define("image-text", ImageText)

export {ImageText}