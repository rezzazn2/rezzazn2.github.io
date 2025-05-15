let no = ["08521602743","08521601665","08521602876","08521602743","08521602743" ];

const waBtn = document.querySelectorAll(".fa-whatsapp");
const show = document.querySelector(".show-wa");
const showNo = show.firstElementChild.firstElementChild;

show.addEventListener('click', ()=>{
    
    if (event.target === show) {
        show.classList.toggle('wa-active');
    }

})

waBtn.forEach((btn, index) => {
    btn.addEventListener("click", function () {
        
        showNo.innerHTML = no[index];
        show.classList.toggle('wa-active')
        console.log(`Tombol ini adalah child ke-${index} dari NodeList waBtn`);
    });
});