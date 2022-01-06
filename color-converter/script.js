window.addEventListener('load', () => {
    const hex = document.querySelector("#hex");
    const rgb = document.querySelector("#rgb");

    hex.addEventListener('input', () => {

        document.body.style.backgroundColor = hex.value;
        hex.style.color = hexToRgb(hex.value)[1];
        rgb.value = hexToRgb(hex.value)[0];
        rgb.style.color = hexToRgb(hex.value)[1];
        if (hex.value === '') {
            rgb.value = '';
        }
    })
    rgb.addEventListener('input', () => {
        document.body.style.backgroundColor = rgb.value;

        hex.value = rgbToHex(rgb.value);
        rgb.style.color = hexToRgb(hex.value)[1];

        hex.style.color = hexToRgb(hex.value)[1];


        if (rgb.value === '') {
            hex.value = '';
        }

    })

})

const hexToRgb = (hex) => {
    if (hex.length === 4) {
        hex = hex[1] + hex[1] + hex[2] + hex[2] + hex[3] + hex[3];
    } else if (hex.length === 7) {
        hex = hex[1] + hex[2] + hex[3] + hex[4] + hex[5] + hex[6];
    }
    let r = parseInt(hex.slice(0, 2), 16);
    let g = parseInt(hex.slice(2, 4), 16);
    let b = parseInt(hex.slice(4, 6), 16);

    let ir = 255 - r;
    let ig = 255 - g;
    let ib = 255 - b;

    return [`rgb(${r},${g},${b})`, `rgb(${ir},${ig},${ib})`];
}
const rgbToHex = (rgb) => {
    if (rgb.length > 4) {
        let hex = rgb.match(/\d+/g).map(each => {
            return parseInt(each).toString(16).padStart(2, 0).toUpperCase();
        });


        return `#${hex.join('')}`;
    }
}
