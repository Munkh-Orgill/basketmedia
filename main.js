import { getNews } from "./module/news";

const newsUrl = "https://api.jsonbin.io/b/619778fb62ed886f915160af"

getNews(newsUrl, 
    (posts) => {
        posts.forEach((post) => {
            document.getElementsByClassName("home-news").innerHTML += post.Create();
        });
    })