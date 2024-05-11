
var form = document.getElementById("contact-form") ;


form.addEventListener('submit',(e) => {

  console.log(e) ;
  form.addEventListener('submit', function(event) {
    event.preventDefault();
    emailjs.sendForm('service_cp8im5f', 'template_6q0084i', this)
      .then(function(response) {
        console.log('Email sent!', response.status, response.text);
        document.getElementById('success').removeAttribute('hidden') ;
       
      }, function(error) {
        console.error('Error sending email:', error);
        alert('Oops! Something went wrong.');
      });
  });



} ) ;






