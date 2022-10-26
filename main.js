import './spin-loading.js';

const btn = document.querySelector('button');
btn.addEventListener('click', () => {
    console.log('ddd');
    document.querySelector('spin-loading').setAttribute("visible", true);  

    setTimeout(()=> {
        document.querySelector('spin-loading').setAttribute("visible", false);  
    }, 3000);
});