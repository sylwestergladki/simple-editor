
const savetext = document.querySelector('.save--js');
const loadtext = document.querySelector('.load--js');
const textarea = document.querySelector('.text--js');   

textarea.value = "";

savetext.addEventListener("click", (e)=> {
    e.preventDefault();
    localStorage.setItem('text', textarea.value);
});

loadtext.addEventListener("click", (e)=> {
    e.preventDefault();
    textarea.value = localStorage.getItem('text');
});


