for(let i=0;i<80;i++){

    const p=document.createElement('div');

    p.className='particle';

    p.style.left=Math.random()*100+'vw';

    p.style.top=Math.random()*100+'vh';

    p.style.animation=
        `float ${5+Math.random()*15}s linear infinite`;

    document.getElementById('particles').appendChild(p);
}
