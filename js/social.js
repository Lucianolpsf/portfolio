const social = [...document.querySelectorAll(".social")];
const sociais = [
    'https://www.linkedin.com/in/luciano-lopes/',
    'https://github.com/lucianolpsf',
    'https://facebook.com/lucianolpsf',
    'https://instagram.com/lucianolpsf'];

const sociais_name = ["linkedin-in","github","facebook","instagram"];

social.map((element)=>{

    sociais.map((elemento, indice)=>{
        const link = document.createElement("a");
              link.setAttribute("href",elemento);
              link.setAttribute("target","_blank");
        
        const icons = document.createElement("i");
              icons.setAttribute("class","fa-brands fa-"+sociais_name[indice])

        
        link.appendChild(icons);
        element.appendChild(link);
    })
    
})