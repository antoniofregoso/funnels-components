import 'animate.css'
import { ImageText } from './components/ImageText'
import { ImageBig } from './components/ImageBig'
import { HeroBaner } from './components/HeroBaner'
import { ImageParallax } from './components/ImageParallax'

class AppElement extends HTMLElement {

    constructor(){
        super()
    }

    setupAnimation(el){
        var animation =' animate__animated animate__'.concat(el.getAttribute('data-animation'))
        if (el.hasAttribute('data-delay')){
            animation = animation.concat(' animate__delay-', el.getAttribute('data-delay'))
        }
        if (el.hasAttribute('data-speed')){
            animation = animation.concat(' animate__', el.getAttribute('data-speed'))
        }
        if (el.hasAttribute('data-repeat')){
            el.getAttribute('data-repeat') === "infinite"?animation = animation.concat('animate__infinite'):animation = animation.concat(' animate__repeat-', el.getAttribute('data-repeat'))
        }        
        el.className = el.className.concat(animation)        
    }

    render(){
        this.innerHTML =  /* html */`        
        <div id="main"></div>
        `
        const main = this.querySelector('#main')
        const heroBanner = new HeroBaner({color:"is-success",button:{text:"Hi",animation:{animation:"rotateIn"}},logo:"https://bulma.io/images/bulma-type-white.png",head:[{text:"Home",href:"#",active:true},{text:"Examples",href:"#"},{text:"Documentation",href:"#"},{text:"Download",href:"#"}],foot:[{text:"Overview",href:"#",active:true},{text:"Modifiers",href:"#"},{text:"Grid",href:"#"},{text:"Elements",href:"#"},{text:"Components",href:"#"}]})
        main.append(heroBanner)
        const imageBig = new ImageBig()
        main.append(imageBig)
        const imageText = new ImageText()
        main.append(imageText)
        const imageParallax = new ImageParallax()
        main.append(imageParallax)
        let objs = document.querySelectorAll('[data-animation]')
        var observer = new IntersectionObserver(entries=>{
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    this.setupAnimation(entry.target)
                    return
                }
                entry.target.classList.forEach(_class => {
                    if (_class.startsWith('animate__')){
                        entry.target.classList.remove(_class)
                    }
                })
            })
        })
        objs.forEach(obj => {
            observer.observe(obj)
        })
    }

    connectedCallback(){
        this.render()
    }
}

customElements.define("app-element", AppElement)

export {AppElement}