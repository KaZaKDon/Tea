const gamb =document.querySelector('.nav-gamb');
const close = document.querySelector('.active-close');
const gambUp =document.querySelector('#gamb');

gambUp.addEventListener('click', function() {
    gamb.style.display = 'block';
    document.body.style.overflow = 'hidden';
});

close.addEventListener('click', function() {
    gamb.style.display = 'none';
    document.body.style.overflow = '';
});