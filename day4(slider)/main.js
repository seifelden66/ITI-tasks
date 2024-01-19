const images = ['1.jpg', '2.jpg', '3.jpg', '4.jpg']
let image = 0
let button = document.getElementById('playing')

button.disabled = false

const next = () => {
    image++
    if (image >= 4) {
        image = 0
    }
    const slideshowImage = document.getElementById('slideshowImage');
    slideshowImage.src = images[image];
    
}
console.log(button.disabled)

const prev = () => {
    image--
    if (image <= 0) {
        image = 3
    }
    const slideshowImage = document.getElementById('slideshowImage');
    slideshowImage.src = images[image];
}
let plaay
const play = () => {
    button.disabled = true
    console.log( button.disabled)
    plaay = setInterval(() => {
        image++
        if (image >= 4) {
            image = 0
        }
        const slideshowImage = document.getElementById('slideshowImage');
        slideshowImage.src = images[image];
    }, 2000)
}
const stop = () => {
    clearInterval(plaay)
    
    button.disabled = false
}


