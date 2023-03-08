export class FunnelElement extends HTMLElement {
    #default = {}
    constructor(props){
        super()
        this.state = this.initState(props);
         

    }

    initState(){
        let state = {};
        props===undefined?state=this.#default:state={...this.#default,...props};
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