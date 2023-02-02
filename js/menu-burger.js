const menu_burguer = document.getElementById("menu-burguer");
const nav = document.querySelector("nav");
const navigation = ()=>{nav.classList.toggle("nav-hide")};

menu_burguer.addEventListener("click", ()=>{
    navigation()
})

nav.addEventListener("click", ()=>{
    navigation()
})


