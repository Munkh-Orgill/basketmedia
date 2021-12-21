
class MyApp{
    constructor(appID){
        this.appContainerClassName = appID || "myApp"
        this.appData = new Map();
        this.appData.set("/", new Map());
    }

    addPage(parentRoute, routeName, data){
        this.appData.get(parentRoute).set(routeName, data);
    }

    onRoute(route){
        console.log("ttt");
        history.pushState(null, "", route);
        document.getElementsByClassName(this.appContainerClassName).innerHTML = this.appData.get("/").get(route)?.Render() || this.notFound();
    }

    notFound(){
        return`<section><div>Not found :(</div></section>`
    }
}

class sideNews{
    constructor(objData){
        this.data = objData;
    }

    Article(dataObj){
        console.log("news", dataObj);
        return ` <li>
            <figure>
                <img src='${dataObj.img} alt="image">
            </figure>
            <div class="sub-article">
                <h3><a href="#">${dataObj.title}</a></h3>
                <p>${dataObj.body}</p>
            </div>
        </li>`
    }

    Render(){
        console.log("check render function");
        let articlesRendered = "";

        for(let article of this.data.articles){
            articlesRendered += this.Article(article);
        }

        return html`<section class="side-news">
            <ul>
            ${articlesRendered}
            </ul>
        </section>`
    }
}

class standingsNews{
    constructor(objData){
        this.data = objData;
    }

    Render(){
        return``
    }
}

const myApp = new MyApp("myApp")

const newsDataObj = {
        articles: [
            {
                img: "",
                title: "ДИАНДРЭ ХАНТЕР",
                body: "ДИАНДРЭ ХАНТЕР ГЭМТЛИЙН УЛМААС 2 САР ТАЛБАЙД ГАРАХ БОЛОМЖГҮЙ БОЛЛОО"
            },
            {
                img: "",
                title: "НЕТСИЙН ТҮҮХЭН ДЭХ АНХНЫ ТОГЛОГЧ КЕВИН ДЮРАНТ",
                body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, est"
            },
            {
                img: "",
                title: "МЕМФИС ГРИЗЗЛЕС БАГИЙН ТҮҮХЭН ДЭХ АНХНЫ ТОГЛОГЧ ЖА МОРАНТ",
                body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, est"
            }
        ]
};

const news = new sideNews(newsDataObj);


myApp.addPage("/", "news", news);
myApp.addPage("/", "standings", );

myApp.onRoute("/news");