const search_box_btn = document.querySelector(".search-box");
const search_bar = document.querySelector(".search-bar");
const hamburger = document.querySelector(".hamburger");
const side_bar = document.querySelector(".side-bar");
const close_sidebar = document.querySelector(".close-sidebar");
search_box_btn.addEventListener("click", function(){
    search_bar.classList.toggle("active");
})

hamburger.addEventListener("click", function(){
    side_bar.classList.add("active");
})

close_sidebar.addEventListener("click", function(){
    side_bar.classList.remove("active");
})