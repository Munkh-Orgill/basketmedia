import newsComponent from "./component.js";

// <side-news></side-news>
class SideNews extends HTMLElement {
  constructor() {
    super(); // always call super() first in the ctor.
    this.newsUrl = this.getAttribute('newsUrl');
    const ul = document.createElement("ul");
    
    this.innerHTML = `<ul class = "side-news-ul"></ul>`
  }
  connectedCallback() {
    fetch(this.newsUrl).then(response => response.json())
    .then(data => {
        data.news.map(nws =>{

          let nwsc = new newsComponent();
          nwsc.img = nws.img;
          nwsc.title = nws.title;
          nwsc.body = nws.body;

          const li = document.createElement("li");
          li.appendChild(nwsc);
          document.getElementsByClassName("side-news-ul")[0].insertAdjacentElement("beforeend", li);
        })
    });

  }
  disconnectedCallback() {
    
  }
  attributeChangedCallback(attrName, oldVal, newVal) {
    
  }
}

window.customElements.define('side-news', SideNews);