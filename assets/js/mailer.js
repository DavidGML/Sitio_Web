$(document).ready(function(){

    function isValidEmailAddress(emailAddress) {
      var pattern = /^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([ \t]*\r\n)?[ \t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([ \t]*\r\n)?[ \t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;
      return pattern.test(emailAddress);
    }
  
    function isValidName(name) {
      var pattern = /^[a-zA-ZnÑáéíóúÁÉÍÓÚ ]+$/;
      return pattern.test(name);
    }
  
    $("#submitButton").on('click', function(){
      if(isValidEmailAddress($("#email").val()) && isValidName($("#name").val())){
        if(($("#message").val() != "")){
          $.ajax({
            type: 'POST',
            url: 'https://' + window.location.hostname + '../assets/php/mailer.php',
            dataType: "JSON",
            data:{
              'name': $("#name").val(),
              'email': $("#email").val(),
              'message': $("#message").val()
            },
            error: function(data){
              alert("Ah ocurrido un error inesperado.");
            },
            success: function(data){
              switch(data){
                case "sent":
                  alert("¡Su mensaje ha sido enviado de forma exitosa!");
                  $("#name").val("");
                  $("#email").val("");
                  $("#message").val("");
                break;
                case "no_sent":
                    alert("No se ha podido enviar el mensaje.");
                break;
                case "missing_params":
                    alert("Todos los campos del formulario son requeridos. Inténtalo nuevamente.");
                break;
              }
            }
          });
        }else{
          alert("Rellene todos los campos para enviar su mensaje.");
        }
      }else{
        alert("El email y/o el nombre no son validos");
      }
    });
  
  });