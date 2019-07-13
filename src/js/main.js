
const savetext = document.querySelector('.save--js');
const loadtext = document.querySelector('.load--js');
const textarea = document.querySelector('.text--js');   

savetext.addEventListener("click", function() {
    localStorage.setItem('text', textarea.value);
});

loadtext.addEventListener("click", function() {
    textarea.value = localStorage.getItem('text');
});


