const apiUrl = "https://nashproyec.vercel.app/"

async function guardarContacto() {
    const form = document.getElementById("contactForm");
    const data = new FormData(form);
    const info = new URLSearchParams(data).toString();
    
    await fetch(apiUrl + "api/contacts", {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        },
        body: info
    })
    alert("Información enviada exitosamente!");
}