const reveals = document.querySelectorAll('.reveal');

function revealOnScroll(){

    reveals.forEach(item => {

        const top =
            item.getBoundingClientRect().top;

        const windowHeight =
            window.innerHeight;

        if(top < windowHeight - 100){

            item.classList.add('active');

        }

    });

}

window.addEventListener(
    'scroll',
    revealOnScroll
);

revealOnScroll();
