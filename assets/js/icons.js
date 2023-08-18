const tecnologias = document.getElementById("tecnologia1");
const design = document.getElementById("tecnologia2");

const cursosTecnologia = ["Html 5", "Css 3", "Javascript", "Bootstrap", "Git", "Github", "Mysql", "MariaDB", "SQL Server", "Docker"]
const cursosDesign = ["Photoshop", "Illustrator", "Gimp", "Inkscape", "Darktable","Figma"];


cursosTecnologia.map((elem)=>{
      novoIcon =  criaIcons()
      renderizaImagem(elem);
      renderizaTitulos(elem);          
      tecnologias.appendChild(novoIcon);          
})
      
cursosDesign.map((elem)=>{
      novoIcon =  criaIcons()
      renderizaImagem(elem);
      renderizaTitulos(elem);
      design.appendChild(novoIcon);
})

function criaIcons(){
      const novoIcon = document.createElement("div");
      novoIcon.classList.add("card-icons");
      return novoIcon;
};

function renderizaImagem(elem){
      const img = document.createElement("img");
            img.setAttribute("class","icons");
            img.setAttribute("alt",elem)
            img.setAttribute("src","./assets/img/icons/"+elem+".png");
      novoIcon.appendChild(img);
};

function renderizaTitulos(elem){
      const h3 = document.createElement("h3");
      h3.innerHTML=(elem)
      novoIcon.appendChild(h3).setAttribute("class","titulos-icons");
};