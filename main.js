import { getNews } from "./module/news.js";

const newsUrl = "https://api.jsonbin.io/b/61a234810ddbee6f8b12ca08"


getNews(newsUrl, 
    (posts) => {
        console.log("getNews", posts);
        posts.forEach((post) => {
            document.getElementsByClassName("render").innerHTML += post.Create();
            console.log("render", post.Create());
        });
    })
