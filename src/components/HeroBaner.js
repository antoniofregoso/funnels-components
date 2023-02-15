import { updateState, getAnimation, getClasses } from "../helpers/tools"

class HeroBaner extends HTMLElement {

    #default = {color:"is-primary", size:"is-fullheight", head:null, foot:null, align:"has-text-centered", title:{text:"Title",animation:{animation:"zoomIn"}}, subtitle:{text:"Subtitle",animation:{animation:"zoomIn", delay:"1s"}}, button:{color:"is-info",size:"is-medium",fullwidth:false,rounded:true, text:"Info", href:"#",animation:{animation:"heartBeat", repeat:"3"}}}
    #head = /* html */`
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
    `

    #foot = /* html */`
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
    `

    constructor(props={}){
        super(props)
        this.state = updateState(this.#default,props)
    }

    get getState(){
        return this.state
    }

    set setState(props){
        this.state = {...this.state,...props}
        this.render()
    }

    render(){
        this.innerHTML =  /* html */`
        <section class="hero ${getClasses(this.state)}">           
            ${this.state.head!=null?this.#head:''}
            <div class="hero-body">
                <div class="container has-text-centered">
                <p class="title" ${'animation' in this.state.title?getAnimation(this.state.title.animation):''}>
                    ${this.state.title.text}
                </p>
                <p class="subtitle" ${'animation' in this.state.subtitle?getAnimation(this.state.subtitle.animation):''}>
                   ${this.state.subtitle.text}
                </p>
                <a class="button ${getClasses(this.state.button)}" href="${this.state.button.href}" ${'animation' in this.state.button?getAnimation(this.state.button.animation):''}>${this.state.button.text}</a>
                </div>
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