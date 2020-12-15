const toggleBtn = document.getElementsByClassName('toggle-btn')[0];
const navLinkovi = document.getElementsByClassName('linkovi')[0];

toggleBtn.addEventListener('click', () => {
    navLinkovi.classList.toggle('active')
})


function vratiVreme(){
    var sat = new Date();

    var sati = sat.getHours();
    var minuti= sat.getMinutes();
    var sekunde = sat.getSeconds();

    sati = ('0' + sati).slice(-2);
    minuti = ('0' + minuti).slice(-2);
    sekunde = ('0' + sekunde).slice(-2);

    document.getElementById('sat').innerHTML = 
        sati + " : " + minuti + " : " + sekunde;
    var t = setTimeout(vratiVreme, 500);
}

$(function() {
    $( "#datepicker" ).datepicker();
  } );

