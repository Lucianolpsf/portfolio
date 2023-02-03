const menu_burger = document.getElementById("menu-burger");
const nav = document.querySelector("nav");
const navigation = ()=>{nav.classList.toggle("nav-hide")};

menu_burger.addEventListener("click", ()=>{
    navigation()
})

nav.addEventListener("click", ()=>{
    navigation()
})


