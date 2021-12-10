const ipv4 = document.querySelector('#ipv4');
window.addEventListener('load',()=>{
    
    fetch('https://api.ipify.org')
    .then(response => response.text())
    .then(ip => ipv4.textContent = ip)
    
})