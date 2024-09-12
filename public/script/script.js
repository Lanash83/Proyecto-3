document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
      contactForm.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const text = document.getElementById('message').value;

        const apiUrl = 'https://proyecto-3-pi.vercel.app/'; // Reemplaza esto con el valor correcto
  
        fetch(apiUrl + '/api/contact', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ name, email, text })
        })
        .then(response => response.json())
        .then(data => {
          console.log(data);
          alert('Datos enviados con éxito');
        })
        .catch(error => {
          console.error('Error:', error);
        });
      });
    } else {
      console.error('Formulario no encontrado');
    }
  });
  