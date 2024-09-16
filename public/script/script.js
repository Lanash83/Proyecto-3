document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
      contactForm.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const text = document.getElementById('message').value;

        const apiUrl = 'https://proyecto-3-pi.vercel.app/'; // Reemplaza esto con el valor correcto
  
        fetch(apiUrl + 'api/contact', {
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
          document.getElementById('name').value = "";
          document.getElementById('email').value = "";
          document.getElementById('message').value = "";
        })
        .catch(error => {
          console.error('Error:', error);
        });
      });
    } else {
      console.error('Formulario no encontrado');
    }
  });


  // Modal
let currentImageIndex = 0;
let images = [];

function openModal(src) {
    const modal = document.getElementById("modal");
    const modalImage = document.getElementById("modalImage");
    modal.style.display = "block";
    modalImage.src = src;
    images = Array.from(document.querySelectorAll('.logo44')).map(img => img.src);
    currentImageIndex = images.indexOf(src);
}

function closeModal() {
    document.getElementById("modal").style.display = "none";
}

function changeImage(direction) {
    currentImageIndex = (currentImageIndex + direction + images.length) % images.length;
    document.getElementById("modalImage").src = images[currentImageIndex];
}
