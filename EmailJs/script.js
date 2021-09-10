function sendEmail(){

  (function() {
    // User Id
    emailjs.init("user_ID"); //please encrypted user id for malicious attacks
  })();

  var nombre = document.querySelector('#name').value;
  var email = document.querySelector('#email').value;
  var cuestion = document.querySelector('#issue').value;
  var mensaje = document.querySelector('#message').value;
  console.log(nombre);

  var templateParams = {
    from_name: nombre,
    fromEmail: email,
    issue: cuestion,
    message: mensaje
  };
  // Service and template
  emailjs.send('service_id', 'template_id', templateParams)
    .then(function(response) {
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Enviado con exito',
        showConfirmButton: false,
        timer: 1500
      })
      console.log('SUCCESS!', response.status, response.text);
    }, function(error) {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Fallo al enviar el mensaje',
        })
      console.log('FAILED...', error);
    });

}


// Funtion of test, is optional
function myFunction(){

}


