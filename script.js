window.addEventListener('load', () => {
    const hex = document.querySelector("#hex");
    const rgb = document.querySelector("#rgb");
    hex.addEventListener('input',()=>{
        document.body.style.backgroundColor = hex.value;
        rgb.value = hexToRgb(hex.value);
        hex.style.color = hex.value;
        hex.style.filter = `invert(100%)`;
        rgb.style.color = rgb.value;
        rgb.style.filter = `invert(100%)`;
    })
    rgb.addEventListener('change',()=>{
        document.body.style.backgroundColor = rgb.value;
        hex.value = `#${rgbToHex(rgb.value)}`;
        rgb.style.color = rgb.value;
        rgb.style.filter = `invert(100%)`;
        hex.style.color = hex.value;
        hex.style.filter = `invert(100%)`;
    })
})

const modifyHex = (hex) => {
    if(hex.length == 4) {
        hex = hex.replace('#', '');
    }
    if(hex.length == 3){
        hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
    }
    return hex;
}

const hexToRgb = (hex) =>{
    let rgb = [];
    hex = hex.replace('#','');
    if( hex.length != 6 ) {
        hex = modify(hex);
    }
    rgb.push(parseInt(hex.slice(0,2),16));
    rgb.push(parseInt(hex.slice(2,4),16));
    rgb.push(parseInt(hex.slice(4,6),16));

    return `rgb( ${rgb.toString()} )`;
}

const rgbToHex = (rgb) =>{
    let hexs = rgb.match(/\d+/g).map(function(hex){
        return parseInt(hex).toString(16).padStart(2,'0');
    });
    return hexs.join('').toUpperCase();
}