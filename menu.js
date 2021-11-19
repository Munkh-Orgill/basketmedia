const btnHam = document.querySelector('.menu-btn');

const btnClose = document.querySelector('.close-btn');

const navBar = document.getElementById('nav')

btnHam.addEventListener('click', function(){
    if(btnHam.className !== "")
    {
        btnHam.style.display = "none";
        btnClose.style.display = "block";
        navBar.classList.add("show-nav");
    } 
})

btnClose.addEventListener('click', function(){
    if(btnHam.className !== "")
    {
        this.style.display = "none";
        btnHam.style.display = "block";
        navBar.classList.remove("show-nav");
    }
})

//jsjfkjfk