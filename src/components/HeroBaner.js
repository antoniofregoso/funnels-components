class HeroBaner extends HTMLElement {

    constructor(){
        super()
    }

    render(){
        this.innerHTML =  /* html */`
        <section class="hero is-info is-large">
            <div class="hero-head">
                <nav class="navbar">
                <div class="container">
                    <div class="navbar-brand">
                    <a class="navbar-item">
                        <img src="https://bulma.io/images/bulma-type-white.png" alt="Logo">
                    </a>
                    <span class="navbar-burger" data-target="navbarMenuHeroB">
                        <span></span>
                        <span></span>
                        <span></span>
                    </span>
                    </div>
                    <div id="navbarMenuHeroB" class="navbar-menu">
                    <div class="navbar-end">
                        <a class="navbar-item is-active">
                        Home
                        </a>
                        <a class="navbar-item">
                        Examples
                        </a>
                        <a class="navbar-item">
                        Documentation
                        </a>
                        <span class="navbar-item">
                        <a class="button is-info is-inverted">
                            <span class="icon">
                            <i class="fab fa-github"></i>
                            </span>
                            <span>Download</span>
                        </a>
                        </span>
                    </div>
                    </div>
                </div>
                </nav>
            </div>

            <div class="hero-body">
                <div class="container has-text-centered">
                <p class="title">
                    Title
                </p>
                <p class="subtitle">
                    Subtitle
                </p>
                <a class="button is-dark" href="#">Info</a>
                </div>
            </div>

            <div class="hero-foot">
                <nav class="tabs is-boxed is-fullwidth">
                <div class="container">
                    <ul>
                    <li class="is-active">
                        <a>Overview</a>
                    </li>
                    <li>
                        <a>Modifiers</a>
                    </li>
                    <li>
                        <a>Grid</a>
                    </li>
                    <li>
                        <a>Elements</a>
                    </li>
                    <li>
                        <a>Components</a>
                    </li>
                    <li>
                        <a>Layout</a>
                    </li>
                    </ul>
                </div>
                </nav>
            </div>
        </section>
        `
    }
    connectedCallback(){
        this.render()
    }
}

customElements.define("hero-baner", HeroBaner)

export {HeroBaner}