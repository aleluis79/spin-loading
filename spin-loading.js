export class SpinLoading extends HTMLElement {

    visible = true;

    constructor() {
      super();
      this.attachShadow({ mode: "open" });
    }

    static get observedAttributes() {
        return ['visible'];
    }

    attributeChangedCallback (name, oldValue, newValue) {
        if (name === 'visible') {
            this.visible = newValue !== 'false';
        }
        console.log(`Attribute ${name} changed from ${oldValue} to ${newValue}`);
        this.render();
    }    
  
    connectedCallback() {
      this.render();
    }
    
    render() {
      if (this.visible) {
        this.shadowRoot.innerHTML = /*html*/`
            ${SpinLoading.styles}
            <div class="container">
                <div class="rueda"></div>
                <div>Cargando</div>
            </div>
        `;
      } else {
        this.shadowRoot.innerHTML = /*html*/`
            <style>
                :host {
                    display: none;
                }
            </style>
        `;
      }
    }
    
    static get styles() {
      return /*css*/`
        <style>
       
          :host {
            --tamanio: 50px;
            --grosor: 8px;
            --color: blueviolet;
            --color-base: #ddd;
            --velocidad: 1s;
          }     
       
          @keyframes spin {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }  
          }      
        
          .rueda {
            width: var(--tamanio);
            height: var(--tamanio);
            border: solid var(--grosor) var(--color-base);
            border-bottom-color: var(--color);
            border-radius: 50%;
            animation: spin var(--velocidad) linear infinite; 
          }
  
          .container {          
            background-color: #eeee;
            position: absolute;
            width: 100%;
            height: 100%;
            top: 0;
            lef: 0;
            margin: 0;
            padding: 0;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            font-family: roboto;
            font-color: gray;
          }        
        
        </style>
       `
    }
  }
  
  customElements.define("spin-loading", SpinLoading);