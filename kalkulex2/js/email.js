const btn = document.querySelector('#btn-saran');

btn.addEventListener('click', function(event) {
    event.preventDefault();
    console.log("okee");

    btn.innerHTML = "Sending... <i class='fa-solid fa-paper-plane'></i>";

    const serviceID = "service_oo9vxha";
    const templateID = "template_h19zilr";

    emailjs.sendForm(serviceID, templateID, document.getElementById('email-form'))
        .then(() => {
            btn.innerHTML = 'kirim <i class="fa-solid fa-paper-plane"></i>';
            alert("Pesan berhasil dikirim");
            document.getElementById('email-form').reset(); // Reset form
        }, (err) => {
            btn.innerHTML = 'kirim <i class="fa-solid fa-paper-plane"></i>';
            alert("Terjadi error: " + err.text);
        });
});