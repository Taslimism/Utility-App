window.addEventListener('load',()=>{
    const sent = document.querySelector('#sentence');
    const letr = document.querySelector('.letr');
    const word = document.querySelector('.word');
    const uppr = document.querySelector('.uppr');
    const lowr = document.querySelector('.lowr');
    const rev = document.querySelector('.rev');
    
    sent.addEventListener('input',()=>{
       letr.innerHTML = sent.value.length;
       word.innerHTML = sent.value.split(' ').length;
       uppr.innerHTML = sent.value.toUpperCase();
       lowr.innerHTML = sent.value.toLowerCase();
       rev.innerHTML = sent.value.split('').reverse().join('');
        
    })
    
  
})