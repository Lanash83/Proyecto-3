document.getElementById('contactForm').addEventListener('submit', function(event) {
  event.preventDefault();
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;

  fetch('http://localhost:3000/api/contact', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({name, email})
  })
  .then(response => response.json())
  .then(data => {
      alert('Datos enviados con éxito');
  })
  .catch(error => {
      console.error('Error:', error);
  });
});

  
