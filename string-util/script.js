window.addEventListener('load',()=>{
    const sent = document.querySelector('#sentence');
    const letr = document.querySelector('.letr');
    let word = document.querySelector('.word');
    const uppr = document.querySelector('.uppr');
    const lowr = document.querySelector('.lowr');
    const rev = document.querySelector('.rev');
    
    sent.addEventListener('input',()=>{
       letr.innerHTML = sent.value.length;
       let wordArray = sent.value.split(' ');
       let cnt = 0;
       for(let i = 0; i<wordArray.length; i++){
           if(wordArray[i] !== ''){
               cnt++;
           }
       }
       word.innerHTML = cnt;
       uppr.innerHTML = sent.value.toUpperCase();
       lowr.innerHTML = sent.value.toLowerCase();
       rev.innerHTML = sent.value.split('').reverse().join('');
        
    })
    
  
})