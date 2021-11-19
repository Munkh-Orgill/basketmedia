// <component></component>
class componentTest extends HTMLElement {
  constructor() {
    super(); // always call super() first in the ctor.
    this.innerHTML = `<button>click me</button>`
  }
  connectedCallback() {
    
  }
  disconnectedCallback() {
    
  }
  attributeChangedCallback(attrName, oldVal, newVal) {

  }
}

window.customElements.define('component-test', componentTest);

