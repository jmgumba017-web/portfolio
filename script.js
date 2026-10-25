document.addEventListener("DOMContentLoaded", () => {
    
    // --- CONTACT FORM INTERACTION ---
    const contactForm = document.getElementById("contactForm");

    if (contactForm) {
        contactForm.addEventListener("submit", function(event) {
            event.preventDefault();

            const name = document.getElementById("nameInput").value;
            const email = document.getElementById("emailInput").value;
            const message = document.getElementById("messageInput").value;

            if(name && email && message) {
                const submitBtn = contactForm.querySelector("button");
                const originalText = submitBtn.innerText;
                
                submitBtn.innerText = "Transmission Sent.";
                submitBtn.style.backgroundColor = "#ff003c"; 
                submitBtn.style.color = "#050505";
                submitBtn.disabled = true;

                contactForm.reset();

                setTimeout(() => {
                    submitBtn.innerText = originalText;
                    submitBtn.style.backgroundColor = ""; 
                    submitBtn.style.color = "";
                    submitBtn.disabled = false;
                }, 3000);
            }
        });
    }

    // --- SMOOTH SCROLLING FOR NAV LINKS ---
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});