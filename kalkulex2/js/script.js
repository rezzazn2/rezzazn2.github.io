const navbar = document.querySelector('nav');
const navListChildren = document.querySelectorAll(".list-nav")[0].children;
const navMobile = document.querySelector('nav.mobile');
const closeNavMob = document.querySelector('#close-navMobile');
const openNavMob = document.querySelector('.fa-bars');

// Fungsi untuk mengatur kelas aktif pada elemen navList
const setActiveNav = (index) => {
    // Hapus semua kelas "nav-active" dari semua elemen
    for (let i = 0; i < navListChildren.length; i++) {
        navListChildren[i].classList.remove("nav-active");
    }
    // Tambahkan kelas "nav-active" pada elemen dengan index tertentu
    navListChildren[index].classList.add("nav-active");
};


// sticky nav
window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    const width = window.innerWidth;

    console.log("scrollY: ", scrollY);

    // Tambahkan kelas "scrolled" ke navbar jika scrollY > 0
    if (scrollY > 0) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }

    if(width <= 720){
        if (scrollY >= 1 && scrollY <= 700) {
                setActiveNav(0);
            } else if (scrollY >= 701 && scrollY <= 1800) {
                setActiveNav(1);
            } else if (scrollY >= 1801 && scrollY <= 2700) {
                setActiveNav(2);
            } else if (scrollY >= 2701 && scrollY <= 3700) {
                setActiveNav(3);
            } else if (scrollY >= 3701) {
                setActiveNav(4);
            }
            
    }else{
        if (scrollY >= 1 && scrollY <= 600) {
            setActiveNav(0);
        } else if (scrollY >= 601 && scrollY <= 1500) {
            setActiveNav(1);
        } else if (scrollY >= 1501 && scrollY <= 2100) {
            setActiveNav(2);
        } else if (scrollY >= 2101 && scrollY <= 3100) {
            setActiveNav(3);
        } else if (scrollY >= 2701) {
            setActiveNav(4);
        }

    }
});

closeNavMob.addEventListener('click', () => {
    console.log(navMobile.firstElementChild);
    navMobile.firstElementChild.style.right = "-100%";
    navMobile.style.opacity = "0";
    setTimeout(() => {
        navMobile.style.display = "none";
    }, 300);
})

openNavMob.addEventListener('click', ()=>{
    navMobile.style.display = "block";
    
    setTimeout(() => {
        navMobile.firstElementChild.style.right = "0";
        navMobile.style.opacity = "1";
    }, 300);
})