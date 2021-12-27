

export default class newsComponent extends HTMLElement {
  constructor() {
    super(); // always call super() first in the ctor.
    this.img = this.getAttribute('img') || '-';
    this.title = this.getAttribute('title') || '-';
    this.body = this.getAttribute('body') || '-';

  }
  connectedCallback() {
    this.innerHTML =`<figure>
        <img src=${this.img} alt="image">
    </figure>
    <div class="sub-article">
        <h3><a href="#">${this.title}</a></h3>
        <p>${this.body}</p>
    </div>`
  }
  disconnectedCallback() {
    
  }
  attributeChangedCallback(attrName, oldVal, newVal) {

  }
}

window.customElements.define('news-component', newsComponent);

