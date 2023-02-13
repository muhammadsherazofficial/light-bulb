function btnFunc() {
    if (btn.textContent.includes('Off')) {
        bulb.src="./assets/img/bulb-on.jpg"
        btn.textContent = 'On'
    } else {
        bulb.src="./assets/img/bulb-off.jpg"
        btn.textContent = 'Off'
    }
}

let btnElement = document.getElementById('btn')
btnElement.addEventListener('click',btnFunc)
