

  function validacija () {
    var form = document.getElementById("forma");
    var mail = document.getElementById("mail").value;
    var txt = document.getElementById("txt");

    var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

      if(mail.match(pattern)){
          form.classList.add('valid');
          form.classList.remove('invalid');
          txt.innerHTML = "Ispravna imejl adresa";
          txt.style.color = "#00ff00";
      }
      else{
          form.classList.remove('valid');
          form.classList.add('invalid');
          txt.innerHTML = "Neispravna imejl adresa";
          txt.style.color = "#ff0000";
      }

      if(mail == ""){
          form.classList.remove('valid');
          form.classList.remove('invalid');
          txt.innerHTML = "";
          txt.style.color = "#00ff00";
      }
  }
      function resetDugme(e){
          var r = confirm("Da li ste sigurni?");
          if( r == true){
              alert("Forma je resetovana.");
          }
          else {
              alert("Forma nije resetovana.");
          }
  }     

  document.getElementById('resetDugme1').addEventListener('click', resetDugme); 

  function obavestenje(){
      alert("Hvala na prijavi!");
  }
  
  document.getElementById('potvrda').addEventListener('click', obavestenje);

  function porukica() {
      alert("Poruka je poslata!");
  }
  document.getElementById('potvr').addEventListener('click', porukica);






