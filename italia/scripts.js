// scripts.js

// Função para incluir arquivos HTML
function includeHTML() {
    let z, i, elmnt, file, xhttp;
    /* Loop por todos os elementos na página */
    z = document.getElementsByTagName("*");
    for (i = 0; i < z.length; i++) {
      elmnt = z[i];
      /* Busca o atributo 'w3-include-html' */
      file = elmnt.getAttribute("w3-include-html");
      if (file) {
        /* Faz o pedido HTTP usando o valor do atributo como nome do arquivo */
        xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
          if (this.readyState == 4) {
            if (this.status == 200) {elmnt.innerHTML = this.responseText;}
            if (this.status == 404) {elmnt.innerHTML = "Página não encontrada.";}
            /* Remove o atributo e chama a função novamente */
            elmnt.removeAttribute("w3-include-html");
            includeHTML();
          }
        };
        xhttp.open("GET", file, true);
        xhttp.send();
        return;
      }
    }
  }
  
  function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
  }

  // Chama a função includeHTML quando a página é carregada
  document.addEventListener("DOMContentLoaded", includeHTML);
  
  