const apiUrl = "https://proyecto-3-backend-mu.vercel.app/"

async function guardarContacto() {
    try {
        const form = document.getElementById("contactForm");
      const formData = new FormData(form);
      const data = new URLSearchParams(formData).toString();
        let response = await fetch(apiUrl+'contacts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: data
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        response = await response.json();
        console.log('Success:', response);
    } catch (error) {
        console.error('Error:', error);
    }
}