// When the user scrolls down 20px from the top of the document, slide down the navbar
// When the user scrolls to the top of the page, slide up the navbar (50px out of the top view)
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 90 || document.documentElement.scrollTop > 90) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-8em";
  }
} 

// Funkce, která bude aktualizovat čas.
function aktualizujCas() {
  // Vytvoříme novou instanci objektu Date.
  var datum = new Date();

  // Zobrazíme aktuální čas do elementu s id="cas".
  document.getElementById("cas").innerHTML = datum.toLocaleString();

  // Zobrazíme aktuální čas do elementu s id="casstill".
  document.getElementById("casstill").innerHTML = datum.toLocaleString();
}

// Spuštění funkce aktualizujCas každou sekundu.
setInterval(aktualizujCas, 1000);