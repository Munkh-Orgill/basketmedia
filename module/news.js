export function getNews(url, callBack){
    fetch(url).then(response => response.json())
    .then(data => {
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
        this.body = _body;
    }

//     Create(){
//         return `<section>
//             <figure>
//                     <img src="${this.img}" alt="Nba">
//                 </figure>
//             <h2 class="news-title"><a href="#">${this.title}</a></h2>
//             <p>${this.body}</p>
//         </section>`
//     }
}