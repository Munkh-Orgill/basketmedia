export function getNews(url, callBack){
    fetch(url).then(response => response.json())
    .then(data => {
        console.log("Data", data);
        let posts = [];
        data.news.forEach(post => {
            posts.push(new Post(post.img, post.title, post.body))  
        });
        callBack(posts);
    })
}

export class Post{
    constructor(_img, _title, _body){
        this.img = _img;
        this.title = _title;
        console.log("tt", _title);
        this.body = _body;
    }

    Create(){
        return`
            <figure>
                <img src='${this.img} alt="image">
            </figure>
            <div class="sub-article">
                <h3><a href="#">${this.title}</a></h3>
                <p>${this.body}</p>
            </div>`
        
    }
}