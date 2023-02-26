export class FunnelElement extends HTMLElement {
    constructor(){
        super()
    }

    connectedCallback(){
        this.render();
    }  

}

customElements.define("funnel-element", FunnelElement)