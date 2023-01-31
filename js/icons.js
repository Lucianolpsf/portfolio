const tecnologias = document.getElementById("tecnologia1");
const design = document.getElementById("tecnologia2");

const cursosTecnologia = ["Html 5", "Css 3", "Javascript", "Bootstrap", "Git", "Github", "Mysql", "MariaDB", "SQL Server"]
const cursosDesign = ["Photoshop", "Illustrator", "Gimp", "Inkscape", "Darktable"];


cursosTecnologia.map((elem, indice)=>{
    const novoIcon = document.createElement("div");
          novoIcon.classList.add("card-icons");
          
    const img = document.createElement("img");
          img.setAttribute("class","icons");
        img.setAttribute("src","./assets/img/icons/"+elem+".png");
        novoIcon.appendChild(img);

    const h4 = document.createElement("h4");
          h4.innerHTML=(elem);
          novoIcon.appendChild(h4).setAttribute("class","titulos-icons");

    tecnologias.appendChild(novoIcon);

})

cursosDesign.map((elem)=>{
    const novoIcon = document.createElement("div");
          novoIcon.classList.add("card-icons");
          
    const img = document.createElement("img");
          img.setAttribute("class","icons");
        img.setAttribute("src","./assets/img/icons/"+elem+".png");
        novoIcon.appendChild(img);

    const h4 = document.createElement("h4");
          h4.innerHTML=(elem)
          novoIcon.appendChild(h4).setAttribute("class","titulos-icons");

    design.appendChild(novoIcon);

})

