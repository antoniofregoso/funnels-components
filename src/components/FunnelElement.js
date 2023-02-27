export class FunnelElement extends HTMLElement {
    #default = {}
    constructor(props){
        super()
        this.state = {}
         

    }

    initState(base,props){
        let state = {};
        props===undefined?state=base:state={...base,...props};
        return state;
    }

    setState(props){
        this.state = {...this.#default,...props};
        this.render();
    }

    connectedCallback(){
        this.render();
    }  

}

customElements.define("funnel-element", FunnelElement)